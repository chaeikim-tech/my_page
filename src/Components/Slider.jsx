import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaSquareGithub } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import TrelloImg from "../Img/trelloImg.jpg"


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';


const Wrapper = styled.div`
    height: 60vh;
    margin: 80px auto;
    padding: 0 100px;
    position: relative;
`;

const SwiperSt = styled(Swiper)`
    background: #eee;
    font-size: 14px;
    color: #000;
    padding: 0;
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    &.swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

/* const Img = styled.img`
        width: 75vw;
        height: 60vh;
        position: absolute;
        background-image: linear-gradient(rgba(0, 0, 0, 0), #111 92%),
    url(${TrelloImg});
        object-fit: fill;
`;
 */

/* const Img = styled.div`
    width: 75vw;
    height: 60vh;
    background-image: linear-gradient(rgba(0, 0, 0, 0), #111 92%),
    url(${TrelloImg});
    background-size: 100% 100%;
    background-position: 0% 0%;
    background-repeat: no-repeat;  
    &::after {
    content: "";
    display: block;
    padding-bottom: 141.5%;
    }
`;

const UserDetail = styled.h3`
    color: #EEE;
`;

const UserInfo = styled.div`
    position: relative;
    bottom: 50px;
    left: 10px;
    color: #EEE;
    margin-bottom: 20px;
    font-weight: 600;
    padding: 2% 0%;
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
 */

const CardPoster = styled.div`
  border-radius: 4px;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0), #111 92%),
    url(${TrelloImg});
  background-size: cover;
  &::after {
    content: "";
    display: block;
    padding-bottom: 141.5%;
  }
`;
const CardTitle = styled.div`
  overflow: hidden;
  top: -100px;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: 600;
  padding: 2% 0%;
  color: #EEE;
`;



const Slider = () => {

    return (
        <Wrapper id='portfolio'>
            <SwiperSt
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <CardPoster />
                    <CardTitle>왜 안돼</CardTitle>
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>

                {/* <SwiperSlide><Img src={TrelloImg} alt="img" />Slide 1</SwiperSlide>
                <SwiperSlide><Img src={Img2} alt="img" />Slide 2</SwiperSlide>
                <SwiperSlide><Img src={Img3} alt="img" />Slide 3</SwiperSlide>
                <SwiperSlide><Img src={Img3} alt="img" />Slide 4</SwiperSlide> */}
            </SwiperSt>
        </Wrapper>
    )

}

export default Slider;