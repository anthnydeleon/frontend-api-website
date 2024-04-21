import styled from "styled-components";

// export const NOME = styled.{TAG} `{estilização}`

export const Contend = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
  width: 100vw;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const Div = styled.div`
  margin: 0 auto;
  padding: 15px;
  border-radius: 10px;
  background: rgba(22, 27, 34, 0.7);
  box-shadow: 2px 4px 4px black;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media (min-width: 768px) {
    margin: 0;
  }
`;

export const DivTexto = styled.div`
  margin: 0 auto;
  padding: 10px;
  border-radius: 10px;
  background: rgba(22, 27, 34, 0.7);
  box-shadow: 2px 4px 4px black;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media (max-width: 300px) {
    margin: 0 10px;
  }

  @media (min-width: 768px) {
    width: 60vw;
    margin: 0;
  }
`;

export const ProfilePicture = styled.div`
  img,
  .teste {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    @media (min-width: 425px) {
      width: 220px;
      height: 220px;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 3px;
  width: 100%;

  textarea {
    background: #010409;
    color: #fff;
    width: 100%;
    height: 100px;
    font-size: 15px;
    padding: 5px;
    border: none;
    border-radius: 5px;
  }

  button {
    color: #fff;
    font-weight: bold;
    background: rgb(29 155 240);
    width: 80px;
    height: 30px;
    border-radius: 10px;
    margin-right: 3px;
    border: none;
    cursor: pointer;
  }
`;

export const Name = styled.h3`
  color: #fff;
`;

export const Message = styled.div`
  color: #fff;
  text-align: center;

  p {
    margin-top: 10px;
    border: 1px solid rgb(25 87 129);
    background: #010409;
    border-radius: 5px;
    padding: 5px;
    min-height: 20px;
  }
`;
