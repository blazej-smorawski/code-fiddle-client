import React from 'react';

import Card from '@mui/joy/Card';
import AspectRatio from '@mui/joy/AspectRatio';
import MoonLoader from "react-spinners/ClipLoader";

function LoadingCard(props) {
    return (
        <AspectRatio variant='plain' ratio={props.ratio} sx={{width:'100%'}}>
            <Card variant='soft' sx>
                <MoonLoader color={(theme) => ({ boxShadow: theme.vars.shadow.sm })}/>
            </Card>
        </AspectRatio>
    );
}

export default LoadingCard;