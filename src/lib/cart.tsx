import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { products, type Product } from "./products";

export type CartItem = { slug: string; quantity: number };

type CartContextValue = {
  items: CartItem[];
  add: (slug: string, qty?: number) => void;
  remove: (slug: string) => void;
  setQty: (slug: string, qty: number) => void;
  clear: () => void;
  count: number;
  subtotal: number;
  detailed: { product: Product; quantity: number; lineTotal: number }[];
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("ecoswitch-cart");
      if (raw) setItems(JSON.parse(raw));
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) localStorage.setItem("ecoswitch-cart", JSON.stringify(items));
  }, [items, hydrated]);

  const add = (slug: string, qty = 1) =>
    setItems((cur) => {
      const ex = cur.find((i) => i.slug === slug);
      if (ex) return cur.map((i) => (i.slug === slug ? { ...i, quantity: i.quantity + qty } : i));
      return [...cur, { slug, quantity: qty }];
    });
  const remove = (slug: string) => setItems((cur) => cur.filter((i) => i.slug !== slug));
  const setQty = (slug: string, qty: number) =>
    setItems((cur) =>
      qty <= 0 ? cur.filter((i) => i.slug !== slug) : cur.map((i) => (i.slug === slug ? { ...i, quantity: qty } : i)),
    );
  const clear = () => setItems([]);

  const detailed = items
    .map((i) => {
      const product = products.find((p) => p.slug === i.slug);
      if (!product) return null;
      return { product, quantity: i.quantity, lineTotal: product.price * i.quantity };
    })
    .filter(Boolean) as CartContextValue["detailed"];

  const subtotal = detailed.reduce((s, d) => s + d.lineTotal, 0);
  const count = items.reduce((s, i) => s + i.quantity, 0);

  return (
    <CartContext.Provider value={{ items, add, remove, setQty, clear, count, subtotal, detailed }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};

export const formatPrice = (n: number) =>
  new Intl.NumberFormat("pt-PT", { style: "currency", currency: "EUR" }).format(n);
