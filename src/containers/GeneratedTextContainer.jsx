import React from 'react';

//import child components
import ResponseDisplay from '../components/ResponseDisplay.jsx';

//hardcoded examples for testing purposes
const shortResponse = "Two fish swimming in ocean.";
const longResponse = "Marlin and Dory, the two main characters of Finding Nemo, swimming in front of some ocean plants."

const GeneratedTextContainer = () => {
  return (
    <div className='generatedTextContainer'>
      <ResponseDisplay key={'1'} responseType={'Brief Alt Text'} responseText={shortResponse} />
      <ResponseDisplay key={'2'} responseType={'Detailed Alt Text'} responseText={longResponse}/>
    </div>
  );
};

export default GeneratedTextContainer;
