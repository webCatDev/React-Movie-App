import { useSelector } from "react-redux";
import BagIcon from "../Icons/BagIcon";
import BookmarkIcon from "../Icons/BookmarkIcon";
import ClockIcon from "../Icons/ClockIcon";
import HomeIcon from "../Icons/HomeIcon";
import SearchIcon from "../Icons/SearchIcon";
import TvIcon from "../Icons/TvIcon";
import UsersIcon from "../Icons/UsersIcon";
import classes from "./sidebar.module.css";

const Sidebar = () => {
    const isDarkMode = useSelector(state => state.darkMode.isDarkMode)
    const themeClasses = isDarkMode ? "" : classes.light;
    const sidebarClasses = `${classes.sidebar} ${themeClasses}`;
  return (
      <aside className={sidebarClasses}>
      <SearchIcon />
      <HomeIcon />
      <UsersIcon />
      <BookmarkIcon />
      <TvIcon />
      <ClockIcon />
      <BagIcon />
    </aside>
  );
};

export default Sidebar;
