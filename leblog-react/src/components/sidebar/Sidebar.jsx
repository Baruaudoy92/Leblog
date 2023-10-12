import { Link } from 'react-router-dom';
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src="https://mail.google.com/mail/u/0?ui=2&ik=e47277a943&attid=0.1&permmsgid=msg-a:r682310502605662973&th=18b1e5f3db4ce1f0&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ-2xxH4YBr2nQQM-sYO8TegN4A032Jgn8ONUWJC_6kRUDCN35Z4VCa-scVMUChWJyDgcUCCWpIfKaR8ntVEdSHmhxzlvZ_oFoLAWuywZHh0T2_YMVlFdH1-2VM&disp=emb&realattid=18b1e5f1660e88769261" style={{ width: '100%', height: '320px'}}alt="" />
               
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
