import "./write.css";

export default function Write() {
  return (
    <div className="write">
       <div className="headerTitles">
           <span className="headerTitleSm">POST</span>
           </div>
      <img className="writeImg" 
      src="https://i.pinimg.com/564x/b0/f1/e3/b0f1e39c32de92012d763253780f6a44.jpg" alt="" />
        <form className="writeForm">
          <div className="writeFormGroup">
            <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}} />
            <input type="text" placeholder="Title"  className="writeInput" autoFocus={true}/>
          </div>
          <div className="writeFormGroup">
            <textarea placeholder="Tell your story..." typeof="text" className="writeInput writeText"></textarea>
          </div>
          <button className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}
