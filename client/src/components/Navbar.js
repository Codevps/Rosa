import React, { useState } from "react";
import Slide from "react-reveal/Slide";

function Navbar() {
  const showSideBar = () => {
    setSideBar(true);
  };
  const noSideBar = () => {
    setSideBar(false);
  };
  const [sideBar, setSideBar] = useState(false);
  return (
    <div>
      <header id="#home">
        <nav className={sideBar ? "nav open" : "nav"}>
          <div className="menuToggle" id="menuToggle">
            <Slide top>
              {" "}
              <i className="fas fa-bars " onClick={showSideBar}></i>
            </Slide>
            <i className="fas fa-times" onClick={noSideBar}></i>
          </div>
          <Slide top>
            <a className="logo" href="#hero">
              ROSA
            </a>
          </Slide>
          <ul className="nav-list">
            <Slide top>
              {" "}
              <li>
                <a href="#hero" className="nav-link">
                  Home
                </a>
              </li>
            </Slide>
            <Slide top>
              {" "}
              <li>
                <a href="#story" className="nav-link">
                  Our Story
                </a>
              </li>
            </Slide>
            <Slide top>
              {" "}
              <li>
                <a href="#menu" className="nav-link">
                  Menu
                </a>
              </li>
            </Slide>
            <Slide top>
              {" "}
              <li>
                <a href="#reservations" className="nav-link">
                  Reservations
                </a>
              </li>
            </Slide>
            <Slide top>
              {" "}
              <li>
                <a href="#about" className="nav-link">
                  About Us
                </a>
              </li>
            </Slide>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
