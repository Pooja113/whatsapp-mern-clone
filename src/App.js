import { useEffect, useState } from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import Pusher from 'pusher-js';
import axios from './axios';

function App() {
  const [message,setMessage] = useState([])
  useEffect(()=>{
    axios.get('/messages/sync')
    .then(response =>{
      setMessage(response.data)
    })
  },[])
  useEffect(()=>{
    const pusher = new Pusher('cee8e398f5ba9f68100d', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage)=> {
      //alert(JSON.stringify(data));
      setMessage([...message,newMessage])
    });
   return  ()=>{
    channel.unbind_all();
      channel.unsubscribe();
    }
  },[message])
  console.log(message)
  return (
    <div className="app">
      <div className='app__body'>
        <Sidebar />
        <Chat messages={message}/>
      </div>
      
    </div>
  );
}

export default App;
