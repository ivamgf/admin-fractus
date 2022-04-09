import * as React from 'react';

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Input = styled('input')({
  display: 'none',
});

const Form = styled('div')({
    margin: 'auto',
});

export default function UploadButtons() {
    function handleSend() {
        // code
    }
    
  return (
      <Card>
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
                <CardContent>
                    <Typography variant="h5" component="div" sx={{textAlign: 'center', marginBottom: '2em'}}>
                        Faça o Upload dos Arquivos
                    </Typography>
                    <Form>
                        <Stack direction="column" alignItems="center" spacing={2}>
                            <label htmlFor="contained-button-file">
                                <Input name="file" accept="pdf/*" id="contained-button-file" multiple type="file" />
                                <Button variant="contained" component="span" onClick={handleSend}>
                                    Upload
                                </Button>
                            </label>      
                        </Stack>
                    </Form>
                    
                </CardContent>
                  
            </Box>
          
      </Card>
    
  );
}

