import React from "react";
import styled from 'styled-components'
import CardProfile from "../../../components/Cards/CardsForms/CardProfile";
import Footer from "../../../components/nav/Footer.tsx";
import Header from "../../../components/nav/Header";

const Profile = () => {
    return (
        <>
        <Main>
            <Header />
            <CardProfile />
        </Main>
            <Footer />
        </>       
    );
}

const Main = styled.div`
    margin: 2em 1em;
`

export default Profile;
