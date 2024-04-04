import React from 'react';
import { styled } from 'styled-components';


const Wrapper = styled.div`
    height: 100vh;
    background: Orange;
    color: black;
`;



function Contact() {
    return (
        <Wrapper id='contact'>
            <h1>Contact Me</h1>
            <hr />
        </Wrapper>
    )
}

export default Contact;