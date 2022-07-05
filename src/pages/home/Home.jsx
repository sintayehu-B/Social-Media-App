import React from "react";
import Feed from "../../components/feed/Feed";
import RightBar from "../../components/rightBar/RightBar";
import SideBar from "../../components/sideBar/SideBar";
import TopBar from "../../components/topBar/TopBar";
import "./home.css"
export default function Home() {
  return (
    <>
      <TopBar />
      <div className="homeContainer">
        <SideBar />
        <Feed/>
        <RightBar/>
        
      </div>
    </>
  );
}
