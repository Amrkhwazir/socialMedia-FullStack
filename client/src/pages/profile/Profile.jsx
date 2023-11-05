import "./profile.css"
import Feed from "../../components/feed/Feed.jsx";
import Rightbar from "../../components/rightbar/Rightbar.jsx";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import Topbar from "../../components/topbar/Topbar.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";



export default function Profile(){

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user, setUser] = useState({});
    const username = useParams().username;
    

    useEffect( ()=>{
        async function fetchUser(){
            const response = await axios.get(`http://127.0.0.1:8000/profile?username=${username}`)
            setUser(response.data)
            console.log(response.data)

        }
        fetchUser()
    },[username]);

    return(
        <>
     <Topbar/>
           <div className="profile">
            <Sidebar/>
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                        <img src={user.coverPicture || PF+"/coverpic.jpg"} alt="" className="profileCoverImg" />
                        <img src={user.profilePicture || PF+"/profile/pp1.jpg"} alt="" className="profileUserImg" />
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">{user.name}</h4>
                        <h4 className="profileInfoDesc">{user.desc}</h4>
                    </div>
                </div>
                <div className="profileRightBottom">
            <Feed username={username}/>
            <Rightbar user={user}/>
                </div>
            </div>
           </div>
        </>
    )
}