import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './HomePage/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-bootstrap/dist/react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

import { Navbar, Nav, NavbarBrand, Button } from 'react-bootstrap';

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
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/coins" element={<Coins />}></Route>
          <Route path="/contact" element={<Form />}></Route>
        </Routes>
      </div>
    </div>
  );
}



//https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=30&page=1&sparkline=false
function Call() {}

function Coins() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&'
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1> JOYDEEP DISPLAYING COINS price data </h1>
    </div>
  );
}

export default App;
