import React from "react";
import { Link } from "react-router-dom";
import "./PricingCard.css";

function PricingCard() {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
          <h3>-Basic-</h3>
          <span className="bar">
            <p className="btc">1 BTC</p>
            <p>3days</p>
            <p>Views</p>
            <p>Featured</p>
            <p>Private Quaters</p>
          </span>
          <Link to="/contact" className="home-btn">
            Book
          </Link>
        </div>

        <div className="card">
          <h3>-Suite-</h3>
          <span className="bar">
            <p className="btc">1 BTC</p>
            <p>3days</p>
            <p>Views</p>
            <p>Featured</p>
            <p>Private Quaters</p>
          </span>
          <Link to="/contact" className="home-btn">
            Book
          </Link>
        </div>

        <div className="card">
          <h3>-Executive-</h3>
          <span className="bar">
            <p className="btc">1 BTC</p>
            <p>3days</p>
            <p>Views</p>
            <p>Featured</p>
            <p>Private Quaters</p>
          </span>
          <Link to="/contact" className="home-btn">
            Book 
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PricingCard;
