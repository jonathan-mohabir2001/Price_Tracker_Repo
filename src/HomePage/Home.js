import React from 'react'
import { Container } from 'react-bootstrap'

function Home() {
  return (
    <div className='jonDiv'>
      <Container>
        <div className='home-main'>
          <h1 className='home-title'>Cryptocurrency Tracker</h1>
          <h3 className='home-h3'> What even is cryptocurrency?</h3>
          <p className='home-p'>
            Like cash, a cryptocurrency can be used as a medium of exchange for
            any producy or service.
            <br></br>
            Cryprocurrency transactions are recorded on a public ledger known as a
            blockchain. To use cryptocurrency, an individual needs to create a
            "wallet address". There is no need for a
          </p>
          <br></br>

          <h3 className='home-h3'>Why is it called Crypto Currency?</h3>
          <p className='home-p'>
            Cryptography is the main point. Cryptography allows for secure hashing
            algorithms to ensure security when funds are moved between two
            different wallet addresses. Cryptocurrency solves the "double
            spending" problem as the blockchain can allow for tracking of funds at
            any given point of time.
          </p>

          <h3 className='home-h3'> So why should we even consider using it?</h3>
          <br></br>

          <h4>It is permisionless</h4>
          <p className='home-p'>
            No centralized entity can dictate your use with it. Whether it be
            creating a new wallet address,
          </p>
        </div>
      </Container>

    </div>
  )
}

export default Home