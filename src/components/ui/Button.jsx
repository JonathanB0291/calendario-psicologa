import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button className="bg-green-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-green-600 transition-transform transform hover:scale-105">
        Agendar Cita
    </button>
  );
};

export default Button;
