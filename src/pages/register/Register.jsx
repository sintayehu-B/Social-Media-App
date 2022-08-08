import './register.css'
import { useRef, } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();

  const history =  useNavigate();
  // const {user,isFetching, dispatch} = useContext(AuthContext);
  const handle = async (e) => {
    e.preventDefault();
    if(passwordAgain.current.value !== password.current.value){
        passwordAgain.current.setCustomValidity("Password don't match!");
      }else{
        const user = {
          username: username.current.value,
          email: email.current.value,
          password: password.current.value

        }
        try {
          await axios.post("/auth/register", user).then(() => {
            history("/login");
          });
          
        } catch (error) {
          console.log(error);
        }
      }
    // LoginCall( {email : email.current.value, password: password.current.value}, dispatch);
  };
  return (
    <div className="loginContainer">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Farta Social</h3>
                <span className="loginDesc"> Connect with friends and the world around you on Farta Social.</span>
            </div>
            <div className="loginRight">
              <form action="" className="loginBox" onSubmit={handle}>

                <input placeholder='Username' required type="text" ref={username} className="loginInput" />
                <input placeholder='Email' type="email" required ref={email} className="loginInput" />
                <input placeholder='Password' minLength="6" type="password" required ref={password} className="loginInput" />
                <input placeholder='Password Again' minLength="6" type="password" required ref={passwordAgain} className="loginInput" />
                <button className="loginButton" type='submit'>Sign Up</button>
                <button className="loginRegisterButton">
              {"Log into Account"}
            </button>
              </form>
            </div>
        </div>
    </div>
  )
}
