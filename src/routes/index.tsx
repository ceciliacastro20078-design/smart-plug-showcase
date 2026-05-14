import heroImg from "@/assets/ecoswitch-hero.jpg";
import productImg from "@/assets/ecoswitch-product.jpg";
import { formatPrice } from "@/lib/cart";
import { products } from "@/lib/products";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Leaf, Plug, Zap } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EcoSwitch — Tomada inteligente que poupa enquanto dorme" },
      { name: "description", content: "A EcoSwitch é um adaptador inteligente que corta fisicamente o consumo em standby. Reduza a fatura de luz sem mudar hábitos." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground">
              <Leaf className="h-3 w-3" /> Eficiência energética doméstica
            </span>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
              Poupe energia enquanto dorme.
            </h1>
            <p className="mt-5 max-w-md text-base text-muted-foreground md:text-lg">
              A EcoSwitch deteta quando os seus aparelhos entram em standby e corta fisicamente a corrente.
              Sem Wi-Fi, sem aplicações, sem complicações.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/shop" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
                Comprar agora <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/about" className="inline-flex items-center rounded-full border border-border px-5 py-3 text-sm font-medium hover:bg-accent transition-colors">
                Como funciona
              </Link>
            </div>
          </div>
          <div className="relative">
            <img src={heroImg} alt="Sala minimalista com EcoSwitch instalado" width={1600} height={1100} className="aspect-[4/3] w-full rounded-2xl object-cover" />
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-secondary/30">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3">
          {[
            { icon: Plug, title: "Corte físico real", text: "Um relé interrompe fisicamente a corrente. Zero consumo residual." },
            { icon: Zap, title: "Automático", text: "Aprende o padrão de standby do aparelho — não precisa de configurar nada." },
            { icon: Leaf, title: "Sustentável", text: "Reduza a sua pegada ecológica e a fatura da luz, ao mesmo tempo." },
          ].map((f) => (
            <div key={f.title}>
              <f.icon className="h-5 w-5 text-primary" />
              <h3 className="mt-4 text-base font-medium">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">A nossa gama</h2>
            <p className="mt-2 text-muted-foreground">Cinco modelos para diferentes hábitos e espaços.</p>
          </div>
          <Link to="/shop" className="hidden text-sm text-muted-foreground hover:text-foreground md:inline-flex">
            Ver toda a loja →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 3).map((p) => (
            <Link key={p.slug} to="/product/$slug" params={{ slug: p.slug }} className="group">
              <div className="overflow-hidden rounded-xl bg-secondary/40">
                <img src={productImg} alt={p.name} loading="lazy" width={1280} height={1280} className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <h3 className="text-base font-medium">{p.name}</h3>
                <span className="text-sm text-muted-foreground">{formatPrice(p.price)}</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{p.tagline}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
