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
    letter-spacing: 2px;
    padding-right: 10px;
    `;

const Hello = styled.h3`
    font-size: 40px;
    font-weight: 500;
    color:#fff;
    margin-bottom: 15px ;
    @media (max-width: 700px) {
        font-size: 25px;
    }
`;



const Contents = styled.div`
    font-size: 28px;
    color:#fff;
    line-height: 1.5;
    @media (max-width: 700px) {
        font-size: 15px;
    }
`


const AboutButton = styled(Link)`
    display: flex;
    align-items: center;
    padding: 10px 30px;
    background:#333;
    color:#fff;
    cursor: pointer;
    margin-top: 10px;
    font-size: 14px;
    font-weight: 500;
    border-radius: 50px;
    &:hover{
        background: yellow;
        color:#333;
    }
    svg{
        padding: 0px 3px;
        font-size: 20px;
    }
`;


function Home() {
    return (
        <Wrapper id='home'>
            <Hello>안녕하세요.</Hello>
            <Contents>끊임없는 호기심으로 새로운 지식의 탐험을<br />즐기는 Fontend Developer 김채이 입니다.</Contents>
            <AboutButton to="about" spy={true} smooth={true} offset={-150} duration={500}>About Me<FaUser /></AboutButton>
        </Wrapper>
    )
}

export default Home;