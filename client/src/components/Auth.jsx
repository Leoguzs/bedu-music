import React, { useState } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import "./Auth.css";

import signInImg from "../assets/signupWallpaper.jpg";

const cookies = new Cookies();

const initialState = {
  fullName: "",
  username: "",
  password: "",
  confirmPassword: "",
  phoneNumber: "",
  avatarURL: "",
};

const Auth = () => {
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(true);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, password, phoneNumber, avatarURL } = form;

    const URL = "http://localhost:4000/auth";

    const {
      data: { token, userId, hashedPassword, fullName },
    } = await axios.post(`${URL}/${isSignup ? "signup" : "login"}`, {
      username,
      password,
      fullName: form.fullName,
      phoneNumber,
      avatarURL,
    });

    cookies.set("token", token);
    cookies.set("username", username);
    cookies.set("fullName", fullName);
    cookies.set("userId", userId);

    if (isSignup) {
      cookies.set("phoneNumber", phoneNumber);
      cookies.set("avatarURL", avatarURL);
      cookies.set("hashedPassword", hashedPassword);
    }

    window.location.reload();
  };

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };

  return (
    <div className="auth__form-container">
      <div className="auth__form-container_fields">
        <div className="auth__form-container_fields-content">
          <p>{isSignup ? "Registrarse" : "Entrar"}</p>
          <form onSubmit={handleSubmit}>
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
                  name="phoneNumber"
                  type="number"
                  placeholder="Número de Teléfono"
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
            <div className="auth__form-container_fields-content_button">
              <button>{isSignup ? "Registrarse" : "Entrar"}</button>
            </div>
          </form>
          <div className="auth__form-container_fields-account">
            <p>
              {isSignup ? "Ya tengo una cuenta " : "No tengo una cuenta "}
              <span onClick={switchMode}>
                {isSignup ? " Entrar" : " Registrarse"}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="auth__form-container_image">
        <img src={signInImg} alt="wallpaper" />
      </div>
    </div>
  );
};

export default Auth;
