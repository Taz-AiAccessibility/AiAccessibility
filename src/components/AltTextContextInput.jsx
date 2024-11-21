import React from 'react';

const AltTextContextInput = ({ altTextContext, setAltTextContext }) => {

  const handleChange = (event) => {
    setAltTextContext(event.target.value)
  }

  return (
    <div id='altTextContextInput' className='inputBox'>
      <label htmlFor='altTextContext'>Alt Text Context </label>
      <input type='text' id='altTextContext' name='altTextContext' value={altTextContext} onChange={handleChange}></input>
      <p>Optional: provide guidance for the alt text generation. For example: vocabulary level to use, intended audience, etc. </p>
    </div>
  );
};

export default AltTextContextInput;
