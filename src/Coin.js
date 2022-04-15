import React from 'react';
import './App.css';
const Coin = ({
  name,
  image,
  symbol,
  price,
  volume,
  priceChange,
  marketcap,
}) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="Crypto" />
          <h1>{name} </h1>
          <p className="coin-symbol">{Symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price"> $ {price}</p>
          <p className="coin-volume">$ {volume.toLocaleString()}</p>
          {priceChange < 0 ? (
            <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
          ) : (
            <p className="coin-percent green">{priceChange.toFixed(2)}</p>
          )}
          <p className="coin-marketcap">
            Mkt Cap: $ {marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
