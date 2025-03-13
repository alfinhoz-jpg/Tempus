import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="tempus-logo">TEMPUS</h1>
        <p>Reserve seu horário de forma rápida e eficiente.</p>
        <button
          className="reserve-button"
          onClick={() => navigate("/reservas")}
        >
          Reserve agora
        </button>
      </div>
    </div>
  );
};

export default Home;
