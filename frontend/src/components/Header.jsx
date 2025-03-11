import React from "react";

const Header = () => {
  return (
    <header className="w-full p-5 bg-primary fixed top-0 left-0 flex justify-between items-center shadow-md">
      <h1 className="text-2x1 font-bold text-white">TEMPUS</h1>
      <nav>
        <ul className="flex gap-6">
          <li>
            <a href="#" className="text-white opacity-80 hover:opacity-100 ">
              Início
            </a>
          </li>
          <li>
            <a href="#" className="text-white opacity-80 hover:opacity-100 ">
              Reservas
            </a>
          </li>
          <li>
            <a href="#" className="text-white opacity-80 hover:opacity-100 ">
              Login
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

console.log("Header está carregando");

export default Header;
