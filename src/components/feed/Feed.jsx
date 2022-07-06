import Posts from "../Posts/Posts"
import Share from "../share/Share"
import "./feed.css"

export default function Feed() {
  return (
    <div className="feedContainer">
      <div className="feedWrapper">
        <Share/>
        <Posts/>
        <Posts/>
        <Posts/>
        <Posts/>
        <Posts/>
      </div>
    </div>
  )
}
