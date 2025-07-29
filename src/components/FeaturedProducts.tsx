import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart, Star } from "lucide-react";
import classicWatch from "@/assets/classic-watch.jpg";
import sportsWatch from "@/assets/sports-watch.jpg";
import luxuryWatch from "@/assets/luxury-watch.jpg";
import smartWatch from "@/assets/smart-watch.jpg";

const featuredProducts = [
  {
    id: 1,
    name: "Classic Elegance",
    price: 299,
    originalPrice: 399,
    image: classicWatch,
    rating: 4.8,
    reviews: 124,
    badge: "Best Seller"
  },
  {
    id: 2,
    name: "Sports Pro",
    price: 189,
    originalPrice: null,
    image: sportsWatch,
    rating: 4.6,
    reviews: 89,
    badge: "New"
  },
  {
    id: 3,
    name: "Luxury Gold",
    price: 799,
    originalPrice: 999,
    image: luxuryWatch,
    rating: 4.9,
    reviews: 156,
    badge: "Premium"
  },
  {
    id: 4,
    name: "Smart Tech",
    price: 249,
    originalPrice: null,
    image: smartWatch,
    rating: 4.7,
    reviews: 203,
    badge: "Featured"
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-luxury">
            Featured Collection
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of exceptional timepieces
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <Card 
              key={product.id} 
              className="group overflow-hidden border-0 shadow-product hover:shadow-luxury transition-all duration-500 hover:-translate-y-2"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  {product.badge && (
                    <Badge 
                      className="absolute top-4 left-4 z-10 bg-gold text-gold-foreground"
                    >
                      {product.badge}
                    </Badge>
                  )}
                  
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>

                  {/* Quick actions overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-2">
                      <Button 
                        size="icon" 
                        variant="secondary"
                        className="rounded-full shadow-lg hover:scale-110 transition-transform"
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button 
                        size="icon"
                        className="rounded-full shadow-lg bg-gold hover:bg-gold/90 text-gold-foreground hover:scale-110 transition-transform"
                      >
                        <ShoppingCart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-luxury group-hover:text-gold transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center space-x-2 mt-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-muted-foreground'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        ({product.reviews})
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-x-2">
                      <span className="text-2xl font-bold text-luxury">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-lg text-muted-foreground line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>

                  <Button className="w-full bg-luxury hover:bg-luxury/90 text-white">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-luxury text-luxury hover:bg-luxury hover:text-white px-8"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;