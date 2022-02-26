import React from 'react'
import styled from 'styled-components'

import SimpleCard from '../../../components/SimpleCard'
import content from '../../../../jsons/contactsContent'
import Link from 'next/link'
import { Button } from '@mui/material'

export default function Contacts() {
    
    return (
       <Main>
           <SimpleCard 
                title={content.title} 
                description={content.description}
                subTitle1={content.subTitle1}
                contact1={content.contact1}
                note={content.note}
            />
            <Link href="/dash/home/">
                <Button style={{marginTop: '1em'}} variant="contained">Voltar</Button>
            </Link>
       </Main>
    )
}

const Main = styled.div`
    margin: 2em 2em;
`
