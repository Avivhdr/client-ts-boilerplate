import React from 'react'; // external
// import logo from './logo.svg';
import {ReactComponent as Logo} from './logo.svg'; // parent
import './App.css'; // sibling
// import styles from './App.module.css';

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [state, setState] = React.useState('initialState');

  return (
    <div className="App">
      <header className="App-header">
        <Logo className="App-logo" />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React with style
        </a>
      </header>
      {/* <div className={styles.Block}>GREEN OD RED</div> */}
    </div>
  );
}

export default App;
