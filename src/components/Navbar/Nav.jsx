import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <ul className="list-reset">
        <li className={classes.nav__item}>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : classes.nav__link
            }
            to="/profile"
          >
            Profile
          </NavLink>
        </li>
        <li className={classes.nav__item}>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : classes.nav__link
            }
            to="/dialogs"
          >
            Messages
          </NavLink>
        </li>
        <li className={classes.nav__item}>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : classes.nav__link
            }
            to="/news"
          >
            News
          </NavLink>
        </li>
        <li className={classes.nav__item}>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : classes.nav__link
            }
            to="/music"
          >
            Music
          </NavLink>
        </li>
        <li className={classes.nav__item}>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : classes.nav__link
            }
            to="/settings"
          >
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
