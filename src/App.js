import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import CodeSpace from './components/CodeSpace';
import Interpreter from 'js-interpreter';
import './App.css';

function App() {
  const [result, setResult] = useState('Working...')
  const myInterpreter = new Interpreter('var x = 4;x+54');
  useEffect(() => {
    myInterpreter.run()
    setResult(myInterpreter.value)
  })

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
        <a>
          Result: {result}
        </a>
        <CodeSpace />
      </header>
    </div>
  );
}

export default App;
