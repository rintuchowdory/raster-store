import { Product, Garment } from '../data/products'
import { ProductCard } from './ProductCard'

const sectionMeta: Record<Garment, { id: string; label: string }> = {
  tee: { id: 'tee', label: 'Tees' },
  hoodie: { id: 'hoodie', label: 'Hoodies' },
  mug: { id: 'mug', label: 'Mugs' },
}

function Section({
  garment,
  items,
}: {
  garment: Garment
  items: Product[]
}) {
  const meta = sectionMeta[garment]
  return (
    <div id={meta.id} className="scroll-mt-20 py-10">
      <div className="mb-6 flex items-center gap-3">
        <span className="reg-mark text-charcoal/50">
          <span className="reg-mark-circle" />
        </span>
        <h2 className="font-display text-2xl font-black uppercase tracking-wide text-charcoal">
          {meta.label}
        </h2>
        <span className="font-mono text-xs text-charcoal/40">
          {items.length} in stock
        </span>
        <div className="ml-2 h-px flex-1 bg-charcoal/10" />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}

export function ProductGrid({ products }: { products: Product[] }) {
  const byGarment = (g: Garment) => products.filter((p) => p.garment === g)

  return (
    <section className="halftone-paper relative bg-canvas">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="pt-14 text-charcoal">
          <p className="font-mono text-xs uppercase tracking-widest text-charcoal/50">
            Current drop
          </p>
          <h2 className="mt-2 font-display text-4xl font-black uppercase text-charcoal sm:text-5xl">
            Off the press
          </h2>
        </div>

        <Section garment="tee" items={byGarment('tee')} />
        <Section garment="hoodie" items={byGarment('hoodie')} />
        <Section garment="mug" items={byGarment('mug')} />
      </div>
    </section>
  )
}
