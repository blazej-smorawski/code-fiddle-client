import CodeBlock from "./CodeBlock";

import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import TaskBlock from "./TaskBlock";

function CodeSpace(props) {
    const [result, setResult] = useState('Czekam...')
    const [stdin, setStdin] = useState('1')
    const ip = "server.blazej-smorawski.com"
    const exampleCode = `
x = 5
for i in range(10):
    print(i)


class kot:
    def __init__(self):
        self.kolor = "czarny"

burek = kot()
print(burek.kolor)
`;

    const [code, setCode] = useState(exampleCode);

    const runCode = (code) => {
        setResult('')
        console.log(stdin.split('\n'))
        fetch("http://"+ip+":8080/send_code", {
            method: "POST",
            body: JSON.stringify({code: code.split('\n'), stdin: stdin.split('\n')}),
            headers: { 'Content-type': "application/json"}
        }).then(response => response.json()).then(data => {
            setResult(data.stdout.join('\n'))
        })
    }

    return (
        <Grid sx={{m: 1 }} container spacing={{ xs: 2, md: 3 }}>
            <Grid xs={12} sm={8}>
                <CodeBlock code={code} setCode={setCode} stdin={stdin} setStdin={setStdin} result={result} runCode={runCode}/>
            </Grid>
            <Grid xs={12} sm={4}>
                <TaskBlock code={code} taskName="test_task"/>
            </Grid>
        </Grid>  
    );
}

export default CodeSpace