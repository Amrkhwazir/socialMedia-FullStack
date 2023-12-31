import { useContext, useEffect, useState } from "react"
import Post from "../post/Post"
import Share from "../share/Share"
import "./feed.css"
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";


export default function Feed({username}){
    const [posts, setPosts] = useState([]);
    const {user} = useContext(AuthContext);

    useEffect( ()=>{
        async function fetchPosts(){
            const response = username 
            ? await axios.get(`http://127.0.0.1:8000/post/profile/${username}`) 
            : await axios.get("http://127.0.0.1:8000/post/timeline/" + user._id)
            setPosts(response?.data?.sort((p1, p2) => (
                new Date(p2.createdAt) - new Date(p1.createdAt)
            )));
            // console.log(response)
        
          
            
        }
        fetchPosts()
    },[username, user._id])
    return(
        <div className="feed">
            <div className="feedWrapper">
                {(!username || username === user.name) && <Share/> || <p style={{textAlign: "center", fontSize: "18px"}}>No posts</p>}  
                {
                    posts?.map((p)=>(
                        <Post key={p?._id} post={p}/>
                ))
                }  
            </div>
        </div>
    )
}