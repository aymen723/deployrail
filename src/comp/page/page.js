import React from "react";
import "./pagestyle.css";
import logo from "./ultrapics/logo.png";
import MouseOutlinedIcon from "@mui/icons-material/MouseOutlined";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  // useTransform,
  // MotionValue,
} from "framer-motion";
import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";
import ArchitectureRoundedIcon from "@mui/icons-material/ArchitectureRounded";
// import { Sort } from "@mui/icons-material";

function Page() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  // const y = useTransform(scrollYProgress, [0, 0.5], [-300, 300]);
  // const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  // const y = useParallax(scrollYProgress, 300);
  return (
    <div className="page">
      <motion.div className="progress" style={{ scaleX }} />
      <div className="landingpage">
        <div className="aboutus">
          <img src={logo} alt="logo" className="logo"></img>
          <h1 className="landigtitle">ULTRA DESING</h1>
          <h5 className="text">we are a Freelaning comapny</h5>
          <div className="iconsbar">
            <FacebookRoundedIcon
              className="icon"
              fontSize="medium"
            ></FacebookRoundedIcon>
            <InstagramIcon className="icon" fontSize="medium"></InstagramIcon>
          </div>
        </div>
        <div className="scroll">
          <h6 className="scrolltext">Scroll Down</h6>

          <motion.div
            animate={{ y: 10 }}
            transition={{ ease: "linear", duration: 2, repeat: Infinity }}
          >
            <MouseOutlinedIcon
              className="icon"
              fontSize="large"
            ></MouseOutlinedIcon>
          </motion.div>
        </div>
      </div>

      {/* <Sidebar></Sidebar> */}

      <div className="sidebar">
        <div className="letterbox">
          <h2 className="letter">
            U<span style={{ color: "red" }}>.</span>
          </h2>
        </div>

        <div className="iconsidebar">
          <div className="iconcontainer">
            <MouseOutlinedIcon
              className="icon"
              fontSize="small"
            ></MouseOutlinedIcon>
          </div>

          <div className="iconcontainer">
            <MouseOutlinedIcon
              className="icon"
              fontSize="small"
            ></MouseOutlinedIcon>
          </div>
          <div className="iconcontainer">
            <MouseOutlinedIcon
              className="icon"
              fontSize="small"
            ></MouseOutlinedIcon>
          </div>
        </div>
      </div>
      <div className="landingpage">
        <div className="aboutuscontainer">
          <div className="companytitle">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="companycontainer"
            >
              <ApartmentRoundedIcon fontSize="large"></ApartmentRoundedIcon>
            </motion.div>
            <h2 className="companytitlefont">About us</h2>
          </div>
          <div className="defsection">
            <div className="teamsection">
              <div className="teamdesc">
                <div className="titlecontainer">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="archiiconcontainer"
                  >
                    <ArchitectureRoundedIcon fontSize="large"></ArchitectureRoundedIcon>
                  </motion.div>
                  <h4 className="teamtitle">ARCHITECTURE TEAM </h4>
                </div>
                <div className="teamskillcontainer">
                  <h2 className="teamskill">SKILLS</h2>
                </div>
                <div className="skills">
                  <span className="text">Architectural design</span>
                  <b className="text" style={{ display: "block" }}>
                    architectural design
                  </b>
                  <b className="text" style={{ display: "block" }}>
                    Planning
                  </b>
                  <b className="text" style={{ display: "block" }}>
                    2D Technical Drawing (Architectural Draftsman)
                  </b>
                  <b className="text" style={{ display: "block" }}>
                    3D modeling, and animation
                  </b>
                </div>
              </div>
            </div>
            <div className="teamsection">azdaz</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
