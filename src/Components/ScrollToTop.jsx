import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineArrowUp } from "react-icons/ai";
import { Link } from 'react-scroll';


const Wrapper = styled.div`
  .none {
    opacity: 0;
    visibility: hidden;
  }
  a {
    position: fixed;
    bottom: 10px;
    right: 10px;
    background-color: white;
    padding: 1rem;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s ease-in-out;
    z-index: 1;
    svg {
      color: black;
      font-size: 1.3rem;
    }
  }
`;

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  window.addEventListener("scroll", () => {
    window.pageYOffset > 100 ? setVisible(true) : setVisible(false);
  });
  return (
    <Wrapper>
      <Link to="home" className={`${visible ? "block" : "none"}`}>
        <AiOutlineArrowUp />
      </Link>
    </Wrapper>
  );
}

export default ScrollToTop;