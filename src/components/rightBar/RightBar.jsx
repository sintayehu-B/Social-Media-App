import './rightBar.css'
import {Users} from "../../dummyData"
import Online from '../online/Online'
export default function RightBar({user}) {
  const pf = process.env.REACT_APP_PUBLIC_FOLDER;
  const HomeRightBar = ()=>{
    return (
      <>
      <div className="birthdayContainer">

        <img src="/assets/gift-removebg-preview.png" alt="" className="birthdayImage" />
        <span className="birthdayText"> <b>Maruf Sherifa</b> and <b>4 other friends</b> have a birthday today.</span>
      </div>
      <img src="assets/Post/blockchain.png" alt="" className="rightBarAd" />
      <h4 className="rightBarTitle"> Online Friends</h4>
      <ul className="rightBarFriendList">
      {Users.map(p=>(
        <Online key={p.id} user={p}/>
      ))}

      </ul>
      </>
    )
  }
  const ProfileRightBar =()=>{
    return (
      <>
        <h4 className="profileRightBarTitle"> User Information </h4>
        <div className="rightBarInfo">
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">
              City : 
            </span>
            <span className="rightBarInfoValue">
              {user.city}
            </span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">
              From : 
            </span>
            <span className="rightBarInfoValue">
              {user.from}
            </span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">
              RelationShip : 
            </span>
            <span className="rightBarInfoValue">
              {user.relationship === 1 ? "Single" : user.relationship === 2 ? "Married" : "Complicated"}
            </span>
          </div>
        </div>
        <h4 className="profileRightBarTitle"> User Friends </h4>
        <div className="rightBarFollowings">
          <div className="rightBarFollowing">
            <img src={`${pf}Person/redi_post2.jpg`} alt="" className="rightBarFollowingImage" />
            <span className="rightBarFollowingName"> Rediate Befekadu</span>
          </div>
          <div className="rightBarFollowing">
            <img src={`${pf}Person/abiy.jpg`} alt="" className="rightBarFollowingImage" />
            <span className="rightBarFollowingName"> Abiy Menberu</span>
          </div>
          <div className="rightBarFollowing">
            <img src={`${pf}Person/maruf.jpg`}  alt="" className="rightBarFollowingImage" />
            <span className="rightBarFollowingName"> Maruf Sherifa</span>
          </div>
          <div className="rightBarFollowing">
            <img src={`${pf}Person/ermias.jpg`}  alt="" className="rightBarFollowingImage" />
            <span className="rightBarFollowingName"> Ermias Asmare</span>

          </div>
          <div className="rightBarFollowing">
            <img src={`${pf}Person/ermias.jpg`}  alt="" className="rightBarFollowingImage" />
            <span className="rightBarFollowingName"> Ermias Asmare</span>

          </div>
          <div className="rightBarFollowing">
            <img src={`${pf}Post/maruf-post.jpg`}  alt="" className="rightBarFollowingImage" />
            <span className="rightBarFollowingName">Maruf Markose</span>

          </div>
          <div className="rightBarFollowing">
            <img src={`${pf}Person/dan.jpg`} alt="" className="rightBarFollowingImage" />
            <span className="rightBarFollowingName"> Dan mekonnene</span>
          </div>
          <div className="rightBarFollowing">
            <img src={`${pf}Post/chala.jpg`} alt="" className="rightBarFollowingImage" />
            <span className="rightBarFollowingName"> Chala Chebete</span>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className="rightBarContainer">
      <div className="rightBarWrapper">

        { user ?<ProfileRightBar/> : <HomeRightBar/>}
      </div>
    </div>
  )
}
