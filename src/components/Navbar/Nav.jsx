import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Nav.module.css";

const Nav = (props) => {
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
      <div className={classes.main}>
        <h2 className="list-reset">Friends</h2>
      </div>
      <div>
        <ul className={`${classes.sidebar} list-reset`}>
          <li className={classes.sidebar__item}>
            <div className={classes.sidebar__img}>
              <img
                width="50px"
                src="https://bipbap.ru/wp-content/uploads/2021/11/krasivye-devushki-na-stim-avu-podborka-004.jpg"
                alt=""
              />
            </div>
            <div>
              <NavLink to="/settings">Andrew</NavLink>
            </div>
          </li>
          <li className={classes.sidebar__item}>
            <div className={classes.sidebar__img}>
              <img
                width="50px"
                src="https://bipbap.ru/wp-content/uploads/2021/11/krasivye-devushki-na-stim-avu-podborka-004.jpg"
                alt=""
              />
            </div>
            <div>
              <NavLink to="/settings">Лена</NavLink>
            </div>
          </li>
          <li className={classes.sidebar__item}>
            <div className={classes.sidebar__img}>
              <img
                width="50px"
                src="https://bipbap.ru/wp-content/uploads/2021/11/krasivye-devushki-na-stim-avu-podborka-004.jpg"
                alt=""
              />
            </div>
            <div>
              <NavLink to="/settings">Леха</NavLink>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
