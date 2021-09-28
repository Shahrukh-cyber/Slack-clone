import React, { useRef, useEffect } from 'react'
import styled from 'styled-components';
import { db } from '../../Api/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';


const ChatInput = ({ channelName, ChannelId }) => {


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
    user: 'Muhammad Shahrukh',
    timestamp: serverTimestamp(),
    userImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd_1CTN8w-y7jjds73SniKUB3f9PRchJjKvA&usqp=CAU'

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


