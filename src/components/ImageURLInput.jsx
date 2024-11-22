import React from 'react';

const isImageUrl = async (url) => {
  const imageRegex = /(\.(png|jpe?g|gif|svg))(\?.*)?/i;
  return imageRegex.test(url);
};

const ImageURLInput = ({
  imageURL,
  setImageURL,
  isUrlError,
  setIsUrlError,
  urlError,
  setUrlError,
}) => {
  const handleChange = async (event) => {
    const url = event.target.value;
    // could add url validation
    // if (!isImageUrl(url)) {
    //   setIsUrlError(true);
    //   setUrlError('not valid image url');
    // }
    // setIsUrlError(false);
    // setUrlError('');

    setImageURL(url);
  };

  return (
    <div id='imageURLInput' className='inputBox'>
      <label htmlFor='imageURL'>Image URL: </label>
      <input
        type='text'
        id='imageURL'
        name='imageURL'
        value={imageURL}
        onChange={handleChange}
      ></input>

      {/* {isUrlError && <p>{urlError}</p>} */}
    </div>
  );
};

export default ImageURLInput;

// const isValidUrlWithImage = async (url) => {
//   try {
//     // Check if URL is valid
//     // replace with regex
//     //new URL(url);

//     const isValid = await isImageUrl(url);

//     // Fetch the URL with HEAD method to avoid downloading the content

//     if (!isValid) {
//       //update error state
//       // error boolean
//       setIsUrlError(true);
//       setUrlError('url is not an image');
//       console.log('url is not an image');
//       return;
//     }

//     const response = await fetch(url);

//     if (!response.ok) {
//       // deal with state/css
//       // update error state
//       // error boolean
//       setIsUrlError(true);
//       setUrlError('url is not a valid path');
//       //console.error('url is not a valid path');
//       return;
//     }

//     setIsUrlError(false);
//     setUrlError('');
//     return;

//     // clear error boolean and state
//   } catch (error) {
//     // setIsUrlError(true);
//     // setUrlError('url is not a valid path');
//     // console.error('url is not a valid path');
//     console.error('Invalid URL or inaccessible resource:', error.message);
//     return;
//   }
// }
