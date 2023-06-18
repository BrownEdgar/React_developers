import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import {store, persistor} from './app/store'
import { PersistGate } from 'redux-persist/integration/react'
import App from './AppTest'


import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={<h2>Loading...</h2>}>
      <App />
    </PersistGate>
  </Provider>
)
