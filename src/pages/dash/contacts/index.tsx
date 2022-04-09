import React from 'react'
import styled from 'styled-components'

import SimpleCard from '../../../components/Cards/SimpleCard'
import content from '../../../jsons/contactsContent'
import Link from 'next/link'
import { Button } from '@mui/material'
import Header from '../../../components/nav/Header'
import Footer from '../../../components/nav/Footer.tsx'

export default function Contacts() {
    
    return (
        <>
        <Main>
           <Header />
           <SimpleCard 
                title={content.title} 
                description={content.description}
                subTitle1={content.subTitle1}
                contact1={content.contact1}
                note={content.note}
            />
            <Link href="/dash/home/">
                <Button style={{marginTop: '1em', backgroundColor: '#249DD9'}} variant="contained">Voltar</Button>
            </Link>            
        </Main>
        <Footer />
        </>
       
    )
}

const Main = styled.div`
    margin: 2em 2em;
`
