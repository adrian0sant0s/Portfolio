import React from "react";
import { useHistory } from "react-router-dom";

import { BiLeftArrow } from "react-icons/bi";

import ImgConversor from "../../assets/cconversor.png";
import ImgBurguer from "../../assets/burguer.png";
import LojaDeSom from "../../assets/lojaDeSom.png";
import Spotfy from "../../assets/Spotfy.png";
import Aéreo from "../../assets/Aéreo-barato.png";

import {
  Navbar,
  ContainerNavbar,
  Button,
  Project,
  Header,
  ContainerGallery,
  ContainerP,
  GalleryItens,
  Image,
} from "./styles";

function Projects() {
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
          <Project>Projetos</Project>
        </ContainerNavbar>
      </Navbar>

      <Header>
        <ContainerGallery>
          <GalleryItens>
            <Image alt="img-Conversor" src={ImgConversor} />
            <ContainerP>
              <p>
                Conversor de moedas. <br /> Coverta do Real para Dolar, Euro e
                Bitcoin.
                <br /> /Html, Css e JS./
              </p>
              <a
                href="https://conversor-de-moedas-adrianosantos.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Clique para saber mais.
              </a>
            </ContainerP>
          </GalleryItens>
          <GalleryItens>
            <Image alt="img-Burguer" src={ImgBurguer} />
            <ContainerP>
              <p>
                Cadastro de pedidos(Hamburgueria). <br /> Adicione ou remova
                pedidos. <br /> /React js e Node js/
              </p>
              <a
                href="https://github.com/adrian0sant0s/cadastro-de-pedidos-lanchonete-FrontEnd"
                target="_blank"
                rel="noreferrer"
              >
                Click para saber mais.
              </a>
            </ContainerP>
          </GalleryItens>
          <GalleryItens>
            <Image alt="img-LojaDeSom" src={LojaDeSom} />
            <ContainerP>
              <p>
                Loja de som automotivo. <br /> Página de vendas de auto
                falantes.
                <br /> /Html e Css/
              </p>
              <a
                href="https://loja-de-som-automotivo.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Click para saber mais.
              </a>
            </ContainerP>
          </GalleryItens>
          <GalleryItens>
            <Image alt="img-Aereo-barato" src={Aéreo} />
            <ContainerP>
              <p>
                Aéreo-barato. <br /> página de vendas de passagens aéreas
                <br /> /Html, Css e JS/
              </p>

              <a
                href="https://passagens-aereas-baratas.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Click para saber mais.
              </a>
            </ContainerP>
          </GalleryItens>
          <GalleryItens>
            <Image alt="img-Spotfy" src={Spotfy} />
            <ContainerP>
              <p>
                Spotify. <br /> Clone da pagina inicial do Spotify.
                <br /> /Html e Css/
              </p>
              <a
                href="https://clone-spotify-learn.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Click para saber mais.
              </a>
            </ContainerP>
          </GalleryItens>
        </ContainerGallery>
      </Header>
    </>
  );
}

export default Projects;
