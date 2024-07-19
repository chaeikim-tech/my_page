import React from 'react';
import styled from 'styled-components';
import Git from '../Img/Logo/git.png'
import UbuntuImg from '../Img/Logo/ubuntu.png';
import Htmlcss from '../Img/Logo/htmlcss.png';
import JsImg from '../Img/Logo/javascript.png';
import ReactImg from '../Img/Logo/react.png';
import NodeImg from '../Img/Logo/node.png';
import TypeImg from '../Img/Logo/typescript.png';


const Wrapper = styled.div`
    height: 90vh;
    margin: 25px;
    padding: 10px;
    padding-bottom: 15px;
    @media (max-width: 671px) {
        margin-bottom: 300px;
    }
    @media (max-width: 426px) {
        margin-bottom: 950px;
    }
`;

const BoxContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(170px, 1fr));
    //grid-template-columns: repeat(auto-fit, minmax(170px,1fr));
    gap: 15px;
    @media (max-width: 671px) {
            grid-template-columns: repeat(2, minmax(170px, 1fr));
    }
    @media (max-width: 426px) {
            grid-template-columns: repeat(1, minmax(170px, 1fr));
    }
    
`;

const Box = styled.div`
    background:linear-gradient(#555353,#363535,#303030);
    box-shadow: inset(0 5px 1px rgba(0,0,0,0.35), 0 5px 5px rgba(0,0,0,0.5), 0 15px 25px rgba(0,0,0,0.35));
    border: 2px solid #222;
    border-radius: 5px;
    text-align: center;
    padding: 30px 20px;
    img{
        height: 80px;
    }
    h3{
        color: #eee;
        font-size: 22px;
        font-weight: 700;
        padding: 10px 0;
    }
`

function MySkill() {
    return (
        <Wrapper>
            <BoxContainer>
                <Box>
                    <img src={Htmlcss} />
                    <h3>Html  Css</h3>
                </Box>
                <Box>
                    <img src={JsImg} />
                    <h3>Javascript</h3>
                </Box>
                <Box>
                    <img src={ReactImg} />
                    <h3>React</h3>
                </Box>
                <Box>
                    <img src={TypeImg} />
                    <h3>Typescript</h3>
                </Box>
                <Box>
                    <img src={NodeImg} />
                    <h3>Node</h3>
                </Box>
                <Box>
                    <img src={Git} />
                    <h3>Git</h3>
                </Box>
                <Box>
                    <img src={UbuntuImg} />
                    <h3>Ubuntu</h3>
                </Box>

            </BoxContainer>
        </Wrapper>
    );
}

export default MySkill;