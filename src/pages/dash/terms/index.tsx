import React from "react";
import styled from 'styled-components'

import CardAccordian from "../../../components/Cards/CardAccordian";
import Footer from "../../../components/nav/Footer.tsx";
import Header from "../../../components/nav/Header";

const Terms = () => {    
        
    return (
        <div>
            <Header />
            <Main>
                <CardAccordian />
            </Main>            
            <Footer />
        </div>
    );
}

const Main = styled.div`
    margin: 2em 1em;
`

export default Terms;
