import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import { useToast } from '@/hooks/use-toast';

export interface WishlistItem {
  id: string;
  product_id: string;
  product_name: string;
  product_image: string;
  price: number;
}

export const useWishlist = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      fetchWishlistItems();
    } else {
      setWishlistItems([]);
    }
  }, [user]);

  const fetchWishlistItems = async () => {
    if (!user) return;
    
    setLoading(true);
    const { data, error } = await supabase
      .from('wishlist_items')
      .select('*')
      .eq('user_id', user.id);

    if (error) {
      console.error('Error fetching wishlist items:', error);
    } else {
      setWishlistItems(data || []);
    }
    setLoading(false);
  };

  const addToWishlist = async (product: {
    id: string;
    name: string;
    image: string;
    price: number;
  }) => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to add items to your wishlist.",
        variant: "destructive",
      });
      return;
    }

    const { error } = await supabase
      .from('wishlist_items')
      .insert({
        user_id: user.id,
        product_id: product.id,
        product_name: product.name,
        product_image: product.image,
        price: product.price,
      });

    if (error) {
      if (error.code === '23505') { // Unique constraint violation
        toast({
          title: "Already in Wishlist",
          description: "This item is already in your wishlist.",
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to add item to wishlist.",
          variant: "destructive",
        });
      }
    } else {
      await fetchWishlistItems();
      toast({
        title: "Added to Wishlist",
        description: `${product.name} has been added to your wishlist.`,
      });
    }
  };

  const removeFromWishlist = async (productId: string) => {
    if (!user) return;

    const { error } = await supabase
      .from('wishlist_items')
      .delete()
      .eq('user_id', user.id)
      .eq('product_id', productId);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to remove item from wishlist.",
        variant: "destructive",
      });
    } else {
      await fetchWishlistItems();
      toast({
        title: "Removed from Wishlist",
        description: "Item has been removed from your wishlist.",
      });
    }
  };

  const isInWishlist = (productId: string) => {
    return wishlistItems.some(item => item.product_id === productId);
  };

  return {
    wishlistItems,
    loading,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  };
};