import React from "react";
import { Navbar, Container, Nav, Button, NavDropdown, Dropdown, NavbarBrand, } from "react-bootstrap";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import "./Header.css"
const cookies = new Cookies();

const Header = (props) => {


    const logout = () => {
        cookies.remove("token");
        cookies.remove("userId");
        cookies.remove("username");
        cookies.remove("fullName");
        cookies.remove("avatarURL");
        cookies.remove("hashedPassword");
        cookies.remove("phoneNumber");

        window.location.reload();
    };

    return (
        <Navbar bg="dark" variant="dark" variant="pills">

            <Container>
                <NavbarBrand className="mr-auto titulo-header" href="/">BEDU MUSIC  </NavbarBrand>
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
                            <i className="fa fa-id-badge"></i>  {props.client.user.name}

                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                    <Dropdown.Item as={Link}  to='/perfil'> <i className="fa fa-address-book"></i> Perfil</Dropdown.Item>
                                <Dropdown.Item onClick={logout} > <i className="fa fa-power-off"></i> Cerrar sesión</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}

export default Header;