import styled from 'styled-components';

export const StyledAdmin = styled.div`
  width: 100%;
  min-height: 90vh;
  height: 100%;
  display: flex;
  background-color: #748074;
  justify-content: center;

  .container {
    max-width: 1280px;
    @media only screen and (min-width: 601px) {
      width: 90%;
    }
  }
`;

export const StyledTodo = styled.div`
  background-color: #748074;
  display: flex;
  width: 1280px;
  margin: 0 auto;
  gap: 10px;
  border-bottom: 1px solid black;
  &:hover {
    background-color: #2c312c;
    color: white;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
  @media only screen and (min-width: 601px) {
    width: 100%;
  }
`;
export const StyledExample = styled.div`
  background-color: #748074;
  padding-top: 50px;

  p {
    font-size: 18px;
    font-weight: 500;
  }
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
    width: 26%;
  }
  .date {
    width: 16%;
  }
  .time {
    width: 13%;
  }

  @media only screen and (max-width: 600px) {
    .name {
      width: 25%;
    }
    .email {
      width: 25%;
    }
    .date {
      width: 25%;
    }
    .time {
      width: 25%;
    }
  }
  @media only screen and (min-width: 601px) {
    .name {
      width: 25%;
    }
    .email {
      width: 25%;
    }
    .date {
      width: 25%;
    }
    .time {
      width: 25%;
    }
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

  p {
    font-weight: 400;
  }

  @media only screen and (max-width: 600px) {
    p {
      font-size: 14px;
    }
    .name {
      width: 24%;
    }
    .email {
      width: 50%;
    }
    .date {
      width: 16%;
    }
    .time {
      width: 10%;
    }
  }
  @media only screen and (min-width: 601px) {
    .name {
      width: 24%;
    }
    .email {
      width: 50%;
    }
    .date {
      width: 16%;
    }
    .time {
      width: 10%;
    }
  }
`;
export const StyledUP = styled.div`
  display: flex;
  width: 10%;
  gap: 10px;
  float: right;

  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 600px) {
    width: 100px;
  }
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
  @media only screen and (max-width: 600px) {
    height: 20px;
    width: 20px;
    i {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 11px;
    }
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
  @media only screen and (max-width: 600px) {
    height: 20px;
    width: 20px;
    i {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 11px;
    }
  }
`;
