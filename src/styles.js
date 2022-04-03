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

export const ContainerLinks = Styled.div`
    display: flex;
    gap: 80px;
`;

export const Links = Styled.a`
    text-decoration: none;

    font-style: normal;
    font-weight: bold;
    line-height: 40px;
    color:#eee;
    font-size: 1.5rem;

    &:hover{
        transform: scale(1.1);
        transition: transform 0.5s ;
    }

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
    gap: 150px;
    align-items: center;
    height: 100vh;
    
`;

export const ImageHeader = Styled.img`
    border-radius: 50%;
    border: 1px solid black;

    height: 350px;
    width: 350px;
`;

export const ContainerOptions = Styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    

    p{
        
        cursor: pointer;
        font-style: normal;
        font-weight: bold;
        line-height: 40px;
        color:#eee;
        font-size: 1.5rem;

        &:hover{
        transform: scale(1.5);
        transition: transform 0.5s ;
        }

    }
    
`;
