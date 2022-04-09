import React, { useState } from "react";
import { useRouter } from 'next/router'
import styled from 'styled-components'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';
import Fab from '@mui/material/Fab';

function initialState() {
    return { userName: '', user: '', password: ''}
}

export default function CardProfile() {
    const router = useRouter()
    const [values, setValues] = useState(initialState)
    const [fieldState, setFields] = useState(true)
    const [buttonColor, setButtonColor] = useState('rgba(0, 0, 0, 0.26)')
    
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

    const redirectHome = async () => {
        router.push('/dash/home/')
    }

    const handleEdit = async (event: any) => {
        event.preventDefault()
        setFields(false)
        setButtonColor('#249DD9')
    }

    return (
        <div>
            <Card>
                <CardContent>
                    <Typography variant="h5" component="div" sx={{textAlign: 'center'}}>
                        Perfil
                    </Typography>

                    <Stack 
                        direction="row" spacing={2} sx={{position: 'relative', float: 'right', marginBottom: '2em'}}>
                        <Fab color="primary" aria-label="edit">
                            <EditIcon style={{ color: '#249DD9', cursor: 'pointer' }} onClick={handleEdit} />
                        </Fab>
                    </Stack>                    
                    
                    <Form>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { 
                                    m: 1,                                     
                                    marginLeft: 'auto',
                                    marginRight: 'auto'
                                 },
                            }}
                            noValidate
                            autoComplete="off"
                        >                           
                            <TextField 
                                id="outlined-basic" 
                                type="text"
                                name="userName" 
                                label="Usuário" 
                                value={values.userName}
                                variant="outlined" 
                                fullWidth={true}
                                onChange={handleChange} 
                                disabled={fieldState}
                            />
                            <br />
                            <TextField 
                                id="outlined-basic" 
                                type="email"
                                name="user" 
                                label="E-mail" 
                                value={values.user}
                                variant="outlined" 
                                fullWidth={true}
                                onChange={handleChange} 
                                disabled={fieldState}
                            />
                            <br />
                            <TextField 
                                id="outlined-basic" 
                                type="password"
                                name="password" 
                                label="Senha" 
                                value={values.password} 
                                variant="outlined" 
                                fullWidth={true}
                                onChange={handleChange} 
                                disabled={fieldState}
                            />
                            <br />
                            <ContainerButton>
                                <Button 
                                    type="submit" 
                                    variant="contained" 
                                    fullWidth={true} 
                                    style={{backgroundColor: `${buttonColor}`}}
                                    onClick={handleSubmit}
                                    disabled={fieldState}
                                >
                                    Salvar
                                </Button>
                            </ContainerButton>
                            </Box>
                    </Form> 
                </CardContent>
                                
            </Card>
        </div>
    );
}

const ContainerButton = styled.div`
margin-left: 0.5em
`

const Form = styled.div`
    margin: auto;
`
