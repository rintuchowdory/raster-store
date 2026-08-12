import { useCart } from '../context/CartContext'

const navLinks = [
  { label: 'Tees', href: '#tee' },
  { label: 'Hoodies', href: '#hoodie' },
  { label: 'Mugs', href: '#mug' },
  { label: 'About the press', href: '#about' },
]

export function Header() {
  const { itemCount, openCart } = useCart()

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="flex items-center gap-2 font-display text-2xl tracking-wide text-canvas">
          <span className="reg-mark text-cyan">
            <span className="reg-mark-circle" />
          </span>
          RASTER
        </a>

        <nav className="hidden gap-7 font-mono text-xs uppercase tracking-widest text-canvas/70 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-canvas">
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={openCart}
          className="group flex items-center gap-2 border border-white/15 px-3 py-2 font-mono text-xs uppercase tracking-widest text-canvas transition-colors hover:border-cyan hover:text-cyan"
          aria-label={`Open cart, ${itemCount} item${itemCount === 1 ? '' : 's'}`}
        >
          Cart
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-magenta text-[11px] font-bold text-ink group-hover:bg-cyan">
            {itemCount}
          </span>
        </button>
      </div>
    </header>
  )
}
