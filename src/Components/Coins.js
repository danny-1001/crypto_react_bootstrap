import React from "react";

const Coins = ({ name, image, symbol, price, volume, priceChange }) => {
  return (
    <div className="coin-container container p-5 ">
      <div className="coin-row row">
        <div className="coin row">
          <img className="img img-fluid " src={image} alt="crypto currency symbol" />
          <h1 className="coin-name col-md  ">{name}</h1>
          <p className="coin-symbol col-md ">{symbol}</p>
          <p className="coin-price col-md ">${price.toLocaleString()}</p>
          <p className="coin-volume col-md  ">${volume.toLocaleString()}</p>
          {priceChange < 0 ? (
            <p className="coin_percent coin-percent_red col-md  ">
              {priceChange.toFixed(2)}%
            </p>
          ) : (
            <p className="coin_percent coin-percent_green col-md ">
              {priceChange.toFixed(2)}%
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Coins;
