import {Nav, NavLink} from "../../style/NavStyle.js";
import "../../style/NavStyle.scss";
import React, { useEffect, useState } from "react";


export default function Navbar() {

  const [scroll, setScroll] = useState(false);
 useEffect(() => {
   window.addEventListener("scroll", () => {
     setScroll(window.scrollY > 50);
   });
 }, []);

  return (
    <Nav className={scroll && "nav-scrolled"}>
        <NavLink to="/" >
          Home
        </NavLink>
        <NavLink to="#projects" >
          Projects
        </NavLink>
        <NavLink to="#contact" >
          Contact
        </NavLink>
        <NavLink to="/resume" >
          Resume
        </NavLink>
    </Nav>
  );
}
