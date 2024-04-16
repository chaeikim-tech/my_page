import React from 'react';
import { styled } from 'styled-components';
import { FaUser } from "react-icons/fa";


const Wrapper = styled.div`
    display:flex;
    align-items: center;
    justify-content:center;
    flex-flow: column;
    min-height: 100vh;
    padding: 1rem;
    `;

const Hello = styled.h3`
    font-size: 2.5rem;
    color:#fff;
`;

const Name = styled.h2`
    font-size: 2rem;
    color:#fff;
`;

const AboutButton = styled.button`
    padding: .6rem 3rem 1rem 3rem;
    background:#333;
    color:#fff;
    cursor: pointer;
    margin-top: 1rem;
    font-size: 1rem;
    border-radius: 5rem;
    &:hover{
        background: yellow;
        color:#333;
    }
    svg{
        padding: 0rem 0.2rem;
        font-size: 1.3rem;
    }
`;


function Home() {
    return (
        <Wrapper id='home'>
            <Hello>안녕하세요.</Hello>
            <Name>Fontend Developer 김채이 입니다.</Name>
            <AboutButton>About Me<FaUser /></AboutButton>
        </Wrapper>
    )
}

export default Home;