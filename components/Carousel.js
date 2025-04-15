
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Carousel({ posts }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % posts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [index])

  return (
    <div style={{ height: '300px', overflow: 'hidden', marginBottom: '20px', position: 'relative' }}>
      {posts.map((post, i) => (
        <div key={i} style={{
          opacity: i === index ? 1 : 0,
          transition: 'opacity 1s',
          position: 'absolute', top: 0, left: 0, width: '100%'
        }}>
          <img src={post.image} alt={post.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
          <div style={{ padding: '10px' }}>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <Link href={post.link}><a>Leer más</a></Link>
          </div>
        </div>
      ))}
    </div>
  )
}
