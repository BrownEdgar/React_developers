import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './app/store';
// import App from './App';
import App2 from './App2';

ReactDOM.render(
  <Provider store={store}>
    {/* <App/> */}
    <App2 />
  </Provider>,
  document.getElementById('root')
);



