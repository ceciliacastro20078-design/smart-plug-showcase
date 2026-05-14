import { formatPrice } from "@/lib/cart";
import { products } from "@/lib/products";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Loja — EcoSwitch" },
      { name: "description", content: "Catálogo completo das tomadas inteligentes EcoSwitch: Mini, Solo, Pack 3, Office Strip e Pro." },
    ],
  }),
  component: Shop,
});

function Shop() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <header className="max-w-2xl">
        <span className="text-xs uppercase tracking-wider text-muted-foreground">Catálogo</span>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight md:text-5xl">A gama EcoSwitch</h1>
        <p className="mt-3 text-muted-foreground">
          Cinco variações pensadas para casa e escritório. Todas com corte físico de energia e funcionamento autónomo.
        </p>
      </header>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <Link key={p.slug} to="/product/$slug" params={{ slug: p.slug }} className="group">
            <div className="overflow-hidden rounded-xl bg-[#f7f7f7]">
                <img src={p.image} alt={p.name} loading="lazy" width={1280} height={1280} className="aspect-square w-full object-contain transition-transform duration-500 group-hover:scale-105" />
              </div>
            <div className="mt-4 flex items-baseline justify-between">
              <h2 className="text-base font-medium">{p.name}</h2>
              <span className="text-sm">{formatPrice(p.price)}</span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{p.tagline}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
