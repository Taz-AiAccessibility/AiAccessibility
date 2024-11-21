import React from 'react';
import { useState } from 'react';

//import child components
import ImageDisplay from '../components/ImageDisplay.jsx';
import ResponseDisplay from '../components/ResponseDisplay.jsx';

const ResponseDisplayContainer = ({imageURL, serverResponse, userSubmitted}) => {

  if(userSubmitted){
  return (
    <div className='responseDisplayContainer'>
      <ImageDisplay imageURL={imageURL}/>
      <ResponseDisplay key={'1'} responseType={'Brief Alt Text'} responseText={serverResponse.simple} />
      <ResponseDisplay key={'2'} responseType={'Detailed Alt Text'} responseText={serverResponse.complex}/>
    </div>
  );
}
else return;
};

export default ResponseDisplayContainer;
