import React, { useState, useEffect } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-python';
import '../utils/prism-dracula.css';

import { Sheet, Typography, Badge, Button, Box} from '@mui/joy';
import Card from '@mui/joy/Card';
import LoadingCard from './LoadingCard';


function CodeBlock(props) {
    const [code, setCode] = useState(props.code);
    const result = props.result

    let resultCard = <LoadingCard ratio="16/2"/>;
    if(result != '') {
        resultCard = <Card variant='soft' sx={{'white-space': 'pre-wrap'}}>{result}</Card>
    }

    return (
        <Sheet variant='plain' sx={{width:'100%', height:'100%', display: 'flex', flexDirection:'column', gap:'4px', bgcolor:'transparent', width:'auto'}}>
            <Badge badgeContent='Kod' color="primary" variant='outlined' anchorOrigin={{vertical: 'top',horizontal: 'left',}}/>
            <Card variant='soft'>
                <Editor
                    value={code}
                    onValueChange={code => setCode(code)}
                    highlight={code => highlight(code, languages.python)}
                    padding={10}
                    style={{
                        fontFamily: '"Fira code", "Fira Mono", monospace',
                        fontSize: 14,
                    }}
                />
                <Box sx={{ display: 'flex' }}>
                    <Button
                    onClick={() => props.runCode(code)}
                    variant="solid"
                    size="sm"
                    color="primary"
                    aria-label="Uruchom"
                    sx={{ ml: 'auto', fontWeight: 600 }}
                    >Uruchom kod</Button>
                </Box>
            </Card>
            <Badge badgeContent='Wynik' color='primary' variant='outlined' anchorOrigin={{vertical: 'top',horizontal: 'left',}}/>
            {resultCard}
        </Sheet>
    );
}

export default CodeBlock;