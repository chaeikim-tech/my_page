import React from 'react';
import { styled } from 'styled-components';
import { MdBusinessCenter } from "react-icons/md";


const Wrapper = styled.div`
    height: 80vh;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap; 
    margin-bottom: 8rem;
`;


const CareerBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0 0 10px;
    @media (max-width: 650px) {
        flex-direction: column;
    }
`

const MiniBox = styled.div`
    width: 300px;
    height: 310px;
    margin: 40px;
    padding: 0 40px;
    border-left: 5px solid #fff;
    position: relative;
    span {
        font-size: 16px;
        font-weight: 500;
        background-color: #222;
        color: #fff;
        border-radius: 50px;
        padding: 10px 30px;
        margin: 10px;
        @media (max-width: 850px) {
        font-size: 12px;
        padding: 10px 25px;
    }   
    }
    h3{
        font-size: 30px ;
        font-weight: 500;
        color: #fff;
        padding-top: 25px;
        @media (max-width: 850px) {
        font-size: 20px;
        }   
    }
    p{
        font-size: 18px;
        color: #eee;
        padding: 20px 0;
        @media (max-width: 850px) {
        font-size: 14px;
        }   
    }
    .icon{
        position: absolute;
        top:-15px;
        left: -25px;
        height: 50px;
        width: 50px;
        padding: 10px;
        border-radius: 50%;
        line-height: 30px;
        text-align: center;
        color: #fff;
        background-color: #FDA403;
        @media (max-width: 850px) {
        height: 45px;
        width: 45px;
        }
    }
    @media (max-width: 850px) {
        flex-basis: 100%;
        margin: 40px;
        height: 200px;
    }   
`



function About() {
    return (
        <Wrapper id='about'>
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