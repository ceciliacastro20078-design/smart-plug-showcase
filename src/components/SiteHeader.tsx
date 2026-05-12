import { Link } from "@tanstack/react-router";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart";

export function SiteHeader() {
  const { count } = useCart();
  const linkCls =
    "text-sm text-muted-foreground hover:text-foreground transition-colors";
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-primary" />
          <span className="text-base font-medium tracking-tight">EcoSwitch</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <Link to="/shop" className={linkCls} activeProps={{ className: "text-sm text-foreground" }}>Loja</Link>
          <Link to="/about" className={linkCls} activeProps={{ className: "text-sm text-foreground" }}>Sobre</Link>
          <Link to="/contact" className={linkCls} activeProps={{ className: "text-sm text-foreground" }}>Contactos</Link>
        </nav>
        <Link to="/cart" className="relative inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-sm hover:bg-accent transition-colors">
          <ShoppingBag className="h-4 w-4" />
          <span>Carrinho</span>
          {count > 0 && (
            <span className="ml-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1.5 text-xs font-medium text-primary-foreground">
              {count}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
