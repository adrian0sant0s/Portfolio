import React from "react";

import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import imagePessoal from "./assets/foto.jpeg";

import {
  Navbar,
  ContainerNavbar,
  Logo,
  Ul,
  Options,
  Header,
  ContainerHeader,
  ImageHeader,
  ContainerLinks,
  Links,
} from "./styles";

function App() {
  return (
    <>
      <Navbar>
        <ContainerNavbar>
          <Logo>Adriano Santos</Logo>
          <Ul>
            <Options>
              <p>Inicio</p>
            </Options>
            <Options>
              <p>Projetos</p>
            </Options>
            <Options>
              <p>Contato</p>
            </Options>
            <Options>
              <p>Sobre</p>
            </Options>
          </Ul>
        </ContainerNavbar>
      </Navbar>

      <Header>
        <ContainerHeader>
          <ImageHeader alt="Foto-Adriano" src={imagePessoal} />
          <ContainerLinks>
            <Links href="https://github.com/adrian0sant0s">
              <BsGithub></BsGithub> <></>
              GitHub
            </Links>

            <Links href="https://www.linkedin.com/in/adriano-jose-rodrigues-dos-santos-1046b0220/">
              <BsLinkedin></BsLinkedin> <></>linkedin
            </Links>
          </ContainerLinks>
        </ContainerHeader>
      </Header>
    </>
  );
}

export default App;
