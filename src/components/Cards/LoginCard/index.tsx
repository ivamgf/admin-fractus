import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import styled from 'styled-components'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Image from 'next/image'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

function initialState() {
    return { user: '', password: ''}
}

export default function CardLogin() {
    const router = useRouter()
    const [values, setValues] = useState(initialState)

    function handleChange(event: any) {
        const { value, name } = event.target
        setValues({
            ...values,
            [name]: value,
        })
    }

    const handleSubmit = async (event: any) => {
        event.preventDefault()      
        console.log(values)
        redirectHome()
    }

    const redirectHome = async () =>
        await setTimeout(() => {
            router.push('/dash/home/')
        }, 1000)

    return (
        <div>
            <Card sx={{ 
                        width: 295, 
                        margin: '2em', 
                        textAlign: 'center', 
                        position: 'relative',
                        display: 'block',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }}>
                <CardContent>
                    <ImgContainer>
                        <Image
                            src="/logo-fractus-cor.svg"
                            alt="Logo Fractus"
                            width={500}
                            height={150}
                        />
                    </ImgContainer>

                    <Typography variant="h5" component="div">
                    Login
                    </Typography>
                        <Form>
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '25ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField 
                                    id="outlined-basic" 
                                    type="email"
                                    name="user" 
                                    label="Usuário" 
                                    value={values.user} 
                                    variant="outlined" 
                                    onChange={handleChange} 
                                />
                                <br />
                                <TextField 
                                    id="outlined-basic" 
                                    type="password"
                                    name="password" 
                                    label="Senha" 
                                    value={values.password} 
                                    variant="outlined" 
                                    onChange={handleChange} 
                                />
                                
                            </Box>
                            <br />
                            <ContainerButton>
                                <Button type="submit" variant="contained" fullWidth={true} onClick={handleSubmit}>Entrar</Button>
                            </ContainerButton> 
                        </Form>                                                   
                </CardContent>                    
            </Card>            
        </div>
    )
}

const ImgContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 60%;
`

const ContainerButton = styled.div`
margin-left: 0.5em
`

const Form = styled.div`
    margin: auto;
`
