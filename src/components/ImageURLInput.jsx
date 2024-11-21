import React from 'react';

const ImageURLInput = () => {
  return (
    <div id='imageURLInput' className='inputBox'>
      <label htmlFor='imageURL'>Image URL </label>
      <input type='text' id='imageURL' name='imageURL'></input>
    </div>
  );
};

export default ImageURLInput;
