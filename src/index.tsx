/* eslint-disable import/extensions */

// Modules
import React from 'react';
import ReactDOM from 'react-dom';
// import {ErrorBoundary} from 'react-error-boundary';

// Internals
import reportWebVitals from './reportWebVitals';

// Components
import App from './App/App';

// Styles
import './index.css';
// import x from '~/app/fileInApp';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
