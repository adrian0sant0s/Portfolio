import Styled from "styled-components";

import Background from "../../assets/textura.jpg";

export const Navbar = Styled.div`
    width:100%;
    background: #111;
    color:#eee;
    height: 80px;
    position: fixed;
    z-index:1;
`;

export const ContainerNavbar = Styled.div`
    width: 80%;
    height: 100%;

    display: flex;
    margin:auto;
    justify-content: space-between;
    align-items: center;
`;

export const Button = Styled.button`
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    cursor: pointer;

    background: none;
    border: none;
    color: #eee;

    &:hover{
        transform: scale(1.1);
        transition: transform 0.5s ;
    }
`;

export const Contact = Styled.h1`
    font-style: normal;
    font-weight: bold;
    line-height: 40px;
    color:#eee;
    font-size: 3.5rem;

    @media (max-width: 500px) {
    font-size: 2.2rem;
    }
    
`;

/* <header> */

export const Header = Styled.div`
    min-height: 100vh;
    background: url("${Background}") no-repeat center center/cover;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ContainerInfo = Styled.div`
    border: solid 6px #fff;
    border-radius:20px;
    width: 45%;
    

    box-shadow: 5px 5px 20px #000;
    background-color: #0009 ;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding:10px;
    margin-top:110px;

    @media (max-width: 600px) {
        width: 80%;
        margin-bottom: 20px;
    }


    p{
        font-size: 1.8rem;
        font-style: normal;
        font-weight: bold;
        line-height: 40px;
        color:#eee;
        margin-top:10px;

        @media (max-width: 450px) {
            font-size: 1.2rem;
    }
    }
`;

export const ContainerLinks = Styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content: space-evenly;
    gap: 20px;
    border: 1px solid white;
    border-radius:20px;
    padding: 30px;
    margin: 10% 0;
`;

export const Links = Styled.a`
    
    gap:10px;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: bold;
    line-height: 40px;
    color:#eee;
    text-decoration: none;
    
    &:hover{
        transform: scale(1.2);
    }
`;

export const AlingItems = Styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`;

export const Footer = Styled.div`
    font-style: normal;
    color:#eee;
    text-align:center;
`;
