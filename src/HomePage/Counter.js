import React, { useState } from 'react';
import { Container, Col, Row, Card, Button, CardImg } from 'react-bootstrap';

import Image from 'react-bootstrap/Image';

let Counter = () => {
  let [state, setState] = useState({
    count: 0,
  });

  let increment = () => {
    setState({
      count: state.count + 1,
    });
  };

  let decrement = () => {
    setState({
      count: state.count - 1,
    });
  };

  return (
    <>
      <Container className="mt-3">
        <Row>
          <Col>
            <Card className="shadow-lg">
              <Card.Img src="./BTCcover.jpg"></Card.Img>

              <Card.Body>
                <p className="display-3"> {state.count} </p>

                <Button onClick={increment} variant="success" className="m-1">
                  {' '}
                  Plus 1
                </Button>
                <Button onClick={decrement} variant="warning" className="m-1">
                  {' '}
                  Minus 1
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Counter;
