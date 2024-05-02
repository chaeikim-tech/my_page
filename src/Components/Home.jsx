import React from 'react';
import { styled } from 'styled-components';
import { ReactTyped } from 'react-typed';
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

const Contents = styled.div`
    font-size: 1.8rem;
    color:#fff;
`


const AboutButton = styled.button`
    padding: .6rem 3rem 1rem 3rem;
    background:#333;
    color:#fff;
    cursor: pointer;
    margin-top: 1rem;
    font-size: 1rem;
    border-radius: 5rem;
    &:hover{
        background: #FDA403;
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
            <Contents>새로운 지식을 습득하는 과정을 즐기고 있습니다.</Contents>
            <Contents>이것들은 단순히 목표를 달성하는 수단이 아닌</Contents>
            <Contents>삶의 풍요로움과 만족감을 높여준다고 생각하고있습니다.</Contents>
            <AboutButton>About Me<FaUser /></AboutButton>
        </Wrapper>
    )
}

export default Home;