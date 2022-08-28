import styled from 'styled-components';

export const StyledAdmin = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #5d8d7c;
  justify-content: center;
`;
export const StyledError = styled.div`
  background-color: #5d8d7c;

  margin: 0;
  text-align: center;
  p {
    padding-top: 50px;
    margin: 0;
  }
`;
export const StyledTodo = styled.div`
  background-color: #5d8d7c;
  display: flex;
  width: 1280px;
  margin: 0 auto;
  gap: 10px;
  border-bottom: 1px solid black;
  &:hover {
    background-color: #5fbd9c;
  }
`;
export const StyledExample = styled.div`
  background-color: #5d8d7c;
  padding-top: 50px;
`;
export const StyledExampleInside = styled.div`
  border-bottom: 1px solid black;
  display: flex;
  margin: 0 auto;
  max-width: 1280px;
  .name {
    width: 37%;
  }
  .email {
    width: 24%;
  }
  .date {
    width: 16%;
  }
  .time {
    width: 13%;
  }
`;
export const StyledText = styled.div`
  width: 90%;
  display: flex;

  .name {
    width: 40%;
  }
  .email {
    width: 30%;
  }
  .date {
    width: 20%;
  }
  .time {
    width: 10%;
  }
`;
export const StyledUP = styled.div`
  display: flex;
  width: 10%;
  gap: 10px;
  float: right;

  justify-content: center;
  align-items: center;
`;

export const StyledButtonDelete = styled.button`
  height: 40px;
  width: 40px;

  border: 0;
  border-radius: 100px;
  cursor: pointer;

  i {
    font-size: 16px;
    color: black;
  }
`;
export const StyledButtonUpdate = styled.button`
  height: 40px;
  width: 40px;
  border: 0;
  border-radius: 100px;
  cursor: pointer;
  i {
    font-size: 16px;
    color: black;
  }
`;
