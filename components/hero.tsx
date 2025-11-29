import { Button } from "@/components/ui/button"
import { ShoppingBag, Menu } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col">
      <div className="absolute inset-0 z-0">
        <Image
          src="/luxury-elegant-leather-handbag-studio-photography-.jpg"
          alt="Luxury handbag background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between">
          <button className="md:hidden text-foreground">
            <Menu className="h-6 w-6" />
          </button>

          <div className="flex-1 flex justify-center md:justify-start">
            <h1 className="text-2xl md:text-3xl font-serif tracking-wide">POLLONDA</h1>
          </div>

          <div className="hidden md:flex items-center gap-8 font-mono text-sm tracking-wide">
            <a href="#collection" className="hover:text-accent transition-colors">
              COLLECTION
            </a>
            <a href="#about" className="hover:text-accent transition-colors">
              ABOUT
            </a>
            <a href="#contact" className="hover:text-accent transition-colors">
              CONTACT
            </a>
          </div>

          <button className="text-foreground hover:text-accent transition-colors">
            <ShoppingBag className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="flex-1 flex items-center justify-center px-6 md:px-12 lg:px-20 py-32 relative z-10">
        <div className="max-w-5xl text-center">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 leading-tight text-balance">
            Timeless elegance meets modern sophistication
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-mono mb-12 max-w-2xl mx-auto leading-relaxed">
            Discover our curated collection of handcrafted leather handbags, where artisanal craftsmanship creates
            pieces that transcend trends
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-mono tracking-wide"
            >
              EXPLORE COLLECTION
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-base font-mono tracking-wide border-2 bg-transparent"
            >
              LEARN OUR STORY
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <p className="text-xs font-mono tracking-widest text-muted-foreground">SCROLL</p>
        <div className="w-px h-12 bg-border" />
      </div>
    </section>
  )
}
