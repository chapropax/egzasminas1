import styled from 'styled-components';

export const RegisterContainer = styled.div`
  width: 100%;
  height: 90vh;

  background-color: #748074;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    margin-bottom: 10px;
    display: flex;
    width: 300px;
  }
`;

export const RegisterContainerInput = styled.div`
  height: 500px;
  width: 400px;
  border-radius: 10px;
  margin: 0 auto;
  background-color: #556155;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  h1 {
    color: white;
  }
  .message {
    text-align: center;
    font-weight: 600;
    color: white;
  }
`;
