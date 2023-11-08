import React from 'react'
import ReactDOM from 'react-dom/client'
import './globalStyles.css'; 

import { RouterProvider } from 'react-router-dom'
import router from './controllers/routes/index'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/Store';


ReactDOM.createRoot(document.getElementById('root')).render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <GoogleOAuthProvider clientId='750484611062-09o3bdfqnik8k67hsqv4rrj4npvs6n77.apps.googleusercontent.com'>
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>,
      </GoogleOAuthProvider>
    </Provider>
  </PersistGate>
)
