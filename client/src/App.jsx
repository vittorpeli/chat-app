import { Routes, Route } from "react-router-dom";
import ChatPage from './pages/chat';
import SignUp from "./pages/Auth/signUp";
import LogIn from "./pages/Auth/logIn";
import Home from "./pages/home";

import socketIO from 'socket.io-client';
import ChatIndex from "./features/chat/chat-index";
import CreateChat from "./features/chat/create-chat";
import ChatMain from './features/chat/chat-main';
const socket = socketIO.connect('http://localhost:3000');

function App() {

  return (
    <>
      <Routes>
        <Route index element={<Home/>} />
        <Route 
          path="/chat" 
          element={<ChatPage socket={socket}/>}
        >
           <Route index element={<ChatIndex />} />
           <Route 
            path="create" 
            element={<CreateChat socket={socket} />} 
          />
          <Route 
            path="room/:roomId"
            element={<ChatMain />}
          />
        </Route>
        <Route path="/signup" element={<SignUp socket={socket}/>} />
        <Route path="/login" element={<LogIn socket={socket}/>} />
      </Routes>
    </>
  )
}

export default App
