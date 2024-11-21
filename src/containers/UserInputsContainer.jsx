import React from 'react';
import { useState } from 'react';
//import child components
import ImageURLInput from '../components/ImageURLInput.jsx';
import ImageContextInput from '../components/ImageContextInput.jsx';
import AltTextContextInput from '../components/AltTextContextInput.jsx';
import UserInputButtons from '../components/UserInputButtons.jsx';

const UserInputsContainer = ({imageURL, setImageURL, setServerResponse, setUserSubmitted}) => {
  //input-specific state
  const [imageContext, setImageContext] = useState('');
  const [altTextContext, setAltTextContext] = useState('');
  
  //define fetch method 
  const handleSubmit = () => {
    //fetch request
    //.then set Server Response
    //set user submitted to true
    const fakeResult = { altText: 'test', details: 'detailed test' };
    
    setServerResponse(fakeResult);
  }

  return (
    <div className='userInputsContainer'>
      <ImageURLInput setImageURL={setImageURL} />
      <ImageContextInput setImageContext={setImageContext}/>
      <AltTextContextInput setAltTextContext={setAltTextContext} />
      <UserInputButtons handleSubmit={handleSubmit}/>
    </div>
  );
};

export default UserInputsContainer;
