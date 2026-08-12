export type Garment = 'tee' | 'hoodie' | 'mug'

export interface ColorOption {
  name: string
  hex: string
  pantone: string
}

export interface Product {
  id: string
  sku: string
  name: string
  garment: Garment
  price: number
  salePrice?: number
  description: string
  colors: ColorOption[]
  sizes: string[]
  limited?: boolean
  stock: number
}

export const products: Product[] = [
  {
    id: 'p-01',
    sku: 'RS-TEE-001',
    name: 'Halftone Riot Tee',
    garment: 'tee',
    price: 34,
    description:
      'Heavyweight 240gsm cotton, single-pass screen print with a hand-cut halftone gradient.',
    colors: [
      { name: 'Ink Black', hex: '#0B0B0C', pantone: 'PMS Black 6' },
      { name: 'Canvas', hex: '#EDE9DE', pantone: 'PMS 7527' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    stock: 42,
  },
  {
    id: 'p-02',
    sku: 'RS-TEE-002',
    name: 'Registration Error Tee',
    garment: 'tee',
    price: 36,
    salePrice: 29,
    description:
      'A deliberately mis-registered 3-colour print — the misalignment is the design.',
    colors: [
      { name: 'Ink Black', hex: '#0B0B0C', pantone: 'PMS Black 6' },
      { name: 'Storm Grey', hex: '#4A4A4D', pantone: 'PMS 425' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    limited: true,
    stock: 8,
  },
  {
    id: 'p-03',
    sku: 'RS-TEE-003',
    name: 'Spot Colour Tee',
    garment: 'tee',
    price: 32,
    description: 'Two-tone spot print, mixed and hand-drawn down to the last CMY pass.',
    colors: [
      { name: 'Canvas', hex: '#EDE9DE', pantone: 'PMS 7527' },
      { name: 'Cyan Proof', hex: '#00B7C3', pantone: 'PMS 3125' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    stock: 61,
  },
  {
    id: 'p-04',
    sku: 'RS-HOD-001',
    name: 'Press Room Hoodie',
    garment: 'hoodie',
    price: 68,
    description:
      '400gsm brushed fleece, oversized fit, back print run on our flatbed press.',
    colors: [
      { name: 'Ink Black', hex: '#0B0B0C', pantone: 'PMS Black 6' },
      { name: 'Storm Grey', hex: '#4A4A4D', pantone: 'PMS 425' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    stock: 23,
  },
  {
    id: 'p-05',
    sku: 'RS-HOD-002',
    name: 'Magenta Pass Hoodie',
    garment: 'hoodie',
    price: 72,
    salePrice: 59,
    description: 'Single-colour magenta over-print on undyed fleece. Small batch of 30.',
    colors: [{ name: 'Undyed', hex: '#EDE9DE', pantone: 'PMS 7527' }],
    sizes: ['S', 'M', 'L', 'XL'],
    limited: true,
    stock: 6,
  },
  {
    id: 'p-06',
    sku: 'RS-HOD-003',
    name: 'Screen Mesh Hoodie',
    garment: 'hoodie',
    price: 70,
    description: 'A print of the screen itself — mesh count and tension marks included.',
    colors: [
      { name: 'Ink Black', hex: '#0B0B0C', pantone: 'PMS Black 6' },
      { name: 'Canvas', hex: '#EDE9DE', pantone: 'PMS 7527' },
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    stock: 19,
  },
  {
    id: 'p-07',
    sku: 'RS-MUG-001',
    name: 'Proof Sheet Mug',
    garment: 'mug',
    price: 18,
    description: 'Ceramic 350ml, kiln-fired transfer of a real colour-proof sheet.',
    colors: [
      { name: 'Ink Black', hex: '#0B0B0C', pantone: 'PMS Black 6' },
      { name: 'Canvas', hex: '#EDE9DE', pantone: 'PMS 7527' },
    ],
    sizes: ['350ml'],
    stock: 88,
  },
  {
    id: 'p-08',
    sku: 'RS-MUG-002',
    name: 'Crosshair Mug',
    garment: 'mug',
    price: 18,
    description: 'A single registration crosshair, printed dead-centre. Nothing else.',
    colors: [{ name: 'Canvas', hex: '#EDE9DE', pantone: 'PMS 7527' }],
    sizes: ['350ml'],
    stock: 54,
  },
]
