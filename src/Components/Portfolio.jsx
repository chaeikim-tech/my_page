import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { FaSquareGithub } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import trelloImg from '../Img/trelloImg.jpg';
import monImg from '../Img/monImg.jpg';
import tobe from '../Img/tobec.jpg';



const Wrapper = styled.div`
    margin: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 80vh;
    padding: 2rem;
    gap: 2rem;
    .container {
    display: flex;
    gap: 2rem;
  }
  @media (max-width: 1024px) {
    margin-bottom: 75rem;
    .container {
      flex-direction: column;
    }
  }
  @media(max-width: 780px) {
    margin-bottom: 60rem;
    .container {
      flex-direction: column;
    }
  }
  @media (max-width: 430px) {
    margin-bottom: 50rem;
    padding:0;
    .container {
      flex-direction: column;
    }
  }
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
      flex-direction: column;
      background-color: rgba(0, 0, 0, 0.3);
      border-bottom: 0.5rem transparent solid;
      transition: 0.3s ease-in-out;
      img {
        width: 99%;
      }  
  
`

const List = styled.div`
  padding: 1rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  span{
    display: flex;
  }
  h4{
    padding-right: 5px;
  }
  svg{
    margin-left: 5px;
  }
  p {
    font-size: 0.9rem;
    font-weight: 100;
    }
`

function Portfolio() {
  return (
    <Wrapper id='portfolio'>
      <div className="container">
        <Card>
          <img src={trelloImg} alt="Trello Image" />
          <List>
            <span>
              <h4>Trello Clone</h4>
              <Link to={`https://github.com/chaeikim-tech/trello_clone`} target="_blank">
                <FaSquareGithub style={{ width: '1rem', height: '1rem' }} />
              </Link>
              <Link to={`https://trello-clone-two-sigma.vercel.app/`} target="_blank">
                <FaExternalLinkAlt style={{ width: '1rem', height: '1rem' }} />
              </Link>
            </span>
            <p>
              To Do를 작성한 뒤 수정 및 삭제가 가능하도록 만들었습니다.<br />
              To Do의 상태에 따라 Board의 이동이 가능하며 To Do를 클릭하거나 이동할 시 ToDo의 색상과 Board의 색상이 바뀌도록 하였습니다.
            </p>
          </List>
        </Card>
        <Card>
          <img src={monImg} alt="Netflix Image" />
          <List>
            <span>
              <h4>Netflix Clone</h4>
              <Link to={`https://github.com/chaeikim-tech/monflix`} target="_blank">
                <FaSquareGithub style={{ width: '1rem', height: '1rem' }} />
              </Link>
              <Link to={`https://chaeikim-tech.github.io/monflix/`} target="_blank">
                <FaExternalLinkAlt style={{ width: '1rem', height: '1rem' }} />
              </Link>
            </span>
            <p>TV series와 영화 데이터들을 API 호출을 통해 정보를 불러와 framer-motion을 이용해 컨텐츠들의 목록을 보여주고,
              styled-components를 이용해 스타일링을 해주었습니다.
              react-hook-form를 사용하여 Search 화면을 구현했습니다.</p>
          </List>
        </Card>
        <Card>
          <img src={tobe} alt="To be continued.." />
          <List>
            <span>
              <h4>To be continued...</h4>
              <p> <br /> <br /> <br /> <br /></p>
            </span>
          </List>
        </Card>
      </div>
    </Wrapper>

  )
}


export default Portfolio;