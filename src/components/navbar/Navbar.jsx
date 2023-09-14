import React from "react";
import logo from "../../assets/images/shared/logo.svg";
import close from "../../assets/images/shared/icon-close.svg";
import hamburger from "../../assets/images/shared/icon-hamburger.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const showNavHandler = () => {
    document.querySelector(".nav__links-container").style.right = 0;
  };

  const hideNavHandler = () =>
    (document.querySelector(".nav__links-container").style.right = "-100%");

  return (
    <nav className="nav" >
      <div className="nav__container container">
        <div className="nav__logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="nav__links-container">
          <img
            className="nav__close"
            src={close}
            alt="close button"
            onClick={hideNavHandler}
          />

          <ul className="nav__links">
            <li onClick={hideNavHandler}>
              <NavLink to=".">
                <span>00</span>Home
              </NavLink>
            </li>
            <li onClick={hideNavHandler}>
              <NavLink to="destination">
                <span>01</span>Destination
              </NavLink>
            </li>
            <li onClick={hideNavHandler}>
              <NavLink to="crew">
                <span>02</span>Crew
              </NavLink>
            </li>
            <li onClick={hideNavHandler}>
              <NavLink to="technology">
                <span>03</span>Technology
              </NavLink>
            </li>
          </ul>
        </div>

        <img
          className="nav__hamburger"
          src={hamburger}
          alt="hamburger button"
          onClick={showNavHandler}
        />
      </div>
    </nav>
  );
};

export default Navbar;
