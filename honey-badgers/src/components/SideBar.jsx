import React from "react";
import styles from "../css/SideBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
const SideBar = ({ isOpen,closeSidebar }) => {
  return (
    <div className={`${styles.sidebar} ${isOpen && styles.open}`}>
      <span className={styles.closeIcon} onClick={closeSidebar}>
        <FontAwesomeIcon icon={faXmark} />
      </span>
      <div className={styles.sidebarMenu}>
        <NavLink
          className={styles.sideHead}
          activeClassName={styles.active}
          to="/Home"
        >
          Home
        </NavLink>
        <NavLink
          className={styles.sideHead}
          activeClassName={styles.active}
          to="/Products"
        >
          Products
        </NavLink>
        <NavLink
          className={styles.sideHead}
          activeClassName={styles.active}
          to="/Contact"
        >
          Contact Us
        </NavLink>
        <NavLink
          className={styles.sideHead}
          activeClassName={styles.active}
          to="/About"
        >
          About Us
        </NavLink>
      </div>
    </div>
  );
  
}


export default SideBar;
