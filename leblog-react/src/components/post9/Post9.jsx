import "./post9.css";

export default function post() {
  return (
    <div className="post">
        <img className="postImg" 
        src="https://i.pinimg.com/564x/06/fd/a5/06fda562a198fde5f72a5e4edd2c07ed.jpg" alt=" "
        />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">BATTEL</span>
                <span className="postCat">ONE PIECE </span>
            </div>
            <span className="postTitle"> Portgas D. Ace/ Barbe Noire</span>
            <hr />
            <span className="postDate">19 hour ago</span>
        </div>
        <p className="postDesc">"	Ace : Dis Grand-Père... Tu crois que c'est une bonne chose que je sois né ?
        < hr />
         Garp : Ça tu ne le sauras... qu'en vivant."</p>
    </div>
  )
}
