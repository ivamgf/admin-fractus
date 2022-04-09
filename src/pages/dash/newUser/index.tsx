import React from "react";
import styled from 'styled-components'

import CardNewUser from "../../../components/Cards/CardsForms/CardNewUser";
import Footer from "../../../components/nav/Footer.tsx";
import Header from "../../../components/nav/Header";

export default function NewUser() {
    return (
        <>
            <Main>
                <Header />
                <CardNewUser />
            </Main>
            <Footer />
        </>
        
    );
}

const Main = styled.div`
    margin: 2em 1em;
`
