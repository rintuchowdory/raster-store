import { useCart } from '../context/CartContext'
import { Crest } from './Crest'

const navLinks = [
  { label: 'Tees', href: '#tee' },
  { label: 'Hoodies', href: '#hoodie' },
  { label: 'Mugs', href: '#mug' },
  { label: 'About the press', href: '#about' },
]

export function Header() {
  const { itemCount, openCart } = useCart()

  return (
    <header className="sticky top-0 z-40 border-b-2 border-gold/40 bg-ink/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="#top" className="flex items-center gap-3">
          <Crest id="header-crest" className="h-10 w-10 text-gold" />
          <span className="font-display text-2xl font-black uppercase tracking-wide text-canvas">
            Raster
          </span>
        </a>

        <nav className="hidden gap-7 font-mono text-xs uppercase tracking-widest text-canvas/70 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-gold">
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={openCart}
          className="group flex items-center gap-2 border border-gold/40 px-3 py-2 font-mono text-xs uppercase tracking-widest text-canvas transition-colors hover:border-gold hover:text-gold"
          aria-label={`Open cart, ${itemCount} item${itemCount === 1 ? '' : 's'}`}
        >
          Cart
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-maroon text-[11px] font-bold text-canvas group-hover:bg-gold group-hover:text-ink">
            {itemCount}
          </span>
        </button>
      </div>
    </header>
  )
}
