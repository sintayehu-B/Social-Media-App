import Feed from "../../components/feed/Feed"
import RightBar from "../../components/rightBar/RightBar"
import SideBar from "../../components/sideBar/SideBar"
import TopBar from "../../components/topBar/TopBar"
import "./profile.css"

export default function Profile() {
  return (
    <>
      <TopBar />
      <div className="profile">
        <SideBar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/Person/sintayehu.jpg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="assets/Person/sintayehu.jpg"
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Sintayehu Sermessa</h4>
                <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <RightBar profile/>
          </div>
        </div>
      </div>
    </>
  )
}
