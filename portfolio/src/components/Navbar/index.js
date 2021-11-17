import { NavLink as Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
        <Link to="/" activeStyle>
          Home
        </Link>
        <Link to="/projects" activeStyle>
          Projects
        </Link>
    </nav>
  );
}
