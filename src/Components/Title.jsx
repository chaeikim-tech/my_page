import React from 'react';
import styled from 'styled-components';



const PortTitle = styled.h1`
    color: yellow;
    text-align: center;
    letter-spacing: .2rem;
    margin: 0 95px;
    font-size: 50px;
    font-weight: bold;
    padding: 32px 0;
    border-bottom: 0.1rem solid #fff4;
    @media (max-width: 700px) {
        font-size: 30px;
        letter-spacing: 0.2px;
    }

`

const Title = ({ title }) => {
    return (
        <div className='title'>
            <PortTitle>{title}</PortTitle>
        </div>
    )
}

export default Title;