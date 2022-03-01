import React from "react";
import styled from 'styled-components'

import CardUpload from '../../../components/Cards/CardUpload';
import Footer from "../../../components/nav/Footer.tsx";
import Header from "../../../components/nav/Header";

const Exercises = () => {
    return (
        <>
            <Main>
                <Header />
                <CardUpload />
            </Main>
            <Footer />
        </>
    );
}

const Main = styled.div`
    margin: 2em 1em;
    min-height: 350px;
`

export default Exercises;
