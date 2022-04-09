import React from "react";
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider';

type typeProps = {
    title: string,
    subTitle: string
}

export default function CardHome(props: typeProps) {

    return (
        <>
            <Card sx={{ minWidth: 275 }}>
                <CardContent style={{ minHeight: '20em' }}>
                    <Typography
                        variant="h4"
                        style={{ textAlign: 'center', marginTop: '0.5em' }}
                    >
                        {props.title}
                    </Typography>
                    <Typography
                        variant="h5"
                        style={{ textAlign: 'center', marginTop: '0.5em' }}
                    >
                        {props.subTitle}
                    </Typography>
                    <Card>
                        
                    </Card>
                </CardContent>                
            </Card>                
        </>
    );
}
