import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Clock, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-luxury text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Clock className="h-8 w-8 text-gold" />
              <span className="text-2xl font-bold">SUBASH</span>
            </div>
            <p className="text-white/80 leading-relaxed">
              Crafting exceptional timepieces for over 25 years. Experience the perfect blend of tradition and innovation.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-white hover:text-gold hover:bg-white/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-gold hover:bg-white/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-gold hover:bg-white/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-gold hover:bg-white/10">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gold">Quick Links</h3>
            <div className="space-y-3">
              {["Home", "Categories", "About Us", "Track Order", "Contact", "Size Guide"].map((link) => (
                <div key={link}>
                  <Button variant="ghost" className="text-white/80 hover:text-gold p-0 h-auto justify-start">
                    {link}
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gold">Categories</h3>
            <div className="space-y-3">
              {["Classic Watches", "Sports Watches", "Luxury Watches", "Smartwatches", "Men's Collection", "Women's Collection"].map((category) => (
                <div key={category}>
                  <Button variant="ghost" className="text-white/80 hover:text-gold p-0 h-auto justify-start">
                    {category}
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gold">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-gold" />
                <span className="text-white/80 text-sm">
                  123 Time Square, Watch District, City 12345
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gold" />
                <span className="text-white/80 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gold" />
                <span className="text-white/80 text-sm">support@subashwatches.com</span>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-gold">Newsletter</h4>
              <p className="text-white/80 text-sm">
                Subscribe for exclusive offers and latest arrivals
              </p>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Your email" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Button className="bg-gold hover:bg-gold/90 text-gold-foreground">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-white/60 text-sm">
            © 2024 SUBASH Watches. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <Button variant="ghost" className="text-white/60 hover:text-gold p-0 h-auto">
              Privacy Policy
            </Button>
            <Button variant="ghost" className="text-white/60 hover:text-gold p-0 h-auto">
              Terms of Service
            </Button>
            <Button variant="ghost" className="text-white/60 hover:text-gold p-0 h-auto">
              Return Policy
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;