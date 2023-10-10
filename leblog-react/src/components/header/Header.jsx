import "./header.css"

export default function Header() {
  return (
    <div className='header'>
       <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
       </div>
       <img className="headerImg" src="https://i.pinimg.com/originals/68/8e/8e/688e8e78f549d4d75313c47b3781c4b5.png" alt=""/>
    </div>
  )
}
