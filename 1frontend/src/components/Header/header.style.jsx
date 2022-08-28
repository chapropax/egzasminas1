import styled from 'styled-components';

export const HeaderContainer = styled.div`
  height: 100px;
  width: 100%;
  background-color: #5f685f;
  display: flex;
  justify-content: center;
  align-items: center;

  nav {
    ul {
      display: flex;
      gap: 30px;

      li {
        list-style-type: none;

        color: white;

        .guestpage {
          font-size: 26px;
          font-weight: 600;

          color: white;
          text-decoration: none;
          &:hover {
            color: #000000;
          }
        }
      }
    }
  }
`;
