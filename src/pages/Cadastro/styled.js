import styled from "styled-components";

// export const NOME = styled.{TAG} `{estilização}`

export const Form = styled.section`
  width: 210px;
  height: 375px;
  background: rgba(23, 28, 35, 0.7);
  margin: auto;
  border-radius: 40px;
  color: #fff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.3);

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 320px) {
    width: 250px;
  }

  @media (min-width: 425px) {
    width: 325px;
  }

  @media (min-width: 768px) {
    width: 350px;
  }

  @media (min-width: 1024px) {
    width: 400px;
    height: 400px;
  }

  h1 {
    text-align: center;
    font-size: 21px;
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

    label {
      display: flex;
      flex-direction: column;
      width: 85%;

      input {
        width: 100%;
        padding: 10px;
        border: 1px solid #171c23;
        border-radius: 10px;
        background: #12131b;
        color: #fff;
      }
    }

    button {
      margin-top: 15px;
      width: 85%;
      height: 35px;
      border: 1px solid #171c23;
      border-radius: 10px;
      background: #32ab6a;
      cursor: pointer;
    }
  }
`;
