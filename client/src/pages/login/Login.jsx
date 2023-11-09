import { useContext, useRef } from "react";
import "./login.css"
import { loginCall } from "../../apiCall.js";
import {AuthContext} from "../../context/AuthContext.js";
import {CircularProgress} from "@mui/material"

export default function Login(){
    const email = useRef();
    const password = useRef();
    const {dispatch, isFetching,} = useContext(AuthContext);

    const handleClick = (e) =>{
        e.preventDefault();
        loginCall({email: email.current.value, password: password.current.value}, dispatch)
    }
    // console.log(user)
    return(
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Social Media</h3>
                    <span className="loginDesc">
                        Connect with friends and the world around you on Social Media.
                    </span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input placeholder="Email" type="email" required className="loginInput" ref={email} />
                        <input placeholder="Password" type="password" minLength="6" required className="loginInput" ref={password}/>
                        <button type="submit" className="loginButton" disabled={isFetching}> {isFetching ? <CircularProgress color="inherit" size={15}/> : "Log In"}</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">{isFetching ? <CircularProgress color="inherit" size={15}/> : "Create a New Account"}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}