import React, { useState, Fragment } from 'react';
import { StyleSheet, css } from 'aphrodite';
import WithLogging from '../HOC/WithLogging';

function Login() {
  const [selectedInput, setSelectedInput] = useState(null);

  const handleLabelClick = (inputId) => {
    setSelectedInput(inputId);
  };

  return (
    <Fragment>
      <div className={css(styles.AppBody)}>
        <p className={css(styles.AppBodyTitle)} >Login to access the full dashboard</p>
        <form className={css(styles.AppBodyForm)} >
          <label className={css(styles.AppBodyLabel)} htmlFor='email' onClick={() => handleLabelClick('email')}>Email</label>
          <input
            className={`${css(styles.AppBodyInput)} ${selectedInput === 'email' ? 'selected' : ''}`}
            type="email"
            id='email'
            name="email"
          />
          <label className={css(styles.AppBodyLabel)} htmlFor='password' onClick={() => handleLabelClick('password')}>Password</label>
          <input
            className={`${css(styles.AppBodyInput)} ${selectedInput === 'password' ? 'selected' : ''}`}
            type="password"
            id='password'
            name="password"
          />
          <button className={css(styles.AppBodyButton)} >OK</button>
        </form>
      </div>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  AppBody: {
    fontFamily: 'Helvetica, sans-serif',
    fontSize: '1rem',    
  },
  AppBodyTitle: {
    fontFamily: 'Lora, serif',
    fontSize: '1rem',
    color: '#e1003c',
  },  
  AppBodyForm: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '0.5rem',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      alignItems: 'flex-start',    },
  },
  AppBodyLabel: {
    fontFamily: 'Lora, serif',
    fontSize: '1rem',
    color: '#000000',
  },
  AppBodyInput: {
    fontFamily: 'Lora, serif',
    fontSize: '1rem',
    color: '#000000',
    border: '3px solid gray',
    borderRadius: '0.5em',
    padding: '0.5em',
  },  
  AppBodyButton: {
    fontFamily: 'Lora, serif',
    fontSize: '1.2rem',
    color: '#000000',
    border: '3px solid #e1003c',
    borderRadius: '8px',
    padding: '4px',
    backgroundColor: '#e1003c',
    cursor: 'pointer',
    ':hover': {
      color: '#ffffff',
    },
  },
})

const LoginWithLogging = WithLogging(Login);

export { Login, LoginWithLogging };
