import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const products = [
  {
    id: 1,
    name: "The Milano",
    category: "Shoulder Bag",
    price: "£425",
    image: "/elegant-brown-leather-shoulder-bag-on-white-backgr.jpg",
  },
  {
    id: 2,
    name: "The Venetian",
    category: "Tote Bag",
    price: "£595",
    image: "/luxury-beige-leather-tote-bag-minimal-design.jpg",
  },
  {
    id: 3,
    name: "The Florence",
    category: "Crossbody",
    price: "£385",
    image: "/sophisticated-black-leather-crossbody-bag.jpg",
  },
  {
    id: 4,
    name: "The Siena",
    category: "Clutch",
    price: "£295",
    image: "/elegant-cognac-leather-clutch-bag.jpg",
  },
]

export function FeaturedCollection() {
  return (
    <section id="collection" className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-mono tracking-widest text-muted-foreground mb-3">NEW ARRIVALS</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-4">Featured Collection</h2>
          <p className="text-lg text-muted-foreground font-mono max-w-2xl mx-auto leading-relaxed">
            Each piece is meticulously crafted from the finest Italian leather
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/5] overflow-hidden bg-secondary/20">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-mono tracking-widest text-muted-foreground mb-2">{product.category}</p>
                <h3 className="text-xl font-serif mb-2">{product.name}</h3>
                
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="px-8 py-6 text-base font-mono tracking-wide border-2 bg-transparent"
          >
            VIEW ALL PRODUCTS
          </Button>
        </div>
      </div>
    </section>
  )
}
