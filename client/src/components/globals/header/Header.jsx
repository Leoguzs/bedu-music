import React from "react";
import { Navbar, Container, Nav, Button, NavDropdown, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" variant="pills">
            <Container>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                        {/* <Navbar.Brand href="#home">Bedu Music</Navbar.Brand> */}
                        <Nav.Link as={Link} to="/">
                            <Button variant="secondary">Tu música</Button>{' '}
                        </Nav.Link>
                        <Nav.Link as={Link} to="/comunidad">
                            <Button variant="secondary">Comunidad</Button>{' '}
                        </Nav.Link>
                    </Nav>


                    <Nav>
                        <Dropdown>
                            <Dropdown.Toggle variant="light" id="dropdown-basic">
                                NombreUsuario

                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item >Perfil</Dropdown.Item>
                                <Dropdown.Item >Cerrar sesión</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}

export default Header;