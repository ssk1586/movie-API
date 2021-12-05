import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app/App';
import { Provider } from 'react-redux';
import { store } from '../src/redux/store/store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist';

import './index.css';


let persistor = persistStore(store)

ReactDOM.render(

  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>,
  
  document.getElementById('root')

);
