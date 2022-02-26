import React from "react";
import styled from 'styled-components'
import Stack from '@mui/material/Stack'
import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info'
import PolicyIcon from '@mui/icons-material/Policy'
import PublicIcon from '@mui/icons-material/Public'
import ContactsIcon from '@mui/icons-material/Contacts'
import FooterDesktop from "../FooterDesktop";
import Link from 'next/link'

const Footer = () => {
    const homeLink = '/views/home/'
    const aboutLink = '/views/about/'
    const termsLink = '/views/terms/'
    const urlLink = 'https://fractus.orkneytech.com.br/'
    const contactLink = '/views/contact/'

    return (
        <div>
            <FooterDesktop />
            
            <FooterComponent>
                <Stack
                    style={{ marginTop: '0.5em', marginLeft: '1em' }}
                    direction="row"
                    spacing={5}
                >
                    <Link href={homeLink}>
                        <HomeIcon />
                    </Link>

                    <Link href={aboutLink}>
                        <InfoIcon />
                    </Link> 

                    <Link href={termsLink}>
                        <PolicyIcon />
                    </Link>                       

                    <Link href={urlLink}>
                        <PublicIcon />
                    </Link>

                    <Link href={contactLink}>
                        <ContactsIcon />
                    </Link>
                </Stack>
            </FooterComponent>
        </div>
    );
}

const FooterComponent = styled.div`
    @media screen and (min-width: 481px) {
        display: none;
    }
    @media screen and (max-width: 480px) {
        display: block;
        background-color: #249dd9;
        width: 100%;
        min-height: 30em;
        max-height: 100em;
        padding: 2em;
        text-align: center;
        color: #ffffff;
        font-weight: bold;
        height: 10em;
    }
`
/*eslint-disable */

export default Footer;