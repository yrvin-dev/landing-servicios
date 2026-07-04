import { useState } from "react"

export default function Testimonios({ testimonios }) {
  const [actual, setActual] = useState(0)

  const anterior = () => {
    setActual((prev) => (prev === 0 ? testimonios.length - 1 : prev - 1))
  }

  const siguiente = () => {
    setActual((prev) => (prev === testimonios.length - 1 ? 0 : prev + 1))
  }

  const t = testimonios[actual]

  return (
    <section class="bg-gray-50 py-20 px-6">
      <h2 class="text-3xl font-bold text-center mb-12">Lo que dicen nuestros clientes</h2>
      <div class="max-w-2xl mx-auto text-center">
        <div class="bg-white rounded-xl p-10 shadow-sm mb-8">
          <p class="text-gray-600 text-lg italic mb-6">"{t.comentario}"</p>
          <p class="font-semibold text-gray-900">{t.nombre}</p>
          <p class="text-gray-500 text-sm">{t.cargo}</p>
          <div class="flex justify-center mt-3 gap-1">
            {Array.from({ length: t.estrellas }).map((_, i) => (
              <span key={i} class="text-yellow-400 text-xl">★</span>
            ))}
          </div>
        </div>
        <div class="flex justify-center gap-4">
          <button
            onClick={anterior}
            class="bg-white border border-gray-200 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition"
          >
            ←
          </button>
          <button
            onClick={siguiente}
            class="bg-white border border-gray-200 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition"
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}