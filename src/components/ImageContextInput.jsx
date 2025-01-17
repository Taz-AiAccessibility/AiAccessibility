import React from 'react';

const ImageContextInput = ({ imageContext, setImageContext } ) => {
  const handleChange = (event) => {
    setImageContext(event.target.value)
  }

  return (
    <div id='imageContextInput' className='inputBox'>
      <label htmlFor='imageContext'>Image Details: </label>
      <input type='text' id='imageContext' name='imageContext' placeholder='Optional' value={imageContext} onChange={handleChange}></input>
      <p className='additionalText'>Additional information about the image. For example, names of people or places, dates, etc.</p>
    </div>
  );
};

export default ImageContextInput;
