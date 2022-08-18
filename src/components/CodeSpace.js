import CodeBlock from "./CodeBlock";
import PixelsBlock from "./PixelsBlock";
import * as utils from "../utils/arrays"

import React, { useState, useEffect } from 'react';
import Interpreter from 'js-interpreter';
import Grid from '@mui/material/Unstable_Grid2';

function CodeSpace(props) {
    const pixels = utils.createArray(8,8);
    const [code, setCode] = React.useState('var x = 5;\nx+2')
    const [result, setResult] = useState('Working...')
    const myInterpreter = new Interpreter(code);

    for(var x = 0; x<pixels.length; x++) {
        for(var y = 0; y<pixels[x].length; y++) {
            let minimum = 0;
            let maximum = 7;
            pixels[x][y] = (Math.random() * (maximum - minimum + 1) ) << 0;
        }
    }

    return (
        <Grid sx={{ m: 1 }} container spacing={{ xs: 2, md: 3 }}>
            <Grid xs={12} sm={3}>
                <PixelsBlock pixels={pixels}/>
            </Grid>
            <Grid xs={12} sm={6}>
                <CodeBlock code={code} result={result}/>
            </Grid>
            <Grid xs={12} sm={3}>
                <PixelsBlock pixels={pixels}/>
            </Grid>
        </Grid>
    )
}

export default CodeSpace