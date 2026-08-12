import { AnimatePresence, motion } from 'framer-motion'
import { useCart } from '../context/CartContext'

export function CartDrawer() {
  const { isOpen, closeCart, lines, subtotal, removeLine, setQuantity } = useCart()

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 z-50 bg-ink/70 backdrop-blur-sm"
            aria-hidden="true"
          />
          <motion.aside
            key="drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-canvas text-charcoal"
            role="dialog"
            aria-label="Shopping cart"
          >
            <div className="flex items-center justify-between border-b border-charcoal/10 p-5">
              <h2 className="font-display text-2xl font-black uppercase">Your cart</h2>
              <button
                type="button"
                onClick={closeCart}
                className="font-mono text-xs uppercase tracking-widest text-charcoal/60 hover:text-charcoal"
                aria-label="Close cart"
              >
                Close ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5">
              {lines.length === 0 ? (
                <div className="mt-16 text-center">
                  <div className="reg-mark mx-auto mb-4 text-charcoal/30">
                    <span className="reg-mark-circle" />
                  </div>
                  <p className="font-mono text-xs uppercase tracking-widest text-charcoal/50">
                    Nothing on the press yet
                  </p>
                </div>
              ) : (
                <ul className="flex flex-col gap-5">
                  {lines.map((line) => {
                    const price = line.product.salePrice ?? line.product.price
                    return (
                      <li
                        key={line.lineId}
                        className="flex gap-4 border-b border-charcoal/10 pb-5"
                      >
                        <div className="h-20 w-20 shrink-0 bg-canvas-line/40 p-2">
                          <div className="h-full w-full opacity-70">
                            {/* colour swatch stand-in for the garment thumbnail */}
                            <div
                              className="h-full w-full rounded-sm"
                              style={{
                                backgroundColor:
                                  line.product.colors.find((c) => c.name === line.color)
                                    ?.hex ?? '#0B0B0C',
                              }}
                            />
                          </div>
                        </div>

                        <div className="flex flex-1 flex-col gap-1">
                          <div className="flex items-start justify-between gap-2">
                            <p className="font-display text-base font-bold leading-none">
                              {line.product.name}
                            </p>
                            <span className="font-mono text-sm">
                              €{price * line.quantity}
                            </span>
                          </div>
                          <p className="font-mono text-[11px] uppercase tracking-wide text-charcoal/50">
                            {line.color} · {line.size}
                          </p>

                          <div className="mt-2 flex items-center gap-3">
                            <div className="flex items-center border border-charcoal/20">
                              <button
                                type="button"
                                className="px-2 py-1 font-mono text-xs hover:bg-charcoal/5"
                                onClick={() => setQuantity(line.lineId, line.quantity - 1)}
                                aria-label="Decrease quantity"
                              >
                                −
                              </button>
                              <span className="px-3 font-mono text-xs">{line.quantity}</span>
                              <button
                                type="button"
                                className="px-2 py-1 font-mono text-xs hover:bg-charcoal/5"
                                onClick={() => setQuantity(line.lineId, line.quantity + 1)}
                                aria-label="Increase quantity"
                              >
                                +
                              </button>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeLine(line.lineId)}
                              className="font-mono text-[11px] uppercase tracking-widest text-charcoal/40 hover:text-maroon"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              )}
            </div>

            <div className="border-t border-charcoal/10 p-5">
              <div className="mb-4 flex items-center justify-between font-mono text-sm">
                <span className="text-charcoal/60">Subtotal</span>
                <span>€{subtotal.toFixed(2)}</span>
              </div>
              <button
                type="button"
                disabled={lines.length === 0}
                className="w-full bg-charcoal py-3 font-mono text-xs uppercase tracking-widest text-canvas transition-colors hover:bg-gold hover:text-charcoal disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-charcoal disabled:hover:text-canvas"
              >
                Checkout
              </button>
              <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-widest text-charcoal/40">
                Frontend demo — checkout isn't wired to a backend yet
              </p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
