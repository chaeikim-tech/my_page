import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaSquareGithub } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import trelloImage from "../../Img/trelloImg.jpg"


const Wrapper = styled.div`
    height: 60vh;
`
const MiniBox = styled.div`
    width: 70rem;
    height: 60vh;
    background-color: #222;
    text-align: start;
    padding: 2rem;
    margin: 2rem;
    Link {
        font-size: 1.2rem;
        background-color: #222;
        color: #fff;
        border-radius: 5rem;
        padding: 0.5rem 2.5rem
    }
    h5{
        font-size: 1.5rem ;
        color: white;
        margin-bottom:0.5rem;
    }
    img{
        padding-left: 0.5rem;
    }
`

const Title = styled.div`
    font-size: 3rem;
    color: yellow;
    margin-bottom: 2rem;
    span{
            margin-left: 1rem;
            color: white;
        }
`

const Contents = styled.div`
    display: flex;
    grid: auto-row / 1fr 1fr;
    gap: 2rem;
`;
const TrelloImg = styled.img`
    width: 25rem;
    height: 15rem;
`;

const Summary = styled.div`
    width: 23rem;
    font-size: 1.2rem;
`;

const StackBox = styled.div`
margin-top: 5rem;

`

function Card() {
    return (
        <Wrapper>
            <MiniBox>
                <Title>Trello Clone
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
                </Title>

                <Contents>
                    <TrelloImg src={trelloImage} />
                    <Summary>To Do를 작성한 뒤 수정 및 삭제가 가능하도록 만들었습니다.<br />To Do의 상태에 따라 Board의 이동이 가능하며 To Do를 클릭하거나 이동할 시 ToDo의 색상과 Board의 색상이 바뀌도록 하였습니다.</Summary>
                </Contents>
                <StackBox>
                    <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
                    <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
                    <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
                    <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=ffd35b" />
                    <img src="https://img.shields.io/badge/react.js-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
                </StackBox>
            </MiniBox>

        </Wrapper>
    )
}

export default Card;