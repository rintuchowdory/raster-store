import { InkLayers3D } from './InkLayers3D'
import { Crest } from './Crest'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b-2 border-gold/30">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-14 sm:px-8 md:grid-cols-2 md:pt-20">
        <div>
          <div className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-canvas/50">
            <Crest id="hero-crest" className="h-8 w-8 text-gold/70" />
            Class of print · Cologne, DE
          </div>

          <h1 className="sep-text font-display font-black text-[15vw] leading-[0.92] text-canvas sm:text-6xl md:text-7xl">
            <span className="relative z-10">PRINTED
              <br />
              TO ORDER
            </span>
            <span aria-hidden="true" className="sep-layer sep-c">PRINTED<br />TO ORDER</span>
            <span aria-hidden="true" className="sep-layer sep-m">PRINTED<br />TO ORDER</span>
            <span aria-hidden="true" className="sep-layer sep-y">PRINTED<br />TO ORDER</span>
          </h1>

          <p className="mt-6 max-w-md font-body text-base text-canvas/70">
            Small-batch screen print goods. Every tee, hoodie and mug is pulled to
            order on our own press — no warehouse, no overrun, no two runs quite
            the same.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#tee"
              className="bg-gold px-6 py-3 font-mono text-xs uppercase tracking-widest text-ink transition-colors hover:bg-canvas"
            >
              Shop the drop
            </a>
            <a
              href="#about"
              className="border border-gold/30 px-6 py-3 font-mono text-xs uppercase tracking-widest text-canvas/80 transition-colors hover:border-gold hover:text-gold"
            >
              How we print
            </a>
          </div>
        </div>

        <div className="relative h-[340px] sm:h-[420px] md:h-[480px]">
          <InkLayers3D />
        </div>
      </div>
    </section>
  )
}
