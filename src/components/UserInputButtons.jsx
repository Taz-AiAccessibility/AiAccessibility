import React from 'react';

const UserInputButtons = ({ handleSubmit, handleClearInputs}) => {

  return (
    <div className='userInputButtons'>
      <div>
        <button id='clearButton' className='button' onClick={handleClearInputs}>
          Clear Inputs
        </button>
      </div>
      <div>
        <button id='submitButton' className='button' onClick={ handleSubmit }>
          Submit
        </button>
      </div>
    </div>
  );
};

export default UserInputButtons;
