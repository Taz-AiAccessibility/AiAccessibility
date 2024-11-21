import React from 'react';

//import child components
import ImageDisplay from '../components/ImageDisplay.jsx';
import GeneratedTextContainer from './GeneratedTextContainer.jsx';

const ResponseDisplayContainer = () => {
  return (
    <div className='responseDisplayContainer'>
      <ImageDisplay />
      <GeneratedTextContainer />
    </div>
  );
};

export default ResponseDisplayContainer;
