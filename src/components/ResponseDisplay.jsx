import React from 'react';

const ResponseDisplay = (props) => {
  return (
    <div className='responseDisplay'>
        <h2>{props.responseType}:</h2>
        <p>{props.responseText}</p>
    </div>
  );
};

export default ResponseDisplay;
