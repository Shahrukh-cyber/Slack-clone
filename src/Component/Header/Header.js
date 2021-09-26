import React from 'react'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SearchIcon from '@material-ui/icons/Search'
import { Avatar } from '@material-ui/core';

import styled from 'styled-components';
const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar>
          M
        </HeaderAvatar>
        <AccessTimeIcon />
      </HeaderLeft>
      {/* Header_Search */}
      <HeaderSearch>
        <SearchIcon />
        <input type='text' placeholder='Seach here....!' />
      </HeaderSearch>
      {/* Header_Right */}
      <HeaderRight>
        <HelpOutlineIcon />
      </HeaderRight>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.div`
display:flex;
position: fixed;
justify-content: space-between;
width: 100vw;
padding:10px 0;
background-color: var(--slack-color);
color:white;

`
const HeaderLeft = styled.div`
flex:0.3;
display: flex;
margin-left:20px ;
align-items: center;
justify-content: space-between;
> .MuiSvgIcon-root{
  margin-right: 30px;


}
`
const HeaderAvatar = styled(Avatar)`
cursor: pointer;
background-color:#E56117 !important;
:hover{
  opacity: 0.8;
}
`;
const HeaderSearch = styled.div`
display: flex;
flex:0.4;
opacity: 1;
border-radius: 6px;
background-color: #421f44;
text-align: center;
padding: 0 50px;
color:gray;
border:1px gray solid ;
align-items: center;
>input{
  background-color:transparent;
  border-radius: 15px ;
  text-align:center;
  outline:0;
  border:none;
  min-width:30vw ;
  color:white
}

`
const HeaderRight = styled.div`
display: flex;
flex:0.3;
justify-content: flex-end;
align-items:center;

.MuiSvgIcon-root{
margin-right: 20px;
}
`