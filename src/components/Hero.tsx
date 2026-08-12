import { InkLayers3D } from './InkLayers3D'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-white/10">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-14 sm:px-8 md:grid-cols-2 md:pt-20">
        <div>
          <div className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-canvas/50">
            <span className="reg-mark">
              <span className="reg-mark-circle" />
            </span>
            4-colour drop · Cologne, DE
          </div>

          <h1 className="sep-text font-display text-[15vw] leading-[0.92] text-canvas sm:text-6xl md:text-7xl">
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
              className="bg-canvas px-6 py-3 font-mono text-xs uppercase tracking-widest text-ink transition-colors hover:bg-cyan"
            >
              Shop the drop
            </a>
            <a
              href="#about"
              className="border border-white/20 px-6 py-3 font-mono text-xs uppercase tracking-widest text-canvas/80 transition-colors hover:border-canvas hover:text-canvas"
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
