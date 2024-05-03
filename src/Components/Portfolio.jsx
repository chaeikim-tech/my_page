import React from 'react';
import { styled } from 'styled-components';


const Wrapper = styled.div`
    height: 100vh;
`;

const PortTitle = styled.h1`
    color: yellow;
    text-align: center;
    margin: 0 6rem;
    font-size: 3rem;
    font-weight: bold;
    padding: 2rem 0;
    border-bottom: 0.1rem solid #fff4;
`

const PortBox = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

const MiniBox = styled.div`
    width: 70rem;
    height: 60vh;
    background-color: #222;
    text-align: start;
    padding: 2rem;
    margin: 2rem;
    div {
        font-size: 3rem;
        color: yellow;
        margin-bottom: 1rem;
    }
    span {
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




function Portfolio() {
    return (

        <Wrapper id='portfolio'>
            <PortTitle>Portfolio</PortTitle>
            <PortBox>
                <MiniBox>
                    <div>Trello Clone</div>
                    <span>https://trello-clone-two-sigma.vercel.app/</span>
                    <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
                    <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
                    <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
                    <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=ffd35b" />
                    <img src="https://img.shields.io/badge/react.js-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
                </MiniBox>
            </PortBox>
        </Wrapper>
    )
}

export default Portfolio;