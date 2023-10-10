import "./post1.css";

export default function post1() {
  return (
    <div className="post">
        <img className="postImg" 
        src="https://i.pinimg.com/originals/5e/31/f8/5e31f8b054c31d031f7a7a79f252f4ad.jpg" alt=" "
        />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">ASSASSINS</span>
                <span className="postCat">HUNTER X HUNTER</span>
            </div>
            <span className="postTitle">KILLUA ZOLDYCK</span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc"> Killua est le deuxième enfant d'une famille d'assassins connus, la famille Zoldyck. Très prometteur dès sa naissance, Killua a déjà maîtrisé de nombreuses techniques de meurtre à un âge très jeune, et est destiné à devenir l'un des meilleurs assassins que la famille ait jamais produit.</p>
    </div>
  )
}
