import React from "react";
import { Link, useLocation } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import logo from '../user/img/logo-restau.png'; // Assure-toi que le chemin est correct
import './NavBar.css';

export function NavBar() {
    const location = useLocation(); // Obtient l'URL actuelle

    // Fonction pour déterminer si la route est active
    const isActive = (path) => location.pathname === path ? 'active' : '';

    return (
        <Navbar expand="lg" className='sticky-top bg-body-tertiary shadow'>
            <Container>
                <Navbar.Brand>
                    <Link to="/" className='navbar-brand'>
                        <img src={logo} alt="Restau Logo" />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto justify-content-end w-100'>
                        <Nav.Link as={Link} to='/' className={`text-uppercase ${isActive('/')}`}>Home</Nav.Link>
                        <Nav.Link as={Link} to='/About' className={`text-uppercase ${isActive('/About')}`}>About</Nav.Link>
                        <Nav.Link as={Link} to='/Menu' className={`text-uppercase ${isActive('/Menu')}`}>Menu</Nav.Link>
                        <Nav.Link as={Link} to='/Contact' className={`text-uppercase ${isActive('/Contact')}`}>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;