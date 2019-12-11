import React from 'react'
import styled from 'styled-components'
import { FaHome, FaList, FaPlus } from 'react-icons/fa'
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <Container>
            <div>
            <NavLink to="/"><FaHome /></NavLink>
            <NavLink to="/"><FaList /></NavLink>
            <NavLink to="/create"><FaPlus /></NavLink>
            </div>
        </Container>
    )

}


const Container = styled.div`
position: relative;
bottom: 0px;
margin-top: 50px;

    div{
        font-size: 20px;
        display: flex;
        justify-content: space-evenly;
        color: white;
    }
`;