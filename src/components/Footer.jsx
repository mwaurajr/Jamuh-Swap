import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaPhone,
  FaMailBulk,
  FaSearchLocation,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaSearchLocation
              size={20}
              style={{ color: "#ffffff", marginRight: "2rem" }}
            />

            <div>
              <p>Haile Selasie St.</p>
              <h4>Nairobi, Kenya</h4>
            </div>
          </div>

          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#ffffff", marginRight: "2rem" }}
              />{" "}
              +254 790 855 437
            </h4>
          </div>

          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#ffffff", marginRight: "2rem" }}
              />{" "}
              bookswaps23@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>About the company</h4>
          <p>
            P-Swap is a free online platform that allows you to exchange books
            with other users. Our goal is to create a community of book lovers
            who can share their favorite books with one another and discover new
            books to read.
            <br />
            Happy swapping!
          </p>
        </div>

        <div className="social">
          <a href="https://m.facebook.com/frankiline.mwaura">
            <FaFacebook
              size={30}
              style={{ color: "#ffffff", marginRight: "1rem" }}
            />
          </a>
          <a href="https://twitter.com/_Jamhuri">
            <FaTwitter
              size={30}
              style={{ color: "#ffffff", marginRight: "1rem" }}
            />
          </a>
          <a href="https://github.com/mwaurajr">
            <FaGithub
              size={30}
              style={{ color: "#ffffff", marginRight: "1rem" }}
            />
          </a>
          <span className="copyright">© P-Swap, 2023</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
