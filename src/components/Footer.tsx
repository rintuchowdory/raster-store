import { Crest } from './Crest'

export function Footer() {
  return (
    <>
      <section id="about" className="scroll-mt-20 border-t-2 border-gold/30 bg-ink">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 md:grid-cols-[1fr_1.2fr]">
          <div className="flex items-start gap-3">
            <span className="reg-mark mt-2 text-maroon">
              <span className="reg-mark-circle" />
            </span>
            <h2 className="font-display text-3xl font-black uppercase text-canvas sm:text-4xl">
              How we print
            </h2>
          </div>
          <div className="font-body text-sm leading-relaxed text-canvas/70">
            <p className="mb-4">
              Every order is pulled by hand on a four-station flatbed press, one
              screen per colour. We only cut a screen once an order lands, so
              there's no stockroom of unsold size runs sitting on a shelf.
            </p>
            <p>
              That's also why sizes and colourways go out of stock — when a screen
              wears out, that exact print retires with it. Small batches, drawn
              from the same registration marks you can see on this page.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-gold/20 bg-ink">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-8 text-center sm:flex-row sm:justify-between sm:text-left sm:px-8">
          <div className="flex items-center gap-2 font-display text-lg font-black uppercase text-canvas">
            <Crest id="footer-crest" className="h-7 w-7 text-gold" />
            Raster
          </div>
          <p className="font-mono text-[11px] uppercase tracking-widest text-canvas/40">
            Demo storefront — built as a design/engineering sample, not a live shop
          </p>
        </div>
      </footer>
    </>
  )
}
