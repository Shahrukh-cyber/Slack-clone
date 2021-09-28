import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import ChatInput from './ChatInput';
import { useSelector } from 'react-redux';
import { selectRoomId } from '../../features/appSlice';
import { db } from '../../Api/firebase'
import { getDocs, collection, doc, orderBy, query, getDoc, onSnapshot } from 'firebase/firestore'
import Message from '../Message/Message';
const ChatSection = () => {
 const roomId = useSelector(selectRoomId);
 const [messageData, setMessageData] = useState([]);
 const [ChannelName, setChannelName] = useState('');
 const [loading, setLoading] = useState(false);



 const chatRef = useRef(null);

 useEffect(() => {


  const getDocm = async () => {
   try {
    const docRef = doc(db, "rooms", roomId);
    // const doc1 = onSnapshot(doc(db, "rooms", roomId), (doc) => {
    //  console.log('data=>', doc.data());
    // })
    const docSnap = await getDoc(docRef);
    setChannelName(docSnap?.data().name);

    const q = query(collection(db, "rooms", roomId, 'messages'), orderBy('timestamp', 'asc'));
    const unsubscribe = roomId && onSnapshot(q, (querySnapshot) => {
     setMessageData(
      querySnapshot.docs.map((doc) => (
       {
        id: doc.id,
        data: doc.data()
       }
      )))
    });
    setLoading(true);

    // const querySnapshotMessageData = await getDocs(roomId && query(collection(db, 'rooms', roomId, 'messages'), orderBy('timestamp', 'asc')))

    // setMessageData(
    //  querySnapshotMessageData.docs.map((doc) =>
    //  (
    //   {
    //    id: doc.id,
    //    data: doc.data()
    //   }
    //  ))

    // )


   } catch (error) {
    console.log('message')
   }


  }

  getDocm()
 }, [roomId])



 useEffect(() => {
  chatRef?.current?.scrollIntoView({
   behavior: "smooth"
  });
 }, [roomId, messageData])

 return (
  <ChatContainer>
   {messageData && ChannelName && (


    <>

     <Header>
      <HeaderLeft>
       <h4>{`# ${ChannelName}`}</h4>
       <StarBorderOutlinedIcon />
      </HeaderLeft>
      <HeaderRight>
       <p>
        <InfoOutlinedIcon />Details

       </p>

      </HeaderRight>
     </Header>
     <ChatMessage>

      {messageData?.map(({ id, data }) =>
      (
       <Message key={id} {...data} />
      )
      )}
      <ChatBottom ref={chatRef} />
     </ChatMessage>
     <ChatInput
      channelName={ChannelName}
      ChannelId={roomId}

     />
    </>
   )}
  </ChatContainer>
 )
}

export default ChatSection;
const ChatBottom = styled.div`
padding-bottom:200px;
`
const ChatContainer = styled.div`
flex:0.7;
flex-grow: 1;
overflow-y:scroll ;
margin-top:60px ;
`
const Header = styled.div`
display: flex;
justify-content: space-between;
padding:20px;
border-bottom:1px solid lightgray;
`
const HeaderLeft = styled.div`
display: flex;
align-items: center;
> h4 { 
text-transform: lowercase;
margin-right: 10px;


} 
 

`
const HeaderRight = styled.div`

> p {
 display: flex;
 align-items: center;
 font-size: 14px;
}

>p > .MuiSvgIcon-root{
margin-right :5px !important ;
font-size: 16px;
}
`
const ChatMessage = styled.div``