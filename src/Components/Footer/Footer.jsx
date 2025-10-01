import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import GitHub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>dekaroy05@gmail.com</span>
        <div className="f-icons">
          <a
            href="https://www.instagram.com/dekaroyanto"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Insta color="white" size={"3rem"} />
          </a>
          <a
            href="https://www.linkedin.com/in/deka-royanto"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin color="white" size={"3rem"} />
          </a>
          <a
            href="https://github.com/dekaroyanto"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
