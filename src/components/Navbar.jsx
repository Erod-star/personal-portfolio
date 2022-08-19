import React from "react";

const Navbar = () => {
  return (
    <div className="navbar__main">
      <nav className="navbar">
        <a href="#" className="dev-logo">
          Welcome!
        </a>
        <input type="checkbox" id="toggler" />
        <label htmlFor="toggler">
          <i className="fa-solid fa-bars"></i>
        </label>
        <div className="nav-menu">
          <ul className="nav-list">
            <li>
              <a href="#my-stack">About</a>
            </li>
            <li>
              <a href="#">Education</a>
            </li>
            <li>
              <a href="#">Experience</a>
            </li>
            <li>
              <a href="#">Stack</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
