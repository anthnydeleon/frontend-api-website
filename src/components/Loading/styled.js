import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  inset: 0px;
  max-width: 100vw;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  font-size: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      margin-left: 80px;
      width: 110px;
    }
  }
`;
