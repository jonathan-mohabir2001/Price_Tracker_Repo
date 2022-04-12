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
  return <></>;
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

function Form() {
  return (
    <div>
      <h1> Eliaf form component part for audince input </h1>
    </div>
  );
}

export default App;
