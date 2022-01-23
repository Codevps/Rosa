import React from "react";
import Slide from "react-reveal/Slide";

function Reservations() {
  return (
    <div>
      <section className="blend" id="reservations">
        <Slide top>
          <h2 className="sub-headline h2">
            <span className="letter">T</span>he perfect
          </h2>
        </Slide>
        <Slide bottom>
          <h1 className="headline-light h1">Blend</h1>
          <div className="bground">
            <a href="#delight">
              <i className="fas fa-chevron-down upclass"></i>
            </a>
          </div>
        </Slide>
      </section>
      {/* section blend ends!!!! */}
      <section className="delight" id="delight">
        <div className="grid-layout">
          <Slide left>
            <div>
              <h2 className="sub-headline h2 margin">
                <span className="letter">C</span>ulinary
              </h2>
              <h1 className="headline-dark h1">Delight</h1>
              <p className="para">
                Lorem Ipsum adalah contoh teks atau dummy dalam industri
                percetakan dan penataan huruf atau typesetting. Lorem Ipsum
                telah menjadi standar contoh teks sejak tahun, saat seorang
                tukang cetak.
              </p>
              <a className="a" href="/">
                Make a reservation
              </a>
            </div>
          </Slide>

          <div className="img-grid">
            <Slide top>
              <img
                src={require("../image/delight-group-1.jpg").default}
                alt="Delight"
              />
            </Slide>
            <Slide bottom>
              <img
                src={require("../image/delight-group-2.jpg").default}
                alt="Delight"
              />
            </Slide>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Reservations;
