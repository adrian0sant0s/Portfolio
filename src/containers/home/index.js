import React from "react";
import { useHistory } from "react-router-dom";

import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { GoProject } from "react-icons/go";
import { RiContactsFill } from "react-icons/ri";
import { RiContactsBook2Line } from "react-icons/ri";

import imagePessoal from "../../assets/foto.jpeg";

import {
  Navbar,
  ContainerNavbar,
  Logo,
  ContainerOptions,
  Header,
  ContainerHeader,
  ImageHeader,
  Button,
  ContainerLinks,
  Links,
} from "./styles";

function App() {
  const history = useHistory();

  function NavProject() {
    history.push("/project");
  }
  function NavContact() {
    history.push("/contact");
  }
  function NavMore() {
    history.push("/more");
  }

  return (
    <>
      <Navbar>
        <ContainerNavbar>
          <Logo>Adriano Santos</Logo>
          <ContainerLinks>
            <Links href="https://github.com/adrian0sant0s" target="_blank">
              <BsGithub /> <></>
              GitHub
            </Links>

            <Links
              href="https://www.linkedin.com/in/adriano-jose-rodrigues-dos-santos-1046b0220/"
              target="_blank"
            >
              <BsLinkedin /> <></>linkedin
            </Links>
          </ContainerLinks>
        </ContainerNavbar>
      </Navbar>

      <Header>
        <ContainerHeader>
          <ImageHeader alt="Foto-Adriano" src={imagePessoal} />
          <ContainerOptions>
            <Button onClick={NavProject}>
              <GoProject />
              <></> Projetos
            </Button>
            <Button onClick={NavContact}>
              <RiContactsBook2Line />
              <></> Contato
            </Button>
            <Button onClick={NavMore}>
              <RiContactsFill />
              <></> Sobre
            </Button>
          </ContainerOptions>
        </ContainerHeader>
      </Header>
    </>
  );
}

export default App;
