import React from 'react'
import './Sidebar.css'
import {IconButton,Avatar} from '@mui/icons-material';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';


const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar__header'>
        <div className='sidebar__headerRight'>
          <Avatar />
          <IconButton>
          <DonutLargeIcon />
          <ChatIcon />
          <MoreVertIcon />
          </IconButton>
        </div>
        <div className='sidebar__headerLeft'>
        
        </div>

      </div>
      <div className=''>
      
      </div>
    </div>
  )
}

export default Sidebar
