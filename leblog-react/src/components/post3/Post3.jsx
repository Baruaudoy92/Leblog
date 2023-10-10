import "./post3.css";

export default function post() {
  return (
    <div className="post">
        <img className="postImg" 
        src="https://i.pinimg.com/originals/7d/94/e7/7d94e7f2c465835b80209c9b4facb7a6.jpg" alt=" "
        />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">École d'Exorcisme de Tokyo</span>
                <span className="postCat">JUJUTSU KAISEN</span>
            </div>
            <span className="postTitle">羂けん索じゃく, Kenjaku est l'un des principaux antagonistes de Jujutsu Kaisen.</span>
            <hr />
            <span className="postDate">5 hour ago</span>
        </div>
        <p className="postDesc"> 	Tu m'entends, Sukuna ? C'est parti ! Je vais de nouveau instaurer l'âge d'or de l'exorcisme !</p>
    </div>
  )
}
