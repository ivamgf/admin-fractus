import * as React from 'react'
import styled from 'styled-components'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Image from 'next/image'

type typeProps = {
    title: string,
    description: string,
    subTitle1: string,
    contact1: string,
    note: string
}

export default function BasicCard(props: typeProps) {
    return (
        <>
            <Card sx={{ minWidth: 275 }}>
                <CardContent style={{ minHeight: '20em' }}>
                    <ImgContainer>
                        <Image
                            src="/logo-fractus-cor.svg"
                            alt="Logo Fractus"
                            width={500}
                            height={150}
                        />
                    </ImgContainer>                    

                    <Typography
                        variant="h4"
                        style={{ textAlign: 'center', marginTop: '0.5em' }}
                    >
                        {props.title}
                    </Typography>
                    <Typography
                        variant="body2"
                        style={{ textAlign: 'center', marginTop: '1em', marginBottom: '2em' }}
                    >
                        {props.description}
                    </Typography>
                    <hr />
                    <Typography
                        variant="h5"
                        style={{ textAlign: 'left', marginTop: '1em' }}
                    >                        
                        {props.subTitle1}
                    </Typography>
                    <Typography
                        variant="body2"
                        style={{ textAlign: 'left', marginTop: '1em' }}
                    >                        
                        {props.contact1}
                    </Typography>                   
                    <hr />
                    <Typography
                        variant="h6"
                        style={{ textAlign: 'left', marginTop: '1em' }}
                    >                        
                        Nota:
                    </Typography>
                    <Typography
                        variant="body2"
                        style={{ textAlign: 'left', marginTop: '1em' }}
                    >                        
                        {props.note}
                    </Typography>
                </CardContent>
                <CardActions></CardActions>
            </Card>            
        </>
    )
}

const ImgContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 60%;
`
