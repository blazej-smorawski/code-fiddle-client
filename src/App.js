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
      <p>Result: {result}</p>
      <CodeSpace />
    </div>
  );
}

export default App;
