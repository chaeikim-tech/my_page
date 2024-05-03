import React from 'react';
import { styled } from 'styled-components';
import { MdBusinessCenter } from "react-icons/md";


const Wrapper = styled.div`
    height: 100vh;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap; 
`;

const AboutTitle = styled.h1`
    color: white;
    text-align: center;
    margin: 0 6rem;
    letter-spacing: .2rem;
    font-size: 3rem;
    font-weight: bold;
    padding: 2rem 0;
    border-bottom: 0.1rem solid #fff4;
`

const CareerBox = styled.div`
    display: flex;
    justify-content: center;
    padding: 3rem 0 0 3rem;
    flex-wrap: wrap;
`

const MiniBox = styled.div`
    width: 35rem;
    margin: 4rem 1rem;
    padding-left: 4rem;
    border-left: 0.2rem solid #fff;
    position: relative;
    span {
        font-size: 1.2rem;
        background-color: #222;
        color: #fff;
        border-radius: 5rem;
        padding: 0.5rem 2.5rem
    }
    h3{
        font-size: 2rem ;
        color: #fff;
        padding-top:1.5rem;
    }
    p{
        font-size: 1.4rem;
        color: #eee;
        padding: 1rem 0;
    }
    .icon{
        position: absolute;
        top:-1.5rem;
        left: -2.5rem;
        height: 4.5rem;
        width: 4.5rem;
        padding: 1rem;
        border-radius: 50%;
        line-height: 5rem;
        text-align: center;
        color: #fff;
        background-color: #FDA403;
    }
`



function About() {
    return (
        <Wrapper id='about'>
            <AboutTitle>Career</AboutTitle>
            <CareerBox>
                <MiniBox>
                    <MdBusinessCenter className='icon' />
                    <span>2018.08 ~ 2020.01</span>
                    <h3>다이와 증권</h3>
                    <p>Window10 설치 및 User Support<br />IT 비용 및 전표 관리</p>
                </MiniBox>
                <MiniBox>
                    <MdBusinessCenter className='icon' />
                    <span>2022.04 ~ 2022.09</span>
                    <h3>이너웨이브</h3>
                    <p>성모병원의 모바일 앱과 웹 관리 <br />정부과제인 금연 DTx의 Web 대시보드 개발 및 사용자 테스트 <br />금연 DTx의 App 사용자 테스트<br />성모병원의 오픈데이터 포탈 메인화면 개발</p>
                </MiniBox>

            </CareerBox>
        </Wrapper>
    )
}

export default About;