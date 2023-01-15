import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ApplyForm from '../components/ApplyForm';

function Home() {
  const [islogin, setIsLogin] = useState(false);

  const applyAndcontact = (e) => {
    e.preventDefault();
    e.target.innerText === '지원하기'
      ? console.log('지원하기')
      : console.log('문의하기');
  };

  return (
    <>
      {islogin ? null : (
        <Body>
          <Freshman>
            <ButtonBox>
              <ApplyBtn onClick={(e) => applyAndcontact(e)}>
                <Link to="/apply" style={{ textDecoration: 'none' }}>
                  지원하기
                </Link>
              </ApplyBtn>
              <ContactBtn onClick={(e) => applyAndcontact(e)}>
                문의하기
              </ContactBtn>
            </ButtonBox>
          </Freshman>
        </Body>
      )}
    </>
  );
}

export default Home;

const Body = styled.div`
  display: flex;
  justify-content: center;
`;

const Freshman = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  width: 700px;
  height: 1000px;
  background-image: url('./pukyong-club.jpg');
  background-size: cover;
  background-potision: center;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 500px;
  margin-bottom: 150px;
`;

const ApplyBtn = styled.button`
  width: 100px;
  height: 50px;
  background-color: red;
  border-radius: 50px;
  font-size: 15px;
  border: 1px solid;
  transition: background-color 0.5s;
  &:hover {
    background-color: yellow;
    cursor: pointer;
  }
`;

const ContactBtn = styled.button`
  width: 100px;
  height: 50px;
  background-color: red;
  border-radius: 50px;
  font-size: 15px;
  border: 1px solid;
  transition: background-color 0.5s;
  &:hover {
    background-color: yellow;
    cursor: pointer;
  }
`;
