import * as React from 'react'
import { useRouter } from 'next/router'

import terms from '../../../jsons/termsAccordian'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import BasicAccordion from '../../Accordians/BasicAccordian'

export default function BasicCard(props: ITerms) {
    const router = useRouter()

    const redirectHome = async () => {
        router.push('/dash/home')
    }
    
    function handleClick() {
        redirectHome()        
    }

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent style={{ minHeight: '15em' }}>
                <Typography variant="h5" style={{ textAlign: 'center' }}>
                    Termos de Uso
                </Typography>
                <div style={{ textAlign: 'center', marginTop: '2em' }}>
                    <BasicAccordion
                        title1={terms.title1}
                        text1={terms.text1}
                        title2={terms.title2}
                        text2={terms.text2}
                        title3={terms.title3}
                        text3={terms.text3}
                        title4={terms.title4}
                        text4={terms.text4}
                        title5={terms.title5}
                        text5={terms.text5}
                        title6={terms.title6}
                        text6={terms.text6}
                        title7={terms.title7}
                        text7={terms.text7}
                        title8={terms.title8}
                        text8={terms.text8}
                        title9={terms.title9}
                        text9={terms.text9}
                    />
                </div>
            </CardContent>
            <hr />
            <CardActions>
                <Button variant="contained" onClick={handleClick} style={{backgroundColor: '#249DD9'}}>Voltar</Button>
            </CardActions>
        </Card>
    )
}

