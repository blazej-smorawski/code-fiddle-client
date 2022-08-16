import React, { useState, useEffect } from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box'
import { TableContainer } from '@mui/material';


function PixelsBlock(props) {
    const pixel = (
        <Paper elevation={1} sx={{ margin: '1vh', width: '4vh', height: '4vh', background: 'red'}}/>
    );
    const grid = props.pixels.map((row) => <Box sx={{ display: 'inline-grid' }}>{row.map((pixel_value) => <div>{pixel}</div>)}</Box>);
    console.log('200 OK');
    return (
        <Card sx={{}}>
        <CardContent>
            {grid}
        </CardContent>
        </Card>
    );
}

export default PixelsBlock;