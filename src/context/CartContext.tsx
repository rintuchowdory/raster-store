import { createContext, useContext, useMemo, useState, ReactNode } from 'react'
import { Product } from '../data/products'

export interface CartLine {
  product: Product
  color: string
  size: string
  quantity: number
  lineId: string
}

interface CartContextValue {
  lines: CartLine[]
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
  addToCart: (product: Product, color: string, size: string) => void
  removeLine: (lineId: string) => void
  setQuantity: (lineId: string, quantity: number) => void
  subtotal: number
  itemCount: number
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([])
  const [isOpen, setIsOpen] = useState(false)

  function addToCart(product: Product, color: string, size: string) {
    const lineId = `${product.id}-${color}-${size}`
    setLines((prev) => {
      const existing = prev.find((l) => l.lineId === lineId)
      if (existing) {
        return prev.map((l) =>
          l.lineId === lineId ? { ...l, quantity: l.quantity + 1 } : l
        )
      }
      return [...prev, { product, color, size, quantity: 1, lineId }]
    })
    setIsOpen(true)
  }

  function removeLine(lineId: string) {
    setLines((prev) => prev.filter((l) => l.lineId !== lineId))
  }

  function setQuantity(lineId: string, quantity: number) {
    if (quantity < 1) {
      removeLine(lineId)
      return
    }
    setLines((prev) =>
      prev.map((l) => (l.lineId === lineId ? { ...l, quantity } : l))
    )
  }

  const subtotal = useMemo(
    () =>
      lines.reduce(
        (sum, l) => sum + (l.product.salePrice ?? l.product.price) * l.quantity,
        0
      ),
    [lines]
  )

  const itemCount = useMemo(
    () => lines.reduce((sum, l) => sum + l.quantity, 0),
    [lines]
  )

  return (
    <CartContext.Provider
      value={{
        lines,
        isOpen,
        openCart: () => setIsOpen(true),
        closeCart: () => setIsOpen(false),
        addToCart,
        removeLine,
        setQuantity,
        subtotal,
        itemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
