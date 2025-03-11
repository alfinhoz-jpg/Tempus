import React, { useEffect, useState } from "react";
import "../styles/home.css";

const Home = () => {
  const [gradient, setGradient] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setGradient(`linear-gradient(90deg, #fff, #1e40af, #fff)`);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <h1 className="tempus-logo" style={{ backgroundImage: gradient }}>
        TEMPUS
      </h1>
      <p className="subtitle">Reserve seu tempo</p>
      <button className="cta-button">Fazer Reserva</button>
    </div>
  );
};
console.log("Home está carregando");

export default Home;
