import styled from "styled-components";

// export const NOME = styled.{TAG} `{estilização}`

export const Div = styled.div`
  width: 80vw;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 30px;
    justify-content: space-between;
    max-width: 900px;
  }
`;

export const Img = styled.img`
  width: 200px;
  margin: 20px 0;

  @media (min-width: 768px) {
    width: 230px;
  }
`;

export const Text = styled.div`
  text-align: center;
  max-width: 400px;

  div {
    margin: 30px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    img {
      width: 50px;
    }
  }
`;

export const Title = styled.h1`
  color: white;
  margin-bottom: 10px;
  font-size: 30px;

  @media (min-width: 768px) {
    font-size: 36px;
    margin-bottom: 20px;
  }
`;

export const Paragrafo = styled.p`
  color: white;
  font-size: 20px;

  @media (min-width: 768px) {
    font-size: 28px;
  }
`;
