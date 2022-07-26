import { useState } from 'react'

import Header from './components/Header/Header';
import Main from './components/Main';
import Form from './components/Form';
import Menu from './components/Menu';


import './App.css';

function App() {
  const [mainState , setMainState] = useState(true);
  const [logIn , setLogIn] = useState(false);
  const [userValidation , setValidation] = useState(false);

  const handleLogIn = () => {
    setLogIn(!logIn);
    setMainState(!mainState);
  }

  const handleValidation = () => {
    console.log('Validated');
    setLogIn(false);
    setMainState(false);
    setValidation(true);
  }



  return (
    <div className="root">
      {!userValidation && <Header onLogIn={handleLogIn} onLoginState={logIn} />}
      {userValidation && <Header onLogIn={handleLogIn} onLoginState={logIn} />}
      {mainState && <Main onLogIn={handleLogIn} />}
      {logIn && <Form onValidation={handleValidation} />}
      {userValidation && <Menu />}
    </div>
  );
}

export default App;
