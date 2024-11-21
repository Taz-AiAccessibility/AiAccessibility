import React from 'react';

const ImageDisplay = ({ imageURL }) => {
  console.log(imageURL)

  return (
    <div className='imageDisplay'>
      <img src={imageURL} alt='Image the user requested alt text for'></img>
    </div>
  );
};

export default ImageDisplay;
