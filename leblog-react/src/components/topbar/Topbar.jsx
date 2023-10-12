import { Link } from 'react-router-dom';
import "./topbar.css";

export default function Topbar() {
  const user =false;
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
            
              
              <Link className="link" to="/user">{user && "DÉCONNECTER" }</Link>
            </li>
            </ul>
        </div>

        <div className="topRight">
          {
            user ? (
            <li>
            <Link className="link" to="/settings">
            <img className="topImg"  
            src="https://mail.google.com/mail/u/0?ui=2&ik=e47277a943&attid=0.1&permmsgid=msg-a:r682310502605662973&th=18b1e5f3db4ce1f0&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ-2xxH4YBr2nQQM-sYO8TegN4A032Jgn8ONUWJC_6kRUDCN35Z4VCa-scVMUChWJyDgcUCCWpIfKaR8ntVEdSHmhxzlvZ_oFoLAWuywZHh0T2_YMVlFdH1-2VM&disp=emb&realattid=18b1e5f1660e88769261" />
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
