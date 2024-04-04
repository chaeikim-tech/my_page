import React from 'react';
import { styled } from 'styled-components';

const Wrapper = styled.div`
    height: 100vh;
    background: darkblue;
    color: white;
`;




function About() {
    return (
        <Wrapper id='about'>About!</Wrapper>
    )
}

export default About;