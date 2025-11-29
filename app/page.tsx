import { Hero } from "@/components/hero"
import { FeaturedCollection } from "@/components/featured-collection"
import { AboutSection } from "@/components/about-section"
import { CategoryShowcase } from "@/components/category-showcase"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeaturedCollection />
      <AboutSection />
      <CategoryShowcase />
      <Newsletter />
      <Footer />
    </main>
  )
}
