import styled from "styled-components";
export const HeaderStyled = styled.header`
  width: 100%;
  height: var(--heightHeader);
  background-color: var(--primaryColorDark);
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  font-size: 20px;
  font-family: var(--fontSecondary);
  position: sticky;
  top: 0;
  z-index: 5;

  .container {
    width: 100%;
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;

    .imgContainer {
      width: 80px;
      background-color: red;

      @media (min-width: 1023px) {
        & {
          width: 200px;
        }
      }
    }

    .search {
      display: flex;
      height: 50%;
      justify-content: space-between;

      .menuButton {
        font-size: 35px;
      }
      .inputHeader {
        position: absolute;
        left: 50%;
        top: 72%;
        transform: translate(-50%, -70%);
        bottom: 5px;
        transition: all 0.1s linear;
        @media (min-width: 720px) {
          & {
            top: 50%;
          }
        }
        .searchIcon {
          color: grey;
          position: absolute;
          left: 15px;
          top: 5px;
        }
        input {
          padding-left: 10px;
          width: 40px;
          height: 27px;
          border-radius: 15px;
          border: none;
          transition: all 0.1s linear;
          &:valid ~ button {
            display: block;
          }

          &:focus {
            outline: 0;
            width: 270px;
          }
          &:focus + span {
            display: none;
          }

          &::placeholder {
            color: transparent;
          }

          @media (min-width: 400px) {
            & {
              width: 270px;
            }
            &::placeholder {
              padding-left: 30px;
              color: grey;
            }
            &:focus::placeholder {
              color: transparent;
            }
          }
        }
        button {
          border: none;
          width: 50px;
          background-color: var(--primaryColorMidleDark);
          color: var(--colorFontlight);
          height: 27px;
          border-radius: 14px;
          position: absolute;
          right: 1px;
          top: 1px;
          display: none;
        }
      }
    }

    .listNav {
      display: flex;
      align-items: center;
      ul {
        display: flex;
        li {
          margin: 0 15px;
          cursor: pointer;
          display: flex;
          align-items: center;
        }
      }
    }
    .pages {
      position: absolute;
      top: 15px;
      right: 0;
      span {
        display: none;
      }
      .icon {
        font-size: 20px;
        margin-right: 5px;
        display: none;
        @media (min-width: 720px) {
          display: block;
        }
      }

      @media (min-width: 1023px) {
        span {
          display: block;
        }
      }
    }
    .category {
      height: 50%;
      justify-content: center;
      ul {
        display: none;
        @media (min-width: 720px) {
          display: flex;
        }
      }
    }

    @media (min-width: 720px) {
      .menuBurger {
        display: none;
      }
    }
  }
`;
