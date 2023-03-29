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
              bookswaps23@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>About the company</h4>
          <p>
BookSwap is a free online platform that allows you to exchange books with other users. Our goal is to create a community of book lovers who can share their favorite books with one another and discover new books to read.

How it works:

1. List a book: If you have a book that you would like to swap, simply list it on BookSwap. You can browse our database to see if anyone is interested in your book, or you can wait for someone to request it.

2. Request a book: If you see a book that you would like to read, you can request it from the user who has listed it. Once the other user approves your request, you will need to provide your shipping address.

3. Ship the books: Both users are responsible for shipping their books to each other. We recommend using a trackable shipping method to ensure that the books are delivered safely and on time.

4. Receive the books: Once the books have been shipped, it's just a matter of waiting for them to arrive. Once you receive your new book, you can start reading and enjoying it!

BookSwap is a great way to meet new people and discover new books. We hope that you enjoy using our platform and that it helps you build your own personal library of books that you love. If you have any questions or feedback, please don't hesitate to contact us.

Happy swapping!
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
