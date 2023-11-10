import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';

// React 16
const root = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
  );
  
// React 18
  // const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
