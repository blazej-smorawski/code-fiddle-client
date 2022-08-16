import React, { useState, useEffect } from 'react';
import CodeSpace from './components/CodeSpace';
import Interpreter from 'js-interpreter';
import { Header } from './components/Header';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const [result, setResult] = useState('Working...')
  const myInterpreter = new Interpreter('var x = 4;x+54');
  useEffect(() => {
    myInterpreter.run()
    setResult(myInterpreter.value)
  })

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header/>
        <CodeSpace/>
      </ThemeProvider>
    </div>
  );
}

export default App;
