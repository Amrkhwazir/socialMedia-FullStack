import "./sidebar.css"
import {HelpOutline, RssFeed, School, WorkOutline, Event, PlayCircleFilledOutlined, Group, Chat} from "@mui/icons-material";
import { users } from "../../dummyData.js";
import { Link } from "react-router-dom";



export default function Sidebar(){

    const PF = process.env.REACT_APP_PUBLIC_FOLDER

    return(
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                <RssFeed className="sidebarIcon"/>
                <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                <Chat className="sidebarIcon"/>
                <span className="sidebarListItemText">Chat</span>
                    </li>
                    <li className="sidebarListItem">
                <PlayCircleFilledOutlined className="sidebarIcon"/>
                <span className="sidebarListItemText">videos</span>
                    </li>
                    <li className="sidebarListItem">
                <Group className="sidebarIcon"/>
                <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                <HelpOutline className="sidebarIcon"/>
                <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                <WorkOutline className="sidebarIcon"/>
                <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                <Event className="sidebarIcon"/>
                <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                <School className="sidebarIcon"/>
                <span className="sidebarListItemText">Course</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr"/>
                <ul className="sidebarFriendList">

                    <>
                    {users.map((u, indx)=>(
                        // console.log(u)
                        <li key={indx} className="sidebarFriend">
                        <img src={PF+u?.profilePic} alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">{u?.username}</span>
                    </li>
                     
                    ))}
                    
                    </>
                 </ul>
                 <div className="logoutButton">
                    <Link to="http://localhost:3000/login">
                    <button className="logout">Log Out</button>
                    </Link>
                    
                 </div>
            </div>
        </div>
    )
}