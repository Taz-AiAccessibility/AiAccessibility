import React from 'react';
import { useState } from 'react';
//import child components
import ImageDisplay from '../components/ImageDisplay.jsx';
import ResponseDisplay from '../components/ResponseDisplay.jsx';

const ResponseDisplayContainer = ({imageURL, serverResponse}) => {

  //hardcoded examples for testing purposes
const shortResponse = "Two fish swimming in ocean.";
const longResponse = "Marlin and Dory, the two main characters of Finding Nemo, swimming in front of some ocean plants."

  return (
    <div className='responseDisplayContainer'>
      <ImageDisplay imageURL={imageURL}/>
      <ResponseDisplay key={'1'} responseType={'Brief Alt Text'} responseText={serverResponse.altText} />
      <ResponseDisplay key={'2'} responseType={'Detailed Alt Text'} responseText={serverResponse.details}/>
    </div>
  );
};

export default ResponseDisplayContainer;
