import CodeBlock from "./CodeBlock";
import PixelsBlock from "./PixelsBlock";
import * as utils from "../utils/arrays"

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

function CodeSpace(props) {
    const pixels = utils.createArray(8,8);
    for(var x = 0; x<pixels.length; x++) {
        for(var y = 0; y<pixels[x].length; y++) {
            pixels[x][y] = 0;
        }
    }

    return (
        <Grid sx={{ m: 1 }} container spacing={{ xs: 2, md: 3 }}>
            <Grid xs={12} sm={4}>
                <PixelsBlock pixels={pixels}/>
            </Grid>
            <Grid xs={12} sm={4}>
                <CodeBlock/>
            </Grid>
            <Grid xs={12} sm={4}>
                <PixelsBlock pixels={pixels}/>
            </Grid>
        </Grid>
    )
}

export default CodeSpace