import { useState } from "react"

export default function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: ""
  })
  const [estado, setEstado] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setEstado("enviando")

    try {
      const res = await fetch("http://localhost:1337/api/mensajes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          data: {
            nombre: form.nombre,
            email: form.email,
            mensaje: form.mensaje,
            leido: false
          }
        })
      })

      if (res.ok) {
        setEstado("enviado")
        setForm({ nombre: "", email: "", mensaje: "" })
      } else {
        setEstado("error")
      }
    } catch (err) {
      setEstado("error")
    }
  }

  return (
    <section id="contacto" className="py-20 px-6 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Hablemos de tu proyecto</h2>
        <p className="text-gray-500 text-center mb-10">Cuéntanos qué necesitas y te respondemos en menos de 24 horas.</p>

        {estado === "enviado" ? (
          <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
            <p className="text-green-700 text-xl font-semibold mb-2">¡Mensaje enviado!</p>
            <p className="text-green-600">Nos pondremos en contacto contigo pronto.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 shadow-sm flex flex-col gap-5">

            {estado === "error" && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-600 text-sm">
                Ocurrió un error al enviar. Intenta nuevamente.
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
              <input
                type="text"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                required
                placeholder="Tu nombre completo"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="tu@email.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
              <textarea
                name="mensaje"
                value={form.mensaje}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Cuéntanos sobre tu proyecto..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={estado === "enviando"}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition disabled:opacity-50"
            >
              {estado === "enviando" ? "Enviando..." : "Enviar mensaje"}
            </button>

          </form>
        )}
      </div>
    </section>
  )
}