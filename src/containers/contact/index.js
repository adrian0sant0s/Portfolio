import React from "react";
import { useHistory } from "react-router-dom";

import { BiLeftArrow } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { SiWhatsapp } from "react-icons/si";
import { BsTelephoneForward } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";

import BackgroundImage from "../../assets/foto.jpeg";

import {
  Navbar,
  ContainerNavbar,
  Button,
  Contact,
  Header,
  ContainerInfo,
  ContainerLinks,
  Links,
  AlingItems,
  Footer,
} from "./styles";

function Contacts() {
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
          <Contact>Contatos</Contact>
        </ContainerNavbar>
      </Navbar>

      <Header>
        <ContainerInfo>
          <img alt="Foto-Adriano" src={BackgroundImage} />
          <p>Adriano Santos</p>
          <p>Dev Front-End jr.</p>
          <ContainerLinks>
            <Links
              href="mailto:adrianosantosr1@gmail.com?subject=subject text"
              target="_blank"
            >
              <AlingItems>
                <AiOutlineMail /> E-Mail
              </AlingItems>
            </Links>

            <Links
              href="https://api.whatsapp.com/send?phone=5561994645795"
              target="_blank"
            >
              <AlingItems>
                <SiWhatsapp /> Whatsapp
              </AlingItems>
            </Links>

            <Links href="tel:55 61 994645795" target="_blank">
              <AlingItems>
                <BsTelephoneForward /> Telefone
              </AlingItems>
            </Links>

            <Links
              href="https://www.linkedin.com/in/adriano-jose-rodrigues-dos-santos-1046b0220/"
              target="_blank"
            >
              <AlingItems>
                <AiOutlineLinkedin /> Linkedin
              </AlingItems>
            </Links>

            <Links href="https://github.com/adrian0sant0s" target="_blank">
              <AlingItems>
                <FiGithub /> GitHub
              </AlingItems>
            </Links>
          </ContainerLinks>
          <Footer>Clique sobre os icones para saber mais.</Footer>
        </ContainerInfo>
      </Header>
    </>
  );
}

export default Contacts;
