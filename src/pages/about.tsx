import React from 'react';
export default function About() {
  return (
    <section className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-800 mb-4">Sobre mí</h1>
      <p className="mb-4">Soy Deygerson Méndez Guédez, Ingeniero de Datos con experiencia en la implementación de soluciones en la nube con Azure y Databricks.</p>
      <p className="text-sm text-gray-600">📧 deygerson@gmail.com · 💼 <a href="https://www.linkedin.com/in/deygerson-mendez/" target="_blank" className="text-blue-600 underline">LinkedIn</a></p>
    </section>
  );
}