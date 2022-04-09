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

export const Sobre = Styled.h1`
    font-style: normal;
    font-weight: bold;
    line-height: 40px;
    color:#eee;
    font-size: 3.5rem;
    
`;

/* <header> */

export const Header = Styled.div`
    min-height: 100vh;
    background: url("${Background}") no-repeat center center/cover;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ContainerHeader = Styled.div`
    border: solid 6px #fff;
    border-radius:20px;
    width: 70%;
    max-width: fit-content;
    height: auto;

    box-shadow: 5px 5px 20px #000;
    background-color: #0009 ;
    display:flex;
    flex-direction:column;
    /* justify-content:center; */
    align-items:center;
    padding:10px;
    margin-top:110px;
    margin-bottom:20px;

    @media (max-width: 550px) {
        width: 90%;
    }

    p{
        font-size: 1.5rem;
        font-style: normal;
        font-weight: bold;
        line-height: 30px;
        color:#eee;
        margin:30px;
        text-align:center;

        @media (max-width: 550px) {
        font-size: 15px;
        line-height: 20px;
        margin:30px 10px;
        text-align:center;
        
    }
        
    }

`;

export const ImageHeader = Styled.img`
        width: 200px;
        height: 210px;
        border: 1px solid #eee;
        border-radius: 50%;
        object-fit: cover;   
        margin-top:20px;
`;
