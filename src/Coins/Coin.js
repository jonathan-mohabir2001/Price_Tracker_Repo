import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import '../App.css';

const Coin = ({
  id,
  name,
  image,
  symbol,
  price,
  volume,
  priceChange,
  marketcap,
}) => {
  return (
    <Card as={Link} to={"en/" + id} style={{ width: '60rem' }} className="bg-dark">
      <div className="coin-container">
        <div className="coin-row">
          <div className="coin">
            <img src={image} alt="Crypto" />
            <h1>{name}  </h1>
            <p className="coin-symbol">{symbol}</p>
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
    </Card>
  );
};

export default Coin;
