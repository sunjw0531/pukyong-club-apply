import { useForm } from 'react-hook-form';
import { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from '@emailjs/browser';

function ApplyForm() {
  const [tALength, setTALength] = useState('');
  const [isSent, setIsSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);
  const GlobalStyle = createGlobalStyle`
    html, body{
      padding : 0;
      margin : 0 10px 0 10px;
    }
  `;

  const sendApplication = (data) => {
    emailjs.send(
      'service_887w5rd',
      'template_1uwp9sh',
      data,
      '5Kv_TZgP8i_GtHGJA'
    );
  };

  return (
    <>
      <GlobalStyle />
      {isSent === true ? (
        <FormDiv>
          <p>지원신청이 완료 되었습니다.</p>
          <p>지원 내용을 검토 후 연락 드리겠습니다. 감사합니다.</p>
        </FormDiv>
      ) : (
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
                  <ErrorMessage role="alert">이름을 입력해주세요.</ErrorMessage>
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
                  <ErrorMessage role="alert">나이를 입력해주세요.</ErrorMessage>
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
                  <ErrorMessage role="alert">학과를 입력해주세요.</ErrorMessage>
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
                  <ErrorMessage role="alert">학번을 입력해주세요.</ErrorMessage>
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
                  <ErrorMessage role="alert">취미를 입력해주세요.</ErrorMessage>
                )}
              </WritingDiv>
              <WritingDiv>
                <LabelText htmlFor="where">주로 게임하는 장소</LabelText>
                <br />
                <Form.Check
                  type="checkbox"
                  {...register('where', { required: true })}
                  value="집"
                  label="집"
                />
                <Form.Check
                  type="checkbox"
                  {...register('where', { required: true })}
                  value="피시방"
                  label="피시방"
                />

                {errors.where?.type === 'required' && (
                  <ErrorMessage role="alert">장소를 선택해주세요.</ErrorMessage>
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
                    <ErrorMessage role="alert">글을 입력해주세요.</ErrorMessage>
                  )}
                </DivTextarea>
              </WritingDiv>
            </FormDivMain>
            <SubmitBtn type="submit">지원하기</SubmitBtn>
          </Form>
        </FormDiv>
      )}
    </>
  );
}

export default ApplyForm;

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
`;

const FormDivMain = styled.div`
  background-color: white;
  display: grid;
  justify-content: center;
  width: 800px;
  padding-top: 30px;
`;

const LabelText = styled(Form.Label)`
  font-size: 20px;
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
  display: flex;
  align-items: end;
`;

const ErrorMessage = styled.p`
  color: red;
`;

const SubmitBtn = styled(Button)`
  color: palevioletred;
  font-size: 1em;
  margin-top: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  background-color: white;
  width: 800px;
  height: 50px;
`;
