import logo from './logo.svg';
import './App.css';

// Satisfy eslint
/*global Go, SayHello*/
const go = new Go();

WebAssembly.instantiateStreaming(fetch('main.wasm'), go.importObject).then(
  (result) => {
    go.run(result.instance);
    console.log(SayHello());
  }
);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
