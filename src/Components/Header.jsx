import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import myImg from '../Img/myImg.jpg';


const Wrapper = styled.div`
    position: fixed;
    top:0;
    left: 0;
    z-index: 1000;
    height: 100%;
    width: 400px;
    background: #1a1a1a;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
    text-align: center;  
    @media only screen and (max-width: 1200px){
         transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    }
`;


const User = styled.div`
`;

const Name = styled.h3`
    font-size: 3rem;
    color:#fff;
`;

const ProfileImg = styled.img`
    height: 12rem;
    width: 12rem;
    border-radius: 50%;
    object-fit: cover;
    margin: 1rem;
    border: .7rem solid yellow;
`;

const JobTitle = styled.p`
    font-size: 1.5rem;
    color: #fff;
`;

const Nav = styled.nav`
    width: 100%;
    color: #fff;
    ul{
        list-style: none;
        padding: 1rem 3rem;
    }
`;

const StyledLink = styled(Link)`
    display: block;
    padding: 1rem;
    margin: 1.5rem 0;
    background: #333;
    color: #fff;
    font-size: 1.5rem;
    border-radius: 5rem;
    
    &:hover {
        background: yellow;
        color: #333;
        cursor: pointer;
    }

    &:active {
            background: yellow;
            color: #333
        }

`


const Header = () => {
    return (
        <Wrapper>
            <User>
                <ProfileImg src={myImg} />
                <Name>Chaei Kim</Name>
                <JobTitle>front end developer</JobTitle>
            </User>
            <Nav>
                <ul>
                    <li><StyledLink to="home" spy={true} smooth={true} duration={500}>Home</StyledLink></li>
                    <li><StyledLink to="about" spy={true} smooth={true} offset={-160} duration={500}>About</StyledLink></li>
                    <li><StyledLink to="portfolio" spy={true} smooth={true} offset={-200} duration={500}>portfolio</StyledLink></li>
                    <li><StyledLink to="contact" spy={true} smooth={true} offset={-200} duration={500}>contact</StyledLink></li>
                </ul>
            </Nav>
        </Wrapper>
    )
};



export default Header;