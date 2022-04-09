import React from "react";
import styled from 'styled-components'
import CardHome from "../../../components/Cards/CardHome";
import Footer from "../../../components/nav/Footer.tsx";
import Header from "../../../components/nav/Header";
import ContentHome from '../../../jsons/contentHome'

const Home = () => {
    const title = ContentHome.title
    const subTitle = ContentHome.subTitle

    return (
        <div>
            <Header />
            <Main>
                <CardHome title={title} subTitle={subTitle} />
            </Main>
            <Footer />
        </div>
    );
}

const Main = styled.div`
    margin: 2em 1em;
`

export default Home;
