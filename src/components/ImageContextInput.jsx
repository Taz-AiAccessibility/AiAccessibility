import React from 'react';

const ImageContextInput = ({ imageContext, setImageContext } ) => {
  const handleChange = (event) => {
    setImageContext(event.target.value)
  }

  return (
    <div id='imageContextInput' className='inputBox'>
      <label htmlFor='imageContext'>Image Context </label>
      <input type='text' id='imageContext' name='imageContext' value={imageContext} onChange={handleChange}></input>
      <p>Optional: provide additional information about the image. For example, names of people or places, dates, etc.</p>
    </div>
  );
};

export default ImageContextInput;
