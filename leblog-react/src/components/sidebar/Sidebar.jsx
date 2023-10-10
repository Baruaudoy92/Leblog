import { Link } from 'react-router-dom';
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src="https://i.pinimg.com/564x/10/54/09/105409ff4b8ce13b997a1e184d611d54.jpg" style={{ width: '100%', height: '320px'}}alt="" />
               
            <li className="topListItem">
              <Link className="link" to="/post/:postId">Post</Link>
               <p> Udoy   /   Thomson </p>
            </li>   
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Sport</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Boxing</li>
            <li className="sidebarListItem">Manga</li>
        </ul>
        </div>
        <div className="sidbarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-square-facebook"></i>
            <i className="sidebarIcon fa-brands fa-square-twitter"></i>
            <i className="sidebarIcon
            fa-brands fa-square-instagram"></i>
            <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
            <i className="sidebarIcon
            fa-brands fa-square-reddit"></i>
            </div>
        </div>
    </div>
  )
}
