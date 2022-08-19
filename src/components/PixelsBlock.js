import React, { useState, useEffect } from 'react';

import Card from '@mui/joy/Card';
import Sheet from '@mui/joy/Sheet'
import AspectRatio from '@mui/joy/AspectRatio';

const colors = ['hsl(210 80% 0%)', 'hsl(210 80% 10%)', 'hsl(210 80% 20%)', 'hsl(210 80% 30%)',
                'hsl(210 80% 30%)', 'hsl(210 80% 40%)', 'hsl(210 80% 50%)', 'hsl(210 80% 60%)']

function Pixel(props) {
    const color = colors[props.color]
    return (<Card 
        variant='solid' 
        sx={
            {
                width:'100%',
                margin:'2px',
                bgcolor: color
            }
        }
    />);
}

function PixelsBlock(props) {
    const grid = <Sheet variant='plain' sx={{width:'100%', height:'100%', display: 'flex', flexDirection:'column', bgcolor:'transparent'}}> {
        props.pixels.map((row) => 
            <Sheet variant='plain' sx={{width:'100%', height:'100%', display: 'flex', flexDirection:'row', bgcolor:'transparent'}}>
                {row.map((pixel_value) => <Pixel color={pixel_value}/>)}
            </Sheet>)
    } </Sheet>
    
    console.log('Grid render?');
    return (
        <AspectRatio variant='plain' ratio='1/1'>
            <Card variant='soft'>
                {grid}
            </Card>
        </AspectRatio>
    );
}

export default PixelsBlock;