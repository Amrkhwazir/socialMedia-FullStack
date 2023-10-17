import Feed from "../../components/feed/Feed.jsx";
import Rightbar from "../../components/rightbar/Rightbar.jsx";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import Topbar from "../../components/topbar/Topbar.jsx";
import "./home.css"



export default function Home(){
    return(
        <div>
            <Topbar/>
           <div className="homeContainer">
            <Sidebar/>
           <Feed/>
            <Rightbar/>
           </div>
        </div>
    )
}