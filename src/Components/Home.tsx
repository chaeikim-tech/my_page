import React from 'react';
import { styled } from 'styled-components';


const Wrapper = styled.div`
    height: 100vh;
    background: darkgreen;
    color: white;
`;




function Home() {
    return (
        <Wrapper id='home'>Home!</Wrapper>
    )
}

export default Home;