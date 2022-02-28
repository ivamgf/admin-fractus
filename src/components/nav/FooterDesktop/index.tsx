import React from "react";
import styled from 'styled-components'
import Stack from '@mui/material/Stack'
import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info'
import PolicyIcon from '@mui/icons-material/Policy'
import PublicIcon from '@mui/icons-material/Public'
import ContactsIcon from '@mui/icons-material/Contacts'
import Typography from '@mui/material/Typography';
import Link from 'next/link'

const FooterDesktop = () => {
    const homeLink = '/dash/home/'
    const aboutLink = '/dash/about/'
    const termsLink = '/dash/terms/'
    const urlLink = 'https://fractus.orkneytech.com.br/'
    const contactLink = '/dash/contacts/'

    return (
        <div>            
            <FooterComponentDesktop>
                <Stack
                    style={
                        { 
                            marginTop: '0.5em', 
                            marginLeft: 'auto', 
                            marginRight: 'auto', 
                            width: '40em',
                            cursor: 'pointer'
                        }
                    }
                    direction="row"
                    spacing={3}
                >
                    <Link href={homeLink}>
                        <HomeIcon />
                    </Link>
                    <Link href={homeLink}>
                        <Typography variant="subtitle1" component="div">
                            Home
                        </Typography>
                    </Link>
                    

                    <Link href={aboutLink}>
                        <InfoIcon />
                    </Link>
                    <Link href={aboutLink}>
                        <Typography variant="subtitle1" component="div">
                            Sobre
                        </Typography>
                    </Link>
                    

                    <Link href={termsLink}>
                        <PolicyIcon />
                    </Link>  
                    <Link href={termsLink}>
                        <Typography variant="subtitle1" component="div">
                            Termos
                        </Typography> 
                    </Link>                                        

                    <Link href={urlLink}>
                        <PublicIcon />
                    </Link>
                    <Link href={urlLink}>
                        <Typography variant="subtitle1" component="div">
                            Site
                        </Typography>
                    </Link>                    

                    <Link href={contactLink}>
                        <ContactsIcon />
                    </Link>
                    <Link href={contactLink}>
                        <Typography variant="subtitle1" component="div">
                            Contatos
                        </Typography>
                    </Link>                    
                </Stack>
            </FooterComponentDesktop>
        </div>
    );
}

const FooterComponentDesktop = styled.div`
    @media screen and (min-width: 481px) {
        background-color: #249dd9;
        width: 100%;
        min-height: 15em;
        max-height: 100em;
        padding: 2em;
        text-align: center;
        color: #ffffff;
        font-weight: bold;
        height: 10em;        
    }    
    @media screen and (max-width: 481px) {
        display: none;
    }
`
/*eslint-disable */

export default FooterDesktop;