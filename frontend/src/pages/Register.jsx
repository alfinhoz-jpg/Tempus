import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import axios from "axios";
import "../styles/auth.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await axios("http://127.0.0.1:8000/api/users/register/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    });

    if (response.ok) {
      alert("Bem vindo"[username], "!");
      navigate("/reservas");
    } else {
      alert("Erro ao cadastrar, tente novamente!");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Registrar</h2>
        <form onSubmit={handleRegister}>
          <div className="input-group">
            <FaUser className="icon" />
            <input
              type="text"
              placeholder="Nome de usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <FaEnvelope className="icon" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <FaLock className="icon" />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="auth-button">
            Registrar
          </button>
        </form>
        <p>
          Já tem uma conta?{" "}
          <span className="register-link" onClick={() => navigate("/login")}>
            Entrar
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
