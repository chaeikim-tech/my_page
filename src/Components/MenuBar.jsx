import styled from 'styled-components';
import { ImMenu } from "react-icons/im";
import React from 'react';



const Wrapper = styled(ImMenu)`
    position: fixed;
    top: 2rem;
    right: 2rem;
    background: #333;
    color:white;
    cursor: pointer;
    font-size: 3rem;
    padding: 0.2rem 0.8rem;
    z-index:1000; 
    display:none;
    @media only screen and (max-width: 1200px){
        display: block;
    }
`;



function MenuBar() {
    return (
        <>
            <Wrapper />
        </>
    )
}

export default MenuBar;
