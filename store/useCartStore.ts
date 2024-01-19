import { create } from "zustand";
import { persist } from "zustand/middleware";

type Product = {
  name: string;
  slug: {
    current: string;
  };
  price: number;
  image: {
    asset: {
      url: string;
    };
  };
  quantity: number; // Added quantity property
};

type State = {
  cart: Product[];
  totalItems: number;
};

type Actions = {
  addToCart: (Item: Product) => void;
  removeFromCart: (Item: Product) => void;
  deleteFromCart: (Item: Product) => void; // Added deleteFromCart function
};

const INITIAL_STATE = {
  cart: [],
  totalItems: 0,
};

export const useCartStore = create(
  persist<State & Actions>(
    (set, get) => ({
      cart: INITIAL_STATE.cart,
      totalItems: INITIAL_STATE.totalItems,
      addToCart: (product: Product) => {
        const cart = get().cart;
        const cartItem = cart.find(
          (item: any) => item.slug.current === product.slug.current,
        );
        if (cartItem) {
          const updatedCart = cart.map((item) =>
            item.slug.current === product.slug.current
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          );
          set((state) => ({
            cart: updatedCart,
            totalItems: state.totalItems + 1,
          }));
        } else {
          const updatedCart = [...cart, { ...product, quantity: 1 }];

          set((state) => ({
            cart: updatedCart,
            totalItems: state.totalItems + 1,
          }));
        }
      },
      removeFromCart: (product: Product) => {
        const cart = get().cart;
        const cartItem = cart.find(
          (item: any) => item.slug.current === product.slug.current,
        );
        if (cartItem) {
          const updatedCart = cart.map((item) =>
            item.slug.current === product.slug.current
              ? { ...item, quantity: item.quantity - 1 }
              : item,
          ).filter((item) => item.quantity > 0); // Remove product when quantity is zero
          set((state) => ({
            cart: updatedCart,
            totalItems: state.totalItems - 1,
          }));
        }
      },
      deleteFromCart: (product: Product) => {
        const cart = get().cart;
        const updatedCart = cart.filter(
          (item) => item.slug.current !== product.slug.current
        );
        set((state) => ({
          cart: updatedCart,
          totalItems: state.totalItems - product.quantity,
        }));
      },
    }),
    {
      name: "cart-store",
    },
  ),
);
