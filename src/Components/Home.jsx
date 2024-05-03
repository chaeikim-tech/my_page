import React from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-scroll';
import { FaUser } from "react-icons/fa";


const Wrapper = styled.div`
    display:flex;
    align-items: center;
    justify-content:center;
    flex-flow: column;
    min-height: 100vh;
    padding: 1rem;
    letter-spacing: .15rem;
    `;

const Hello = styled.h3`
    font-size: 2.5rem;
    color:#fff;
    margin-bottom: 1.5rem ;
`;

const Name = styled.h2`
    font-size: 2rem;
    color:#fff;
`;

const Contents = styled.div`
    font-size: 1.8rem;
    color:#fff;
`


const AboutButton = styled(Link)`
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
            <Contents>끊임없는 호기심으로 새로운 지식의 탐험을 즐기는</Contents>
            <Name>Fontend Developer 김채이 입니다.</Name>
            <AboutButton to="about" spy={true} smooth={true} duration={500}>About Me<FaUser /></AboutButton>
        </Wrapper>
    )
}

export default Home;