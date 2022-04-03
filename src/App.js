import React from "react";

import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { GoProject } from "react-icons/go";
import { RiContactsFill } from "react-icons/ri";
import { RiContactsBook2Line } from "react-icons/ri";

import imagePessoal from "./assets/foto.jpeg";

import {
  Navbar,
  ContainerNavbar,
  Logo,
  ContainerOptions,
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
          <ContainerLinks>
            <Links href="https://github.com/adrian0sant0s">
              <BsGithub /> <></>
              GitHub
            </Links>

            <Links href="https://www.linkedin.com/in/adriano-jose-rodrigues-dos-santos-1046b0220/">
              <BsLinkedin /> <></>linkedin
            </Links>
          </ContainerLinks>
        </ContainerNavbar>
      </Navbar>

      <Header>
        <ContainerHeader>
          <ImageHeader alt="Foto-Adriano" src={imagePessoal} />
          <ContainerOptions>
            <p>
              <GoProject /> <></>
              Projetos
            </p>
            <p>
              <RiContactsBook2Line /> <></>
              Contato
            </p>
            <p>
              <RiContactsFill /> <></>
              Sobre
            </p>
          </ContainerOptions>
        </ContainerHeader>
      </Header>
    </>
  );
}

export default App;
