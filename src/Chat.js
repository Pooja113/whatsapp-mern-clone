import React from 'react'
import './Chat.css'
import {IconButton, Avatar} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';

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
        <p className='chat__message'>
          <span className='chat__name'>Pooja</span>
          message
          <span className='chat__timestamp'>{new Date().toUTCString()}</span>
        </p>
        <p className='chat__message chat__reciever'>
        <span className='chat__name'>Pooja</span>
        message
        <span className='chat__timestamp'>{new Date().toUTCString()}</span>
      </p>
      </div>
      <div className='chat__footer'>
        <IconButton>
          <InsertEmoticonIcon />
        </IconButton>
        <form>
          <input placeholder='Type a message' type="text" />
          <button type='submit'></button>
        </form>
        
        <IconButton>
          <MicIcon />
        </IconButton>

      </div>
    </div>
  )
}

export default Chat
