import React from 'react';
import { styled } from 'styled-components';
import { FiSend } from "react-icons/fi";



const Wrapper = styled.div`
    height: 100vh;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap; 
`;

const ContactRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;

const ContactBox = styled.div`
    flex: 1 1 30rem;
    padding: 4rem;
    padding-bottom: 0;

`

const Info = styled.div`

`

const EmailForm = styled.form`
    flex: 1 1 45rem;
    padding: 2rem;
    margin: 2rem;
    margin-bottom: 4rem;
    input,textarea{
        padding: 1rem;
        margin: 1rem 0;
        background: #3333;
        color: #fff;
        text-transform: none;
        font-size: 1.7rem;
        width:100%;

    }
    textarea{
        height: 15rem;
        resize:none;
    }
`


function Contact() {
    return (
        <Wrapper id='contact'>
            <h1><span>Contact</span> me</h1>
            <hr  />
            <ContactRow>
                <ContactBox>
                    <h3>contact info</h3>
                    <Info>
                        <h3>sb0234856@gmail.com</h3>
                        <h3>010-8753-5682</h3>
                        <h3>경기도 안산시 단원구</h3>
                    </Info>
                </ContactBox>
                <EmailForm>
                    <input type='text' placeholder='name' />
                    <input type='text' placeholder='email' />
                    <input type='text' placeholder='name' />
                    <textarea name='' cols={30} rows={10} className='message' placeholder='message' />
                    <button type='submit'>Send<FiSend /></button>
                </EmailForm>
            </ContactRow>
        </Wrapper>
    )
}

export default Contact;