import React, { useState ,useEffect} from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";
import maskimg from "../images/goldenbg2.jpg";
import "../css/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
const [show, setShow] = useState(false);
  const openSidebar = () => {
    setIsOpen(true);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };
  
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(true);
      } else {
        // if scroll up show the navbar
        setShow(false);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);
  

  return (
    <>
      <nav>
        <div className={`navbar ${show && "hidden"}`}>
          <div className="company-name">
            <div className="logo">
              <div className="logo-img">
                <img
                  src={maskimg}
                  className="imglogo"
                  alt="logo"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
            <NavLink className="company" to="/">
              HONEYBADGERSCO
            </NavLink>
          </div>
          <div className="nav-head">
            <NavLink className="head hover-effect" to="/Home">
              Home
            </NavLink>
            <NavLink className="head hover-effect" to="/Products">
              Products
            </NavLink>
            <NavLink className="head hover-effect" to="/Contact">
              Contact Us
            </NavLink>
            <NavLink className="head hover-effect" to="/About">
              About Us
            </NavLink>
          </div>
          <div className="menu" onClick={openSidebar}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
        <SideBar isOpen={isOpen} closeSidebar={closeSidebar} />
      </nav>
    </>
  );
};

export default Navbar;
