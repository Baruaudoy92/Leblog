import Sidebar from "../../components/sidebar/Sidebar";
import "./settings.css";

export default function Settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update your Account</span>
                <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <form className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsPP">
                    <img src="https://i.pinimg.com/originals/5f/5d/48/5f5d482802a7447cd346a088f086ccaf.jpg" alt="" />
                    <label htmlFor="fileInput">
                    <i className="settingsPPIcon fa-regular fa-user"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display: "none"}}/>
                </div>
                <label>Username</label>
                <input type="text" placeholder="Udoy" />
                <label>Email</label>
                <input type="email" placeholder="udoykusumbarua@gmail.com" />
                <label>Password</label>
                <input type="password" />
                <button className="Submit"> Update </button>
            </form>
        </div>
        <Sidebar />
    </div>
  )
}
