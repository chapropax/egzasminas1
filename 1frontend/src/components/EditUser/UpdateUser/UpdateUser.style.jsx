import styled from 'styled-components';

export const StyledContainer = styled.div`
  height: 90vh;
  width: 100%;
  background-color: #5d8d7c;
  display: flex;
  flex-direction: column;
  p {
    text-align: center;
  }
  h1 {
    text-align: center;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    input {
      width: 30%;
    }
  }
`;
