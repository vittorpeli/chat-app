import UserIcon from '../../assets/user-icon.svg';
import GroupIcon from '../../assets/group-icon.png';

import { PropTypes } from "prop-types";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ChatOptions ({ socket, rooms }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on('newUserResponse', (data) => setUsers(data));
  }, [socket, users]);

  // const currentUser = localStorage.getItem("userName");

  return (
    <div className="options | bg-dark-400 flow">
      <div className="options__header | center">
        <button className='btn' data-type="link"><h3>Rooms</h3></button>
        <button className='btn' data-type="link"><h3>Direct</h3></button>
      </div>
      <div className='h-px bg-dark-200 mt-0'></div>
      <div className="options__body | flow flex-1 flex-col">
        {users.map((user) => (
          <Link 
            key={user.socketID}
            className='msg-box | ml-base'
          >
            <img src={GroupIcon} alt=""/>
            <div>
              <h3>{user.userName}</h3>
              <p>Last Message: 16h Ago</p>
            </div>
          </Link>
        ))}
        <ul>
          {rooms.map((room) => (
            <li key={room.id}>
              <Link
                className='msg-box | ml-base'
                to={`/chat/room/${room.id}`}
              >
                <p>{room.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className='options__footer | p-size-1 pl-0'>
        <div className="msg-box | ml-base center">
          <img src={UserIcon} alt=""/>
          <div>
            <h4>Name</h4>
            <p>#id</p>
          </div>
        </div>
        <Link to="/chat/create" className='btn | mr-size-0' data-type="ghost" type='submit'>
          +
        </Link>
        
        {/* <button className='btn' data-type="ghost">
          <img src={SettingIcon} alt="Settings Button" className='w-size-1 h-size-1'/>
        </button> */}
      </div>
    </div>
  )
}

ChatOptions.propTypes = {
  socket: PropTypes.object,
  rooms: PropTypes.array,
}