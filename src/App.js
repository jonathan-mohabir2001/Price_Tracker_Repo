import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './HomePage/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-bootstrap/dist/react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import { Navbar, Nav } from 'react-bootstrap';

import Container from 'react-bootstrap/Container';
import Form from './Form/Form';
import './App.css';
import About from './About';
import CoinInfo from './Coins/CoinInfo';
import NotFound from './NotFound';
import Coins from './Coins/Coins';


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
          <Route path="/coins/:lang/:id" element={<CoinInfo />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
