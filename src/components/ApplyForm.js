import { useForm } from 'react-hook-form';
import styled from 'styled-components';
function ApplyForm() {
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

  return (
    <FormDiv>
      <h1>동아리 지원서</h1>
      <p>동아리에 지원해주셔서 감사합니다.</p>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <div>
          <label for="name">이름</label>
          <input
            id="name"
            {...register('name', { required: true })}
            placeholder="이름"
          />

          <label for="age">나이</label>
          <input
            id="age"
            {...register('age', { required: true })}
            placeholder="나이"
          />
          <label for="major">학과</label>
          <input
            id="major"
            {...register('major', { required: true })}
            placeholder="학과"
          />
          <label for="major">학번</label>
          <input
            id="studentNumber"
            {...register('studentNumber', { required: true })}
            placeholder="학번"
          />
        </div>

        <input type="submit" />
      </form>
    </FormDiv>
  );
}

export default ApplyForm;

const FormDiv = styled.div`
  background-color: #bac6f1;
  height: 100vh;
`;
