import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/shipping")({
  head: () => ({ meta: [{ title: "Entregas e devoluções — EcoSwitch" }] }),
  component: Shipping,
});

function Shipping() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Entregas e devoluções</h1>

      <div className="mt-10 space-y-10 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="text-base font-medium text-foreground">Entregas</h2>
          <p className="mt-2">Enviamos para Portugal Continental, Açores e Madeira. As encomendas são preparadas em 1 a 2 dias úteis.</p>
          <ul className="mt-3 space-y-2">
            <li>• Portugal Continental: 2–3 dias úteis · 3,90 € (grátis acima de 50 €)</li>
            <li>• Ilhas: 4–6 dias úteis · 6,90 €</li>
            <li>• União Europeia: 5–8 dias úteis · 9,90 €</li>
          </ul>
        </section>
        <section>
          <h2 className="text-base font-medium text-foreground">Devoluções</h2>
          <p className="mt-2">Tem 14 dias após a receção para devolver o produto, sem necessidade de justificação. O artigo deve estar na embalagem original e em perfeitas condições.</p>
        </section>
        <section>
          <h2 className="text-base font-medium text-foreground">Reembolsos</h2>
          <p className="mt-2">Após receção e validação do produto devolvido, processamos o reembolso no prazo máximo de 14 dias, pelo mesmo método de pagamento usado na compra.</p>
        </section>
        <section>
          <h2 className="text-base font-medium text-foreground">Garantia</h2>
          <p className="mt-2">Todos os modelos EcoSwitch têm garantia de 3 anos contra defeitos de fabrico.</p>
        </section>
      </div>
    </div>
  );
}
