import React from "react";
import { useHistory } from "react-router-dom";
import Carousel from 'react-elastic-carousel'

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
    { width: 1300, itemsToShow: 5 }
]

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
        <Carousel itemsToShow={1}
                style={{ width: '90%'}}
                breakPoints={breakPoints}>
          <Item >
              <Image src={ImgConversor} alt="foto da categoria" />
              <a href="https://conversor-de-moedas-adrianosantos.netlify.app/" target='blank'>
                  <input type="button" value="Click para saber mais"/>

              </a>
          </Item>

          <Item>
          <Image src={ImgBurguer} alt="foto da categoria" />
          <a href="https://github.com/adrian0sant0s/cadastro-de-pedidos-lanchonete-FrontEnd" target='blank'>
                  <input type="button" value="Click para saber mais"/>
              </a>
          </Item>  

          <Item>
            <Image src={LojaDeSom} alt="foto da categoria" />
            <a href="https://loja-de-som-automotivo.netlify.app/" target='blank'>
                  <input type="button" value="Click para saber mais"/>
              </a>
          </Item>  

          <Item>  
            <Image src={Spotfy} alt="foto da categoria" />
            <a href="https://passagens-aereas-baratas.netlify.app/" target='blank'>
                  <input type="button" value="Click para saber mais"/>
              </a>
          </Item>  

        <Item>
            <Image src={Aéreo} alt="foto da categoria" />
            <a href="https://clone-spotify-learn.netlify.app/" target='blank'>
                  <input type="button" value="Click para saber mais"/>
              </a>
        </Item>     
                

          
        </Carousel>
       
      </Header>
    </>
  );
}

export default Projects;
