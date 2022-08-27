import styled from 'styled-components';

export const HeaderContainer = styled.div`
  height: 100px;
  width: 100%;
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;

  nav {
    ul {
      display: flex;
      gap: 30px;

      li {
        text-decoration: none;
        list-style-type: none;
      }
    }
  }
`;
