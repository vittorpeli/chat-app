import { PropTypes } from "prop-types";

import UserIcon from '../../assets/user-icon.svg';
import SettingIcon from '../../assets/settings-icon.svg';
import ShareIcon from '../../assets/share.svg';
import CloseIcon from '../../assets/close.svg';
import Vector from '../../assets/Vector.svg';

import MessageInput from '../ui/message-input';

import { useNavigate } from "react-router-dom";

export default function ChatMain ({ 
  socket, 
  messages, 
  typingStatus,
  lastMessageRef,
  currentRoomId,
}) {
  const navigate = useNavigate();

  function handleTyping () {
    socket.emit('typing', `${localStorage.getItem('username')} is typing`)
  }

  function handleLeaveChat() {
    localStorage.removeItem('userName');
    navigate('/');
    window.location.reload();
  }

  return (
    <div className="screen | flow h-screen">
      <div className='screen__header | header py-1'>
        <div className='header__info'>
          <img src={Vector} alt="" />
          <div>
            <h3>Learn Javascript</h3>
            <p>3000 Members</p>
          </div>
        </div>
        <div className='header__buttons'>
          <button className='btn' data-type="link">
            <img src={SettingIcon} alt="" className='w-size-1 h-size-1'/>
          </button>
          <button className='btn' data-type="link">
            <img src={ShareIcon} alt="" className='w-size-1 h-size-1'/>
          </button>
          <button className='btn' data-type="link">
            <img 
              src={CloseIcon} 
              alt="" 
              className='w-size-1 h-size-1 hover:-neutral-100'
              onClick={handleLeaveChat}
            />
          </button>
        </div>
      </div>
      <div className='screen__main | flex-1 flex-col'>
        {messages.map((message) =>
          message.name === localStorage.getItem('userName') ? (
            <div className='msg' key={message.id}>
              <img src={UserIcon} alt="" />
              <div className='gap-2'>
                <h4>
                  You 
                  <span className='ml-2 font-light text-size-0'>
                    18:00
                  </span>
                </h4>
                <div className='msg-txt | cluster'>
                  {message.text}
                </div>
              </div>
            </div>
          ) : (
            <div className='msg' key={message.id}>
              <img src={UserIcon} alt="" />
              <div className='gap-2'>
                <h4>
                  {message.name} 
                  <span className='ml-2 font-light text-size-0'>
                    18:00
                  </span>
                </h4>
                <div className='msg-txt | cluster'>
                  {message.text}
                </div>
              </div>
            </div>
          )
        )}
        <div className="msg__status">
          <p>{typingStatus}</p>
        </div>

        <div ref={lastMessageRef}></div>
      </div>

      <MessageInput socket={socket} currentRoomId={currentRoomId} handleTyping={handleTyping}/>
    </div>
  )
}



ChatMain.propTypes = {
  socket: PropTypes.object.isRequired,
  messages: PropTypes.array,
  lastMessageRef: PropTypes.object,
  typingStatus: PropTypes.string,
  currentRoomId: PropTypes.string,
}