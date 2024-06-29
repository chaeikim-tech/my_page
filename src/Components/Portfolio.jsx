import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import CarouselItem from './Carousel/CarouselItem.jsx';
import testImg from '../Img/trelloImg.jpg';
import { FaSquareGithub } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";

const Wrapper = styled.div`
    height: 90vh;
    margin: 80px auto;
    padding: 0 100px;
    position: relative;
`;

const PortBox = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 2rem;
`

const NextBtn = styled(IoMdArrowRoundForward)`
    position: absolute;
    top: 40%;
    right: 0;
    transform: translateY(-50%);
    padding: 10px;
    margin-right: 30px;
    font-size: 50px;
    color: #fff;
    border-radius: 50%;
    cursor: pointer;
    background: #212ea0;
`

const BackBtn = styled(IoMdArrowRoundBack)`
    position: absolute;
    top: 40%;
    right: auto;
    left:0;
    transform: translateY(-50%);
    padding: 10px;
    margin-left: 15px;
    font-size: 50px;
    color: #fff;
    border-radius: 50%;
    cursor: pointer;
    background: #212ea0;
`;

const Slider = styled.div`
    overflow: hidden;
`

const BigLine = styled.ul`
    display: flex;
    width: 200%;
    overflow-x: hidden;
    transition: 0.5s;
`

const MedLine = styled.li`
    list-style: none;
    padding: 20px;
    width: 45%;
    @media (max-width: 1200px) {
        padding: 10px;
    }
`

const Slide = styled.div`
    width: 480px;
    height: 500px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
    padding: 40px;
    border-radius: 10px;
    color: #676767;
    line-height: 1.4;
    background: #333;
    @media (max-width: 1200px) {
        width: 380px;
        height: 400px;
        padding: 20px;
    }
    @media (max-width: 700px) {
        padding: 20px;
    }

`
const ProImg = styled.img`
    width: 400px;
    height: 250px;
    @media (max-width: 1200px) {
        width: 340px;
        height: 200px;
    }
`

const UserInfo = styled.div`
    margin-bottom: 20px;
    font-size: 30px;
    div{
        display: flex;
        align-items: center;
    }
    span{
            margin-left: 7px;
            color: white;
    }
    @media (max-width: 1200px) {
        margin-bottom: 10px;
        font-size: 22px;
        font-weight: 500;
    }
`

const UserDetail = styled.h3`
    color: #EEE;
`;

function Portfolio() {
    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if (tx > -60) {
            tx -= 50;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = () => {
        if (tx < -80) {
            tx += 50;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    return (

        <Wrapper id='portfolio' className='testimonials'>
            {/* <PortBox>
                <CarouselItem />
            </PortBox> */}
            <NextBtn onClick={slideForward} />
            <BackBtn onClick={slideBackward} />
            <Slider>
                <BigLine ref={slider}>
                    <MedLine>
                        <Slide className='slide'>
                            <UserInfo className='user-info'>
                                <ProImg src={testImg} />
                                <div>
                                    <UserDetail>Trello Clone</UserDetail>
                                    <span>
                                        <Link to={`https://github.com/chaeikim-tech/trello_clone`} target="_blank">
                                            <FaSquareGithub style={{ width: '2rem', height: '2rem' }} />
                                        </Link>
                                    </span>
                                    <span>
                                        <Link to={`https://trello-clone-two-sigma.vercel.app/`} target="_blank">
                                            <FaExternalLinkAlt style={{ width: '2rem', height: '2rem' }} />
                                        </Link>
                                    </span>
                                </div>
                            </UserInfo>
                            <p>To Do를 작성한 뒤 수정 및 삭제가 가능하도록 만들었습니다.
                                To Do의 상태에 따라 Board의 이동이 가능하며 To Do를 클릭하거나 이동할 시 ToDo의 색상과 Board의 색상이 바뀌도록 하였습니다.</p>
                        </Slide>
                    </MedLine>
                    <MedLine>
                        <Slide className='slide'>
                            <UserInfo className='user-info'>
                                <ProImg src={testImg} />
                                <div>
                                    <UserDetail>Netflix Clone</UserDetail>
                                    <span>
                                        <Link to={`https://github.com/chaeikim-tech/trello_clone`} target="_blank">
                                            <FaSquareGithub style={{ width: '2rem', height: '2rem' }} />
                                        </Link>
                                    </span>
                                    <span>
                                        <Link to={`https://trello-clone-two-sigma.vercel.app/`} target="_blank">
                                            <FaExternalLinkAlt style={{ width: '2rem', height: '2rem' }} />
                                        </Link>
                                    </span>
                                </div>
                            </UserInfo>
                            <p>TV series와 영화 데이터들을 API 호출을 통해 정보를 불러와 framer-motion을 이용해 컨텐츠들의 목록을 보여주고, styled-components를 이용해 스타일링을 해주었습니다. react-hook-form를 사용하여 Search 화면을 구현했습니다.</p>
                        </Slide>
                    </MedLine>
                    <MedLine>
                        <Slide className='slide'>
                            <UserInfo className='user-info'>
                                <div>
                                    <UserDetail>To Be Continued...</UserDetail>
                                </div>
                            </UserInfo>
                        </Slide>
                    </MedLine>
                    <MedLine>
                        <Slide className='slide'>
                            <UserInfo className='user-info'>
                                <div>
                                    <UserDetail>To Be Continued... </UserDetail>
                                </div>
                            </UserInfo>
                        </Slide>
                    </MedLine>
                </BigLine>
            </Slider>
        </Wrapper>
    )
}

export default Portfolio;