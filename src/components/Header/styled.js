import styled from "styled-components";

import { Link } from "react-router-dom";

export const HeaderNav = styled.header`
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 10;
  background: rgba(22, 27, 34, 0.5);

  a {
    font-weight: bold;
    color: #fff;
    font-size: 18px;
    font-family: "Gemunu Libre", sans-serif;
  }
`;

export const Nav = styled.nav`
  z-index: 10;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.3);

  #active {
    transform: translateX(0);
  }

  @media (min-width: 769px) {
    justify-content: space-around;
    padding: 0;
  }

  ul {
    display: flex;
    gap: 30px;

    @media (max-width: 768px) {
      position: absolute;
      right: 0;
      background: #171c23;

      display: flex;
      padding: 180px 30px 20px 30px;
      flex-direction: column;
      align-items: center;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
      transition: transform 0.3s ease-in;
      transform: translateX(100%);

      li {
        height: 20px;

        display: flex;
        align-items: center;
      }
    }
  }
`;

export const NewLink = styled(Link)`
  z-index: 10;
  margin-top: 5px;
  font-size: 20px;

  ::after {
    content: "";
    display: block;
    border-bottom: 2px solid #c9f3e3;
    margin-top: 5px;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  :hover::after {
    transform: scale(1);
  }
`;

export const ButtonNav = styled.div`
  z-index: 10;

  @media (min-width: 769px) {
    display: none;
  }
`;
