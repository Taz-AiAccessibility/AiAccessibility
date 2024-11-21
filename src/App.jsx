import { useState } from 'react';

//import top level components/containers that make up the page
import Header from './components/Header.jsx';
import UserInputsContainer from './containers/UserInputsContainer.jsx';
import ResponseDisplayContainer from './containers/ResponseDisplayContainer.jsx';

function App() {
  //user URL state needs to live at App level - it is updated by UserInputsContainer but value is accessed in ResponseDisplayContainer
  const [userURL, setUserURL] = useState();

  //userSubmitted state tracks whether or not a user has submitted their request - this determines whether or not the Response Display Container renders
  const [userSubmitted, setUserSubmitted] = useState(false);

  return (
    <div className='fullPage'>
      <Header />
      <UserInputsContainer />
      <ResponseDisplayContainer />
    </div>
  );
}

export default App;
