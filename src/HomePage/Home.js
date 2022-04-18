import React from 'react';
import { Container } from 'react-bootstrap';
import AlertParaHome from './AlertParaHome';
import { useState } from 'react';
import Counter from './Counter';
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

          <br></br>

          <div className="why-called-crypto">
            <h3 className="home-h2">Why is it called Crypto Currency?</h3>
            <p className="home-p">
              Cryptography is the main point. Cryptography allows for secure
              hashing algorithms to ensure security when funds are moved between
              two different wallet addresses. Cryptocurrency solves the "double
              spending" problem as the blockchain can allow for tracking of
              funds at any given point of time.
            </p>
          </div>

          <h3 className="home-h3"> So why should we even consider using it?</h3>
          <br></br>

          <h4 className="home-h4">It is permisionless</h4>
          <p className="home-p">
            No centralized entity can dictate your use with it. Whether it be
            creating a new wallet address, or sending funds to another
            individual with a wallet.
          </p>
          <h4 className="home-h4">It is censorship resistant</h4>
          <p className="home-p">
            Layer 1 "blue chip" coins, such as BTC, ETH rely on a security a
            mechanisim called proof of work. This allows for a consesus within
            the network, this is used to broadcast new blocks and validate
            transactions. Computational power is spent by miners who use very
            powerful GPUs to solve mathematical problems.
          </p>

          <h4 className="home-h4">Cheap-fast payment methods</h4>

          <p className="home-p">Transactions can happen almost instantley.</p>
        </div>

        <div className="interaction-counter">
          <h3 className="home=h3">
            {' '}
            How much Bitcoin would you have bought in 2010 for a price of $0.01?
          </h3>
          <Counter />
        </div>
      </Container>
    </div>
  );
}

export default Home;
