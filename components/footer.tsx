import { Instagram, Facebook, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-serif mb-4">POLLONDA</h3>
            <p className="font-mono text-sm opacity-80 leading-relaxed max-w-md">
              Timeless elegance in every stitch. Handcrafted leather handbags that celebrate the art of refined living.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-sm tracking-widest mb-4">EXPLORE</h4>
            <ul className="space-y-2 font-mono text-sm opacity-80">
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Best Sellers
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Collections
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Care Guide
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-sm tracking-widest mb-4">CONTACT</h4>
            <ul className="space-y-2 font-mono text-sm opacity-80">
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Stores
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Customer Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Returns
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-primary-foreground/20">
          <p className="font-mono text-sm opacity-80 mb-4 md:mb-0">© 2025 Pollonda. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:opacity-100 transition-opacity opacity-80">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="hover:opacity-100 transition-opacity opacity-80">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="hover:opacity-100 transition-opacity opacity-80">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
