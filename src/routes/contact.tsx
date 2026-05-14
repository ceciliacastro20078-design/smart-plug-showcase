import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contactos — EcoSwitch" }] }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const field = "mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30";
  const label = "block text-xs font-medium text-muted-foreground";

  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Contactos</h1>
      <p className="mt-3 max-w-xl text-muted-foreground">Estamos aqui para ajudar. Envie-nos uma mensagem ou contacte-nos diretamente.</p>

      <div className="mt-12 grid gap-12 md:grid-cols-2">
        <div className="space-y-6 text-sm">
          <div>
            <h2 className="text-xs uppercase tracking-wider text-muted-foreground">Apoio ao cliente</h2>
            <p className="mt-1">ecoo.swiitch@gmail.com</p>
          </div>
          <div>
            <h2 className="text-xs uppercase tracking-wider text-muted-foreground">Telefone</h2>
            <p className="mt-1">+351 210 000 000</p>
            <p className="text-xs text-muted-foreground">Dias úteis, 9h–18h</p>
          </div>
          <div>
            <h2 className="text-xs uppercase tracking-wider text-muted-foreground">Morada</h2>
            <p className="mt-1">Avenida D.João IV 17, 4810-531, Guimarães</p>
          </div>
          <div>
            <h2 className="text-xs uppercase tracking-wider text-muted-foreground">Redes sociais</h2>
            <p className="mt-1">Instagram</p>
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="rounded-2xl border border-border bg-secondary/30 p-6"
        >
          {sent ? (
            <p className="text-sm">Mensagem enviada. Responderemos em breve.</p>
          ) : (
            <>
              <div><label className={label}>Nome</label><input required className={field} /></div>
              <div className="mt-4"><label className={label}>Email</label><input required type="email" className={field} /></div>
              <div className="mt-4"><label className={label}>Mensagem</label><textarea required rows={5} className={field} /></div>
              <button type="submit" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                Enviar mensagem
              </button>
            </>
          )}
        </form>
      </div>

      <section className="mt-20">
        <h2 className="text-2xl font-semibold tracking-tight">Perguntas frequentes</h2>
        <div className="mt-6 divide-y divide-border border-y border-border">
          {[
            { q: "A EcoSwitch precisa de Wi-Fi?", a: "Não. O sistema é totalmente autónomo e funciona sem aplicações ou ligação à internet." },
            { q: "Funciona com qualquer aparelho?", a: "Sim, é compatível com televisões, carregadores, cafeteiras, consolas e sistemas de som." },
            { q: "Quanto tempo demora a recuperar o investimento?", a: "Em média, o valor é recuperado em poucos meses através da poupança direta na fatura." },
          ].map((f) => (
            <details key={f.q} className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium">
                {f.q}<span className="text-muted-foreground transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
