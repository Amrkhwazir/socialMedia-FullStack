import "./rightbar.css";
import { users } from "../../dummyData.js";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext.js";
import { Add, Remove } from "@mui/icons-material";


export default function Rightbar({ user }){
    // console.log(user)

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [friend, setFriend] = useState([])
    const {user: currentUser, dispatch} = useContext(AuthContext);
    const [followed, setFollowed] = useState(currentUser.following.includes(user?.id));

    useEffect(()=>{
        const getFriends = async () => {
            try {
                const friendLists = await axios.get(`http://127.0.0.1:8000/profile/friends/${user?._id}`);
                setFriend(friendLists.data)

            } catch (error) {
                console.log(error)
            }
        } 
        getFriends();
    }, [user]);

    const clickHandler = async () => {
        try {
            if(followed){
                await axios.put(`http://127.0.0.1:8000/profile/${user._id}/unfollow`, {userId: currentUser._id});
                dispatch({type: "UNFOLLOW", payload: user._id})
            }else{
                await axios.put(`http://127.0.0.1:8000/profile/${user._id}/follow`, {userId: currentUser._id});
                dispatch({type: "FOLLOW", payload: user._id})

            };
        } catch (err) {
            console.log(err)
        }
        setFollowed(!followed)
    }
    
    const HomeRightbar =()=>{
        return(
<>
<div className="birthdayContainer">

                    <span className="birthdayText" aria-labelledby="emoji-gift" role="img">
                    🎁<b>Pola Foster</b> and <b>3 other friends</b> have a birthday today 
                    </span>
                </div>
                <img src="/images/addPoster.jpg" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">

                    <>
                    {users.map((u, indx)=>(
                    <li key={indx} className="rightbarFriend">
                    <div className="rightbarProfileImgContainer">
                        <img src={PF+u.profilePic} alt="" className="rightbarProfileImg" />
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
            {user.name !== currentUser.name && (
                <button className="rightBarFollowButton" onClick={clickHandler}>
                    {followed ? "Unfollow" : "Follow"}
                    {followed ? <Remove/> : <Add/>}
                </button>
            ) }
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

                {friend.map((friend, index)=>(
                    <Link to={"/profile/"+friend.name}>
                    <div key={index} className="rightbarFollowing">
                    <img src={friend.profilePicture ? PF+friend.profilePicture : PF+"avatar.jpg"}alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">
                        {friend.name ? friend.name : "No Friends"}
                        </span>
                </div>
                    </Link>
                ))}
                
            </div>
            </>

        )
    }

    return(
        <div className="rightbar">
            <div className="rightbarWrapper">
                { user ? <ProfileRightbar/> : <HomeRightbar/>}
            </div>
        </div>
    )
}