import "./post8.css";

export default function post() {
  return (
    <div className="post">
        <img className="postImg" 
        src="https://i.pinimg.com/564x/de/51/1e/de511e896610cf7f54eafa6575c529a6.jpg" alt=" "
        />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">BATTEL</span>
                <span className="postCat">ONE PIECE</span>
            </div>
            <span className="postTitle"> Monkey D. Luffy.</span>
            <hr />
            <span className="postDate">17 hour ago</span>
        </div>
        <p className="postDesc">L'Arc Marine Ford est le vingt-deuxième arc de la série One Piece, et la cinquième histoire de la Saga Guerre de Barbe Blanche dans la série One Piece, qui suit immédiatement l'Arc Impel Down.</p>
    </div>
  )
}
