import React from 'react'
import { Bars, Nav, NavIcon, NavLink } from './NavbarElements'

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavLink to="/">Kopikeun.</NavLink>
                <NavIcon onClick={toggle}>
                    <p></p>
                    <Bars/>
                </NavIcon>
            </Nav>
        </>
    )
}

export default Navbar
