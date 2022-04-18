import React from 'react';

function AlertParaHome({closeButton}) {
  return (
    <div className="button-background">
      <div className="button-container">
        <h4 className='button-here-is'>Here is your description  </h4>
        <div className="button-body"></div>
        <p className='button-paragraph'>
          Like cash, a cryptocurrency can be used as a medium of exchange for
          any product or service.
          <br></br>
          <br></br>
          Cryptocurrency transactions are recorded on a public ledger known as a
          blockchain. To use cryptocurrency an individual needs to create a
          "wallet address".
          <br></br>
          <br></br>
           There is no need for a centralized entity to dictate
          anyone's participation within any given ecosystem.
        </p>
        <div className="button-footer">
          <button onClick={ () => closeButton(false)}> close me now! </button>
        </div>
      </div>
    </div>
  );
}

export default AlertParaHome;
