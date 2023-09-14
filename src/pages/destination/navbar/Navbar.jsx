import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="destination__nav">
      <ul>
        <li>
          <NavLink to="/destination" end>
            Moon
          </NavLink>
        </li>
        <li>
          <NavLink to="/destination/mars">Mars</NavLink>
        </li>
        <li>
          <NavLink to="/destination/europa">Europa</NavLink>
        </li>
        <li>
          <NavLink to="/destination/titan">Titan</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
