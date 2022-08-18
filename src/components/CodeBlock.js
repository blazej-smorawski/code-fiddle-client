import * as React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import '../utils/prism-dracula.css';

import { Sheet, Typography, Badge} from '@mui/joy';
import Card from '@mui/joy/Card';


function CodeBlock(props) {
    const code = props.code
    const result = props.result

    const setCode = () => {
        props.setCode(code)
    }

    return (
        <Sheet variant='plain' sx={{width:'100%', height:'100%', display: 'flex', flexDirection:'column', gap:'4px', bgcolor:'transparent', width:'auto'}}>
            <Badge badgeContent='Kod' color="success" variant='outlined' anchorOrigin={{vertical: 'top',horizontal: 'left',}}/>
            <Card variant='soft'>
                <Editor
                    value={code}
                    onValueChange={code => setCode(code)}
                    highlight={code => highlight(code, languages.js)}
                    padding={10}
                    style={{
                        fontFamily: '"Fira code", "Fira Mono", monospace',
                        fontSize: 14,
                    }}
                />
            </Card>
            <Badge badgeContent='Wynik' color='success' variant='outlined' anchorOrigin={{vertical: 'top',horizontal: 'left',}}/>
            <Card variant='soft'>
                {result}
            </Card>
        </Sheet>
    );
}

export default CodeBlock;