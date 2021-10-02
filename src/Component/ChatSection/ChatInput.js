import React, { useRef, useEffect } from 'react'
import styled from 'styled-components';
import { db } from '../../Api/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { selectUser } from '../../features/userSlice';
import { useSelector } from 'react-redux';

const ChatInput = ({ channelName, ChannelId }) => {
 const user = useSelector(selectUser);

 const inputRef = useRef(null);


 const SendMessage = async (e) => {
  debugger;
  e.preventDefault(); // Prevent Refresh Page Because Form by default refresh onSubmit
  if (!ChannelId && !inputRef.current.value) {
   return false;
  }

  const docRef = await
   addDoc(collection(db, 'rooms', ChannelId, 'messages'), {
    message: inputRef.current.value,
    user: user?.displayName,
    timestamp: serverTimestamp(),
    userImage: user?.photoURL,

   })

  console.log('message', docRef);
  inputRef.current.value = '';
 }

 return (
  <ChatInputContainer>
   <form action="">


    <input type="text" placeholder={`Start a new message on ${channelName}`} ref={inputRef} />
    <button hidden type='submit' onClick={SendMessage}></button>
   </form>

  </ChatInputContainer>
 )
}

export default ChatInput;

const ChatInputContainer = styled.div`
border-radius: 20px ;
> form {
position: relative;
display: flex;
justify-content: center;

}

> form > input {
 position: fixed;
 bottom:30px;
 width: 60%;
 border:1px solid gray;
 border-radius: 3px;
 padding:20px;
outline: none;
 
}

`


