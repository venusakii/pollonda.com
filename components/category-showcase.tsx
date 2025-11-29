const categories = [
  {
    name: "Shoulder Bags",
    description: "Versatile elegance for every occasion",
    image: "/elegant-leather-shoulder-bags-collection.jpg",
  },
  {
    name: "Tote Bags",
    description: "Spacious sophistication meets functionality",
    image: "/luxury-leather-tote-bags-minimal-modern.jpg",
  },
  {
    name: "Evening Clutches",
    description: "Refined grace for special moments",
    image: "/elegant-evening-clutch-bags-luxury.jpg",
  },
]

export function CategoryShowcase() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-4">Shop by Category</h2>
          <p className="text-lg text-muted-foreground font-mono max-w-2xl mx-auto leading-relaxed">
            Find the perfect style for your lifestyle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div key={category.name} className="group relative overflow-hidden cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden bg-secondary/20">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent flex items-end p-8">
                <div className="text-primary-foreground">
                  <h3 className="text-2xl font-serif mb-2">{category.name}</h3>
                  <p className="font-mono text-sm opacity-90">{category.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
