import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <NavLink to="/" className="navbar__logo">
        TJ
      </NavLink>

      <nav className="navbar__links">
        <NavLink to="/engineer">Engineer</NavLink>
        <NavLink to="/founder">Founder</NavLink>
        <NavLink to="/artist">Artist</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;