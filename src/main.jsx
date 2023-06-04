import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './redux-2/App'
import { Provider } from 'react-redux'
import store from './redux-2'


import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
