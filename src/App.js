import Header from './components/Header/Header';
import Main from './components/Main';
import Form from './components/Form';
import { useState } from 'react'

import './App.css';

function App() {
  const [logIn , setLogIn] = useState(false);

  const handleLogIn = () => {
    setLogIn(!logIn);
  }



  return (
    <div className="app">
      <Header onLogIn={handleLogIn} />
      {!logIn && <Main onLogIn={handleLogIn}/>}
      {logIn && <Form />}
    </div>
  );
}

export default App;
