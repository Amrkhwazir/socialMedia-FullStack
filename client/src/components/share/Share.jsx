import { EmojiEmotions, Label, PermMedia, Room } from "@mui/icons-material";
import "./share.css";
import { useContext, useRef, useState } from "react";
import {AuthContext} from "../../context/AuthContext"
import axios from "axios"

export default function Share(){

    const {user} = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const desc = useRef();
    const [file , setFile] = useState(null);

    const submitHandler = async (e) => {
        e.preventDefault();
        const newPost = {
            userId: user._id,
            desc: desc.current.value
        };

        if(file){
            const data = new FormData();
            const fileName = Date.now() + file.name
            data.append("file", file)
            data.append("name", fileName)
            newPost.img = fileName

            try {
                await axios.post("http://127.0.0.1:8000/upload", data)
            } catch (err) {
                console.log(err);
            }
    
        }
        
        try {
            axios.post("http://127.0.0.1:8000/post/", newPost)
        } catch (error) {
            
        }
    }

    return(
        <div className="share">
           <div className="shareWrapper">
            <div className="shareTop">
                <img src={user.profilePicture ? PF + user.profilePicture : PF + "avatar.jpg"} alt="" className="shareProfileImg" />
                <input placeholder={"What's in your mind" + " " + user.name+ "?"} className="shareInput" ref={desc}/>
            </div>
                <hr className="shareHr" />
            <form className="shareBottom" onSubmit={submitHandler}>
                <div className="shareOptions">
                    <label htmlFor="file" className="shareOption">
                        <PermMedia htmlColor="tomato" className="shareIcon"/>
                        <span className="shareOptionText">
                        Photo or Video
                        </span>
                        <input style={{display: "none"}} type="file" id="file" accept=".png,.jpg,.jpeg " onChange={(e) => setFile(e.target.files[0])}/>
                    </label>
                    <div className="shareOption">
                        <Label htmlColor="blue" className="shareIcon"/>
                        <span className="shareOptionText">
                        Tag
                        </span>
                    </div>
                    <div className="shareOption">
                        <Room htmlColor="green" className="shareIcon"/>
                        <span className="shareOptionText">
                        Location
                        </span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                        <span className="shareOptionText">
                        Feelings
                        </span>
                    </div>
                </div>
                    <button className="shareButton" type="submit">share</button>
            </form>
           </div>
        </div>
    )
}