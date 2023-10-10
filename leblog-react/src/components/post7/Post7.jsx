import "./post7.css";

export default function post() {
  return (
    <div className="post">
        <img className="postImg" 
        src="https://i.pinimg.com/564x/40/77/bb/4077bb9fcf8a1ad2d7a951e5cd97cbda.jpg" alt=" "
        />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">BASKET</span>
                <span className="postCat">SLAM DUNK </span>
            </div>
            <span className="postTitle"> Kaede Rukawa.</span>
            <hr />
            <span className="postDate">15 hour ago</span>
        </div>
        <p className="postDesc">Slam Dunk スラムダンク, Suramu Danku est un manga écrit et dessiné par Takehiko Inoue traitant du basket-ball. Il est pré-publié dans le magazine Weekly Shōnen Jump de l'éditeur Shūeisha entre octobre 1990 et juin 1996 et a été compilé en un total de 31 volumes reliés. La version française est éditée en intégralité par Kana de mars 1999 à décembre 2004.</p>
    </div>
  )
}
