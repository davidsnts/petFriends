import { createContext, use, useEffect, useState } from "react";
import type { productProps } from "../pages/Home";
import { api } from "../services/api";

interface CartContextData {
  cartItems: productProps[];
  addToCart: (product: productProps) => Promise<void>;
  RemoveToCart: (product: productProps) => Promise<void>;
  totalPrice: number;
  totalItems: number;
}

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartContext = createContext({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<productProps[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const total = cartItems.reduce((acc, item) => acc + item.total, 0);
    setTotalPrice(total);

    const items = cartItems.reduce((acc, item) => acc + item.amount, 0);
    setTotalItems(items);
  }, [cartItems]);

  async function addToCart(product: productProps) {
    const productExists = cartItems.find((item) => item.id === product.id);
    if (productExists) {
      const updatedCart = cartItems.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            amount: item.amount + 1,
            total: item.total + product.price,
          };
        }
        return item;
      });
      setCartItems(updatedCart);
      return;
    }

    let data = {
      id: product.id,
      title: product.title,
      description: product.description,
      price: product.price,
      cover: product.cover,
      amount: 1,
      total: product.price,
    };
    setCartItems((prev) => [...prev, data]);
  }

  async function RemoveToCart(product: productProps) {
    const productExists = cartItems.find((item) => item.id === product.id);
    if (productExists) {
      if (productExists.amount === 1) {
        const updatedCart = cartItems.filter((item) => item.id !== product.id);
        setCartItems(updatedCart);
        return;
      }
      const updatedCart = cartItems.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            amount: item.amount + -1,
            total: item.total - product.price,
          };
        }
        return item;
      });
      setCartItems(updatedCart);
      return;
    }

    let data = {
      id: product.id,
      title: product.title,
      description: product.description,
      price: product.price,
      cover: product.cover,
      amount: 1,
      total: product.price,
    };
    setCartItems((prev) => [...prev, data]);
  }

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart,RemoveToCart, totalPrice, totalItems }}
    >
      {children}
    </CartContext.Provider>
  );
}
