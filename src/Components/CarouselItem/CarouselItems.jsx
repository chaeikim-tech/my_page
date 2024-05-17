import React, { useState } from 'react';
import styled from 'styled-components';
import { FaCircleChevronRight, FaCircleChevronLeft } from "react-icons/fa6";
import ItemsCarousel from 'react-items-carousel';
import Card from './Card.jsx';

const Wrapper = styled.div`
  padding: 0 20px;
  max-width: 1000px;
  margin: 0 auto;
`;

const Button = styled.button`
    border: none;
    border-radius: 50%;
    background-color: transparent;
    color: #fff;
    width: 60px;
    height: 60px;
    font-size: 35px;
    cursor: pointer;
`


function CarouselItems() {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;
    return (
        <Wrapper style={{ padding: `0 ${chevronWidth}px` }}>
            <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={1}
                gutter={20}
                rightChevron={
                    <Button type="button">
                        <FaCircleChevronRight />
                    </Button>
                }
                leftChevron={
                    <Button type="button">
                        <FaCircleChevronLeft />
                    </Button>
                }
                outsideChevron
                chevronWidth={chevronWidth}
            >
                <Card />
                <Card />
                <Card />
            </ItemsCarousel>
        </Wrapper>
    );
};

export default CarouselItems;