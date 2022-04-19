import React from 'react';
import { Carousel } from 'react-bootstrap';
const CarouselHome = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={9000}>
          <img
            className="bitcoin-image-1"
            src="https://c4.wallpaperflare.com/wallpaper/434/131/822/money-bitcoin-coin-cryptocurrency-wallpaper-preview.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="bitcoin-slide-1">
              First successful, peer-to-peer currency
            </h3>
            <p>Bitcoin, created by the anonymous Satoshi Nakomoto</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="alt-coins-image-2"
            src="https://c1.wallpaperflare.com/preview/383/412/960/cryptocurrency-finance-be-dom.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Alt-Coins / "Bitcoin alternatives"</h3>
            <p>
              Years after Bitcoin appears on the scene , more coins are created,
              and we are now off to the races.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="eth-coin-image-3"
            src="https://c0.wallpaperflare.com/preview/293/363/732/blockchain-coin-commerce-cryptocurrency.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Ethereum </h3>
            <p>
              Second generation blockchain, capable of programming smart
              contracts for real life implications.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselHome;
