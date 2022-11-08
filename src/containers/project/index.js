import React from "react";
import { useHistory } from "react-router-dom";
import Carousel from "react-elastic-carousel";

import { BiLeftArrow } from "react-icons/bi";
import ListProjects from "../../data/ListProjects";

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
          {ListProjects.map((list) => {
            return (
              <Item>
                <p>{list.title}</p>
                <Image src={list.image} alt="foto do quiz" />
                <a href={list.projectLink} target="blank">
                  <input type="button" value="Click para saber mais" />
                </a>
              </Item>
            );
          })}
        </Carousel>
      </Header>
    </>
  );
}

export default Projects;
