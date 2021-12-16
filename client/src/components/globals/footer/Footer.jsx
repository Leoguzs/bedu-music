import React from 'react';
import "./Footer.css";
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <h2>Bedu Music</h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-4 offset-1 col-sm-2">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to='/'>Inicio</Link></li>
                            <li><Link to='/comunidad'>Comunidad</Link></li>
                            <li><Link to='/contactus'>Sobre nosotros</Link></li>
                        </ul>
                    </div>

                    <div className="col-7 col-sm-4 align-self-center text-center">
                        <p>Equipo 3</p>
                        <p>© Copyright 2021 BEDU</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer;