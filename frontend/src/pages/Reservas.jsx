import React, { useEffect, useState } from "react";
import "../styles/reservas.css";
import axios from "axios";

const Reservas = () => {
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/reservas/")
      .then((response) => {
        setReservas(response.data);
      })
      .catch((error) => {
        console.error("Erro ao obter reservas:", error);
      });
  }, []);

  return (
    <div className="reservas-container">
      <h2>Reservas</h2>
      <ul>
        {reservas.map((reserva) => (
          <li
            key={reserva.id}
            className={reserva.pago_presencialmente ? "pago" : ""}
          >
            {reserva.data_horario} -
            {reserva.pago
              ? " Pago Online ✅"
              : reserva.pago_presencialmente
              ? " Pago Presencialmente ✅"
              : " Não Pago ❌"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reservas;
