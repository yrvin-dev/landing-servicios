import { useState } from "react"

export default function Navbar() {
  const [abierto, setAbierto] = useState(false)

  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        <a href="/" className="text-xl font-bold text-gray-900">
          Agencia<span className="text-blue-600">Web</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#servicios" className="text-gray-600 hover:text-blue-600 transition">Servicios</a>
          <a href="#testimonios" className="text-gray-600 hover:text-blue-600 transition">Testimonios</a>
          <a href="#contacto" className="text-gray-600 hover:text-blue-600 transition">Contacto</a>
          <a href="#contacto" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition font-semibold">
            Cotizar proyecto
          </a>
        </div>

        <button
          className="md:hidden text-gray-600 text-2xl"
          onClick={() => setAbierto(!abierto)}
        >
          {abierto ? "✕" : "☰"}
        </button>
      </div>

      {abierto && (
        <div className="md:hidden mt-4 flex flex-col gap-4 px-2 pb-4">
          <a href="#servicios" className="text-gray-600 hover:text-blue-600" onClick={() => setAbierto(false)}>Servicios</a>
          <a href="#testimonios" className="text-gray-600 hover:text-blue-600" onClick={() => setAbierto(false)}>Testimonios</a>
          <a href="#contacto" className="text-gray-600 hover:text-blue-600" onClick={() => setAbierto(false)}>Contacto</a>
          <a href="#contacto" className="bg-blue-600 text-white px-5 py-2 rounded-lg text-center font-semibold">
            Cotizar proyecto
          </a>
        </div>
      )}
    </nav>
  )
}