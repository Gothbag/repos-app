import { NavLink } from "react-router-dom";

import "./NavBar.css";

export default function NavBar() {
  return (
    <ul className="nav-bar">
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/"
        >
          Home
        </NavLink>
      </li>
    </ul>
  );
}
