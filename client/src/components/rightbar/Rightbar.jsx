import "./rightbar.css";
import { users } from "../../dummyData";


export default function Rightbar({ user }){
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    
    const HomeRightbar =()=>{
        return(
<>
<div className="birthdayContainer">

                    <span className="birthdayText" aria-labelledby="emoji-gift" role="img">
                    🎁<b>Pola Foster</b> and <b>3 other friends</b> have a birthday today 
                    </span>
                </div>
                <img src="/assets/addPoster.jpg" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">

                    <>
                    {users.map((u, indx)=>(
                    <li key={indx} className="rightbarFriend">
                    <div className="rightbarProfileImgContainer">
                        <img src={PF+u?.profilePic} alt="" className="rightbarProfileImg" />
                        <span className="rightbarOnline"></span>
                    </div>
                    <span className="rightbarUsername">{u?.username}</span>
                </li>     
                    ))}
                    </>
                    
                 </ul>
</>
        )
    }

    const ProfileRightbar =()=>{
        return(
            <>
            <h4 className="rightbarTitle">User information</h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City:</span>
                    <span className="rightbarInfoValue">{user.city}</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">From:</span>
                    <span className="rightbarInfoValue">{user.from}</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Relationship:</span>
                    <span className="rightbarInfoValue">{user.relation === 1 ? "single" : user.relation === 1 ? "married" : "-"}</span>
                </div>
            </div>
            <h4 className="rightbarTitle">User information</h4>
            <div className="rightbarFollowings">
                <div className="rightbarFollowing">
                    <img src={`${PF}profile/pp1.jpg`}alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">John Doe</span>
                </div>
                <div className="rightbarFollowing">
                    <img src={`${PF}/profile/pp2.jpg`}alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">John Doe</span>
                </div>
                <div className="rightbarFollowing">
                    <img src={`${PF}/profile/pp3.webp`} alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">John Doe</span>
                </div>
                <div className="rightbarFollowing">
                    <img src={`${PF}/profile/pp4.jpeg`} alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">John Doe</span>
                </div>
                <div className="rightbarFollowing">
                    <img src={`${PF}/profile/pp4.webp`} alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">John Doe</span>
                </div>
                <div className="rightbarFollowing">
                    <img src={`${PF}/profile/pp5.jpeg`} alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">John Doe</span>
                </div>
            </div>
            </>

        )
    }

    return(
        <div className="rightbar">
            <div className="rightbarWrapper">
                {user ? <ProfileRightbar/> : <HomeRightbar/>}
            </div>
        </div>
    )
}