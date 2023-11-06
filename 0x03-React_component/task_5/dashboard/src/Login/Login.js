import React, { useState, Fragment } from 'react';
import './Login.css';
import WithLogging from '../HOC/WithLogging';

function Login() {
  const [selectedInput, setSelectedInput] = useState(null);

  const handleLabelClick = (inputId) => {
    setSelectedInput(inputId);
  };

  return (
    <Fragment>
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
    </Fragment>
  );
}

const LoginWithLogging = WithLogging(Login);

export { Login, LoginWithLogging };
