import Styled from "styled-components";

import Background from "../../assets/background.jpg";

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

    @media (max-width: 500px) {
    justify-content:space-around;
    width: 100%;
    }
`;

export const Logo = Styled.h1`
    font-size: 2.3rem;

    @media (max-width: 900px) {
    font-size: 1.8rem;
    }

    @media (max-width: 450px) {
    font-size: 1.5rem;
    flex-wrap:wrap;
    }
`;

export const ContainerLinks = Styled.div`
    display: flex;
    gap: 80px;

    @media (max-width: 650px) {
        gap: 30px
    }
    
    @media (max-width: 550px) {
    display:flex ;
    flex-direction:column;
    gap:5px;
    }

    @media (max-width: 450px) {
        gap: 9px
    }
`;

export const Links = Styled.a`
    text-decoration: none;

    font-style: normal;
    font-weight: bold;
    color:#eee;
    font-size: 1.8rem;

    @media (max-width: 900px) {
    font-size:1.5rem;
    }

    @media (max-width: 700px) {
    font-size:1.2rem;
    }

    @media (max-width: 450px) {
    font-size: 1rem;
    }

    &:hover{
        transform: scale(1.1);
        transition: transform 0.5s;
    }

`;

/* <header> */

export const Header = Styled.div`
    height: 100vh;
    background: url("${Background}") no-repeat center center/cover;
    background-color: rgba(0, 0, 0, 0.4);
    background-blend-mode: color;

     p{
        position: absolute;
        left: 50%;
        top:95% ;
        transform: translate(-50%);
        color: white;
        font-size:1.5rem;

        @media (max-width: 600px) {
        font-size:1rem;
        }

        @media (max-width: 400px) {
        font-size:0.8rem;
        }
    }
`;

export const ContainerHeader = Styled.div`
    display: flex;
    justify-content: space-around;
   
    align-items: center;
    
    height: 100%;
    flex-wrap:wrap;

    @media (max-width: 450px) {
    height:80%;
    padding-top: 200px ;
    gap: 15px;
    }

    @media (max-width: 550px) {
        margin-right: 20px;
        margin-left: 20px;

    }
`;

export const ContainerOptions = Styled.div`
    display: flex;
    flex-direction: column;
    align-items:flex-start;
    gap: 30px;    

    @media (max-width: 550px) {
        margin-right: 20px;
    }

    @media (max-width: 470px) {
        gap: 5px;
    }

`;

export const ImageHeader = Styled.img`
    border-radius: 50%;
    border: 2px solid white;

    height: auto;
    width: 280px;

    @media (max-width: 700px) {
    width: 250px;
    height: auto;
    }

    @media (max-width: 470px) {
    width: 200px;
    height: auto;
    }

    
`;

export const Button = Styled.button`
    cursor: pointer;
    font-style: normal;
    font-weight: bold;
    line-height: 40px;
    color:#eee;
    font-size: 2rem;

    background:none;
    border:none;

    @media (max-width: 470px) {
        font-size: 1.5rem;
    }

    &:hover{
    transform: scale(1.5);
    transition: transform 0.5s ;

    @media (max-width: 580px) {
        transform: scale(1.2)
    }

    @media (max-width: 450px) {
        transform: scale(1.1)
    }

    }

    &:active{
    color: #111;
    }
`;
