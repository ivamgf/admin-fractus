import React, { useState } from "react";
import { useRouter } from 'next/router'
import styled from 'styled-components'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function initialState() {
    return { 
        scene: 0, 
        class: 0, 
        description: '',
        content: '',
        image: ''
    }
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

    return (
        <div>
            <Card>
                <CardContent>
                    <Typography variant="h5" component="div" sx={{textAlign: 'center'}}>
                        Adicionar Aula
                    </Typography>
                    
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
                                type="number"
                                name="scene" 
                                label="Cena" 
                                value={values.scene}
                                variant="outlined" 
                                fullWidth={true}
                                onChange={handleChange} 
                            />
                            <br />
                            <TextField 
                                id="outlined-basic" 
                                type="number"
                                name="class" 
                                label="Aula" 
                                value={values.class}
                                variant="outlined" 
                                fullWidth={true}
                                onChange={handleChange} 
                            />
                            <br />
                            <TextField 
                                id="outlined-basic" 
                                type="text"
                                name="description" 
                                label="Descrição" 
                                value={values.description} 
                                variant="outlined" 
                                fullWidth={true}
                                onChange={handleChange}
                            />
                            <br />
                            <TextField 
                                id="outlined-basic" 
                                type="textArea"
                                name="content" 
                                label="Conteúdo" 
                                value={values.content} 
                                variant="outlined" 
                                fullWidth={true}
                                onChange={handleChange}
                            />
                            <br />
                            <TextField 
                                id="outlined-basic" 
                                type="text"
                                name="image" 
                                label="URL Imagem" 
                                value={values.image} 
                                variant="outlined" 
                                fullWidth={true}
                                onChange={handleChange}
                            />
                            <br />
                            <ContainerButton>
                                <Button 
                                    type="submit" 
                                    variant="contained" 
                                    fullWidth={true} 
                                    style={{backgroundColor: '#249DD9'}}
                                    onClick={handleSubmit}
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
