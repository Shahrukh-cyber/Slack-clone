import React from 'react'
import styled from 'styled-components';

const Message = ({ message, user, userImage, timestamp }) => {
 return (
  <MessageContainer>
   <img src={userImage} alt={user} />
   <MessageInfo>
    <h4>
     {user}{' '}
     {/* new Date(timestamp?.toDate().toUTCString()) */}
     <span>{'time'}</span>
    </h4>
    <p>{message}</p>
   </MessageInfo>
  </MessageContainer>
 )
}

export default Message;
const MessageContainer = styled.div`
display: flex;
align-items: center;
padding:20px;
> img{
 height: 50px;
 border-radius: 8px;
 font-weight: 300;
 margin-left:4px;
 font-size:10px;


}


`
const MessageInfo = styled.div`
padding-left: 10px;
> h4 > span{
 color:gray
}

`