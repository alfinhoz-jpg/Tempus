import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const response = await fetch("http://127.0.0.1:8000/api/users/register/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    });

    if (response.ok) {
      alert("Cadastro realizado com sucesso!");
      navigate("/login");
    } else {
      alert("Erro ao cadastrar!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Registrar</h2>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Registrar</button>
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
