import React from 'react';

const ImageDisplay = () => {
  //hardcoded example image for testing purposes
  const exampleImage =
    'https://lumiere-a.akamaihd.net/v1/images/p_findingnemo_19752_05271d3f.jpeg';

  return (
    <div className='imageDisplay'>
      <img src={exampleImage} alt='Image the user requested alt text for'></img>
    </div>
  );
};

export default ImageDisplay;
