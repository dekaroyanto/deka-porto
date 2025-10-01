import React, { useEffect, useState } from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import Resume from "./resume.pdf";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`n-wrapper ${scrolled ? "scrolled" : ""}`} id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">Deka</div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Services
              </Link>
            </li>
            <li>
              <Link to="experience" spy={true} smooth={true}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="project" spy={true} smooth={true}>
                Project
              </Link>
            </li>
          </ul>
        </div>
        <a href={Resume} download>
          <button className="button n-button">Download CV</button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
