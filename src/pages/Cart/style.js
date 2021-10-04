import styled from "styled-components";

export const DivCart = styled.div`
  font-size: 20;
  width: 100%;
  max-width: 1200px;
  min-height: var(--heightMain);
  margin: 0 auto;
  background-color: var(--primaryColorLight);
  padding: 15px;
  justify-content: space-evenly;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (min-width: 720px) {
    flex-direction: row;
    justify-content: space-between;
  }

  .productlist {
    width: 100%;
    h1 {
      font-family: var(--fontMain);
      font-size: 20px;
      font-weight: 700;
      color: white;
    }
    @media (min-width: 720px) {
      & {
        width: 65%;
      }
    }
  }
  .informPrice {
    font-family: var(--fontMain);
    padding: 15px;
    .cardPrice {
      padding: 15px;
      background-color: white;
      border-radius: 12px;
      width: 100%;
      max-width: 300px;
      position: sticky;
      top: 120px;
      p {
        margin-bottom: 15px;
      }
    }
    @media (min-width: 720px) {
      width: 35%;
    }
  }
`;

export const SpanStyled = styled.span`
  font-size: 16px;
  color: ${({ auth = false }) => (auth ? "red" : "blue")};
  text-decoration: ${({ auth = false }) => (auth ? "line-through" : "none")};
`;
