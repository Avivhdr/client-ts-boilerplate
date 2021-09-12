// --> Modules
import React from 'react'; // external
import {ErrorBoundary} from 'react-error-boundary';

// --> Components
import {ErrorFallback} from '~components/common/ErrorFallback';

// --> Styles
// import logo from './logo.svg';
import {ReactComponent as Logo} from './logo.svg'; // parent
import './App.css'; // sibling
// import styles from './App.module.css';

if (process.env.NODE_ENV !== 'production') {
  console.info('Development mode!');
}

function App() {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      // onError={() => {/* handleOnError */}}
      // onReset={() => {/* handleOnReset */}}
    >
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
            rel="noopener noreferrer"
          >
            Learn React with style
          </a>
        </header>
        {/* <div className={styles.Block}>GREEN OD RED</div> */}
      </div>
    </ErrorBoundary>
  );
}

export default App;
