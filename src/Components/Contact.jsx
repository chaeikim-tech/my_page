import React, { useRef } from 'react';
import { styled } from 'styled-components';
import { FiSend } from "react-icons/fi";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from '@emailjs/browser';


const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 25px auto;
    height: 75vh;
    padding: 10px;
    @media (max-width: 700px) {
        display: block;
    }
`;


const ContactRow = styled.div`
    flex-basis: 48%;
    padding: 40px;
    @media (max-width: 700px) {
        padding: 0 40px;
    }
`;

const ContactBox = styled.div`
    margin-left: 20px;
`

const InfoTitle = styled.h3`
    font-size: 35px;
    font-weight: 500;
    padding-bottom: 12px;
    @media (max-width: 700px) {
        font-size: 20px;
    }
`

const Info = styled.div`
    h3{
        display: flex;
        align-items: center;
        font-size: 25px;
        padding: 7px 0;
        text-transform: lowercase;
        svg {
           padding-right: 10px;
           color: yellow; 
        }
    @media (max-width: 700px) {
        font-size: 18px;
    }
    }
    
`

const EmailForm = styled.form`
    flex: 1 1 45rem;
    padding: 15px;
    margin: 15px;
    @media (max-width: 1024px) {
        padding:0;
    }
    input,textarea{
        display: block;
        width:100%;
        padding: 10px;
        margin: 10px 0;
        background: #3333;
        color: #fff;
        text-transform: none;
        font-size: 15px;
        resize:none;
        border: 2px solid #fff4;
    }
    textarea{
        height: 200px;
        resize:none;
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
    width: 40%;
    box-sizing: border-box;
    border: 0;
    font-size: 16px;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    @media (max-width: 700px) {
        font-size: 12px;
        margin-bottom: 40px;
    }
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
            <ContactRow>
                <ContactBox>
                    <InfoTitle>contact info</InfoTitle>
                    <Info>
                        <h3><FaEnvelope />sb0234856@gmail.com</h3>
                        <h3><FaPhone />010-8753-5682</h3>
                        <h3><FaMapMarkerAlt />경기도 안산시 단원구</h3>
                    </Info>
                </ContactBox>
            </ContactRow>
            <ContactRow>
                <EmailForm ref={form} onSubmit={sendEmail}>
                    <input type='text' name='from_name' required placeholder='Name' />
                    <input type='email' name='email' required placeholder='Email' />
                    <textarea name='message' required cols={30} rows={10} className='message' placeholder='Message' />
                    <Button type='submit'>Send   <FiSend /></Button>
                </EmailForm>
            </ContactRow>
        </Wrapper>
    )

};

export default Contact;