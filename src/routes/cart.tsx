import { formatPrice, useCart } from "@/lib/cart";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Trash2 } from "lucide-react";

export const Route = createFileRoute("/cart")({
  head: () => ({ meta: [{ title: "Carrinho — EcoSwitch" }] }),
  component: CartPage,
});

function CartPage() {
  const { detailed, setQty, remove, subtotal, count } = useCart();

  if (count === 0) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-24 text-center">
        <h1 className="text-3xl font-semibold tracking-tight">O seu carrinho está vazio</h1>
        <p className="mt-3 text-muted-foreground">Descubra a gama EcoSwitch e comece a poupar.</p>
        <Link to="/shop" className="mt-6 inline-flex rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">
          Ver loja
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Carrinho</h1>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_360px]">
        <ul className="divide-y divide-border">
          {detailed.map(({ product, quantity, lineTotal }) => (
            <li key={product.slug} className="flex gap-4 py-5">
              <img src={product.image} alt={product.name} width={120} height={120} className="h-24 w-24 rounded-lg object-cover bg-secondary/40" />
              <div className="flex flex-1 flex-col">
                <div className="flex items-start justify-between">
                  <div>
                    <Link to="/product/$slug" params={{ slug: product.slug }} className="text-sm font-medium hover:underline">{product.name}</Link>
                    <p className="text-xs text-muted-foreground">{product.tagline}</p>
                  </div>
                  <span className="text-sm">{formatPrice(lineTotal)}</span>
                </div>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center rounded-full border border-border text-sm">
                    <button onClick={() => setQty(product.slug, quantity - 1)} className="px-3 py-1 hover:bg-accent rounded-l-full">−</button>
                    <span className="min-w-8 text-center">{quantity}</span>
                    <button onClick={() => setQty(product.slug, quantity + 1)} className="px-3 py-1 hover:bg-accent rounded-r-full">+</button>
                  </div>
                  <button onClick={() => remove(product.slug)} className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-destructive">
                    <Trash2 className="h-3.5 w-3.5" /> Remover
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <aside className="h-fit rounded-2xl border border-border bg-secondary/30 p-6">
          <h2 className="text-sm font-medium uppercase tracking-wider">Resumo</h2>
          <dl className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between"><dt className="text-muted-foreground">Subtotal</dt><dd>{formatPrice(subtotal)}</dd></div>
            <div className="flex justify-between"><dt className="text-muted-foreground">Envio</dt><dd>Calculado no checkout</dd></div>
          </dl>
          <div className="mt-4 flex justify-between border-t border-border pt-4 text-base font-medium">
            <span>Total</span><span>{formatPrice(subtotal)}</span>
          </div>
          <Link to="/checkout" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">
            Finalizar compra
          </Link>
          <Link to="/shop" className="mt-2 inline-flex w-full items-center justify-center rounded-full border border-border px-5 py-3 text-sm hover:bg-accent">
            Continuar a comprar
          </Link>
        </aside>
      </div>
    </div>
  );
}
