import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-bootstrap/dist/react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import { Navbar, Nav, NavbarBrand } from 'react-bootstrap';

import Badge from 'react-bootstrap/Badge';

import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from './Form/Form';
import './App.css';

function App() {
  return (
    <div className="App">
      <>
        <Navbar bg="dark" expand="sm" variant="dark">
          <Container>
            <Navbar.Brand href="#home"> CRYPTO TRACKER</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/coins">
                Coin price information
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact group 1{' '}
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
      <div>
        <Routes>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/coins" element={<Coins />}></Route>
          <Route path="/contact" element={<Form />}></Route>
        </Routes>
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <div>
      <Container>
        <br></br>
        <h3> What even is cryptocurrency?</h3>
        <p>
          Like cash, a cryptocurrency can be used as a medium of exchange for
          any producy or service.
          <br></br>
          Cryprocurrency transactions are recorded on a public ledger known as a
          blockchain. To use cryptocurrency, an individual needs to create a
          "wallet address". There is no need for a
        </p>
        <br></br>

        <h3>Why is it called Crypto Currency?</h3>
        <p>
          Cryptography is the main point. Cryptography allows for secure hashing
          algorithms to ensure security when funds are moved between two
          different wallet addresses. Cryptocurrency solves the "double
          spending" problem as the blockchain can allow for tracking of funds at
          any given point of time.
        </p>


        <h3> So why should we even consider using it?</h3> 
        <br></br>

        <h4>It is permisionless</h4>
        <p> 
          No centralized entity can dictate your use with it. Whether it be creating 
          a new wallet address,  
        </p>

      </Container>
    </div>
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
