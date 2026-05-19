import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [{ title: "Privacidade — EcoSwitch" }] }),
  component: Privacy,
});

function Privacy() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-4xl font-semibold tracking-tight text-[#425742] md:text-5xl">Política de privacidade</h1>
      <p className="mt-3 text-sm text-muted-foreground">Última atualização: maio de 2026</p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="text-base font-medium text-foreground text-[#425742]">Dados que recolhemos</h2>
          <p className="mt-2">Recolhemos apenas os dados necessários para processar a sua encomenda: nome, morada, email e contacto telefónico. Os dados de pagamento são processados diretamente pelo nosso parceiro de pagamentos.</p>
        </section>
        <section>
          <h2 className="text-base font-medium text-foreground text-[#425742]">Utilização dos dados</h2>
          <p className="mt-2">Os seus dados são usados exclusivamente para gestão da encomenda, faturação e apoio ao cliente. Não partilhamos informações com terceiros para fins de marketing.</p>
        </section>
        <section>
          <h2 className="text-base font-medium text-foreground text-[#425742]">Cookies</h2>
          <p className="mt-2">Utilizamos cookies estritamente necessários ao funcionamento do site (carrinho, sessão) e cookies analíticos anónimos para melhorar a experiência.</p>
        </section>
        <section>
          <h2 className="text-base font-medium text-foreground text-[#425742]">Os seus direitos</h2>
          <p className="mt-2">Pode aceder, corrigir ou eliminar os seus dados pessoais a qualquer momento, contactando-nos através de ecoo.swiitch@gmail.com.</p>
        </section>
        <section>
          <h2 className="text-base font-medium text-foreground text-[#425742]">Conservação</h2>
          <p className="mt-2">Conservamos os dados de encomenda durante o período legalmente exigido para fins fiscais e de garantia (até 10 anos).</p>
        </section>
      </div>
    </div>
  );
}
