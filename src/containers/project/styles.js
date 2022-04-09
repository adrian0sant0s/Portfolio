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
    border:none;
    color: #eee;

    &:hover{
        transform: scale(1.1);
        transition: transform 0.5s ;
    }
`;

export const Project = Styled.h1`
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
`;

export const ContainerGallery = Styled.div`

    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 2vw;
    padding: 100px 30px 0 30px;

`;

export const GalleryItens = Styled.div`
    width: 300px;
    height: 460px;

    border: 10px solid #FFF;
    box-shadow: 5px 5px 8px #0007;

    flex-grow: 1;
    cursor:pointer;
    transition: transform 1s linear ;

    display: flex;
    justify-content: center;
    align-items:space-between;
    flex-wrap:wrap;

    background-color: #1118;
    padding: 6px;

    text-align:center;

    &:hover{
        transform: scale(1.1);
        transition: transform 0.6s ;
    }
`;

export const ContainerP = Styled.div`

    p{
        font-style: normal;
        font-weight: bold;
        line-height: 20px;
        color:#eee;
        
        font-size:20px;
    }

    .paragrapMove{
    
        font-style: normal;
        color:#eee;
    
        font-size:16px;
    }
`;

export const Image = Styled.img`
    width: 100%;
    height: 80%;
    object-fit: cover;
`;
