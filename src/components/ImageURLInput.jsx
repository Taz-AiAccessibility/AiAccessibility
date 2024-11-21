import React from 'react';

const ImageURLInput = () => {

  //handleChange

  return (
    <div id='imageURLInput' className='inputBox'>
      <label htmlFor='imageURL'>Image URL </label>
      <input type='text' id='imageURL' name='imageURL'></input>
    </div>
  );
};

export default ImageURLInput;



//  const handleChange = (event) => {
//     setValue(event.target.value); // Update state with the new input value
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={value} // Bind input value to state
//         onChange={handleChange} // Call handleChange when input changes
//       />
//       <p>Current Value: {value}</p>
//     </div>
//   );
// }
