import React from "react";
import styled from 'styled-components'

import CardClass from "../../../components/Cards/CardClass";
import Footer from "../../../components/nav/Footer.tsx";
import Header from "../../../components/nav/Header";

const AddClass = () => {
    return (
        <>
           <Main>
               <Header />
               <CardClass />
           </Main>
           <Footer />
        </>
    );
}

const Main = styled.div`
    margin: 2em 1em;
`

export default AddClass;
