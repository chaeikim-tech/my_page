import styled from 'styled-components';
import { GiHamburgerMenu } from "react-icons/gi";
import { ImMenu } from "react-icons/im";
import React, { useState } from 'react';



const Wrapper = styled(ImMenu)`
    position: fixed;
    top: 15px;
    right: 15px;
    background: #333;
    color: yellow;
    cursor: pointer;
    font-size: 50px;
    padding: 5px 12px;
    z-index:1000; 
    display:none;
    @media only screen and (max-width: 1200px){
        display: block;
    }
`;



function MenuBar() {
    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
    }
    return (
        <>
            <Wrapper onClick={toggleMenu} />
        </>
    )
}

export default MenuBar;
