import './css/Nav.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import Radium from 'radium';

let RadiumLink = Radium(Link);
let RadiumIndexLink = Radium(NavLink);

const NavBar = () => {
    return (
        <>
            <Menu className="bm-menu">
                <RadiumIndexLink className="bm-item-list" to="/" >Professional Experience</RadiumIndexLink>
                <RadiumLink className="bm-item-list" to="/expertise">Technology Expertise</RadiumLink>
                <RadiumLink className="bm-item-list" to="/education">Education</RadiumLink>
                <RadiumLink className="bm-item-list" to="/training">Additional Training</RadiumLink>
                <RadiumLink className="bm-item-list" to="/about">About</RadiumLink>
            </Menu>
        </>
    );
}

export default NavBar;