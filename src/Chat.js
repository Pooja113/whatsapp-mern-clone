import React from 'react'
import './Chat.css'
import {IconButton, Avatar} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const Chat = () => {
  return (
    <div className='chat'>
      <div className='chat__header'>
          <Avatar />
          <div className='chat__headerInfo'>
            <h3>Room Name</h3>
            <p>Last Message...</p>
          </div>
          <div className='chat__headerRight'>
            <IconButton>
              <SearchIcon />
            </IconButton>
            <IconButton>
              <AttachFileIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
      </div>
      <div className='chat__body'>
        <p>
          <span className='chat__name'>Pooja</span>
          message
          <span className='chat__timestamp'>{new Date().toUTCString()}</span>
        </p>
      </div>
      <div className='chat__footer'>
        <p></p>
      </div>
    </div>
  )
}

export default Chat
