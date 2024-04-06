import React from 'react';
import { styled } from 'styled-components';



const Wrapper = styled.div`
    height: 100vh;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap; 
    h2{
        font-size: 3rem;
        color:yellow;
    }
`;

const ContactBox = styled.div`
    flex: 1 1 30rem;
    padding: 4rem;
    padding-bottom: 0;

`

const Info = styled.div`

`

const EmailForm = styled.form`

`


function Contact() {
    return (
        <Wrapper id='contact'>
            
            <ContactBox>
                <h2>Contact Me</h2>
                <hr />
                <Info>
                    <h3>sb0234856@gmail.com</h3>
                    <h3>010-8753-5682</h3>
                    <h3>경기도 안산시 단원구</h3>
                </Info>
            </ContactBox>
            <EmailForm>
                <input type='text' placeholder='name' />
                <input type='text' placeholder='name' />
                <input type='text' placeholder='name' />
                <textarea name='' cols={30} rows={10} className='message' placeholder='message' />
                <button type='submit'>Send</button>
            </EmailForm>
        </Wrapper>
    )
}

export default Contact;