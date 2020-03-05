import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background: #303846;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;

  main {
    text-align: center;

    img {
      border: 4px solid #09d3ac;
      border-radius: 50%;
      margin: 50px 0;
    }

    strong {
      color: #09d3ac;
      font-size: 32px;
    }

    p {
      font-size: 24px;
      color: #999;
    }
  }

  footer {
    height: 50px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 50px;

    svg {
      &:hover {
        color: #09d3ac !important;
        height: 40px;
        width: 40px;
        transition: 0.3s;
      }
    }
  }

  #error {
    font-size: 10em;
  }
`;
