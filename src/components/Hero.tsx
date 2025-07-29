import { Button } from "@/components/ui/button";
import heroWatch from "@/assets/hero-watch.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero min-h-[80vh] flex items-center">
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Timeless
                <span className="block bg-gradient-gold bg-clip-text text-transparent">
                  Elegance
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/80 max-w-lg">
                Crafted for You. Discover our exclusive collection of luxury timepieces.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gold hover:bg-gold/90 text-gold-foreground px-8 py-6 text-lg font-semibold shadow-glow transition-all duration-300 hover:scale-105"
              >
                Shop Collection
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg backdrop-blur-sm"
              >
                Explore Categories
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center space-x-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gold">50K+</div>
                <div className="text-sm text-white/60">Happy Customers</div>
              </div>
              <div className="h-12 w-px bg-white/20" />
              <div className="text-center">
                <div className="text-3xl font-bold text-gold">25+</div>
                <div className="text-sm text-white/60">Years Experience</div>
              </div>
              <div className="h-12 w-px bg-white/20" />
              <div className="text-center">
                <div className="text-3xl font-bold text-gold">100%</div>
                <div className="text-sm text-white/60">Authentic</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-float">
            <div className="relative">
              <img
                src={heroWatch}
                alt="Luxury SUBASH Watch"
                className="w-full h-auto max-w-lg mx-auto drop-shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gold/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-white/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default Hero;