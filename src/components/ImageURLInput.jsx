import React from 'react';

const isImageUrl = (url) => {
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
    if (!isImageUrl(url)) {
      setIsUrlError(true);
      setUrlError('not valid image url');
    } else {
      setIsUrlError(false);
      setUrlError('');
    }
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

      {isUrlError && imageURL && (
        <p
          style={{
            color: 'red',
            fontSize: '14px',
            fontWeight: 'bold',
          }}
        >
          {urlError}
        </p>
      )}
    </div>
  );
};

export default ImageURLInput;
