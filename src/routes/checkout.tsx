import { formatPrice, useCart } from "@/lib/cart";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/checkout")({
  head: () => ({ meta: [{ title: "Checkout — EcoSwitch" }] }),
  component: Checkout,
});

function Checkout() {
  const { detailed, subtotal, clear, count } = useCart();
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const shipping = subtotal >= 50 || subtotal === 0 ? 0 : 3.9;
  const total = subtotal + shipping;

  if (count === 0 && !submitted) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-24 text-center">
        <h1 className="text-3xl font-semibold">Sem itens para finalizar</h1>
        <Link to="/shop" className="mt-6 inline-flex rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground">Ver loja</Link>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-24 text-center">
        <h1 className="text-3xl font-semibold tracking-tight">Encomenda confirmada</h1>
        <p className="mt-3 text-muted-foreground">Obrigado pela sua compra. Receberá um email com os detalhes da entrega.</p>
        <Link to="/" className="mt-6 inline-flex rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground">Voltar ao início</Link>
      </div>
    );
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    clear();
    setSubmitted(true);
    setTimeout(() => navigate({ to: "/" }), 4000);
  };

  const field = "mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30";
  const label = "block text-xs font-medium text-muted-foreground";

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Checkout</h1>

      <form onSubmit={onSubmit} className="mt-8 grid gap-10 lg:grid-cols-[1fr_360px]">
        <div className="space-y-8">
          <section>
            <h2 className="text-sm font-medium uppercase tracking-wider">Contacto</h2>
            <div className="mt-4">
              <label className={label}>Email</label>
              <input required type="email" className={field} />
            </div>
          </section>

          <section>
            <h2 className="text-sm font-medium uppercase tracking-wider">Envio</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div><label className={label}>Nome</label><input required className={field} /></div>
              <div><label className={label}>Apelido</label><input required className={field} /></div>
              <div className="sm:col-span-2"><label className={label}>Morada</label><input required className={field} /></div>
              <div><label className={label}>Código postal</label><input required className={field} /></div>
              <div><label className={label}>Cidade</label><input required className={field} /></div>
              <div className="sm:col-span-2"><label className={label}>País</label><input defaultValue="Portugal" required className={field} /></div>
            </div>
          </section>

          <section>
            <h2 className="text-sm font-medium uppercase tracking-wider">Pagamento</h2>
            <div className="mt-4 space-y-3">
              <label className="flex items-center gap-3 rounded-md border border-border px-3 py-3 text-sm">
                <input type="radio" name="pay" defaultChecked /> Cartão de crédito/débito
              </label>
              <label className="flex items-center gap-3 rounded-md border border-border px-3 py-3 text-sm">
                <input type="radio" name="pay" /> MB WAY
              </label>
              <label className="flex items-center gap-3 rounded-md border border-border px-3 py-3 text-sm">
                <input type="radio" name="pay" /> Multibanco (referência)
              </label>
            </div>
          </section>
        </div>

        <aside className="h-fit rounded-2xl border border-border bg-secondary/30 p-6">
          <h2 className="text-sm font-medium uppercase tracking-wider">Encomenda</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {detailed.map(({ product, quantity, lineTotal }) => (
              <li key={product.slug} className="flex justify-between gap-3">
                <span className="text-muted-foreground">{product.name} × {quantity}</span>
                <span>{formatPrice(lineTotal)}</span>
              </li>
            ))}
          </ul>
          <dl className="mt-4 space-y-1 border-t border-border pt-4 text-sm">
            <div className="flex justify-between"><dt className="text-muted-foreground">Subtotal</dt><dd>{formatPrice(subtotal)}</dd></div>
            <div className="flex justify-between"><dt className="text-muted-foreground">Envio</dt><dd>{shipping === 0 ? "Grátis" : formatPrice(shipping)}</dd></div>
          </dl>
          <div className="mt-3 flex justify-between border-t border-border pt-3 text-base font-medium">
            <span>Total</span><span>{formatPrice(total)}</span>
          </div>
          <button type="submit" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">
            Confirmar encomenda
          </button>
          <p className="mt-3 text-center text-xs text-muted-foreground">Demonstração — nenhum pagamento será processado.</p>
        </aside>
      </form>
    </div>
  );
}
