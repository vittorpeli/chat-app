import { PropTypes } from "prop-types";

import ChatOptions from '../features/chat/chat-options';
import { Outlet } from 'react-router-dom';
import RoomService from "../services/RoomService";
import { useEffect, useState } from "react";

// export async function loader() {
//   const rooms = await RoomService.listRooms();
//   return { rooms };
// }

function ChatPage({socket}) {
  const [rooms, setRooms] = useState([]);
  
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const rooms = await RoomService.listRooms();
        setRooms(rooms);
      } catch (err) {
        console.error('Error fetching rooms:', err);
      }
    }

    fetchRooms();
  }, []);

  return (
    <div className="sidebar">
      <ChatOptions socket={socket} rooms={rooms}/>
      <Outlet />
    </div>
  )
}

ChatPage.propTypes = {
  socket: PropTypes.object.isRequired,
}

export default ChatPage;

// const [messages, setMessages] = useState([]);
  // const [typingStatus, setTypingStatus] = useState('');
  // const lastMessageRef = useRef(null);

  // useEffect(() => {
  //   socket.on('messageResponse', (data) => setMessages([...messages, data]));
  // }, [socket, messages]);

  // useEffect(() => {
  //   lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' })
  // }, [messages])

  // useEffect(() => {
  //   socket.on('typingResponse', (data) => setTypingStatus(data));
  // })

  // const { rooms } = useLoaderData();

  /* <ChatMain 
        socket={socket} 
        messages={messages}
        typingStatus={typingStatus}
        lastMessageRef={lastMessageRef}
        currentRoomId='defaultRoom'
      /> */