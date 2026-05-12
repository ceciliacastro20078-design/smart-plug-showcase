import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="text-base font-medium tracking-tight">EcoSwitch</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Poupe energia enquanto dorme.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-medium uppercase tracking-wider text-foreground">Loja</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/shop" className="hover:text-foreground">Produtos</Link></li>
            <li><Link to="/cart" className="hover:text-foreground">Carrinho</Link></li>
            <li><Link to="/checkout" className="hover:text-foreground">Checkout</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-medium uppercase tracking-wider text-foreground">Empresa</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">Sobre nós</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contactos</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-medium uppercase tracking-wider text-foreground">Apoio</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/shipping" className="hover:text-foreground">Entregas e devoluções</Link></li>
            <li><Link to="/privacy" className="hover:text-foreground">Privacidade</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} EcoSwitch. Todos os direitos reservados.</span>
          <span>Lisboa, Portugal</span>
        </div>
      </div>
    </footer>
  );
}
