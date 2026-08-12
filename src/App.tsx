import { CartProvider } from './context/CartContext'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ProductGrid } from './components/ProductGrid'
import { CartDrawer } from './components/CartDrawer'
import { Footer } from './components/Footer'
import { products } from './data/products'

export default function App() {
  return (
    <CartProvider>
      <Header />
      <main>
        <Hero />
        <ProductGrid products={products} />
      </main>
      <Footer />
      <CartDrawer />
    </CartProvider>
  )
}
