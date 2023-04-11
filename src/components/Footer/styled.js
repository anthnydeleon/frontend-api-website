import styled from "styled-components";

import { primaryColor, primaryDarkColor } from "../../config/colors";

export const FooterNav = styled.footer`
  background: rgba(22, 27, 34, 0.5);
  max-width: 100vw;
  min-height: 60px;
  color: #fff;
  font-family: "Gemunu Libre", sans-serif;

  > div {
    min-height: 60px;
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: space-around;
    padding: 20px 50px;

    div {
      display: flex;
      flex-direction: column;
      gap: 5px;

      @media (min-width: 680px) {
        flex-direction: row;
        gap: 20px;
      }
    }

    .redes {
      display: flex;
      align-items: center;
      flex-direction: row;
      gap: 5px;
    }
  }
`;
