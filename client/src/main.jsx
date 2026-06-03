import React from 'react';
<<<<<<< HEAD
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
=======
import { createRoot } from 'react-dom/client';import './index.css';
import App from './App.jsx';
>>>>>>> 9fd1453f029e3449823ac9ad09b238362e52676e
import { persistor, store } from './redux/store.js';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

<<<<<<< HEAD
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
=======

createRoot(document.getElementById('root')).render(  
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
    </Provider>
>>>>>>> 9fd1453f029e3449823ac9ad09b238362e52676e
);
