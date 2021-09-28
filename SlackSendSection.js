import React from 'react'
import styled from 'styled-components';
// import OfflineBoltOutlinedIcon from '@material-ui/icons/OfflineBoltOutlined'
// import FormatBoldIcon from '@material-ui/icons/FormatBold';
// import FormatItalicIcon from '@material-ui/icons/FormatItalic';
// import StrikethroughSIcon from '@material-ui/icons/StrikethroughS';
// import CodeOffIcon from '@material-ui/icons/CodeSharp';
// import InsertLinkIcon from '@material-ui/icons/InsertLink';
// import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
// import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
// import FormatLineSpacingIcon from '@material-ui/icons/FormatLineSpacing';
// import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
// import FormatSizeIcon from '@material-ui/icons/FormatSize';
// import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
// import AttachFileIcon from '@material-ui/icons/AttachFile';
// import SendIcon from '@material-ui/icons/Send';
const SlackSendSection = ({ ChannelName, ChannelId }) => {

 const []
 const SendMessage = (e) => {
  e.preventDefault(); // Prevent Refresh Page Because Form by default refresh onSubmit


 }

 return (
  <ChatInputContainer>
   <form action="">

    <input type="text" placeholder='Start a new message' value={ } onChange={ } />
    <button hidden type='submit' onClick={SendMessage}></button>
    {/* <ChatButtons>

     <ChatButtonLeft>
      <OfflineBoltOutlinedIcon />
      <FormatBoldIcon />
      <FormatItalicIcon />
      <StrikethroughSIcon />
      <CodeOffIcon />
      <InsertLinkIcon />
      <FormatListNumberedIcon />
      <FormatListBulletedIcon />
      <FormatLineSpacingIcon />
      <DeveloperModeIcon />

     </ChatButtonLeft>
     <ChatButtonRight>
      <FormatSizeIcon />
      @
      <SentimentSatisfiedIcon />
      <AttachFileIcon />
      <SendIcon />
     </ChatButtonRight> 



    </ChatButtons>
    */}
   </form>

  </ChatInputContainer>
 )
}

export default SlackSendSection;

const ChatInputContainer = styled.div`

display: flex;




> form > input {
 border:none;
 height: 25px;
 width:69.7vw;
 border-bottom: 1px solid lightgray;
 
}

`
const ChatButtons = styled.div`
display: flex;
justify-content: space-between;
cursor: pointer;
padding: 10px;
`
const ChatButtonLeft = styled.div`
display: flex;
justify-content: space-between;
border:1px solid red;
`
const ChatButtonRight = styled.div`
/* border:1px solid red; */



`

