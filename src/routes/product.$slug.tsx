import { formatPrice, useCart } from "@/lib/cart";
import { getProduct, products } from "@/lib/products";
import { createFileRoute, Link, notFound, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, Check } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.product.name} — EcoSwitch` },
          { name: "description", content: loaderData.product.description.slice(0, 160) },
          { property: "og:title", content: `${loaderData.product.name} — EcoSwitch` },
          { property: "og:description", content: loaderData.product.tagline },
          { property: "og:image", content: loaderData.product.image },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <h1 className="text-2xl font-semibold">Produto não encontrado</h1>
      <Link to="/shop" className="mt-4 inline-block text-sm text-primary underline">Voltar à loja</Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <h1 className="text-2xl font-semibold">Algo correu mal</h1>
      <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const { add } = useCart();
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);

  const others = products.filter((p) => p.slug !== product.slug).slice(0, 4);

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <Link to="/shop" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" /> Loja
      </Link>

      <div className="mt-8 grid gap-12 md:grid-cols-2">
        <div className="overflow-hidden rounded-2xl bg-secondary/40">
          <img src={product.image} alt={product.name} width={1280} height={1280} className="aspect-square w-full object-cover" />
        </div>

        <div>
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">{product.name}</h1>
          <p className="mt-2 text-muted-foreground">{product.tagline}</p>
          <div className="mt-6 text-2xl font-medium">{formatPrice(product.price)}</div>

          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{product.description}</p>

          <ul className="mt-6 space-y-2">
            {product.features.map((f: string) => (
              <li key={f} className="flex items-start gap-3 text-sm">
                <Check className="mt-0.5 h-4 w-4 text-primary" />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex items-center gap-3">
            <div className="flex items-center rounded-full border border-border">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="px-3 py-2 text-sm hover:bg-accent rounded-l-full">−</button>
              <span className="min-w-8 text-center text-sm">{qty}</span>
              <button onClick={() => setQty((q) => q + 1)} className="px-3 py-2 text-sm hover:bg-accent rounded-r-full">+</button>
            </div>
            <button
              onClick={() => add(product.slug, qty)}
              className="flex-1 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Adicionar ao carrinho
            </button>
            <button
              onClick={() => { add(product.slug, qty); navigate({ to: "/checkout" }); }}
              className="rounded-full border border-border px-5 py-3 text-sm font-medium hover:bg-accent transition-colors"
            >
              Comprar
            </button>
          </div>
        </div>
      </div>

      <section className="mt-24">
        <h2 className="text-xl font-medium">Outros modelos</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((p) => (
            <Link key={p.slug} to="/product/$slug" params={{ slug: p.slug }} className="group">
              <div className="overflow-hidden rounded-xl bg-secondary/40">
                <img src={p.image} alt={p.name} loading="lazy" width={1280} height={1280} className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="mt-3 flex items-baseline justify-between">
                <span className="text-sm font-medium">{p.name}</span>
                <span className="text-sm text-muted-foreground">{formatPrice(p.price)}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
