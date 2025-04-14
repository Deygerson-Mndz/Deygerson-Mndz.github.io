import React from 'react';
export default function Home() {
  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-800 mb-4">Hola, soy Deygerson Méndez Guédez</h1>
      <p className="mb-4">Especialista en datos en Azure. Comparte guías, certificaciones y experiencias sobre ingeniería de datos moderna.</p>
      <a href="/about" className="text-blue-600 underline">Sobre mí</a>
    </main>
  );
}