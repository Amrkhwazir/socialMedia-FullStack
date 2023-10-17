import { useEffect, useState } from "react"
import Post from "../post/Post"
import Share from "../share/Share"
import "./feed.css"
import axios from "axios";


export default function Feed({username}){
    const [posts, setPosts] = useState([]);

    useEffect( ()=>{
        async function fetchPosts(){
            const response = username ? await axios.get(`http://127.0.0.1:8000/post/profile/${username}`) 
            : await axios.get("http://127.0.0.1:8000/post/timeline/64ee2811ac71570e58eeddfb")
            setPosts(response.data);
            console.log(response.data)
        }
        fetchPosts()
    },[username])

    return(
        <div className="feed">
            <div className="feedWrapper">
                <Share/>  
                {
                posts.map((p)=>(
                <Post key={p._id} post={p}/>))
                }  
            </div>
        </div>
    )
}