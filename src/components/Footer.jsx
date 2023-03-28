import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaPhone,
  FaMailBulk,
  FaSearchLocation,
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
              galaxy.trips@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>About the company</h4>
          <p>
            Galaxy Travel is a leading provider of interstellar travel services,
            offering unparalleled access to the wonders of the cosmos. With a
            commitment to providing a safe, comfortable, and unforgettable
            experience, Galaxy Travel caters to travelers of all types - from
            seasoned space adventurers to curious stargazers.
          </p>
        </div>

        <div className="social">
          <FaFacebook
            size={30}
            style={{ color: "#ffffff", marginRight: "1rem" }}
          />
          <FaLinkedin
            size={30}
            style={{ color: "#ffffff", marginRight: "1rem" }}
          />
          <FaTwitter
            size={30}
            style={{ color: "#ffffff", marginRight: "1rem" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
