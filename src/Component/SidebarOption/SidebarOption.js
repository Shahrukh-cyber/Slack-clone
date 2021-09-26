import React from 'react'
import styled from 'styled-components'
import { AddChannelModel } from '../../Component';
const SidebarOption = ({ Icon, title, addChannelOption }) => {
 const addChannel = () => {

  alert('hello');


 }
 const selectChannel = () => {

  // return <AddChannelModel />
 }

 return (
  <SidebarOptionContainer
   onClick={addChannelOption ? addChannel : selectChannel}
  >
   {Icon && <Icon fontSize='small' style={{ padding: 10 }} />}
   {Icon ? (
    <h3>{title}</h3>
   ) : (<SidebarOptionChannel>
    <span>#</span>{title}
   </SidebarOptionChannel>)}

  </SidebarOptionContainer>
 )
}

export default SidebarOption
const SidebarOptionContainer = styled.div`
display:flex;
align-items: center;
font-size: 12px;
cursor: pointer;
padding-left:2px;
:hover{
opacity: .9;
background-color: #340e36;

}

`
const SidebarOptionChannel = styled.div``
