import styled, { createGlobalStyle } from "styled-components";
import { primaryColor, primaryDarkColor } from "../config/colors";
import "react-toastify/dist/ReactToastify.css";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    @import url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,400;0,700;1,400&family=Gemunu+Libre:wght@400;700&display=swap');
  }



  body {
    font-family: 'Gemunu Libre', sans-serif;
    background: #0d1117;
    background-image: url(background.svg);
    color: #fff;;
    max-width: 100vw;
  }

  a {
    text-decoration: none;
    color: ${primaryColor};
  }

  ul {
    list-style: none;
  }
`;

export const Container = styled.section`
  min-height: calc(100vh - 65px);
  padding-top: 100px;
`;
