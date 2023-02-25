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
      <div className="landingpage">
        <div className="about"></div>
      </div>
    </div>
  );
}

export default Page;
