import { MoreVert } from "@mui/icons-material"
import "./post.css"
import { useState, useEffect, useContext } from "react"
import axios from "axios";
import {format} from "timeago.js";
import {Link} from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";


export default function Post({post}){
// console.log(post.img)    

    const [like, setLike] = useState(post?.likes?.length)
    const [isLiked, setIsLiked] = useState(false)
    const [user, setUser] = useState({});
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const {user: currentUser} = useContext(AuthContext);

    useEffect(()=>{
        setIsLiked(post.likes.includes(currentUser._id))
    }, [currentUser._id, post.likes])


    useEffect( ()=>{
        async function fetchUser(){
            const response = await axios.get(`http://127.0.0.1:8000/profile?userId=${post?.userId}`)
            setUser(response.data);
        }
        fetchUser()
    },[post.userId]);


    const likeHandler = ()=>{
        try {
            axios.put(`http://127.0.0.1:8000/post/${post?._id}/like`, {userId: currentUser._id})
        } catch (error) {
            
        }
        setLike(isLiked ? like - 1: like + 1 )
        setIsLiked(!isLiked)
    }

    return(
        <div className="post" >
           <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <Link to={`profile/${user.name}`}>
                    <img src={user.profilePicture ? PF + user.profilePicture : PF + "avatar.jpg"} alt="" className="postProfileImg" />
                    </Link>
                    <span className="postUsername">{user.name}</span>
                    <span className="postDate">{format(post.createdAt)}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img src={PF+ post.img} crossOrigin="anonymous" alt="" className="postImg" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="/assets/like.png" alt="" onClick={likeHandler} className="likeIcon" />
                    <img src="/assets/heart.png" alt="" onClick={likeHandler} className="likeIcon" />
                    <span className="postLikeCounter">{like} poeple like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCOmmentText">{post.comment} comments</span>
                </div>

            </div>
           </div>
        </div>
    )
}