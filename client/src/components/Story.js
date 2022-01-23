import React from "react";
import Slide from "react-reveal/Slide";

function Story() {
  return (
    <div>
      <section className="discover" id="story">
        <div className="grid-layout">
          <Slide left>
            <div>
              <h2 className="sub-headline h2">
                <span className="letter">D</span>iscover
              </h2>
              <h1 className="headline-dark h1">Our Story</h1>
              <div className="asterisk">
                <i className="fas fa-asterisk"></i>
              </div>
              <p className="para">
                Lorem Ipsum adalah contoh teks atau dummy dalam industri
                percetakan dan penataan huruf atau typesetting. Lorem Ipsum
                telah menjadi standar contoh teks sejak tahun, saat seorang
                tukang cetak.
              </p>
              <a className="a" href="/">
                About Us
              </a>
            </div>
          </Slide>
          <Slide right>
          <div>
            <img
              className="img"
              src={require("../image/our-story-1.jpg").default}
              alt="food"
            />
          </div>
        </Slide>
        </div>
      </section>
    </div>
  );
}

export default Story;
