import { Link } from "react-router-dom";

export default function Home() {

  return (
    <div className="wrapper flow">
      <header className="header | mt-2">
        <h1>Chat App</h1>
        <div className="flex flex-row">
          <Link 
          to="/signup" 
          className="btn"
          data-type="link">
            Create Account
          </Link>
          <Link 
          to="/login" 
          className="btn"
          data-type="link">
            Login
          </Link>
        </div>
      </header>

      <div className="center flow">
        <h1 className="text-center">Welcome to Chat App</h1>
        <p className="text-center">Please sign in or create an account to continue.</p>
        <div className="flex flex-col rounded-lg bg-dark-400 flow p-6">
          <Link 
          to="/signup" 
          className="btn">
            Create Account
          </Link>
          <Link 
          to="/login" 
          className="btn">
            Login
          </Link>
        </div>
      </div>
    </div>
  )
}