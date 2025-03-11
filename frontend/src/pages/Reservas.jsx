import React, { useEffect, useState } from "react";
import "../styles/reservas.css";

const Reservas = () => {
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/reservas/")
      .then((res) => res.json())
      .then((data) => setReservas(data));
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
