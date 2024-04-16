import React, { useRef } from 'react';
import { styled } from 'styled-components';
import { FiSend } from "react-icons/fi";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from '@emailjs/browser';




const Wrapper = styled.div`
    height: 100vh;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap; 
`;

const ConatactTitle = styled.h1`
    color:yellow;
    font-size: 2.9rem;
    font-weight: bold;
`

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

const InfoTitle = styled.h3`
    font-size: 3rem;
    padding-bottom: 2rem;
`

const Info = styled.div`
    h3{
        display: flex;
        align-items: center;
        font-size: 1.6rem;
        padding: 1rem 0;
        text-transform: lowercase;
        svg {
           padding-right: 0.7rem;
           color: yellow; 
        }
    }
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
        border: none;
    }
`
const Button = styled.button`
    background-color: #fff000;
    border-radius: 12px;
    color: #000;
    cursor: pointer;
    font-weight: bold;
    padding: 10px 15px;
    text-align: center;
    transition: 200ms;
    width: 12%;
    box-sizing: border-box;
    border: 0;
    font-size: 16px;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;

`


const Contact = () => {
    
    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_vmdiasd', 'template_jyfe5md', form.current, {
                publicKey: 'tr-Zne-iwU4jGflqq',
            })
            .then(
                () => {
                    alert('메일이 전송되었습니다.')
                    form.current.reset();
                    console.log('SUCCESS!');
                },
                (error) => {
                    alert('메일 전송에 실패하였습니다. 다시 시도해주세요.')
                    form.current.reset();
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <Wrapper id='contact'>
            <ConatactTitle>Contact me</ConatactTitle>
            <ContactRow>
                <ContactBox>
                    <InfoTitle>contact info</InfoTitle>
                    <Info>
                        <h3><FaEnvelope />sb0234856@gmail.com</h3>
                        <h3><FaPhone />010-8753-5682</h3>
                        <h3><FaMapMarkerAlt />경기도 안산시 단원구</h3>
                    </Info>
                </ContactBox>
                <EmailForm ref={form} onSubmit={sendEmail}>
                    <input type='text' name='from_name' required placeholder='Name' />
                    <input type='email' name='email' required placeholder='Email' />
                    <textarea name='message' required cols={30} rows={10} className='message' placeholder='Message' />
                    <Button type='submit'>Send<FiSend /></Button>
                </EmailForm>
            </ContactRow>
        </Wrapper>
    )

};

export default Contact;