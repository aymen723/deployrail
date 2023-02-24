import React from "react";
import "./pagestyle.css";
import logo from "./ultrapics/logo.png";
// import Sidebar from "./sidebar/sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Page() {
  return (
    <div className="page">
      <div className="landingpage">
        <div className="aboutus">
          <img src={logo} alt="logo" className="logo"></img>
          <h1 className="landigtitle">ULTRA DESING</h1>
          <h5 className="text">we are a Freelaning comapny</h5>
          <FontAwesomeIcon
            style={{ width: "10px", height: "1Opx", color: "white" }}
            icon="fa-brands fa-facebook"
          ></FontAwesomeIcon>
        </div>
      </div>

      {/* <Sidebar></Sidebar> */}

      <div className="sidebar">
        <div className="letterbox">
          <h1 className="letter">
            H<span style={{ color: "red" }}>.</span>
          </h1>
        </div>

        <div className="iconsidebar">
          <h1>a</h1>
          <h1>a</h1>
          <h1>a</h1>
        </div>
      </div>
      <div className="landingpage"></div>
    </div>
  );
}

export default Page;
