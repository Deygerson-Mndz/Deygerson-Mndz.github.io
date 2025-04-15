
import Layout from '../components/Layout'
import Carousel from '../components/Carousel'

export default function Home() {
  const posts = [
    {
      title: 'Introducción a Azure Data Platform',
      description: 'Descubre las posibilidades de Azure para la gestión de datos...',
      image: '/images/azure.jpg',
      link: '/posts/introduccion-azure-data'
    },
    {
      title: 'Explorando Fabric y sus aplicaciones',
      description: 'Una mirada profunda a la arquitectura y uso de Fabric...',
      image: '/images/fabric.jpg',
      link: '/posts/explorando-fabric'
    },
    {
      title: 'Databricks: Transformando el análisis de datos',
      description: 'Cómo Databricks está revolucionando la analítica en la nube...',
      image: '/images/databricks.jpg',
      link: '/posts/databricks-transformacion'
    }
  ];

  return (
    <Layout>
      <h1>Bienvenido a Tech Blog</h1>
      <p>Contenido sobre Azure, Fabric y Databricks.</p>
      <Carousel posts={posts} />
    </Layout>
  )
}
