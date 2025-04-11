import { create } from 'zustand';
import { CartItem } from '../types/product';

interface StoreState {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number, weight: string) => void;
  updateQuantity: (id: number, weight: string, quantity: number) => void;
  getCartTotal: () => number;
}

export const useStore = create<StoreState>((set, get) => ({
  cart: [],
  
  addToCart: (item: CartItem) => {
    set((state) => {
      const existingItem = state.cart.find(
        i => i.id === item.id && i.weight === item.weight
      );
      
      if (existingItem) {
        return {
          cart: state.cart.map(i =>
            i.id === item.id && i.weight === item.weight
              ? { ...i, quantity: i.quantity + item.quantity }
              : i
          ),
        };
      }
      
      return {
        cart: [...state.cart, item],
      };
    });
  },
  
  removeFromCart: (id: number, weight: string) => {
    set((state) => ({
      cart: state.cart.filter(i => !(i.id === id && i.weight === weight)),
    }));
  },
  
  updateQuantity: (id: number, weight: string, quantity: number) => {
    set((state) => ({
      cart: state.cart.map(i =>
        i.id === id && i.weight === weight
          ? { ...i, quantity: Math.max(0, quantity) }
          : i
      ).filter(i => i.quantity > 0),
    }));
  },
  
  getCartTotal: () => {
    const state = get();
    return state.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  },
}));