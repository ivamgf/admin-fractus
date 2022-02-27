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
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Fab from '@mui/material/Fab';

function initialState() {
    return { user: '', password: ''}
}

export default function CardProfile() {
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

    const redirectHome = async () => {
        router.push('/dash/home/')
    }

    const handleEdit = async (event: any) => {
        event.preventDefault() 
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
                            <EditIcon style={{ color: '#249DD9', cursor: 'pointer' }} />
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
                                name="user" 
                                label="Usuário" 
                                value=""
                                variant="outlined" 
                                fullWidth={true}
                                onChange={handleChange} 
                                disabled={true}
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
                                disabled={true}
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
                                disabled={true}
                            />
                            <br />
                            <ContainerButton>
                                <Button 
                                    type="submit" 
                                    variant="contained" 
                                    fullWidth={true} 
                                    style={{backgroundColor: '#249DD9'}}
                                    onClick={handleSubmit}
                                    disabled={true}
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
