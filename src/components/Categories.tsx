import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import classicWatch from "@/assets/classic-watch.jpg";
import sportsWatch from "@/assets/sports-watch.jpg";
import luxuryWatch from "@/assets/luxury-watch.jpg";
import smartWatch from "@/assets/smart-watch.jpg";

const categories = [
  {
    id: 1,
    name: "Classic",
    description: "Timeless designs for every occasion",
    image: classicWatch,
    count: 45,
    color: "from-slate-600 to-slate-800"
  },
  {
    id: 2,
    name: "Sports",
    description: "Built for performance and durability",
    image: sportsWatch,
    count: 32,
    color: "from-blue-600 to-blue-800"
  },
  {
    id: 3,
    name: "Luxury",
    description: "Premium craftsmanship and materials",
    image: luxuryWatch,
    count: 28,
    color: "from-amber-600 to-amber-800"
  },
  {
    id: 4,
    name: "Smartwatches",
    description: "Technology meets style",
    image: smartWatch,
    count: 21,
    color: "from-emerald-600 to-emerald-800"
  }
];

const Categories = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-luxury">
            Shop by Category
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find the perfect watch that matches your style and needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card 
              key={category.id}
              className="group relative overflow-hidden border-0 cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-luxury"
            >
              <CardContent className="p-0 relative h-80">
                <div className="absolute inset-0">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-70 group-hover:opacity-80 transition-opacity duration-300`} />
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold">{category.name}</h3>
                      <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                        {category.count}
                      </Badge>
                    </div>
                    <p className="text-white/90 text-sm">{category.description}</p>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="text-lg font-semibold mb-2">Explore Collection</div>
                      <div className="w-12 h-0.5 bg-gold mx-auto" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;