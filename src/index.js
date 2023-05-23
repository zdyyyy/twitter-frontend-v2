import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from '@containers/Login';
import App from '@containers/App';
import Register from '@containers/Register';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<App />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

