import React from 'react';
import { useState } from 'react';
//import child components
import ImageURLInput from '../components/ImageURLInput.jsx';
import ImageContextInput from '../components/ImageContextInput.jsx';
import AltTextContextInput from '../components/AltTextContextInput.jsx';
import UserInputButtons from '../components/UserInputButtons.jsx';

const UserInputsContainer = ({
  imageURL,
  setImageURL,
  setServerResponse,
  setUserSubmitted,
}) => {
  //input-specific state
  const [imageContext, setImageContext] = useState('');
  const [altTextContext, setAltTextContext] = useState('');

  //handleClearInputs
  const handleClearInputs = () => {
    setImageURL('');
    setImageContext('');
    setAltTextContext('');
    setUserSubmitted(false)
  };

  //define fetch method
  const handleSubmit = async () => {
    try {
      
      const response = await fetch('http://localhost:3000/alt-text', {
        method: 'POST', // HTTP Method
        headers: {
          'Content-Type': 'application/json', // Inform server about JSON payload
        },
        body: JSON.stringify({
          userUrl: imageURL,
          imageContext: imageContext,
          textContext: altTextContext,
        }), // Convert data object to JSON
      });

      const data = await response.json();
      setServerResponse(data);
      setUserSubmitted(true);
    } catch {
      alert('Error fetching altText recommendation from handleSubmit');
    }

  };

  return (
    <div className='userInputsContainer'>
      <ImageURLInput setImageURL={setImageURL} imageURL={imageURL} />
      <ImageContextInput
        imageContext={imageContext}
        setImageContext={setImageContext}
      />
      <AltTextContextInput
        altTextContext={altTextContext}
        setAltTextContext={setAltTextContext}
      />
      <UserInputButtons
        handleSubmit={handleSubmit}
        handleClearInputs={handleClearInputs}
      />
    </div>
  );
};

export default UserInputsContainer;
