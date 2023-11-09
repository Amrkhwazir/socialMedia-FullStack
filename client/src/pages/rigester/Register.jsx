import { useRef } from "react";
import "./register.css"
import axios from "axios";
import {useNavigate} from "react-router-dom"


export default function Register(){

   const username = useRef();
   const email = useRef();
   const password = useRef();
   const passwordAgain = useRef();
    const navigate = useNavigate();

    const signupHandler = async (e) =>{
        e.preventDefault();
        // console.log(e)
        if(passwordAgain.current.value !== password.current.value){
            alert("password not match")
        }else{
            const user = {
                name: username.current.value,
                email: email.current.value,
                password: password.current.value,
            }
            try {
            await axios.post("http://127.0.0.1:8000/auth/register", user);
                navigate("/login");
                // console.log(user)

            } catch (err) {
                console.log(err)
            } 
        };
    }



    

    return(
        <div className="sign">
            <div className="signWrapper">
                <div className="signLeft">
                    <h3 className="signLogo">Sign Up</h3>
                    <span className="signDesc">
                      Where you connect with friends and the world around you on Social Media.
                    </span>
                </div>
                <div className="signRight">
                    <form className="signBox" onSubmit={signupHandler}>
                        <input placeholder="Username" className="signInput" ref={username}  />
                        <input placeholder="Email" type="email" className="signInput" ref={email} required/>
                        <input placeholder="Password" type="password" minLength="8"  className="signInput" ref={password}  required/>
                        <input placeholder="Password Again" type="password" className="signInput" ref={passwordAgain}  required/>
                        <button className="signButton" type="submit">Sign Up</button>
                        <button className="signRegisterButton">Log into Account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}