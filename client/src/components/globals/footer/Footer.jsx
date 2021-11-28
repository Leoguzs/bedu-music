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

                    <div className="col-12 col-sm-4 offset-1 align-self-center">
                        <div className="text-center">
                            <a className="btn btn-social-icon btn-github" href="http://github.com/+"><i className="fa fa-github"></i></a>
                            <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                            <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                            <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                            <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                        </div>
                        <div className="text-center">
                            <h5>Redes Sociales</h5>
                        </div>
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