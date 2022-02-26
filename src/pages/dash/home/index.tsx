import React from "react";
import styled from 'styled-components'
import Footer from "../../../components/nav/Footer.tsx";
import Header from "../../../components/nav/Header";

const Home = () => {
    return (
        <div>
            <Header />
            <Main>
                Home
            </Main>
            <Footer />
        </div>
    );
}

const Main = styled.div`
    margin: 2em 1em;
`

export default Home;
