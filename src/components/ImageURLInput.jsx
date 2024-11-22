import React from 'react';

const ImageURLInput = ({imageURL, setImageURL}) => {

  const handleChange = (event) => {
    // could add url validation
    setImageURL(event.target.value);
  }

  return (
    <div id='imageURLInput' className='inputBox'>
      <label className='URLLabel' htmlFor='imageURL'>Image URL: </label>
      <input type='text' id='imageURL' name='imageURL' value={imageURL} onChange={handleChange}></input>
      <p className='additionalText'>Paste image URL.</p>
    </div>
  );
};

export default ImageURLInput;



// const isValidUrlWithImage = async (url) => {
//   try {
//     // Check if URL is valid
//     new URL(url); // Throws error if URL is invalid

//     // Fetch the URL with HEAD method to avoid downloading the content
//     const response = await fetch(url, { method: "HEAD" });

//     if (!response.ok) {
//       console.error(`Error: Received status ${response.status}`);
//       return false;
//     }

//     // Check content type
//     const contentType = response.headers.get("Content-Type");
//     if (contentType && contentType.startsWith("image/")) {
//       console.log("Valid image URL");
//       return true;
//     } else {
//       console.error("URL is valid but not an image");
//       return false;
//     }
//   } catch (error) {
//     console.error("Invalid URL or inaccessible resource:", error.message);
//     return false;
//   }
// };