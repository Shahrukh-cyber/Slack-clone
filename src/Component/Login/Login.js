import React from 'react'
import styled from 'styled-components';
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../../Api/firebase'

const Login = () => {
  const signIn = () => {
    signInWithPopup(auth, provider).catch((error) =>
      alert(error.message));


  }


  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img src="https://cdn.dribbble.com/users/121337/screenshots/5885287/slack.png?compress=1&resize=400x300" alt="" />
        <h1 className='red'>Sign in to the Slack Clone</h1>
        <p>slack-clone.com</p>
        <button onClick={signIn} className='red'>Sign in with Google</button>
      </LoginInnerContainer>

    </LoginContainer>
  )
}

export default Login;
const LoginContainer = styled.div`
background-color:#f8f8f8 ;
display: grid;
height:100vh;
place-items: center;
`
const LoginInnerContainer = styled.div`
padding: 100px;
 align-items: center;
 background-color: white;
 border-radius: 10px;
 /* border:1px solid lightgray; */
 box-shadow: 0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24);
> img {
object-fit: contain;
height: 100px;
margin-bottom:40px ;
}
> button {
 margin-top:50px ;
 text-transform: inherit !important ;
 background-color: #0a8d48 !important ;
 color:white;
 padding: 10px;
 border-style: none;
 border-radius: 20px;
 cursor:pointer ;
}


`