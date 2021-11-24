import {Nav, NavLink} from "../../style/NavStyle.js";

export default function Navbar() {
  return (
    <Nav>
        <NavLink to="/" activeStyle>
          Home
        </NavLink>
        <NavLink to="/projects" activeStyle>
          Projects
        </NavLink>
    </Nav>
  );
}
