import "./post.css";

export default function post() {
  return (
    <div className="post">
        <img className="postImg" 
        src="https://i.pinimg.com/564x/76/77/64/7677648147753848204a3c861ec1152c.jpg" alt=" "
        />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">GANG</span>
                <span className="postCat">Young GTO </span>
            </div>
            <span className="postTitle">湘南純愛組, est un shōnen manga de Tōru Fujisawa</span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">Young GTO raconte la jeunesse d'Eikichi Onizuka (personnage principal de GTO) et de son meilleur ami Ryuji Danma.</p>
    </div>
  )
}
