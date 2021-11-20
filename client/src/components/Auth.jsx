import React, { useState } from "react";
import Cookies from "universal-cookie";
import axios from "axios";

import signInImg from "../assets/signupWallpaper.jpg";

const Auth = () => {
  const [isSignup, setIsSignup] = useState(true);

  const handleChange = () => {};

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };
  return (
    <div className="auth__form-container">
      <div className="auth__form-container_fields">
        <div className="auth__form-container_fields-content">
          <p>{isSignup ? "Registrarse" : "Entrar"}</p>
          <form action="" onSubmit={() => {}}>
            {isSignup && ( //se utiliza para mostrar algo basado en la misma condición
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="fullName">Nombre Completo</label>
                <input
                  name="fullName"
                  type="text"
                  placeholder="Nombre Completo"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            <div className="auth__form-container_fields-content_input">
              <label htmlFor="username">Nombre de Usuario</label>
              <input
                name="username"
                type="text"
                placeholder="Nombre de Usuario"
                onChange={handleChange}
                required
              />
            </div>
            {isSignup && ( //se utiliza para mostrar algo basado en la misma condición
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="phoneNumber">Número de Teléfono</label>
                <input
                  name="fullName"
                  type="text"
                  placeholder="Número de Teléfono"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            {isSignup && ( //se utiliza para mostrar algo basado en la misma condición
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="avatarURL">Foto de Perfil</label>
                <input
                  name="avatarURL"
                  type="text"
                  placeholder="Foto de Perfil"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            <div className="auth__form-container_fields-content_input">
              <label htmlFor="password">Contraseña</label>
              <input
                name="password"
                type="password"
                placeholder="Contraseña"
                onChange={handleChange}
                required
              />
            </div>
            {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="confirmPassword">Confirmar Contraseña</label>
                <input
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirmar Contraseña"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
          </form>
          <div className="auth__form-container_fields-account">
            <p>{isSignup ? "Ya tengo una cuenta" : "No tengo una cuenta"}</p>
            <span onClick={switchMode}>
              {isSignup ? "Entrar" : "Registrarse"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
