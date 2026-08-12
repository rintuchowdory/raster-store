# RASTER — screen-print storefront (frontend demo)

A print-on-demand storefront concept for tees, hoodies and mugs. This is the
**frontend only** — cart state lives in React context in the browser, there's
no backend, database, or payment integration yet.

## Design direction

The whole visual system is built from the actual craft of screen printing
rather than generic ecommerce chrome:

- **Registration crosshairs** (the small `+` marks) are the recurring
  structural device, standing in for numbered steps — they mark real
  positions (print placement on a garment, section anchors) the way a
  printer's registration mark does.
- **Campus-press palette**: navy `#141B2E`, maroon `#7A2331`, and gold
  `#C9A227` stand in for the press's three inks — navy is the base, maroon
  marks sale/limited badges, gold is the one CTA/highlight colour. Headlines
  run in Big Shoulders Display (a collegiate, stadium-banner condensed
  face), paired with a circular **crest** (`src/components/Crest.tsx`) built
  from crossed squeegees — the shop's own tools standing in for the crossed
  rifles/oars on a classic varsity seal.
- The hero headline is built from four offset copies of the same text that
  snap into alignment on load — literally a colour-separation registration
  animation (`src/index.css`, `.sep-text`). It's skipped for
  `prefers-reduced-motion`.
- Product photography is replaced with generated SVG garment silhouettes
  filled with a halftone dot pattern in the selected colourway
  (`src/components/GarmentSVG.tsx`) — there are no real product photos to
  shoot yet, so the print process itself becomes the visual.
- The hero 3D piece (`src/components/InkLayers3D.tsx`, React Three Fiber) is
  a distorting "ink blob" core with three translucent navy/maroon/gold planes orbiting it
  — drag to rotate, it auto-rotates slowly on its own.

## Stack

Vite + React + TypeScript + Tailwind CSS + Framer Motion +
@react-three/fiber / drei (three.js).

## Run it

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # type-checks then builds to dist/
npm run preview   # serve the production build locally
```

## Structure

```
src/
  components/
    Header.tsx        sticky nav + cart trigger
    Hero.tsx           headline, copy, 3D canvas mount
    InkLayers3D.tsx     the R3F scene
    GarmentSVG.tsx      halftone garment silhouettes
    ProductGrid.tsx     sections grouped by garment
    ProductCard.tsx     colour/size selection + add to cart
    CartDrawer.tsx      slide-in cart, framer-motion
    Footer.tsx          about + footer
  context/
    CartContext.tsx     cart state (React context, in-memory only)
  data/
    products.ts         mock catalog — 8 SKUs across tee/hoodie/mug
```

## Next steps toward the full MVP

This covers Phase 1–2 of a full build (storefront UI only). To get to a real
store, following the phased plan:

1. **Auth** — register/login, protected `/account` routes.
2. **Backend** — FastAPI + PostgreSQL for products, cart, orders (matches
   your usual Render/Frankfurt + async SQLAlchemy pattern).
3. **Checkout + Stripe** — replace the disabled checkout button with a real
   payment flow and webhook-driven order creation.
4. **Admin** — product/order/customer management.
5. **Deploy** — frontend to Vercel or GitHub Pages, backend to Render, same
   as your other projects.

Say the word and I'll pick up at whichever phase you want next.
