import React from "react";
import { useHistory } from "react-router-dom";

import { BiLeftArrow } from "react-icons/bi";

import imagePessoal from "../../assets/foto.jpeg";

import {
  Navbar,
  ContainerNavbar,
  Button,
  Sobre,
  Header,
  ContainerHeader,
  ImageHeader,
} from "./styles";

function More() {
  const history = useHistory();

  function GoBackPage() {
    history.push("/");
  }

  return (
    <>
      <Navbar>
        <ContainerNavbar>
          <Button onClick={GoBackPage}>
            <BiLeftArrow />
            Voltar
          </Button>
          <Sobre>Sobre</Sobre>
        </ContainerNavbar>
      </Navbar>

      <Header>
        <ContainerHeader>
          <ImageHeader alt="Foto-Adriano" src={imagePessoal} />
          <p>
            Olá meu nome é Adriano, sou desenvolvedor Front-End JR.
            <br /> Estou em busca de oportunidades e desafios, sempre procurando
            evoluir e adquirir conhecimentos.
            <br /> Atualmente tenho conhecimento nas seguintes tecnologias:{" "}
            <br />- Front-End = JavaScript, React.JS(React Hooks,
            React-router-dom Styled-components, Axios), Html, Css, Figma(Criar
            aplicações baseado em designers do figma).
            <br />
            - Back-End = Node.js, Express, consumo de APIs.
            <br /> Atualmente venho aprendendo e trabalhando com Docker, MySQL,
            Postbird, insomnia, versionamentos com Git e GitHub.
            <br />
            Atualmente estou em finalização do curso Dev Club, curso de
            desenvolvimento FullStack, alem das tecnologias citadas acima, nesse
            curso tambem aprendemos sobre React Native, Api Rest e outros,
            fizemos projetos de qualidade e perfomance simulando o dia a dia nas
            empresas. O curso tbm conta com uma comunidade onde podemos ajudar e
            trocar ideias com centenas de outros alunos.
          </p>
        </ContainerHeader>
      </Header>
    </>
  );
}

export default More;
