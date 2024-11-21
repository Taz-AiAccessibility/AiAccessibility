import React from 'react';

//import child components
import ImageURLInput from '../components/ImageURLInput.jsx';
import ImageContextInput from '../components/ImageContextInput.jsx';
import AltTextContextInput from '../components/AltTextContextInput.jsx';
import UserInputButtons from '../components/UserInputButtons.jsx';

const UserInputsContainer = () => {
  return (
    <div className='userInputsContainer'>
      <ImageURLInput />
      <ImageContextInput />
      <AltTextContextInput />
      <UserInputButtons />
    </div>
  );
};

export default UserInputsContainer;
