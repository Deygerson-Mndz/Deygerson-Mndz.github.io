'use client'
import { allBlogs } from "contentlayer/generated"
import { compareDesc } from "date-fns"
import Image from "next/image"
import Link from "next/link"
import Layout from "@/components/layout"
import Carousel from "@/components/carousel"

export default function HomePage() {
  const featured = allBlogs
    .filter((post) => post.featured)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <Layout>
      <section className="py-10 px-4 max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Deygerson Méndez</h1>
        <p className="text-lg mb-6">
          Chapter Lead Data Engineer especializado en soluciones de Azure, Fabric y Databricks. 
          Comparto contenido técnico, guías y experiencias reales para la comunidad de datos.
        </p>
        <Link href="/about">
          <a className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">Conóceme más</a>
        </Link>
      </section>

      {featured.length > 0 && (
        <section className="bg-gray-100 py-10">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4 text-center">Destacados</h2>
            <Carousel posts={featured} />
          </div>
        </section>
      )}

      <section className="py-10 px-4 max-w-5xl mx-auto text-center">
        <h2 className="text-xl font-semibold mb-2">¿Buscas certificarte?</h2>
        <p className="mb-4">Te comparto guías detalladas para las certificaciones más demandadas en datos y nube.</p>
        <Link href="/guides">
          <a className="inline-block bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-900 transition">Ver guías de certificación</a>
        </Link>
      </section>
    </Layout>
  )
}
