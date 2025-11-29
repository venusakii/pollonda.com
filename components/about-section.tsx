export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/5] bg-secondary/20 overflow-hidden">
              <img src="/artisan-crafting-luxury-leather-handbag-in-worksho.jpg" alt="Artisan crafting" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-sm font-mono tracking-widest text-muted-foreground mb-4">OUR PHILOSOPHY</p>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
              Crafted with passion, designed for life
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground font-mono leading-relaxed">
              <p>
                At Pollonda, we believe that a handbag is more than an accessory—it's a companion for life's most
                meaningful moments.
              </p>
              <p>
                Our master artisans work with premium Italian leather, employing time-honored techniques passed down
                through generations. Each stitch, each detail is executed with meticulous care.
              </p>
              <p>We create pieces that age beautifully, developing a unique patina that tells your story.</p>
            </div>
            <div className="mt-8 pt-8 border-t border-border">
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <p className="text-3xl font-serif mb-2">25+</p>
                  <p className="text-sm font-mono text-muted-foreground">Years Experience</p>
                </div>
                <div>
                  <p className="text-3xl font-serif mb-2">100%</p>
                  <p className="text-sm font-mono text-muted-foreground">Italian Leather</p>
                </div>
                <div>
                  <p className="text-3xl font-serif mb-2">∞</p>
                  <p className="text-sm font-mono text-muted-foreground">Timeless Design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
