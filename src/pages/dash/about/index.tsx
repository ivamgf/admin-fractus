import React from "react";
import styled from 'styled-components'

import BasicCard from "../../../components/Cards/BasicCard";
import Footer from "../../../components/nav/Footer.tsx";
import Header from "../../../components/nav/Header";
import contentCards from '../../../jsons/contentCards'

const About = () => {
    const content = contentCards.content
    const buttons = contentCards.children.buttons

    return (
        <div>
            <Main>
                <Header />
                <BasicCard content={content} buttons={buttons} />
            </Main>
            <Footer />
        </div>
    );
}

const Main = styled.div`
    margin: 2em 1em;
`
export default About;
