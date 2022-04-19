import React from 'react';
import { Container } from 'react-bootstrap';
import AlertParaHome from './AlertParaHome';
import { useState } from 'react';
import CarouselHome from './CarouselHome';
function Home() {
  const [openButton, setOpenButton] = useState(false);

  return (
    <div className="jonDiv">
      <Container>
        <div className="home-main">
          <h1 className="home-title">Cryptocurrency Tracker</h1>

          <div className="home-first-paragraph">
            <span>
              <h3 className="home-h1"> What even is a cryptocurrency?</h3>
              <button
                className="openButtonBtn"
                onClick={() => {
                  setOpenButton(true);
                }}
              >
                {' '}
                Click me to find out!
              </button>
              {openButton && <AlertParaHome closeButton={setOpenButton} />}
            </span>
          </div>
        </div>

        <div className="carousel-section">
          <CarouselHome />
        </div>

        <div className="main-description-1">
          <h3> So why, is it called Cryptocurrency?</h3>

          <p>
            Cryptography is the main point. Cryptography allows for secure
            communication in the presence of an adversary. Secure hashing
            algorithims are utilized to secure any transaction that happens on chain. 
            <br></br>
            Cryptocurrency solves the "double spending" problem as the
            blockchain can allow for tracking of funds at any given point of
            time.
          </p>
        </div>

        <div className="main-description-2">
          <h3 className="desc-title-1">Why should we consider using it?</h3>
          <br></br>

          <h4 className="desc-title-2"> It is permisonless </h4>
          <p>
            No centralized entity can dictate your use with it. Whether it be
            creating a new wallet address, or sending funds to another
            individual with a wallet.
          </p>

          <h4 className="desc-title-3">It is censorship resistant</h4>

          <p>
            Layer 1 "blue-chip" coins like BTC and ETH rely on a security
            mechanisim called proof of work. This allows for consensus within
            the network, this is used to broadcast new blocks and validate
            transactions.
            <br></br>
            Computational power is spent by miners who use very powerful GPUs to
            solve mathematical problems.
          </p>

          <h4 className="desc-title-4">
            Cheap and fast payment methods / Money transfers
          </h4>

          <p>Transactions happen almost instantly</p>
        </div>
      </Container>
    </div>
  );
}

export default Home;
