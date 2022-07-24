import classes from "./navbar.module.css";
import { NavLink } from "react-router-dom";
import profilePicture from "../../../images/profile.jpg";
import { useSelector, useDispatch } from "react-redux";
import { colorThemeActions } from "../../../store/colorThemeSlice";
import DownArrowIcon from "../../Icons/DownArrowIcon";
import MoonIcon from "../../Icons/MoonIcon";
import SunIcon from "../../Icons/SunIcon";

const Navbar = () => {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
  const dispatch = useDispatch();

  const changeColorTheme = () => {
    dispatch(colorThemeActions.toggleDarkMode());
  };

  const navbarLinks = [
    {
      to: "/",
      text: "Home",
    },
    {
      to: "/movies",
      text: "Movies",
    },
    {
      to: "/series",
      text: "Series",
    },
    {
      to: "/popular",
      text: "Popular",
    },
    {
      to: "/trends",
      text: "Trends",
    },
  ];
  
  const themeClasses = isDarkMode ? "" : classes.light;
  const navbarClasses = `${classes.navbar} ${themeClasses}`;
  const moveLeft = isDarkMode ? "" : classes.left;

  function scrollToElement({ target: { textContent } }) {
    let top;
    if (textContent === "Home") top = 0;
    if (textContent === "Movies") top = 200;
    if (textContent === "Series") top = 500;
    if (textContent === "Popular") top = 1500;
    if (textContent === "Trends") top = 1700;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  }

  return (
    <nav className={navbarClasses}>
      <div className={classes.container}>
        <div className={classes.logo}>
          <h1 className={classes.logo}>Flakes</h1>
        </div>

        <div className={classes.menu}>
          <ul>
            {navbarLinks.map((navbarLink) => (
              <li key={navbarLink.text}>
                <NavLink
                  onClick={scrollToElement}
                  to={navbarLink.to}
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                >
                  {navbarLink.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className={classes.profile}>
          <img src={profilePicture} alt="" />
          <div className={classes.text}>
            <span>Profile</span>
            <DownArrowIcon />
          </div>
          <div
            onClick={changeColorTheme}
            className={classes.toggle}
            title="toggle dark mode"
            aria-label="toggle dark mode"
          >
            <MoonIcon />
            <SunIcon />
            <div className={`${classes.ball} ${moveLeft}`}></div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
