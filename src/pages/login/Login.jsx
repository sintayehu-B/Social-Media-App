import { useRef,useContext } from "react";
import { LoginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@mui/material";
import './login.css'


export default function Login() {
  const email = useRef();
  const password = useRef();
  const {isFetching, dispatch} = useContext(AuthContext);
  const handle = (e) => {
    e.preventDefault();
    LoginCall( {email : email.current.value, password: password.current.value}, dispatch);
  };
  return (
    <div className="loginContainer">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Farta Social</h3>
                <span className="loginDesc"> Connect with friends and the world around you on Farta Social.</span>
            </div>
            <div className="loginRight" >
              <form className="loginBox" onSubmit={handle} >

              <input
                placeholder="Email"
                type="email"
                required
                className="loginInput"
                ref={email}
              />
              <input
                placeholder="Password"
                type="password"
                required
                minLength="6"
                className="loginInput"
                ref={password}
              />
              <button className="loginButton" disabled={isFetching}>{isFetching ?<CircularProgress color="inherit" size="25px"/> :"Login"}</button>
              <span className="loginForgot" type="submit">Forgot Password</span>
              <button className="loginRegisterButton">{isFetching ?<CircularProgress color="inherit" size="25px"/> :"Create a New Account"}</button>
              </form>
        
            </div>
        </div>
    </div>
  )
}
