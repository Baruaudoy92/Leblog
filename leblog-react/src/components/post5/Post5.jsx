import "./post5.css";

export default function post() {
  return (
    <div className="post">
        <img className="postImg" 
        src="https://i.pinimg.com/564x/2d/47/48/2d4748c50da16ce9c1e418aa1b9b0d0e.jpg" alt=" "
        />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">THRILLING</span>
                <span className="postCat">DEMON SLAYER </span>
            </div>
            <span className="postTitle"> UPPER ONE.</span>
            <hr />
            <span className="postDate">8 hour ago</span>
        </div>
        <p className="postDesc">"Je ne dis pas ça pour toi. Cela perturbe le classement. Même moi, je crains que des fissures ne se forment dans la hiérarchie."</p>
    </div>
  )
}
