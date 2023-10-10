import "./post6.css";

export default function post() {
  return (
    <div className="post">
        <img className="postImg" 
        src="https://i.pinimg.com/564x/0f/53/37/0f5337d7e853d8f787a46fb7a9cd7c22.jpg" alt=" "
        />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">OLD TIMES</span>
                <span className="postCat">VAGABOND </span>
            </div>
            <span className="postTitle"> Pensez uniquement à votre Art.</span>
            <hr />
            <span className="postDate">12 hour ago</span>
        </div>
        <p className="postDesc">Vagabond バガボンド, Bagabondo est un manga de Takehiko Inoue, prépublié dans le magazine Morning depuis 1998 et toujours en cours de parution au Japon.</p>
    </div>
  )
}
