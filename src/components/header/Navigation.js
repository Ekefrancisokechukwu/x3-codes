import React, { useState } from "react";
import { CgCloseO } from "react-icons/cg";
import { navLinks } from "./navLinks";
import { Link, NavLink } from "react-router-dom";

const Navigation = ({ visible, setVisible }) => {
  return (
    <>
      <div
        className={visible ? "nav_background visible" : "nav_background"}
        onClick={() => setVisible(!visible)}
      ></div>
      <nav className={visible ? "navigation visible" : "navigation"}>
        <div className="navigation__close" onClick={() => setVisible(!visible)}>
          <CgCloseO />
        </div>
        <ul className="navigation__list">
          {navLinks.map((link) => {
            return <NavItem {...link} key={link.id}></NavItem>;
          })}
        </ul>

        <a href="#">
          <button className="btn btn--main">apply now!</button>
        </a>
      </nav>
    </>
  );
};

const NavItem = ({ url, text, icon }) => {
  return (
    <li className="navigation__item">
      <NavLink
        className={({ isActive }) =>
          isActive ? "navigation__link active" : "navigation__link"
        }
        to={url}
      >
        <span className="navigation__icon">{icon}</span>
        {text}
      </NavLink>
    </li>
  );
};

export default Navigation;
