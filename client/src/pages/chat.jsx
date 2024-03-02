import { useRef } from 'react';
import { PropTypes } from "prop-types";

import ChatOptions from '../features/chat/chat-options';
import ChatMain from '../features/chat/chat-main';
import { useEffect, useState } from 'react';

function ChatPage({socket}) {
  const [messages, setMessages] = useState([]);
  const [typingStatus, setTypingStatus] = useState('');
  const lastMessageRef = useRef(null);

  useEffect(() => {
    socket.on('messageResponse', (data) => setMessages([...messages, data]));
  }, [socket, messages]);

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    socket.on('typingResponse', (data) => setTypingStatus(data));
  })

  return (
    <div className="sidebar">
      <ChatOptions socket={socket}/>
      <ChatMain 
        socket={socket} 
        messages={messages}
        typingStatus={typingStatus}
        lastMessageRef={lastMessageRef}
        currentRoomId='defaultRoom'
      />
    </div>
  )
}

ChatPage.propTypes = {
  socket: PropTypes.object.isRequired,
}

export default ChatPage;