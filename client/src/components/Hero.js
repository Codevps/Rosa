import React from "react";
import "../style/Phone.css";

export default function Main() {
  return (
    <div>
      <section className="hero" id="hero">
        <p className="hero-sub-headline">
          <span className="letter">W</span>elcome
        </p>
        <p className=" hero-sub-headline">to</p>
        <h1 className="hero-headline-light ">The Rosa</h1>
        <div>
          <div className="separator">
            <div className="line line-left"></div>
            <div className="asterisk">
              <i className="fas fa-asterisk"></i>
            </div>
            <div className="line line-right"></div>
          </div>
          <div className="single-animation">
            <p className="words">Luxury defined in taste.</p>
            <a className="btn" href="#menu">
              Explore
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
