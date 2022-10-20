import React, { useState, useEffect } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-python';
import '../utils/prism-dracula.css';

import { Sheet, Typography, Badge, Button, Box} from '@mui/joy';
import Card from '@mui/joy/Card';
import LoadingCard from './LoadingCard';


function CodeBlock(props) {
    const result = props.result
    const stdin = props.stdin
    const input = stdin

    const handleInputChange = (event) => {
        props.setStdin(event.target.value)
    }

    let resultCard = <LoadingCard ratio="16/2"/>;
    if(result != '') {
        resultCard = <Card variant='soft' sx={{'white-space': 'pre-wrap'}}>{result}</Card>
    }
    
    return (
        <Sheet variant='plain' sx={{width:'100%', height:'100%', display: 'flex', flexDirection:'column', gap:'4px', bgcolor:'transparent', width:'auto'}}>
            <Badge badgeContent='Wejście' color='primary' variant='outlined' badgeInset="5%" anchorOrigin={{vertical: 'top',horizontal: 'left',}}/>
            <Card variant='soft' sx={{height:'100%'}}>
                <TextareaAutosize value={input} onChange={handleInputChange}/>
            </Card>
            <Badge badgeContent='Kod' color="primary" variant='outlined' badgeInset="5%" anchorOrigin={{vertical: 'top',horizontal: 'left',}}/>
            <Card variant='soft'>
                <Editor
                    value={props.code}
                    onValueChange={code => props.setCode(code)}
                    highlight={code => highlight(props.code, languages.python)}
                    padding={10}
                    style={{
                        fontFamily: '"Fira code", "Fira Mono", monospace',
                        fontSize: 14,
                    }}
                />
                <Box sx={{ display: 'flex' }}>
                    <Button
                    onClick={() => props.runCode(props.code)}
                    variant="solid"
                    size="sm"
                    color="primary"
                    aria-label="Uruchom"
                    sx={{ ml: 'auto', fontWeight: 600 }}
                    >Uruchom kod</Button>
                </Box>
            </Card>
            <Badge badgeContent='Wyjście' color='primary' variant='outlined' badgeInset="5%" anchorOrigin={{vertical: 'top',horizontal: 'left',}}/>
            {resultCard}
        </Sheet>
    );
}

export default CodeBlock;