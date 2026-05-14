import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "Sobre — EcoSwitch" }, { name: "description", content: "A missão da EcoSwitch: reduzir o desperdício energético nas casas portuguesas." }] }),
  component: About,
});

function About() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <span className="text-xs uppercase tracking-wider text-muted-foreground">A nossa história</span>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight md:text-5xl">Tecnologia simples ao serviço da poupança.</h1>

      <div className="mt-10 space-y-6 text-base leading-relaxed text-muted-foreground">
        <p>
          A EcoSwitch nasceu da convicção de que pequenos gestos podem ter um grande impacto. Muitos aparelhos
          em nossas casas continuam a consumir eletricidade mesmo em modo de espera — o chamado consumo fantasma.
        </p>
        <p>
          Criámos uma tomada inteligente que deteta automaticamente o standby e corta fisicamente a corrente.
          Sem aplicações, sem Wi-Fi e sem complicações.
        </p>
        <p>
          A nossa missão é simples: reduzir o desperdício energético nas casas e contribuir para um planeta
          mais sustentável, ao mesmo tempo que aliviamos a fatura mensal das famílias.
        </p>
      </div>

      <div className="mt-14 grid gap-8 border-t border-border pt-10 md:grid-cols-3">
        <div>
          <p className="text-3xl font-semibold">−10%</p>
          <p className="mt-1 text-sm text-muted-foreground">Redução média na fatura de eletricidade</p>
        </div>
        <div>
          <p className="text-3xl font-semibold">0 W</p>
          <p className="mt-1 text-sm text-muted-foreground">Consumo residual após corte</p>
        </div>
        <div>
          <p className="text-3xl font-semibold">3 anos</p>
          <p className="mt-1 text-sm text-muted-foreground">Garantia em todos os modelos</p>
        </div>
      </div>
    </div>
  );
}
