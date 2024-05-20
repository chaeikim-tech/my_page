import React from 'react';
import { styled } from 'styled-components';
import CarouselItem from './Carousel/CarouselItem.jsx';

const Wrapper = styled.div`
    height: 100vh;
`;

const PortTitle = styled.h1`
    color: yellow;
    text-align: center;
    letter-spacing: .2rem;
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
    margin: 2rem;
`



function Portfolio() {
    return (

        <Wrapper id='portfolio'>
            <PortTitle>Portfolio</PortTitle>
            <PortBox>
                <CarouselItem />
            </PortBox>
        </Wrapper>
    )
}

export default Portfolio;