import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Searchbox from "../Searchbox";
import "./navbar.css";

export default function Navbar({ setMobileAside }) {
  return (
    <>
      <nav className="nav-bar">
        <div className="flex nav">
          <img src="./logo.png" alt="logo" className="logo" />

          <div className="nav-middle-sec ">
            <Searchbox />
          </div>
          <div className="nav-right-sec">
            <div className="btn1">Register</div>
            <div className="btn2">Login</div>
          </div>

          <div className="menu">
            <RxHamburgerMenu
              size={30}
              onClick={() => setMobileAside((prev) => !prev)}
            />
          </div>
        </div>

        <div className="nav-search-m">
          <Searchbox />
        </div>
      </nav>
    </>
  );
}
