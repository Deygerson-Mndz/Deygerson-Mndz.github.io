import React from 'react';

export default function Home() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-900 mb-4">Hola, soy Deygerson Méndez Guédez</h1>
      <p className="text-lg mb-6">
        Ingeniero de Datos especializado en la plataforma de datos de Azure.
        Comparto artículos técnicos, guías prácticas y reflexiones sobre ingeniería de datos en la nube.
      </p>
      <a
        href="/about"
        className="inline-block px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800"
      >
        Conóceme más
      </a>
    </div>
  );
}
