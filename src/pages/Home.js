import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Modal from '../components/Modal';

function Home() {
  const [islogin, setIsLogin] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const showContact = (e) => {
    e.preventDefault();
    setShowModal((current) => !current);
  };

  return (
    <>
      {islogin ? null : (
        <Body>
          <Freshman>
            <ButtonBox>
              <ApplyBtn>
                <Link to="/apply" style={{ textDecoration: 'none' }}>
                  지원하기
                </Link>
              </ApplyBtn>
              <ContactBtn onClick={(e) => showContact(e)}>문의하기</ContactBtn>
            </ButtonBox>
            <Modal open={showModal} close={() => setShowModal(false)}>
              <a href="https://www.naver.com">오픈 카카오톡</a>
            </Modal>
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

const ContactBtn = styled(ApplyBtn)``;
