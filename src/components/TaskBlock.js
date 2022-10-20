import React, { useState, useEffect } from 'react';

import { Sheet, Typography, Badge, Button, Box} from '@mui/joy';
import Card from '@mui/joy/Card';
import LoadingCard from './LoadingCard';


function TaskBlock(props) {
    const [testResult, setTestResult] = useState('')
    const taskName = props.taskName
    const code = props.code
    const ip = "server.blazej-smorawski.com"
    const [task, setTask] = useState(null)

    let testResultCard = <br/>;
    if(task != null) {
        if(testResult == '') {
            testResultCard = <br/>;
        } else if(testResult == 'running'){
            testResultCard = <LoadingCard ratio="16/2"/>;
        } else {
            let color = "primary"
            if(testResult.failed > 0) {
                color = "danger"
            }
            testResultCard = <Card variant='solid' color={color} sx={{marginTop:2}}>Testy zaliczone: {testResult.passed}<br/>Testy niezaliczone: {testResult.failed}</Card>;
        }
    }
    
    const testCode = (code) => {
        setTestResult('running')
        fetch("http://"+ip+":8080/test_code", {
            method: "POST",
            body: JSON.stringify({code: code.split('\n'), test_cases: task.test_cases}),
            headers: { 'Content-type': "application/json"}
        }).then(response => response.json()).then(data => {
            setTestResult(data)
        })
    }

    let taskCard = <LoadingCard ratio="16/2"/>;
    if(task != null) {
        taskCard = 
        <Card variant='soft' sx={{'white-space': 'pre-wrap'}}>{task.task_text.join("\n")}
        <Box sx={{ display: 'flex' }}>
                    <Button
                    onClick={() => testCode(props.code)}
                    variant="solid"
                    size="sm"
                    color="primary"
                    aria-label="Testuj"
                    sx={{ ml: 'auto', fontWeight: 600 }}>
                    Testuj kod</Button>
        </Box>
        <br/>
        {testResultCard}
        </Card>
    }

    const getTask = (name) => {
        fetch("http://"+ip+":8081/get_task", {
            method: "POST",
            body: JSON.stringify({task_name: name}),
            headers: {'Content-type': "application/json"}
        }).then(response => response.json()).then(data => {
            setTask(data)
            console.log(data)
        })
    }

    useEffect(() => {
        getTask(taskName);
    },[])

    return (
        <Sheet variant='plain' sx={{width:'100%', height:'100%', display: 'flex', flexDirection:'column', gap:'4px', bgcolor:'transparent', width:'auto'}}>
            <Badge badgeContent='Zadanie' color='primary' variant='outlined' badgeInset="15%" anchorOrigin={{vertical: 'top',horizontal: 'left',}}/>
            {taskCard}
        </Sheet>
    );
}

export default TaskBlock;