
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        {children}
      </main>
      <Footer />
    </div>
  )
}
