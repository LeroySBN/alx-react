import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';

const root = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
  );
  
  // const root = ReactDOM.createRoot(document.getElementById('root'));
  // root.render(
  //   <React.StrictMode>
  //     <App />
  //   </React.StrictMode>
  // );
  