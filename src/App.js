import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from './Form/Form';

function App() {
  return (
    <div>
      <Link to="/"> Home Page</Link>

      {'   |    '}

      <Link to="/coins">Coin information</Link>

      {'   |    '}

      <Link to="/contact">Form</Link>
      {'   |    '}

   
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/coins" element={<Coins />}></Route>
          <Route path="/contact" element={<Form />}></Route>
         
        </Routes>
      </Container>
    </div>
  );
}

function HomePage() {
  return (
    <Container>
      <div className="component-placeholder">
        <Container>
        <h2>
          <Badge bg="secondary">What even is a cryptocurrency</Badge>
        </h2>
        </Container>

        <br></br>
        <div className="container">
          <h3>Defining... </h3>
          <p>
            Like cash, a cryptocurrency can be used as a medium of exchange for
            any product or service.
            <br></br>
            cryptocurrency transactions are recorded onto a public ledger known
            as a blockchain.
          </p>
          <br></br>
          <h3> How do we use it? </h3>
          <p>
            To use a cryptocurrency an individual needs a wallet address that is
            accessible only through an internet connection and there is no need
            to sign up for this service with an intermediary.
          </p>
          <br></br>

          <h3> Why is it called cryptocurrency? </h3>
          <br></br>

          <p>
            Cryptography is the main point, using secure hashing alogorthims to
            ensure security as well making sure funds aren't spent more than
            once. The blockchain will record and keep the transactions public
            and fully transparent.
          </p>
          <br></br>

          <h3> Why even use it?</h3>
          <br></br>
          <h4> Permisonless system</h4>
          <p>
            There is no centralized entity that can stop you from entering nor
            leaving the ecosystem.
          </p>
          <h4>Censorship-Resistant</h4>
          <p>
            Layer 1 technologies that rely on proof of work, or proof of stake
            secuirty mechnaisms ensure their security through these two methods.
            For example, the Bitcoin network is the worlds most secure open
            permisonless network.
          </p>
          <h4> Cheap fast payment methods</h4>
          <p>
            Transactions can happen almost instantley without needing to rely on
            third party services like a bank, two wallet addresses can exchange
            the cryptocurrency through simply sending and receiving the
            specified amount. A fee collected on this transaction on Ethereum
            for example is called "gas fee", this gas fee is a incentive
            mechnaism for miners. These miners use their computing power or
            staking capabilites to confirm new transactions to the native
            blockchain.
          </p>
        </div>
      </div>
    </Container>
  );
}

function Call() {
  return (
    <div>
      <h1> ZACK AXIOS API CALL to coingecko api </h1>
    </div>
  );
}

function Coins() {
  return (
    <div>
      <h1> JOYDEEP DISPLAYING COINS price data </h1>
    </div>
  );
}

export default App;
