import { useState } from 'react';
// axios

//import top level components/containers that make up the page
import Header from './components/Header.jsx';
import UserInputsContainer from './containers/UserInputsContainer.jsx';
import ResponseDisplayContainer from './containers/ResponseDisplayContainer.jsx';

function App() {
  //hardcoded example image for testing
  const exampleImage = 'https://lumiere-a.akamaihd.net/v1/images/p_findingnemo_19752_05271d3f.jpeg'

  const [imageURL, setImageURL] = useState(exampleImage);
  const [serverResponse, setServerResponse] = useState({
    simple: 'default',
    complex: 'default',
  });
  //userSubmitted state tracks whether or not a user has submitted their request - this determines whether or not the Response Display Container renders
  const [userSubmitted, setUserSubmitted] = useState(false);

  return (
    <div className='fullPage'>
      <Header />
      <UserInputsContainer
        imageURL={imageURL}
        setImageURL={setImageURL}
        setServerResponse={setServerResponse}
        setUserSubmitted={setUserSubmitted}
      />
      {userSubmitted && <ResponseDisplayContainer
        serverResponse={serverResponse}
        imageURL={imageURL}
      />}
    </div>
  );
}

export default App;
