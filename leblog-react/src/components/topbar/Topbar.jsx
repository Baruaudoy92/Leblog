import { Link } from 'react-router-dom';
import "./topbar.css";

export default function Topbar() {
  const user =true;
  return (
    <div className='top'>
        <div className="topLeft">
            <i className="topIcon fa-brands fa-square-facebook"></i>
            <i className="topIcon fa-brands fa-square-twitter"></i>
            <i className="topIcon fa-brands fa-square-instagram"></i>
            <i className="topIcon fa-brands fa-square-pinterest"></i>
            <i className="topIcon
            fa-brands fa-square-reddit"></i>
        </div>

        <div className="topCenter">
            <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/">ACCUEIL</Link>
            </li>
            <li className="topListItem">
            <Link className="link" to="/about">À PROPOS</Link>
            </li>
            <li className="topListItem">
            <Link className="link" to="/contact">CONTACT</Link>
            </li>
            <li className="topListItem">
            <Link className="link" to="/write">ÉCRIRE</Link>
            </li>
            <li className="topListItem">
            
              {user && "DÉCONNECTER" }
            </li>
            </ul>
        </div>

        <div className="topRight">
          {
            user ? (
            <li>
            <Link className="link" to="/settings">
            <img className="topImg"  
            src="https://i.pinimg.com/140x140_RS/8b/63/b8/8b63b8a1ab84b7d69beceb3430374d1e.jpg" />
            </Link>
            </li>
            
            
            ) 
            : (
              <ul>
                <li className="topListItem">
                 <Link className="link" to="/login">SE CONNECTER</Link>
                </li>
                <li className="topListItem">
                 <Link className="link" to="/register">S'INSCRIRE</Link>
                </li>
                </ul>
            )
          }
             <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  );
}
