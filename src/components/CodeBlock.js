import * as React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextareaAutosize from '@mui/material/TextareaAutosize';

function CodeBlock(props) {
    return (
        <Card sx={{ minWidth: 160 }}>
        <CardContent>
        <TextareaAutosize
            aria-label="empty textarea"
            placeholder="Empty"
            minRows={10}
            style={{ width: '100%' }}
        />
        </CardContent>
        <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions>
        </Card>
    );
}

export default CodeBlock;