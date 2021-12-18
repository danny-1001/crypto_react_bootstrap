import React from "react";
// import { Row, Col } from "react-bootstrap";

const Coins = ({ name, image, symbol, price, volume, priceChange }) => {
  return (
      
    <div className="coin-container container p-5 ">
      <div className="coin-row row">
        <div className="coin row">
          <img className="img img-fluid" src={image} alt="crypto" />
          <h1 className="col">{name}</h1>
          <p className="coin-symbol text-transform-uppercase col">{symbol}</p>
          <p className="coin-price col ">${price}</p>
          <p className="coin-volume col ">${volume.toLocaleString()}</p>
          {priceChange < 0 ? (
            <p className="coin-percent_red col ">{priceChange.toFixed(2)}%</p>
          ) : (
            <p className="coin-percent_green col ">{priceChange.toFixed(2)}%</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Coins;
