import React from 'react';

export default function About() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-900 mb-4">Sobre mí</h1>
      <p className="mb-4">
        ¡Hola! Soy <strong>Deygerson Méndez Guédez</strong>, un apasionado de los datos y la tecnología.
        Me especializo en construir soluciones de datos en la nube usando herramientas del ecosistema Azure:
        Data Factory, Synapse, Databricks, y más.
      </p>
      <p className="mb-4">
        Mi objetivo es ayudar a otros ingenieros y profesionales a entender, dominar y aplicar
        las mejores prácticas de ingeniería de datos modernas.
      </p>
      <p className="text-sm text-gray-600">
        📧 deygerson@gmail.com · 💼 LinkedIn · 💻 GitHub
      </p>
    </div>
  );
}
