import AuthForm from "../../features/auth/auth-form";
import authService from "../../services/AuthService";

import { PropTypes } from "prop-types";

import { useNavigate } from "react-router-dom";

function LogIn({ socket }) {
  const navigate = useNavigate();

  async function onSubmit(formData) {
    const user = {
      email: formData.email,
      password: formData.password,
    }

    const response = await authService.login(user);
    console.log(response);

    const userName = response.data.name;

    const userNameStored = localStorage.setItem("userName", userName);
    
    socket.emit("newUser", { userNameStored, socketID: socket.id, roomId: 'defaultRoom' });

    navigate("/chat");
  }

  return (
    <div className="wrapper | mt-size-5">
      <div className="center">
        <AuthForm 
          login={true}
          title="Login"
          btnLabel="Login"
          onSubmit={onSubmit}
        />
      </div>
    </div>
  )
}

LogIn.propTypes = {
  socket: PropTypes.object.isRequired,
}

export default LogIn;