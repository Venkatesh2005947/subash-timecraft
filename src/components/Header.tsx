import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Heart, 
  ShoppingCart, 
  User, 
  Search, 
  Menu, 
  Clock,
  LogOut
} from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useCart } from "@/hooks/useCart";
import { useWishlist } from "@/hooks/useWishlist";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const { cartCount } = useCart();
  const { wishlistItems } = useWishlist();
  const navigate = useNavigate();

  const handleAuthAction = () => {
    if (user) {
      signOut();
    } else {
      navigate('/auth');
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Clock className="h-8 w-8 text-gold" />
            <span className="text-2xl font-bold text-luxury">SUBASH</span>
          </div>

          {/* Search bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input 
                placeholder="Search watches..." 
                className="pl-10 bg-muted/50" 
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="hidden md:flex"
              onClick={handleAuthAction}
            >
              {user ? <LogOut className="h-5 w-5" /> : <User className="h-5 w-5" />}
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <Heart className="h-5 w-5" />
              {wishlistItems.length > 0 && (
                <Badge 
                  className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 text-xs bg-gold text-gold-foreground"
                >
                  {wishlistItems.length}
                </Badge>
              )}
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <Badge 
                  className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 text-xs bg-gold text-gold-foreground"
                >
                  {cartCount}
                </Badge>
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex h-12 items-center space-x-8 text-sm font-medium">
          <Button variant="ghost" className="text-foreground hover:text-gold">
            Home
          </Button>
          <Button variant="ghost" className="text-foreground hover:text-gold">
            Categories
          </Button>
          <Button variant="ghost" className="text-foreground hover:text-gold">
            Classic
          </Button>
          <Button variant="ghost" className="text-foreground hover:text-gold">
            Sports
          </Button>
          <Button variant="ghost" className="text-foreground hover:text-gold">
            Luxury
          </Button>
          <Button variant="ghost" className="text-foreground hover:text-gold">
            Smartwatches
          </Button>
          <Button variant="ghost" className="text-foreground hover:text-gold">
            Track Order
          </Button>
          <Button variant="ghost" className="text-foreground hover:text-gold">
            Contact
          </Button>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t py-4 space-y-2 animate-slide-up">
            <div className="pb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input 
                  placeholder="Search watches..." 
                  className="pl-10 bg-muted/50" 
                />
              </div>
            </div>
            <Button variant="ghost" className="w-full justify-start">
              Home
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Categories
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Account
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Track Order
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Contact
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;