import { useState } from 'react'

import Header from './components/Layout/Header';
import HeaderLogIn from './components/Layout/HeaderLogIn';
import Main from './components/Layout/Main';
import Form from './components/Layout/Form';
import Menu from './components/Layout/Menu';


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
    setLogIn(false);
    setMainState(false);
    setValidation(true);
  }

  const handleLogOut = () => {
    setLogIn(false);
    setMainState(true);
    setValidation(false);
  }

  return (
    <div className="root">
      {!userValidation ? <Header onLogIn={handleLogIn} onLoginState={logIn} /> : <HeaderLogIn onLogOut={handleLogOut} />}
      {mainState && <Main onLogIn={handleLogIn} />}
      {logIn && <Form onValidation={handleValidation} />}
      {userValidation && <Menu />}
    </div>
  );
}

export default App;
