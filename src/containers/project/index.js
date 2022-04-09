import React from "react";
import { useHistory } from "react-router-dom";

import { BiLeftArrow } from "react-icons/bi";

import ImgConversor from "../../assets/cconversor.png";
import ImgBurguer from "../../assets/burguer.png";
import LojaDeSom from "../../assets/lojaDeSom.png";
import Spotfy from "../../assets/Spotfy.png";

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
              </p>
              <p className="paragrapMove">Click para saber mais.</p>
            </ContainerP>
          </GalleryItens>
          <GalleryItens>
            <Image alt="img-Burguer" src={ImgBurguer} />
            <ContainerP>
              <p>
                Cadastro de pedidos(Hamburgueria). <br /> Adicione ou remova
                pedidos.
              </p>
              <p className="paragrapMove">Click para saber mais.</p>
            </ContainerP>
          </GalleryItens>
          <GalleryItens>
            <Image alt="img-Conversor" src={ImgConversor} />
            <ContainerP>
              <p>
                Conversor de moedas. <br /> Coverta do Real para Dolar, Euro e
                Bitcoin.
              </p>
              <p className="paragrapMove">Click para saber mais.</p>
            </ContainerP>
          </GalleryItens>
          <GalleryItens>
            <Image alt="img-Conversor" src={ImgConversor} />
            <ContainerP>
              <p>
                Conversor de moedas. <br /> Coverta do Real para Dolar, Euro e
                Bitcoin.
              </p>
              <p className="paragrapMove">Click para saber mais.</p>
            </ContainerP>
          </GalleryItens>
          <GalleryItens>
            <Image alt="img-LojaDeSom" src={LojaDeSom} />
            <ContainerP>
              <p>
                Loja de som automotivo. <br /> Coverta do Real para Dolar, Euro
                e Bitcoin.
              </p>
              <p className="paragrapMove">Click para saber mais.</p>
            </ContainerP>
          </GalleryItens>
          <GalleryItens>
            <Image alt="img-Spotfy" src={Spotfy} />
            <ContainerP>
              <p>
                Conversor de moedas. <br /> Coverta do Real para Dolar, Euro e
                Bitcoin.
              </p>
              <p className="paragrapMove">Click para saber mais.</p>
            </ContainerP>
          </GalleryItens>
        </ContainerGallery>
      </Header>
    </>
  );
}

export default Projects;
