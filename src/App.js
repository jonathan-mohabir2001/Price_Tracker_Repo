import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './HomePage/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-bootstrap/dist/react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

import { Navbar, Nav, NavbarBrand } from 'react-bootstrap';

import Container from 'react-bootstrap/Container';
import Form from './Form/Form';
import './App.css';
import About from './About';
import Coin from './Coin';

function App() {
  return (
    <div className="App">
      <>
        <Navbar bg="dark" expand="sm" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">
              {' '}
              CRYPTO TRACKER
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" className="nav-btn">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/coins" className="nav-btn">
                Coins
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="nav-btn">
                About Us{' '}
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="nav-contact-btn">
                Contact Us{' '}
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/coins" element={<Coins />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Form />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </div>
  );
}

function NotFound() {
  return (
    <div>
      <h4> ERROR, page not found </h4>
    </div>
  );
}
//https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=50&page=1&sparkline=false
function Coins() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=50&page=1&sparkline=false'
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => alert('error, not working '));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text"> Search a coin</h1>
        <form>
          <input
            className="coin-input"
            type="text"
            placeholder="search"
            onChange={handleChange}
          />
        </form>
      </div>

      {filteredCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume}
          />
        );
      })}
    </div>
  );
}

export default App;
