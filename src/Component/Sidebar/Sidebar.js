import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import CreateIcon from '@material-ui/icons/Create'
import SidebarOption from '../SidebarOption/SidebarOption';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import { db } from '../../Api/firebase'
import { collection, getDocs } from 'firebase/firestore';

const Sidebar = () => {
  const [channel, setChannel] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const querySnapshot = await getDocs(collection(db, 'rooms'))
      setChannel(
        querySnapshot.docs.map(
          (doc) => (
            // console.log('doc', doc.data()),
            {
              id: doc.id,
              data: doc.data(),
            }
          )
        )
      )
    }
    getData()

  }, [])

  return (
    <SiderbarContainer>
      <SiderbarHeader>
        <SiderbarInfo>
          <h2>Dodger Soft</h2>
          <h3>
            <FiberManualRecordIcon />
            Muhammad Shahrukh
          </h3>

        </SiderbarInfo>
        <CreateIcon />
      </SiderbarHeader>
      <SidebarOption Icon={InsertCommentIcon} title='Threads' />
      <SidebarOption Icon={InboxIcon} title='Mentions & reactions ' />
      <SidebarOption Icon={DraftsIcon} title='Saved items' />
      <SidebarOption Icon={BookmarkBorderIcon} title='Channel browser ' />
      <SidebarOption Icon={PeopleAltIcon} title='People & user groups' />
      <SidebarOption Icon={AppIcon} title='Apps' />
      <SidebarOption Icon={FileCopyIcon} title='File browser' />
      <SidebarOption Icon={ExpandLessIcon} title='Show less' />
      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title='Channel' />
      <hr />
      <SidebarOption Icon={AddIcon} addChannelOption title='Add Channel' />
      {channel?.map(({ id, data: { name } }) => (
        <SidebarOption key={id} id={id} title={name} />


      ))}
    </SiderbarContainer>
  )
}

export default Sidebar
const SiderbarContainer = styled.div`
background-color: var(--slack-color);
flex:0.3;
max-width: 260px;
padding: 10px;
color:white;
border-top:1px solid #49274b;
/* height: 100vh; */
margin-top: 60px;
> hr{
 margin-top:10px ;
 margin-bottom:10px ;
 border: 1px  solid #49274b;
}
`
const SiderbarHeader = styled.div`
display:flex;
border-bottom:1px solid #49274b ;
padding: 13px;

>.MuiSvgIcon-root{
 /* background-color: white; */
 padding:8px;
 color:#49274b;
 font-size:18px;
 background-color: white;
 border-radius:999px;
} 
`

const SiderbarInfo = styled.div`
flex: 1;

>h2{
 font-size: 15px;
 font-weight: 900;
 margin-bottom: 5px;
}

>h3{
 display: flex;
 font-size: 13px;
 font-weight: 400;
 align-items: center;
}

>h3>.MuiSvgIcon-root{

 font-size: 14px;
 margin-top: 1px;
 margin-right: 2px;
 color:green;
 
}
`