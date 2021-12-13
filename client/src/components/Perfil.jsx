import React from "react";
import "./Perfil.css";
const Perfil = (props) => {
  console.log(props.client.user);
  return (
    <div className="container">
      <header className="jumbotron">
        <div className="row perfil-card">
          <div className="col-12 col-md-3  d-flex  align-items-center justify-content-around">
            <div className="perfil-borde-foto d-flex  align-items-center justify-content-around">
              <img
                className="perfil-foto"
                src={props.client.user.image}
                alt="foto de perfil"
              />
            </div>
          </div>
          <div className="col-12  col-md-8">
            <h5>Perfil</h5>
            <h3>
              <strong>{props.client.user.name} </strong>{" "}
            </h3>
            <p>
              <strong>Nombre: </strong> {props.client.user.fullName}
            </p>
            <p>
              <strong>Telefono: </strong> {props.client.user.phoneNumber}
            </p>
          </div>
        </div>
      </header>
      <main></main>
    </div>
  );
};

export default Perfil;
