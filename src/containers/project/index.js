import React from "react";
import { useHistory } from "react-router-dom";
import Carousel from "react-elastic-carousel";

import { BiLeftArrow } from "react-icons/bi";

import ImgConversor from "../../assets/conversor.jpg";
import ImgBurguer from "../../assets/codeBurguer.jpg";
import LojaDeSom from "../../assets/lojaDeSom.png";
import Spotfy from "../../assets/Spotfy.png";
import Aéreo from "../../assets/Aéreo-barato.png";
import ToDoList from "../../assets/toDoList.png";

import {
  Navbar,
  ContainerNavbar,
  Button,
  Project,
  Header,
  Item,
  Image,
} from "./styles";

function Projects() {
  const history = useHistory();

  function GoBackPage() {
    history.push("/");
  }

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 5 },
  ];

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
        <Carousel
          itemsToShow={1}
          style={{ width: "90%" }}
          breakPoints={breakPoints}
        >
          <Item>
            <p>To do list</p>
            <Image src={ToDoList} alt="foto to do list" />
            <a
              href="https://peaceful-kitten-9855ae.netlify.app/"
              target="blank"
            >
              <input type="button" value="Click para saber mais" />
            </a>
          </Item>

          <Item>
            <p>Conversor de moedas</p>
            <Image src={ImgConversor} alt="foto do conversor" />
            <a
              href="https://conversor-de-moedas-adrianosantos.netlify.app/"
              target="blank"
            >
              <input type="button" value="Click para saber mais" />
            </a>
          </Item>

          <Item>
            <p>Cadastro de pedidos</p>
            <Image src={ImgBurguer} alt="foto da hamburgueria" />
            <a
              href="https://github.com/adrian0sant0s/cadastro-de-pedidos-lanchonete-FrontEnd"
              target="blank"
            >
              <input type="button" value="Click para saber mais" />
            </a>
          </Item>

          <Item>
            <p>Loja de som</p>
            <Image src={LojaDeSom} alt="foto da loja de som" />
            <a
              href="https://loja-de-som-automotivo.netlify.app/"
              target="blank"
            >
              <input type="button" value="Click para saber mais" />
            </a>
          </Item>

          <Item>
            <p>Clone do spotfy</p>
            <Image src={Spotfy} alt="foto do clone do spotfy" />
            <a href="https://clone-spotify-learn.netlify.app/" target="blank">
              <input type="button" value="Click para saber mais" />
            </a>
          </Item>

          <Item>
            <p>Página de passagens aéreas</p>
            <Image src={Aéreo} alt="foto da página de passagens aéreas" />
            <a
              href="https://passagens-aereas-baratas.netlify.app/"
              target="blank"
            >
              <input type="button" value="Click para saber mais" />
            </a>
          </Item>
        </Carousel>
      </Header>
    </>
  );
}

export default Projects;
