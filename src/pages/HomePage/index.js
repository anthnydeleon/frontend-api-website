import React from "react";

import { Container } from "../../styles/GlobalStyles";
import { Img, Paragrafo, Title, Text, Div } from "./styled";

export default function HomePage() {
  return (
    <Container>
      <Div>
        <Img
          src="https://cdn-icons-png.flaticon.com/512/2620/2620993.png"
          alt="PixelArt gatinho 16bits"
        />
        <Text>
          <Title>Olá pessoal!</Title>
          <Paragrafo>
            Este site foi criado para aprimorar minhas habilidades com Front-End
            e Back-End usando ReactJs, Styled-Components e consumir uma API
            criada por mim.
          </Paragrafo>
          <div>
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
              alt="React logo"
            />
            <img
              src="https://www.daggala.com/static/228867c3668e439101821568a8a03b54/19ca5/sc.png"
              alt="CSS logo"
            />
            <img
              src="https://restfulapi.net/wp-content/uploads/rest.png"
              alt="APIREST logo"
            />
          </div>
        </Text>
      </Div>
    </Container>
  );
}
