import React from "react";
import Slide from "react-reveal/Slide";

function Footer() {
  return (
    <div>
      <footer id="about">
        <div className="bground">
          <a href="#hero">
            <i className="fas fa-chevron-up upclass"></i>
          </a>
        </div>
        <div className="grid-layout">
          <Slide top>
            <div>
              <h2 className="headline-light font">About Rosa</h2>
              <div className="asterisk">
                <i className="fas fa-asterisk"></i>
              </div>
              <p className="para">
                Lorem Ipsum adalah contoh teks atau dummy dalam industri
                percetakan dan penataan huruf atau typesetting. Lorem Ipsum
                telah menjadi standar contoh teks sejak tahun, saat seorang
                tukang cetak.
              </p>
            </div>
          </Slide>

          <div>
            <Slide bottom>
              <div className="follow">
                <h2 className="headline-light font">Follow Along:</h2>
                <ul className="social-icons">
                  <a href="https://twitter.com" target="blank">
                    <li>
                      <i className="fab fa-twitter"></i>
                    </li>
                  </a>
                  <a href="https://facebook.com" target="blank">
                    <li>
                      <i className="fab fa-facebook-square"></i>
                    </li>
                  </a>
                  <a href="https://instagram.com" target="blank">
                    <li>
                      <i className="fab fa-instagram"></i>
                    </li>
                  </a>
                  <a href="https://linkedin.com" target="blank">
                    <li>
                      <i className="fab fa-linkedin-in"></i>
                    </li>
                  </a>
                  <a href="https://whatsapp.com" target="blank">
                    <li>
                      <i className="fab fa-whatsapp"></i>
                    </li>
                  </a>
                </ul>
              </div>

              <div>
                <h2 className="headline-light font">Our NewsLetter:</h2>
                <form action="" className="news-form">
                  <input
                    type="text"
                    className="news-letter-input"
                    placeholder="Email-id"
                  />
                  <button className="news-letter-btn" type="submit">
                    <i className="fas fa-envelope"></i>
                  </button>
                </form>
              </div>
            </Slide>
          </div>
        </div>
        <p className="copyright">
          Copyright &copy; www.Rosa.com. All rights reserved!
        </p>
      </footer>
    </div>
  );
}

export default Footer;
