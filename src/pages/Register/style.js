import styled from "styled-components";

export const DivStyled = styled.div`
  font-size: 20;
  width: 100%;
  max-width: 1200px;
  min-height: var(--heightMain);
  margin: 0 auto;
  background-color: white;
  padding: 50px 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: var(--fontSecondary);
  div {
    margin-bottom: 15px;
  }
  .titleForm {
    text-align: center;
    h1 {
      font-size: 27px;
      margin-bottom: 15px;
    }
    span {
      margin-left: 5px;
      color: var(--primaryColor);
      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
  .form {
    display: flex;
    flex-direction: column;
    width: 250px;
  }
  footer {
    font-size: 14px;
    text-align: center;
    padding: 15px;

    > div {
      border-bottom: 1px solid lightgray;
      width: 80%;
      margin: 0 auto;
    }

    p {
      margin: 15px 0;
    }
    span {
      color: var(--primaryColor);
    }
  }
`;
