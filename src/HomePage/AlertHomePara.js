import React from 'react';

import { Alert } from 'react-bootstrap';
import { useState } from 'react';

function AlertHomePara() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <Alert show={show} variant="info">
        <Alert.Heading> Definition... </Alert.Heading>

        <p>
          Like cash, a cryptocurrency can be used as a medium of exchange for
          any product or service.
          <br></br>
          Cryptocurrency transactions are recorded on a public ledger known as a
          blockchain. To use cryptocurrency, an individual needs to create a
          "wallet address". There is no need for a centralized entity to dictate
          anyone's participation within any given ecosystem.
        </p>
      </Alert>

      <div>

      <Button onClick={() => setShow(false)} variant="outline-success">
            Close me y'all!
          </Button>

      </div>

    </div>
  );
}

export default AlertHomePara;
