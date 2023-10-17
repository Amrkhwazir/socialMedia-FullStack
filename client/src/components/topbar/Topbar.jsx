import './topbar.css';
import {Chat, Notifications, Person, Search} from "@mui/icons-material";
import { Link } from 'react-router-dom';


export default function Topbar(){
    return(
        <div className='topbarContainer'>
            <div className="topbarLeft">
                <Link to="/" style={{textDecorationLine: "none"}}>
                <span className="logo">Social Media</span>     
                </Link>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                <Search className="searchIcon"/>
                <input placeholder="Search for friends, post or video" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <img src="/assets/profile pic/pp1.jpg" alt="" className="topbarImg" />
            </div>
        </div>
    )
}