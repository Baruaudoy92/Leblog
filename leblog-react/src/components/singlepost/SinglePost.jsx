import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img src="https://i.pinimg.com/564x/8c/20/92/8c20922d9fa2fbfa05a8dc68b52d1132.jpg" alt="mohamed" 
            className="singlePostImg"
            />
            <h1 className="singlePostTitle">Mohamed Ali \/ Mike Tyson
            <div className="singlePostEdit">
            <i class="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i class="singlePostIcon fa-solid fa-trash"></ i>
            </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>Thomson</b> </span>
                <span className="singlePostDate">1 hour ago </span>
            </div>
            <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad beatae eveniet eaque eos ipsum magniprovident eum numquam optio provident suscipit sit in necessitatinumquam optio provident suscipit sit inbus et, quae perfere numquam optio provident suscipit sit inam suscipit sit inbus et, quae perfere numquam optio provident suscipit sit inam optprovidentio provident s provident suscipit sit ins accusamus iusto nuquam optio provident suscip numquam optio provident suscipit sit init sit inumquam optio provident suscipit sit in koklo n at jkikop josos kompn
            numquam optio provident suscipit sit in.</p>
        </div>
    </div>
  )
}
