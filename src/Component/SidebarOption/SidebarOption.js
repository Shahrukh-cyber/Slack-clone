import React, { useState } from 'react'
import styled from 'styled-components'
import { db } from '../../Api/firebase'
import { addDoc, collection } from 'firebase/firestore'
import { useDispatch } from 'react-redux'
import { enterRoom } from '../../features/appSlice'


const SidebarOption = ({ Icon, title, addChannelOption, id }) => {

 const dispatch = useDispatch();

 const addChannel = async () => {

  const ChannelName = prompt('Please enter the Channel name')
  if (ChannelName) {
   const docRef = await addDoc(
    collection(db, 'rooms'), {
    name: ChannelName,
   })
   console.log('docRef', docRef);
  }

 }
 const selectChannel = () => {
  if (id) {
   dispatch(enterRoom({ roomId: id }))

  }



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
>h3 {
 font-weight: 500;

}
>h3>span{
 padding: 15px;
}
`
const SidebarOptionChannel = styled.h3`
font-weight:300;
padding: 10px 0;



`
