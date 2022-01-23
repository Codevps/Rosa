import React from "react";
import Slide from "react-reveal/Slide";

function Menu() {
  return (
    <div>
      <section className="banner" id="menu">
        <Slide top>
          <h2 className="sub-headline h2">
            <span className="letter">T</span>asteful
          </h2>
        </Slide>
        <Slide bottom>
          <h1 className="headline-light h1">Recipies</h1>
        </Slide>

        <div className="bground">
          <a href="#our-menu">
            <i className="fas fa-chevron-down upclass"></i>
          </a>
        </div>
      </section>
      {/* section banner ends!!!! */}
      <section className="our-menu" id="our-menu">
        <div className="grid-layout">
          <Slide left>
            <div className="img-grid">
              <img
                src={require("../image/menu-group-1.jpg").default}
                alt="Menu"
              />
              <img
                src={require("../image/menu-group-2.jpg").default}
                alt="Menu"
              />
              <img
                src={require("../image/menu-group-3.jpg").default}
                alt="Menu"
              />
              <img
                src={require("../image/menu-group-4.jpg").default}
                alt="Menu"
              />
            </div>
          </Slide>
          <Slide right>
            <div>
              <h2 className="sub-headline h2 margin">
                <span className="letter">D</span>iscover
              </h2>
              <h1 className="headline-dark h1">Menu</h1>
              <div>
                <p className="para">
                  Lorem Ipsum adalah contoh teks atau dummy dalam industri
                  percetakan dan penataan huruf atau typesetting. Lorem Ipsum
                  telah menjadi standar contoh teks sejak tahun, saat seorang
                  tukang cetak.
                </p>
                <a className="a" href="/">
                  Rosa Menu
                </a>
              </div>
            </div>
          </Slide>
        </div>
      </section>
    </div>
  );
}

export default Menu;
