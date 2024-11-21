import React from 'react';

const ResponseDisplay = (props) => {
  return (
    <div className='responseDisplay'>
        <h1>{props.responseType}</h1>
        <p>{props.responseText}</p>
    </div>
  );
};

export default ResponseDisplay;
