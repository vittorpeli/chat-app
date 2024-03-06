import { useState } from 'react';
import { PropTypes } from "prop-types";
import MsgSign from '../../assets/msg-plane.svg';

export default function MessageInput ({socket, currentRoomId, handleTyping}) {
  const [message, setMessage] = useState('');

  function handleChange (e) {
    setMessage(e.target.value);
  }

  function handleSubmit (e) {
    e.preventDefault();
    if (message.trim() && localStorage.getItem('userName')) {
      socket.emit('message', {
        text: message,
        name: localStorage.getItem('userName'),
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
        roomId: currentRoomId,
      })
    }
    setMessage('');
  }

  return (
    <div className='screen__input'>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" placeholder='Enter your text here'
          className='msg-input | text-size-0 tracking-tight'
          onChange={handleChange}
          onKeyDown={handleTyping}
          value={message}
          />  
        <button type='submit' className='btn'>
          <img 
            src={MsgSign} 
            alt="" 
            className='w-size-1 h-size-1'
          />
        </button>
      </form>
    </div>
  )
}

MessageInput.propTypes = {
  socket: PropTypes.object,
  currentRoomId: PropTypes.string,
  handleTyping: PropTypes.func,
}