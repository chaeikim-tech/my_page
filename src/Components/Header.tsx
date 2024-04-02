import React from 'react';
import styled from 'styled-components';
import profile from '../profile.jpg';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    position: fixed;
    top:0;
    left: 0;
    z-index: 1000;
    height: 100%;
    width: 35rem;
    background: #1a1a1a;
    display: flex;
    align-items: center;
    justify-center: center;
    flex-flow: column;
    text-align: center;    
`;

const User = styled.div`

`;

const Name = styled.h3`
    font-size: 3.5rem;
    color:#fff;
`;

const ProfileImg = styled.img`
    height: 17rem;
    width: 17rem;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;
    border: .7rem solid yellow;
`;

const JobTitle = styled.p`
    font-size: 2rem;
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
    font-size: 2rem;
    border-radius: 5rem;
    &:hover {
        background: yellow;
        color: #333;
    }
`


const Header = () => {
    return (
        <Wrapper>
            <User>
                <ProfileImg />
                <Name>Chaei Kim</Name>
                <JobTitle>front end developer</JobTitle>
            </User>
            <Nav>
                <ul>
                    <li><StyledLink to="/">Home</StyledLink></li>
                    <li><StyledLink to="/about">About</StyledLink></li>
                    <li><StyledLink to="/edu">Education</StyledLink></li>
                    <li><StyledLink to="/portfolio">portfolio</StyledLink></li>
                    <li><StyledLink to="/contact">contact</StyledLink></li>
                </ul>
            </Nav>
        </Wrapper>
    )
}



export default Header;