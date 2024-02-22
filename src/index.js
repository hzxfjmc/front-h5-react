import React, {  Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'lib-flexible'
import App from './app'
import { HashRouter } from 'react-router-dom';
import {renderRoutes} from 'react-router-config';
import routes from './router';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Suspense fallback={<div>Loading...</div>}>
        {renderRoutes(routes)}
      </Suspense>
    </HashRouter>
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
