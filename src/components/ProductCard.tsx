import { useState } from 'react'
import { Product } from '../data/products'
import { GarmentSVG } from './GarmentSVG'
import { useCart } from '../context/CartContext'

export function ProductCard({ product }: { product: Product }) {
  const [color, setColor] = useState(product.colors[0])
  const [size, setSize] = useState(product.sizes[0])
  const { addToCart } = useCart()
  const onSale = product.salePrice !== undefined

  return (
    <article className="group relative flex flex-col border border-charcoal/10 bg-canvas">
      <div className="reg-mark absolute left-3 top-3 z-10 text-charcoal/40">
        <span className="reg-mark-circle" />
      </div>

      {product.limited && (
        <span className="absolute right-3 top-3 z-10 bg-maroon px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-canvas">
          Small batch
        </span>
      )}

      <div className="aspect-[4/5] p-8 text-charcoal transition-transform duration-300 group-hover:scale-[1.03]">
        <GarmentSVG
          garment={product.garment}
          color={color.hex}
          bg="#EDE9DE"
          patternId={`${product.id}-${color.name}`}
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 border-t border-charcoal/10 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-lg font-bold leading-none text-charcoal">
            {product.name}
          </h3>
          <span className="font-mono text-[10px] text-charcoal/40">{product.sku}</span>
        </div>

        <p className="font-body text-xs leading-relaxed text-charcoal/60">
          {product.description}
        </p>

        {/* Pantone-style colour chips */}
        <div className="flex flex-wrap gap-2">
          {product.colors.map((c) => (
            <button
              key={c.name}
              type="button"
              onClick={() => setColor(c)}
              className={`flex items-center gap-1.5 border px-1.5 py-1 font-mono text-[10px] uppercase tracking-wide transition-colors ${
                color.name === c.name
                  ? 'border-charcoal text-charcoal'
                  : 'border-charcoal/15 text-charcoal/50 hover:border-charcoal/40'
              }`}
              aria-pressed={color.name === c.name}
            >
              <span
                className="h-3 w-3 rounded-full border border-charcoal/20"
                style={{ backgroundColor: c.hex }}
              />
              {c.pantone}
            </button>
          ))}
        </div>

        {/* Size pills */}
        <div className="flex flex-wrap gap-1.5">
          {product.sizes.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSize(s)}
              className={`border px-2 py-1 font-mono text-[10px] transition-colors ${
                size === s
                  ? 'border-charcoal bg-charcoal text-canvas'
                  : 'border-charcoal/20 text-charcoal/60 hover:border-charcoal/50'
              }`}
              aria-pressed={size === s}
            >
              {s}
            </button>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between pt-2">
          <div className="font-mono text-sm text-charcoal">
            {onSale ? (
              <>
                <span className="mr-2 text-charcoal/40 line-through">
                  €{product.price}
                </span>
                <span className="text-maroon">€{product.salePrice}</span>
              </>
            ) : (
              <span>€{product.price}</span>
            )}
          </div>

          <button
            type="button"
            onClick={() => addToCart(product, color.name, size)}
            className="bg-charcoal px-3 py-2 font-mono text-[10px] uppercase tracking-widest text-canvas transition-colors hover:bg-gold hover:text-charcoal"
          >
            Add to cart
          </button>
        </div>
      </div>
    </article>
  )
}
