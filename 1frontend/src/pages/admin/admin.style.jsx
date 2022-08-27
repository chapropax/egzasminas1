import styled from 'styled-components';

export const StyledAdmin = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #5d8d7c;
  justify-content: center;
`;

export const StyledTodo = styled.div`
  background-color: #5d8d7c;
  display: flex;
  width: 1280px;
  margin: 0 auto;
  gap: 10px;
`;
export const StyledText = styled.div`
  width: 90%;
  display: flex;
  border-bottom: 1px solid black;

  .name {
    width: 40%;
  }
  .email {
    width: 40%;
  }
  .date {
    width: 10%;
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
`;

export const StyledButtonDelete = styled.button`
  padding: 0px 20px;
  background-color: red;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
`;
export const StyledButtonUpdate = styled.button`
  padding: 0px 20px;
`;
