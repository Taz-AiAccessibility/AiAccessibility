import React from 'react';

const AltTextContextInput = ({ altTextContext, setAltTextContext }) => {

  const handleChange = (event) => {
    setAltTextContext(event.target.value)
  }

  return (
    <div id='altTextContextInput' className='inputBox'>
      <label htmlFor='altTextContext'>Target Audience:</label>
      <input type='text' id='altTextContext' name='altTextContext' placeholder='Optional' value={altTextContext} onChange={handleChange}></input>
      <p className='additionalText'>Who is your audience? Example: For Children, For Professionals. </p>
    </div>
  );
};

export default AltTextContextInput;
