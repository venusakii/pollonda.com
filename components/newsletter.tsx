import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Newsletter() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-serif mb-4">Join our community</h2>
        <p className="text-lg text-muted-foreground font-mono mb-8 leading-relaxed">
          Subscribe to receive exclusive updates, early access to new collections, and styling inspiration
        </p>
        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input type="email" placeholder="Your email address" className="flex-1 px-4 py-6 font-mono" />
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 font-mono tracking-wide"
          >
            SUBSCRIBE
          </Button>
        </form>
        <p className="text-xs text-muted-foreground font-mono mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  )
}
