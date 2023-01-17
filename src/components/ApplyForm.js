import { useForm } from 'react-hook-form';
import { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import emailjs from '@emailjs/browser';

function ApplyForm() {
  const [tALength, setTALength] = useState('');
  const [isSent, setIsSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      major: '부경대학교',
      studentNumber: 20,
    },
  });

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
          <h1 style={{ margin: 0 }}>동아리 지원서</h1>
          <p>동아리에 지원해주셔서 감사합니다.</p>
          <form
            onSubmit={handleSubmit((data) => {
              sendApplication(data);
              setIsSent(true);
            })}
          >
            <div style={{ backgroundColor: '#F5F5DC' }}>
              <WritingDiv>
                <label for="name">이름</label>
                <FormInputS
                  id="name"
                  {...register('name', { required: true })}
                  placeholder="이름"
                />
              </WritingDiv>
              <WritingDiv>
                <label for="age">나이</label>
                <FormInputS
                  id="age"
                  {...register('age', { required: true })}
                  placeholder="나이"
                />
              </WritingDiv>
              <WritingDiv>
                <label for="major">학과</label>
                <FormInputS
                  id="major"
                  {...register('major', { required: true })}
                  placeholder="학과"
                />
              </WritingDiv>
              <WritingDiv>
                <label for="major">학번</label>
                <FormInputS
                  id="studentNumber"
                  {...register('studentNumber', { required: true })}
                  placeholder="학번"
                />
              </WritingDiv>
              <WritingDiv>
                <label for="hobby">취미</label>
                <FormInputS
                  id="hobby"
                  {...register('hobby', { required: true })}
                  placeholder="취미"
                />
              </WritingDiv>
              <WritingDiv>
                <label for="where">주로 게임하는 장소</label>
                <br />
                <input
                  type="checkbox"
                  {...register('where', { required: true })}
                  value="집"
                />
                집
                <input
                  type="checkbox"
                  {...register('where', { required: true })}
                  value="피시방"
                />
                피시방
              </WritingDiv>
              <WritingDiv>
                <label for="call">연락처</label>
                <FormInputS
                  id="call"
                  {...register('call', { required: true })}
                  placeholder="전화번호 혹은 카카오톡 ID를 적어주세요"
                />
              </WritingDiv>

              <WritingDiv>
                <label for="introduce">자기소개 및 하고 싶은 말</label>
                <DivTextarea>
                  <FormTextarea
                    id="introduce"
                    maxLength="400"
                    rows="10"
                    cols="50"
                    {...register('introduce', { required: true })}
                    placeholder="400자 이내로 입력해주세요."
                    onChange={(e) => setTALength(e.target.value.length)}
                  />
                  <span>{tALength === '' ? 0 : tALength} / 400자</span>
                </DivTextarea>
              </WritingDiv>
            </div>

            <button type="submit">지원하기</button>
          </form>
        </FormDiv>
      )}
    </>
  );
}

export default ApplyForm;

const FormDiv = styled.div`
  background-color: #bac6f1;
  height: 100vh;
  padding: 20px;
`;

const WritingDiv = styled.div`
  margin-bottom: 10px;
`;

const FormInputS = styled.input`
  border: none;
  border-bottom: 1px solid black;
  padding: 5px;
  margin-left: 5px;
  width: 250px;
`;

const FormTextarea = styled.textarea`
  border: none;
  border-bottom: 1px solid black;
  padding: 5px;
  margin-right: 7px;
`;

const DivTextarea = styled.div`
  display: flex;
  align-items: end;
`;
