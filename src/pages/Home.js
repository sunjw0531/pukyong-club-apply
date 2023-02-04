import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Modal from '../components/Modal';
import Bg from '../images/pukyong-club.jpg';
import { useMediaQuery } from 'react-responsive';

function Home() {
  const [islogin, setIsLogin] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const showContact = (e) => {
    e.preventDefault();
    setShowModal((current) => !current);
  };

  const isMobile = useMediaQuery({
    query: `( max-width: 500px)`,
  });
  const isDesktop = useMediaQuery({ query: `(min-width: 501px)` });

  return (
    <>
      {islogin ? null : (
        <Body>
          {isDesktop && (
            <Freshman>
              <ButtonBox>
                <ApplyBtn>
                  <StyledLink to="/apply" style={{ textDecoration: 'none' }}>
                    지 원 하 기
                  </StyledLink>
                </ApplyBtn>
                <ContactBtn onClick={(e) => showContact(e)}>
                  문 의 하 기
                </ContactBtn>
              </ButtonBox>
              <Modal open={showModal} close={() => setShowModal(false)}>
                <a href="https://open.kakao.com/o/snPi4z2e">오픈 카카오톡</a>
              </Modal>
            </Freshman>
          )}
          {isMobile && (
            <MFreshman>
              <MButtonBox>
                <MApplyBtn>
                  <MStyledLink to="/apply" style={{ textDecoration: 'none' }}>
                    지 원 하 기
                  </MStyledLink>
                </MApplyBtn>
                <MContactBtn onClick={(e) => showContact(e)}>
                  문 의 하 기
                </MContactBtn>
              </MButtonBox>
              <Modal open={showModal} close={() => setShowModal(false)}>
                <a href="https://open.kakao.com/o/snPi4z2e">오픈 카카오톡</a>
              </Modal>
            </MFreshman>
          )}
        </Body>
      )}
    </>
  );
}

export default Home;
// Desktop
const Body = styled.div`
  display: flex;
  justify-content: center;
  /////////////////
  height: 100vh;
  width: 100vw;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  display: block;
  padding: 10px;
`;

const Freshman = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  width: 700px;
  height: 1000px;
  background-image: url(${Bg});
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
  width: 120px;
  height: 50px;
  border-radius: 50px;
  font-size: 30px;
  border: 2px solid black;
  transition: background-color 0.5s;
  &:hover {
    background-color: yellow;
    cursor: pointer;
  }
  font-family: 'Dongle', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  a {
    color: black;
  }
`;

const ContactBtn = styled(ApplyBtn)``;

// Mobile
const MStyledLink = styled(Link)`
  text-decoration: none;
  display: block;
  padding: 10px;
`;

const MFreshman = styled(Freshman)`
  display: flex;
  justify-content: center;
  align-items: end;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-image: url(${Bg});
  background-repeat: no-repeat;
  background-position: center center;
  backgorund-size: 100% 100%;
`;

const MButtonBox = styled(ButtonBox)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 500px;
  margin-bottom: 80px;
`;

const MApplyBtn = styled(ApplyBtn)`
  width: 100px;
  height: 40px;
  border-radius: 50px;
  font-size: 20px;
`;

const MContactBtn = styled(MApplyBtn)``;
