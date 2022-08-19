import CodeBlock from "./CodeBlock";
import PixelsBlock from "./PixelsBlock";
import * as utils from "../utils/arrays"

import React, { useState, useEffect } from 'react';
import Interpreter from 'js-interpreter';
import Grid from '@mui/material/Unstable_Grid2';

function CodeSpace(props) {
    const [pixels, setPixels] = useState(utils.createArray(8,8));
    const [resultPixels, setResultPixels] = useState(utils.createArray(8,8));
    const [result, setResult] = useState('Czekam!')

    const exampleCode = `
// Na ten moment dodałem dwie funkcje do manipulacji pixeli.
// Tablica pixeli to obiekt o nazwie pixels
wybierz(4,4);
ustawKolor(5);

for(var x=0;x<8;x++) {
  wybierz(x,x);
  ustawKolor(7);
}

for(var x=0;x<8;x++) {
  pixels[x][0]=0;
}
`;
    const preCode = `
var pixels = JSON.parse(getPixels());
// sp - selected pixel - wybrany pixel
var sp=[0,0];

function wybierz(x,y) {
    sp[0] = x;
    sp[1] = y;
}

function ustawKolor(val) {
    pixels[sp[1]][sp[0]] = val;
}
`;
    const postCode = `
JSON.stringify(pixels);
`;

    useEffect( () => {
        for(var x = 0; x<pixels.length; x++) {
            for(var y = 0; y<pixels[x].length; y++) {
                let minimum = 0;
                let maximum = 7;
                pixels[x][y] = (Math.random() * (maximum - minimum + 1) ) << 0;
                resultPixels[x][y] = 0;
            }
        }
    }, []);

    function initInterpreter(interpreter, globalObject) {
        var wrapper = function getPixels() {
            console.log(pixels);
            return JSON.stringify(pixels);
        };
        interpreter.setProperty(globalObject, 'getPixels',
            interpreter.createNativeFunction(wrapper));
    }

    const runCode = (code) => {
        console.log('Running: ' + preCode+code+postCode);
        const interpreter = new Interpreter(preCode+code+postCode, initInterpreter);

        var steps = 0;
        setResult('Przetwarzam...');
        try {
            while(interpreter.step()) {
                steps++;
                if(steps>1000) {
                    setResult('Kod wykonywał się zbyt długo :(');
                }
            }
        } catch (error) {
            setResult('Błąd: ' + error)
            return;
        }
        console.log('Result: ' + interpreter.value);
        setResult("Sukces!");
        setResultPixels(JSON.parse(interpreter.value));
    }

    return (
        <Grid sx={{ m: 1 }} container spacing={{ xs: 2, md: 3 }}>
            <Grid xs={12} sm={3}>
                <PixelsBlock pixels={pixels}/>
            </Grid>
            <Grid xs={12} sm={6}>
                <CodeBlock code={exampleCode} result={result} runCode={runCode}/>
            </Grid>
            <Grid xs={12} sm={3}>
                <PixelsBlock pixels={resultPixels}/>
            </Grid>
        </Grid>
    )
}

export default CodeSpace