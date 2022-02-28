import * as React from 'react'
import { useRouter } from 'next/router'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';

/*eslint-disable */
export default function BasicCard(props: any) {
    const router = useRouter()
    const content = props.content
    const buttons = props.buttons

    const redirectHome = async () => await router.push('/dash/home/')

    return (
        <>
            <Card sx={{ minWidth: 275 }}>
                <CardContent style={{ minHeight: '20em', textAlign: 'center' }}>
                    <Typography variant="h5" style={{ textAlign: 'center' }}>
                        {content.title}
                    </Typography>
                    <Typography
                        variant="body2"
                        style={{ textAlign: 'center', marginTop: '2em' }}
                    >
                        {content.text}
                    </Typography>
                    <Typography
                        variant="body2"
                        style={{
                            textAlign: 'right',
                            marginTop: '2em',
                            marginLeft: '2em',
                        }}
                    >
                        {content.credits}
                    </Typography>
                </CardContent>
                <hr />
                <CardActions>
                    <Button
                        variant="contained"
                        onClick={redirectHome}
                        style={{backgroundColor: '#249DD9'}}
                    >
                    {buttons.value}     
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}

/*eslint-disable */
