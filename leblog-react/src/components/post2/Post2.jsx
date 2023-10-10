import "./post2.css";

export default function post1() {
  return (
    <div className="post">
        <img className="postImg" 
        src="https://i.pinimg.com/originals/21/9d/d7/219dd7ef07463fca764d04a8ab74388d.jpg" alt=" "
        />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">FIGHT</span>
                <span className="postCat">BAKI</span>
            </div>
            <span className="postTitle">Baki グラップラー刃牙, Gurappurā Baki;</span>
            <hr />
            <span className="postDate">3 hour ago</span>
        </div>
        <p className="postDesc"> Baki Hanma est un jeune garçon de treize ans possédant des capacités physiques incroyables héritées de son père, Yujiro Hanma, « la créature la plus forte du monde », aussi appelé « l'Ogre ».</p>
    </div>
  )
}
