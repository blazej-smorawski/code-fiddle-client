import CodeBlock from "./CodeBlock";
import PixelsBlock from "./PixelsBlock";
import * as utils from "../utils/arrays"

import React, { useState, useEffect } from 'react';
import Interpreter from 'js-interpreter';
import Grid from '@mui/material/Unstable_Grid2';

function CodeSpace(props) {
    const [pixels, setPixels] = useState(utils.createArray(8,8));
    const [result, setResult] = useState('Czekam!')
    const exampleCode = 'var x = 5;\nx+2';

    useEffect( () => {
        for(var x = 0; x<pixels.length; x++) {
            for(var y = 0; y<pixels[x].length; y++) {
                let minimum = 0;
                let maximum = 7;
                pixels[x][y] = (Math.random() * (maximum - minimum + 1) ) << 0;
            }
        }
    }, []);

    const runCode = (code) => {
        const interpreter = new Interpreter(code);
        console.log('Running: ' + code)
        var steps = 0;
        setResult('Przetwarzam...');
        while(interpreter.step()) {
            steps++;
            if(steps>1000) {
                setResult('Kod wykonywał się zbyt długo :(');
            }
        }
        console.log('Result: ' + interpreter.value);
        setResult(interpreter.value);
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
                <PixelsBlock pixels={pixels}/>
            </Grid>
        </Grid>
    )
}

export default CodeSpace