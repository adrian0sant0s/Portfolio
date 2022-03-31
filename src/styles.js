import Styled from "styled-components";

import Background from "./assets/background.jpg";

export const Navbar = Styled.div`
    width:100%;
    background: #111;
    color:#eee;
    height: 80px;
    position: fixed;
`;

export const ContainerNavbar = Styled.div`
    width: 80%;
    height: 100%;

    display: flex;
    margin:auto;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = Styled.h1`
    font-size: 2.5rem;
`;

export const Ul = Styled.ul`
    display: flex;
    text-transform: uppercase;
    list-style: none;
`;

export const Options = Styled.li`
    padding:10px;
`;

/* <header> */

export const Header = Styled.div`
    height: 100vh;

    background: url("${Background}") no-repeat center center/cover;
    background-color: rgba(0, 0, 0, 0.4);
    background-blend-mode: color;
`;

export const ContainerHeader = Styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100vh;
`;

export const ImageHeader = Styled.img`
    border-radius: 50%;
    border: 1px solid black;

    height: 350px;
    width: 350px;

`;

export const ContainerLinks = Styled.div`
    display: flex;
    flex-direction: column;
    gap: 100px;
`;

export const Links = Styled.a`
    padding-right: 10px ;
    
    text-decoration: none;

    font-style: normal;
    font-weight: bold;
    font-size: 34px;
    line-height: 40px;
    color:#eee;
    font-size: 3rem;

`;
