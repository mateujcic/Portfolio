import { Nav } from "../../style/NavStyle.js";
import "../../style/NavStyle.scss";
import React, { useEffect, useState } from "react";
import Scroll from "react-scroll";
import {Link} from "react-scroll";


export default function Navbar() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 40);
    });
  }, []);

  return (
    <Nav className={scroll && "nav-scrolled"}>
      <Link to="home"
        spy={true}
        smooth={true}
        duration={500}
        className="link"
        activeClass="some-active-class">Home</Link>
      <Link
        to="projects"
        spy={true}
        smooth={true}
        duration={500}
        className="link"
        activeClass="some-active-class"
      >
        Projects
      </Link>
      <Link to="contact"
        spy={true}
        smooth={true}
        duration={500}
        className="link"
        activeClass="some-active-class">Contact</Link>
      <Link to="resume"
        spy={true}
        smooth={true}
        duration={500}
        className="link"
        activeClass="some-active-class">Resume</Link>
    </Nav>
  );
}
