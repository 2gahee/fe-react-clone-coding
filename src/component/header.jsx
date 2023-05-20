import React from 'react';
import styled from "styled-components";
import { AiOutlineCamera } from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx';


const Topp =styled.nav`
    background-color: #343a40;
    justify-content: space-between;
`;


const Text =styled.h2`
    color: white;
    text-align: justify;
    line-height: 70px;
    text-indent: 200px;
    display: inline-block;
`;


const Menubar =styled.button`
   
    background-color:transparent;
    position: center;
    float: right;
   
    margin-left: 1500px;
    padding-top:10px;
    cursor: pointer;
`;


const Header = (props) => {
    return (
        <>
            <Topp>
                <Text> < AiOutlineCamera color="white" size="40px" />  Album
                <Menubar><RxHamburgerMenu color='white' size="35px" /></Menubar>
                </Text>
            </Topp>
        </>
    );
};




export default Header;