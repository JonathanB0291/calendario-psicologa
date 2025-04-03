import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";


const Calendario = () => {
    const [fechaSeleccionada, setFechaSeleccionada] = useState(new Date());
    const [horaSeleccionada, setHoraSeleccionada] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      alert(`Cita confirmada para el ${fechaSeleccionada.toLocaleDateString()} a las ${horaSeleccionada}`);
    };
  
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-200 to-blue-200 p-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Agendar Cita</h2>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <Calendar onChange={setFechaSeleccionada} value={fechaSeleccionada} minDate={new Date()} />
          <form onSubmit={handleSubmit} className="mt-6">
            <div className="mb-4">
              <label htmlFor="hora" className="block text-lg text-gray-700">Selecciona una hora</label>
              <select 
                id="hora" 
                value={horaSeleccionada} 
                onChange={(e) => setHoraSeleccionada(e.target.value)} 
                className="w-full p-3 border border-gray-300 rounded-lg mt-2"
                required
              >
                <option value="">Selecciona una hora</option>
                <option value="09:00">09:00 AM</option>
                <option value="10:00">10:00 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="14:00">02:00 PM</option>
                <option value="15:00">03:00 PM</option>
              </select>
            </div>
            <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg transition duration-300">Confirmar Cita</button>
          </form>
        </div>
      </div>
    );
  };
  
  export default Calendario;