import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import store from './Store.js';

store.dispatch({type : 'banking/credit', payload : 786});
console.log(store.getState());



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
