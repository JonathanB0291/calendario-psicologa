import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import emailjs from "@emailjs/browser";

const FormularioCitas = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
    fecha: new Date(),
    hora: ""
  });

  const [mensajeEnviado, setMensajeEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCalendarChange = (date) => {
    setFormData({ ...formData, fecha: date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.hora) {
      alert("Por favor, selecciona una hora ⏳");
      return;
    }

    setEnviando(true);

    // Crear el objeto templateParams con los datos del formulario
    const templateParams = {
      to_email: "tucorreo@ejemplo.com", // Reemplaza con tu correo
      nombre: formData.nombre,
      email: formData.email,
      mensaje: formData.mensaje,
      fecha_hora: `${formData.fecha.toLocaleDateString("es-ES")} a las ${formData.hora}`
    };

    // Verificar los valores que se están enviando
    console.log(templateParams);

    emailjs
      .send("service_jnz000b", "template_lci4mmq", templateParams, "FuvMQky_VIoUnSWAz")
      .then(
        (response) => {
          console.log("Éxito:", response);
          setMensajeEnviado(true);
          setTimeout(() => setMensajeEnviado(false), 3000);
          setFormData({ nombre: "", email: "", mensaje: "", fecha: new Date(), hora: "" });
        },
        (error) => {
          console.error("Error al enviar el mensaje:", error);
          alert("Error al enviar el mensaje ❌");
        }
      )
      .finally(() => setEnviando(false));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 to-green-100 py-6">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Agendar Cita</h2>
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-lg text-gray-700">Nombre Completo</label>
            <input
              type="text"
              name="nombre"
              className="w-full p-3 border rounded-lg"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg text-gray-700">Correo Electrónico</label>
            <input
              type="email"
              name="email"
              className="w-full p-3 border rounded-lg"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg text-gray-700">Seleccionar Fecha 📅</label>
            <Calendar
              onChange={handleCalendarChange}
              value={formData.fecha}
              minDate={new Date()}
              className="border rounded-lg p-3"
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg text-gray-700">Seleccionar Hora</label>
            <select
              name="hora"
              className="w-full p-3 border rounded-lg"
              value={formData.hora}
              onChange={handleChange}
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
          <div className="mb-6">
            <label className="block text-lg text-gray-700">Mensaje Adicional</label>
            <textarea
              name="mensaje"
              className="w-full p-3 border rounded-lg h-32"
              value={formData.mensaje}
              onChange={handleChange}
            ></textarea>
          </div>
          <button
            type="submit"
            className={`w-full py-3 rounded-lg text-white ${
              enviando ? "bg-gray-400" : "bg-green-500 hover:bg-green-600"
            }`}
            disabled={enviando}
          >
            {enviando ? "Enviando..." : "Agendar Cita"}
          </button>
        </form>
        {mensajeEnviado && (
          <div className="mt-4 text-green-500 font-semibold">✅ ¡Tu cita ha sido agendada!</div>
        )}
      </div>
    </div>
  );
};

export default FormularioCitas;
