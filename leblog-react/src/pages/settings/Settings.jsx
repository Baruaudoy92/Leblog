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
                    <img src="https://mail.google.com/mail/u/0?ui=2&ik=e47277a943&attid=0.1&permmsgid=msg-a:r682310502605662973&th=18b1e5f3db4ce1f0&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ-2xxH4YBr2nQQM-sYO8TegN4A032Jgn8ONUWJC_6kRUDCN35Z4VCa-scVMUChWJyDgcUCCWpIfKaR8ntVEdSHmhxzlvZ_oFoLAWuywZHh0T2_YMVlFdH1-2VM&disp=emb&realattid=18b1e5f1660e88769261" alt="" />
                    <label htmlFor="fileInput">
                    <i className="settingsPPIcon fa-regular fa-user"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display: "none"}}/>
                </div>
                <label>Username</label>
                <input type="text" placeholder="Udoy:Thomson" />
                <label>Email</label>
                <input type="email" placeholder="....@gmail.com" />
                <label>Password</label>
                <input type="password" />
                <button className="Submit"> Update </button>
            </form>
        </div>
        <Sidebar />
    </div>
  )
}
