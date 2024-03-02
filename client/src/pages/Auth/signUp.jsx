import AuthForm from "../../features/auth/auth-form";
import authService from "../../services/AuthService";

import { useNavigate } from "react-router-dom";


function SignUp() {
  const navigate = useNavigate();

  function onSubmit(formData) {
    const user = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    }

    const response = authService.registerUser(user);
    console.log(response);

    navigate("/login");
  }

  return (
    <div className="wrapper | mt-size-5">
      <div className="center">
        <AuthForm 
          title="Sign Up"
          btnLabel="Register"
          onSubmit={onSubmit}
        />
      </div>
    </div>
  )
}

export default SignUp;