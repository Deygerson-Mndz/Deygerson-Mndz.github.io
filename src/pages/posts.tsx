import React from 'react';
export default function Blog() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">Artículos recientes</h1>
      <ul>
        <li><a className="text-blue-600 underline" href="/posts/databricks-de-associate">Databricks Associate: Mi experiencia</a></li>
      </ul>
    </div>
  );
}