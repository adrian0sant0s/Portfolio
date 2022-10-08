import Styled from "styled-components";

import Background from "../../assets/textura.jpg";

export const Navbar = Styled.div`
    width:100%;
    background: #111111;
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
    display: flex;
    justify-content: center;
    align-items: center;

    .rec.rec-arrow {
        background-color: black;
        color: #efefef;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }

    

    .rec.rec-arrow:hover {
        border: 2px solid #111111;
        background-color: #efefef;
        color: black;
    }

    .rec.rec-arrow:disabled {
        border: none;
        background-color: #bebebf;
        color: #efefef;
    }

    .rec.rec-dot_active {
        
        background: #111111;
        box-shadow: 0 0 1px 3px #333333;
    }

`;

export const Item = Styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    gap: 16px;
   
    p{
        font-size: 15px;
        font-weight:bold;
        color:#333333;
        border: none;
        border-radius: 10px;
    }


    input{
        background-color: #696969;
        cursor: pointer;
        font-size: 12px;
        color:white;
        padding:10px;
        border: none;
        border-radius: 10px;
        
        :hover{
            opacity:0.8;
        }

    }
`
    export const Image = Styled.img`
    background-color: #333333;
     width: 250px;
     height: 200px;
     object-fit: contain;
     border: 2px solid #ffffff;
     border-radius: 10px;
     padding: 3px;
     
`;

