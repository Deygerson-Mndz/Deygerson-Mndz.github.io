
import Link from 'next/link'

export default function Header() {
  return (
    <header style={{ backgroundColor: '#f0f0f0', padding: '10px 20px' }}>
      <nav>
        <Link href="/"><a style={{ marginRight: '15px' }}>Inicio</a></Link>
        <Link href="/about"><a>Sobre Mí</a></Link>
      </nav>
    </header>
  )
}
