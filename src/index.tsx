/* eslint-disable import/extensions */
// Modules
// Internals
// Components
// Styles
import React from 'react';
import ReactDOM from 'react-dom';
// import Checkbox from '@material-ui/core/Checkbox';
import reportWebVitals from './reportWebVitals';
import App from './App/App';
// import styles from './index.module.css';
// import x from '~/app/fileInApp';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    {/* <Checkbox name="antoine" /> */}
    {/* <div className={styles.Block}>{x}</div> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
