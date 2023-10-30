import React, { useState } from 'react';
import logo from '../assets/holberton-logo.jpg';
import './App.css';
import { getFooterCopy, getFullYear } from '..utils/utils';

function App() {
  const [selectedInput, setSelectedInput] = useState(null);

  const handleLabelClick = (inputId) => {
    setSelectedInput(inputId);
  };

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <form>
          <label htmlFor='email' onClick={() => handleLabelClick('email')}>Email</label>
          <input
            type="email"
            id='email'
            name="email"
            className={selectedInput === 'email' ? 'selected' : ''} />
          <label htmlFor='password' onClick={() => handleLabelClick('password')}>Password</label>
          <input
            type="password"
            id='password'
            name="password"
            className={selectedInput === 'password' ? 'selected' : ''} />
          <button>OK</button>
        </form>
      </div>
      <div className="App-footer">Copyright {getFullYear()} - {getFooterCopy()}</div>
    </div>
  );
}

export default App;
