import React, { useState } from 'react';
import './Form/Form.css';
import FormLayout from './Form/FormLayout';
import FormSuccess from './Form/FormSuccess';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        {!isSubmitted ? (
          <FormLayout submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;