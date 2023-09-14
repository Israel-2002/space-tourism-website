import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="technologies__nav">
      <ul>
        <li>
          <NavLink to="/technology" end>1</NavLink>
        </li>
        <li>
          <NavLink to="/technology/spaceport">2</NavLink>
        </li>
        <li>
          <NavLink to="/technology/space-capsule">3</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
