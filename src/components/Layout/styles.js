import styled from "styled-components";

export const Container = styled.div`
  min-height: 93.2vh;
  background: #282a36;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;

  main {
    text-align: center;

    img {
      border: 4px solid #4ef579;
      border-radius: 50%;
      margin: 50px 0;
    }

    strong {
      color: #4ef579;
      font-size: 32px;
    }

    p {
      font-size: 24px;
      color: #999;
    }
  }

  footer {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 50px;

    svg {
      &:hover {
        color: #9e9e9e !important;
      }
    }
  }

  #error {
    font-size: 10em;
  }
`;
