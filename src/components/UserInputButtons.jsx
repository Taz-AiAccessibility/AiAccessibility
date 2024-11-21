import React from 'react';

const UserInputButtons = () => {
  return (
    <div className='userInputButtons'>
      <div>
        <button id='clearButton' className='button'>
          Clear Inputs
        </button>
      </div>
      <div>
        <button id='submitButton' className='button'>
          Submit
        </button>
      </div>
    </div>
  );
};

export default UserInputButtons;
