import "./header.css"

export default function Header() {
  return (
    <div className='header'>
       <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
       </div>
       <img className="headerImg" src="https://i.pinimg.com/originals/a1/f6/b9/a1f6b9382d5dfe760c7a5f7d72b7afbc.gif" alt=""/>
    </div>
  )
}
