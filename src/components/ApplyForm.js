import { useForm } from 'react-hook-form';
import { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from '@emailjs/browser';
import { useMediaQuery } from 'react-responsive';

function ApplyForm() {
  const [tALength, setTALength] = useState('');
  const [isSent, setIsSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const GlobalStyle = createGlobalStyle`
    html, body{
      font-family: 'Dongle', sans-serif;
      padding : 0;
      font-size : 20px;
    }
  `;

  const sendApplication = (data) => {
    emailjs.send(
      'service_whka7id',
      'template_zko9o7d',
      data,
      'CGu8t6QHOde4ocUiq'
    );
  };

  const isMobile = useMediaQuery({
    query: `( max-width: 500px)`,
  });
  const isDesktop = useMediaQuery({ query: `(min-width: 501px)` });

  return (
    <>
      <GlobalStyle />
      {isSent === true ? (
        <FormDiv>
          <p>지원신청이 완료 되었습니다.</p>
          <p>지원 내용을 검토 후 연락 드리겠습니다. 감사합니다.</p>
        </FormDiv>
      ) : (
        <>
          {isDesktop && (
            <FormDiv>
              <Form
                onSubmit={handleSubmit((data) => {
                  sendApplication(data);
                  setIsSent(true);
                })}
              >
                <TitleDiv>
                  <h1 style={{ margin: 0 }}>동아리 지원서</h1>
                </TitleDiv>
                <FormDivMain>
                  <WritingDiv>
                    <LabelText htmlFor="name">이름</LabelText>
                    <FormInputS
                      id="name"
                      {...register('name', { required: true })}
                      placeholder="이름을 입력해주세요."
                    />
                    {errors.name?.type === 'required' && (
                      <ErrorMessage role="alert">
                        이름을 입력해주세요.
                      </ErrorMessage>
                    )}
                  </WritingDiv>
                  <WritingDiv>
                    <LabelText htmlFor="age">나이</LabelText>
                    <FormInputS
                      id="age"
                      {...register('age', { required: true })}
                      placeholder="나이를 입력해주세요. *남성일 경우 군필 여부도!"
                    />
                    {errors.age?.type === 'required' && (
                      <ErrorMessage role="alert">
                        나이를 입력해주세요.
                      </ErrorMessage>
                    )}
                  </WritingDiv>
                  <WritingDiv>
                    <LabelText htmlFor="major">학과</LabelText>
                    <FormInputS
                      id="major"
                      {...register('major', { required: true })}
                      placeholder="학과 혹은 전공을 입력해주세요."
                    />
                    {errors.major?.type === 'required' && (
                      <ErrorMessage role="alert">
                        학과를 입력해주세요.
                      </ErrorMessage>
                    )}
                  </WritingDiv>
                  <WritingDiv>
                    <LabelText htmlFor="major">학번</LabelText>
                    <FormInputS
                      id="studentNumber"
                      {...register('studentNumber', { required: true })}
                      placeholder="학번을 입력해주세요."
                    />
                    {errors.studentNumber?.type === 'required' && (
                      <ErrorMessage role="alert">
                        학번을 입력해주세요.
                      </ErrorMessage>
                    )}
                    {}
                  </WritingDiv>
                  <WritingDiv>
                    <LabelText htmlFor="hobby">취미 및 하는 게임</LabelText>
                    <FormInputS
                      id="hobby"
                      {...register('hobby', { required: true })}
                      placeholder="취미 및 하는 게임을 입력해주세요."
                    />
                    {errors.hobby?.type === 'required' && (
                      <ErrorMessage role="alert">
                        취미를 입력해주세요.
                      </ErrorMessage>
                    )}
                  </WritingDiv>
                  <WritingDiv>
                    <LabelText htmlFor="where">주로 게임하는 장소</LabelText>
                    <br />
                    <CheckBox
                      type="checkbox"
                      {...register('where', { required: true })}
                      value="집"
                      label="집"
                    />
                    <CheckBox
                      type="checkbox"
                      {...register('where', { required: true })}
                      value="피시방"
                      label="피시방"
                    />

                    {errors.where?.type === 'required' && (
                      <ErrorMessage role="alert">
                        장소를 선택해주세요.
                      </ErrorMessage>
                    )}
                  </WritingDiv>
                  <WritingDiv>
                    <LabelText htmlFor="call">연락처</LabelText>
                    <FormInputS
                      id="call"
                      {...register('call', { required: true })}
                      placeholder="전화번호 혹은 카카오톡 ID를 적어주세요"
                    />
                    {errors.call?.type === 'required' && (
                      <ErrorMessage role="alert">
                        연락처를 입력해주세요.
                      </ErrorMessage>
                    )}
                  </WritingDiv>

                  <WritingDiv>
                    <LabelText htmlFor="introduce">
                      자기소개 및 하고 싶은 말
                    </LabelText>
                    <DivTextarea>
                      <FormTextarea
                        as="textarea"
                        id="introduce"
                        maxLength="400"
                        rows="10"
                        cols="50"
                        {...register('introduce', { required: true })}
                        placeholder=" 400자 이내로 입력해주세요.
                    짧아도 괜찮습니다."
                        onChange={(e) => setTALength(e.target.value.length)}
                      />
                      <span>{tALength === '' ? 0 : tALength} / 400자</span>
                      <br />
                      {errors.introduce?.type === 'required' && (
                        <ErrorMessage role="alert">
                          글을 입력해주세요.
                        </ErrorMessage>
                      )}
                    </DivTextarea>
                  </WritingDiv>
                  <SubmitBtn type="submit">지원하기</SubmitBtn>
                </FormDivMain>
              </Form>
            </FormDiv>
          )}
          {isMobile && (
            <MFormDiv>
              <Form
                onSubmit={handleSubmit((data) => {
                  sendApplication(data);
                  setIsSent(true);
                })}
              >
                <MTitleDiv>
                  <h1 style={{ margin: 0 }}>동아리 지원서</h1>
                </MTitleDiv>
                <MFormDivMain>
                  <MWritingDiv>
                    <MLabelText htmlFor="name">이름</MLabelText>
                    <MFormInputS
                      id="name"
                      {...register('name', { required: true })}
                      placeholder="이름을 입력해주세요."
                    />
                    {errors.name?.type === 'required' && (
                      <MErrorMessage role="alert">
                        이름을 입력해주세요.
                      </MErrorMessage>
                    )}
                  </MWritingDiv>
                  <MWritingDiv>
                    <MLabelText htmlFor="age">나이</MLabelText>
                    <MFormInputS
                      id="age"
                      {...register('age', { required: true })}
                      placeholder="나이  * 남성은 군필 여부도!"
                    />
                    {errors.age?.type === 'required' && (
                      <MErrorMessage role="alert">
                        나이를 입력해주세요.
                      </MErrorMessage>
                    )}
                  </MWritingDiv>
                  <MWritingDiv>
                    <MLabelText htmlFor="major">학과</MLabelText>
                    <MFormInputS
                      id="major"
                      {...register('major', { required: true })}
                      placeholder="학과 혹은 전공"
                    />
                    {errors.major?.type === 'required' && (
                      <MErrorMessage role="alert">
                        학과를 입력해주세요.
                      </MErrorMessage>
                    )}
                  </MWritingDiv>
                  <MWritingDiv>
                    <MLabelText htmlFor="major">학번</MLabelText>
                    <MFormInputS
                      id="studentNumber"
                      {...register('studentNumber', { required: true })}
                      placeholder="학번"
                    />
                    {errors.studentNumber?.type === 'required' && (
                      <MErrorMessage role="alert">
                        학번을 입력해주세요.
                      </MErrorMessage>
                    )}
                    {}
                  </MWritingDiv>
                  <MWritingDiv>
                    <MLabelText htmlFor="hobby">취미 및 하는 게임</MLabelText>
                    <MFormInputS
                      id="hobby"
                      {...register('hobby', { required: true })}
                      placeholder="취미 및 하는 게임"
                    />
                    {errors.hobby?.type === 'required' && (
                      <MErrorMessage role="alert">
                        취미를 입력해주세요.
                      </MErrorMessage>
                    )}
                  </MWritingDiv>
                  <MWritingDiv>
                    <MLabelText htmlFor="where">주로 게임하는 장소</MLabelText>
                    <br />
                    <CheckBox
                      type="checkbox"
                      {...register('where', { required: true })}
                      value="집"
                      label="집"
                    />
                    <CheckBox
                      type="checkbox"
                      {...register('where', { required: true })}
                      value="피시방"
                      label="피시방"
                    />

                    {errors.where?.type === 'required' && (
                      <MErrorMessage role="alert">
                        장소를 선택해주세요.
                      </MErrorMessage>
                    )}
                  </MWritingDiv>
                  <MWritingDiv>
                    <MLabelText htmlFor="call">연락처</MLabelText>
                    <MFormInputS
                      id="call"
                      {...register('call', { required: true })}
                      placeholder="전화번호 혹은 카카오톡 ID"
                    />
                    {errors.call?.type === 'required' && (
                      <MErrorMessage role="alert">
                        연락처를 입력해주세요.
                      </MErrorMessage>
                    )}
                  </MWritingDiv>

                  <MWritingDiv>
                    <MLabelText htmlFor="introduce">
                      자기소개 및 하고 싶은 말
                    </MLabelText>
                    <MDivTextarea>
                      <MFormTextarea
                        as="textarea"
                        id="introduce"
                        maxLength="400"
                        rows="10"
                        cols="50"
                        {...register('introduce', { required: true })}
                        placeholder=" 400자 이내로 입력해주세요.  짧아도 괜찮습니다."
                        onChange={(e) => setTALength(e.target.value.length)}
                      />
                      <span style={{ fontSize: '7px' }}>
                        {tALength === '' ? 0 : tALength} / 400자
                      </span>
                      <br />
                      {errors.introduce?.type === 'required' && (
                        <MErrorMessage role="alert">
                          글을 입력해주세요.
                        </MErrorMessage>
                      )}
                    </MDivTextarea>
                  </MWritingDiv>
                  <MSubmitBtn type="submit">지 원 하 기</MSubmitBtn>
                </MFormDivMain>
              </Form>
            </MFormDiv>
          )}
        </>
      )}
    </>
  );
}

export default ApplyForm;

//////// Desktop
const FormDiv = styled.div`
  background-color: #bac6f1;
  height: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
`;

const TitleDiv = styled.div`
  text-align: center;
  margin-bottom: 20px;
  font-size: 50px;
`;

const FormDivMain = styled.div`
  background-color: white;
  display: grid;
  justify-content: center;
  width: 700px;
  padding-top: 50px;
  border-radius: 25px;
`;

const LabelText = styled(Form.Label)`
  font-size: 30px;
`;

const WritingDiv = styled.div`
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const FormInputS = styled(Form.Control)`
  border: none;
  border: 1px solid palevioletred;
`;

const FormTextarea = styled(Form.Control)`
  border: none;
  border: 1px solid palevioletred;
  padding: 5px;
  margin-right: 7px;
  border-radius: 7px;
  width: 400px;
`;

const DivTextarea = styled.div`
  // display: flex;
  // align-items: end;
`;

const ErrorMessage = styled.p`
  margin-top: 10px;
  color: red;
`;

const SubmitBtn = styled(Button)`
  color: palevioletred;
  font-size: 1em;
  margin: 1em auto;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 20px;
  background-color: white;
  width: 520px;
  height: 50px;
  font-weight: bold;
`;

const CheckBox = styled(Form.Check)`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  input {
    margin: 0 5px 1px 0;
  }
`;

//////// Mobile
const MFormDiv = styled(FormDiv)`
  background-color: #bac6f1;
  height: 100%;
  padding: 20px;
  display: flex;
  width: 100vw;
  justify-content: center;
`;

const MTitleDiv = styled(TitleDiv)`
  text-align: center;
  margin-bottom: 20px;
  font-size: 40px;
`;

const MFormDivMain = styled(FormDivMain)`
  background-color: white;
  display: grid;
  justify-content: center;
  width: 350px;
  padding-top: 50px;
  border-radius: 25px;
`;

const MLabelText = styled(LabelText)`
  font-size: 20px;
`;

const MWritingDiv = styled(WritingDiv)`
  margin-bottom: 10px;
  padding-bottom: 5px;
  margin-left: 15%;
  // width: 300px;
  width: 70%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const MFormInputS = styled(FormInputS)`
  border: none;
  border: 1px solid palevioletred;
  width: 90%;
  font-size: 20px;
`;

const MFormTextarea = styled(FormTextarea)`
  border: none;
  border: 1px solid palevioletred;
  padding: 5px;
  margin-right: 7px;
  border-radius: 7px;
  width: 80%;
  font-size: 13px;
`;

const MDivTextarea = styled(DivTextarea)`
  // display: flex;
  // align-items: end;
`;

const MErrorMessage = styled(ErrorMessage)`
  margin-top: 5px;
  color: red;
`;

const MSubmitBtn = styled(SubmitBtn)`
  color: palevioletred;
  font-size: 1em;
  margin: 1em auto;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 20px;
  background-color: white;
  width: 200px;
  height: 50px;
  font-weight: bold;
`;
