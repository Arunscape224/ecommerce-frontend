import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Routes from './routes';
import { Provider } from 'react-redux'
import { store } from './store'
import 'bootstrap/dist/css/bootstrap.min.css';
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      
        <Routes />
      
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);