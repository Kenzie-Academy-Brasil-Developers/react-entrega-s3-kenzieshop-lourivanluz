import styled from "styled-components";
export const HeaderStyled = styled.header`
  width: 100%;
  height: 10vh;
  background-color: red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  font-size: 20px;
  .container {
    max-width: 1200px;
    background-color: blue;
    margin: 0 auto;

    img {
      width: 200px;
    }

    .search {
      display: flex;
    }
    .category {
      display: flex;
      ul {
        display: flex;
        li {
          margin: 0 15px;
        }
      }
    }
  }
`;
