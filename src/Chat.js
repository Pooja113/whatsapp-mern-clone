import React, { useState } from 'react'
import './Chat.css'
import {IconButton, Avatar} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import axios from './axios';

const Chat = ({messages}) => {
  const [inputMessage,setInputMessage] = useState('');
  const sendMessage = async (e) =>{
    e.preventDefault();
    await axios.post('/messages/new',{
      message:inputMessage,
      name: "Demo",
      timestamp:"now",
      received:false
    })
    setInputMessage("")
  }
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
      {messages.map((message)=>(
        <p className={`chat__message ${message.received && "chat__receiver"}`}>
          <span className='chat__name'>{message.name}</span>
          {message.message}
          <span className='chat__timestamp'>{message.timestamp}</span>
        </p>

      ))}
      </div>
      <div className='chat__footer'>
        <IconButton>
          <InsertEmoticonIcon />
        </IconButton>
        <form>
          <input value={inputMessage} placeholder='Type a message' type="text" onChange={(e)=>setInputMessage(e.target.value)}/>
          <button type='submit' onClick={sendMessage}>Send</button>
        </form>
        
        <IconButton>
          <MicIcon />
        </IconButton>

      </div>
    </div>
  )
}

export default Chat
