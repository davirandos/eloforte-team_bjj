import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";
import heroImg from "@/assets/hero.jpg";

import { Analytics } from "@vercel/analytics/next"

import gym1 from "@/assets/gym-1.jpg";
import gym2 from "@/assets/gym-2.jpg";
import gym3 from "@/assets/gym-3.jpg";
import gym4 from "@/assets/gym-4.jpg";
import gym5 from "@/assets/gym-5.jpg";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { property: "og:image", content: logo },
    ],
  }),
});

const NAV = [
  { href: "#jiujitsu", label: "Jiu-Jitsu" },
  { href: "#metodologia", label: "Metodologia" },
  { href: "#academia", label: "Academia" },
  { href: "#info", label: "Horários" },
  { href: "https://eloforteteam.com.br/cadastro", label: "Cadastro" },
];

const CAROUSEL = [
  { src: gym1, alt: "Treino de jiu-jitsu no tatame" },
  { src: gym2, alt: "Interior da academia Elo Forte Team" },
  { src: gym3, alt: "Turma da Elo Forte Team saudando" },
  { src: gym4, alt: "Faixa preta com detalhes vermelhos" },
  { src: gym5, alt: "Treino de jiu-jitsu no tatame" },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <WhyJiuJitsu />
      <Methodology />
      <Carousel />
      <Info />
      <Social />
      <LoginCTA />
      <Footer />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "bg-background/85 backdrop-blur border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-3 sm:px-6">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <img src={logo} alt="Elo Forte Team" width={44} height={44} className="h-11 w-11 shrink-0 rounded-full" />
          <span className="hidden truncate font-display text-lg font-bold tracking-widest sm:block">
            ELO FORTE <span className="text-primary">TEAM</span>
          </span>
        </a>

        <nav className="hidden justify-center gap-8 lg:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2">
          <a
            href="https://eloforteteam.com.br/login"
            className="hidden rounded-md bg-red-gradient px-4 py-2 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-red-glow transition-transform hover:scale-105 lg:inline-flex"
          >
            Já é aluno?
          </a>

          <button
            aria-label="Abrir menu"
            className="grid h-10 w-10 place-items-center rounded-md border border-border lg:hidden"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="text-xl">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 p-4">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium uppercase tracking-wider text-foreground hover:bg-secondary"
              >
                {n.label}
              </a>
            ))}
          </nav>

          
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative flex min-h-[92vh] items-center overflow-hidden pt-20">
      <img src={heroImg} alt="" width={1920} height={1200} className="absolute inset-0 h-full w-full object-cover opacity-40" />
      <div className="absolute inset-0 bg-hero opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.3fr_1fr] lg:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Since 2024 · Praia Grande — SP
          </span>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[0.95] sm:text-6xl lg:text-7xl xl:text-8xl">
            A arte suave <br />
            <span className="text-gradient-red">forjada em aço.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Elo Forte Team — Brazilian Jiu-Jitsu em Vila Caiçara. Treine técnica,
            disciplina e superação com uma equipe que vira família no tatame.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#info"
              className="rounded-md bg-red-gradient px-6 py-3 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-red-glow transition-transform hover:scale-105"
            >
              Agende sua aula
            </a>
            <a
              href="#academia"
              className="rounded-md border border-border bg-secondary/50 px-6 py-3 text-sm font-bold uppercase tracking-wider text-foreground backdrop-blur transition-colors hover:border-primary hover:text-primary"
            >
              Conheça a academia
            </a>
          </div>
        </div>
        <div className="mx-auto lg:justify-self-end">
          <div className="relative">
            <div className="absolute -inset-8 rounded-full bg-primary/30 blur-3xl" />
            <img src={logo} alt="Escudo Elo Forte Team" width={420} height={420} className="relative h-64 w-64 sm:h-80 sm:w-80 lg:h-[420px] lg:w-[420px] drop-shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, accent }: { eyebrow: string; title: string; accent?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">{eyebrow}</span>
      <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
        {title} {accent && <span className="text-gradient-red">{accent}</span>}
      </h2>
    </div>
  );
}

function WhyJiuJitsu() {
  const items = [
    { t: "Autoconfiança", d: "Domine seu corpo, sua mente e o espaço à sua volta. Aprenda a manter a calma sob pressão." },
    { t: "Condicionamento", d: "Treinos intensos que desenvolvem força, resistência e flexibilidade de forma completa." },
    { t: "Defesa pessoal", d: "Técnicas reais e testadas para se proteger e proteger quem você ama em qualquer situação." },
    { t: "Disciplina", d: "Uma filosofia de vida que se estende do tatame para o trabalho, os estudos e a família." },
    { t: "Comunidade", d: "Faça parte de uma equipe onde cada aluno é irmão. O elo forte que dá nome à nossa casa." },
    { t: "Superação", d: "Cada faixa é uma conquista. Cada treino é um passo além de quem você era ontem." },
  ];
  return (
    <section id="jiujitsu" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader eyebrow="Por que treinar" title="Por que escolher o" accent="Jiu-Jitsu?" />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <div
              key={it.t}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-7 transition-all hover:border-primary hover:shadow-red-glow"
            >
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-md bg-red-gradient font-display text-lg font-bold text-primary-foreground">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-display text-xl font-bold">{it.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.d}</p>
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Methodology() {
  const steps = [
    { n: "01", t: "Fundamentos", d: "Aulas para iniciantes com posições base, quedas e fugas fundamentais do BJJ." },
    { n: "02", t: "Técnica avançada", d: "Progressões, transições e detalhes finos de guardas modernas e clássicas." },
    { n: "03", t: "Sparring guiado", d: "Rolamentos supervisionados com objetivo técnico, sem ego, com foco em evolução." },
    { n: "04", t: "Preparação física", d: "Movimentos específicos do jiu-jitsu para condicionamento e prevenção de lesões." },
  ];
  return (
    <section id="metodologia" className="scroll-mt-24 border-y border-border bg-card/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader eyebrow="Como treinamos" title="Nossa" accent="metodologia" />
        <p className="mx-auto mt-6 max-w-2xl text-center text-muted-foreground">
          Um sistema estruturado em quatro pilares, aplicado em todas as aulas para
          garantir evolução constante — do primeiro dia à faixa preta.
        </p>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="relative rounded-xl border border-border bg-background p-7">
              <span className="font-display text-6xl font-bold text-primary/30">{s.n}</span>
              <h3 className="mt-2 font-display text-xl font-bold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Carousel() {
  const [idx, setIdx] = useState(0);
  const n = CAROUSEL.length;
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % n), 5000);
    return () => clearInterval(id);
  }, [n]);

  return (
    <section id="academia" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader eyebrow="Nossa casa" title="Venha conhecer a" accent="academia" />
        <div className="relative mt-12 overflow-hidden rounded-2xl border border-border shadow-hard">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${idx * 100}%)` }}
          >
            {CAROUSEL.map((img, i) => (
              <div key={i} className="relative aspect-[16/10] w-full shrink-0 sm:aspect-[16/8]">
                <img
                  src={img.src}
                  alt={img.alt}
                  width={1600}
                  height={1000}
                  loading={i === 0 ? "eager" : "lazy"}
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              </div>
            ))}
          </div>
          <button
            aria-label="Anterior"
            onClick={() => setIdx((i) => (i - 1 + n) % n)}
            className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-background/70 text-foreground backdrop-blur transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            ‹
          </button>
          <button
            aria-label="Próxima"
            onClick={() => setIdx((i) => (i + 1) % n)}
            className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-background/70 text-foreground backdrop-blur transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            ›
          </button>
          <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
            {CAROUSEL.map((_, i) => (
              <button
                key={i}
                aria-label={`Ir para slide ${i + 1}`}
                onClick={() => setIdx(i)}
                className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-primary" : "w-4 bg-white/40"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Info() {
  const days = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];
  const mapSrc =
    "https://www.google.com/maps?q=" +
    encodeURIComponent("R. Santo Antônio, 855 - Vila Caiçara, Praia Grande - SP, 11706-200") +
    "&output=embed";

  return (
    <section id="info" className="scroll-mt-24 border-t border-border bg-card/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader eyebrow="Contato & Horários" title="Encontre a" accent="Elo Forte" />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-border bg-background">
            <div className="aspect-[4/3] w-full sm:aspect-[16/10]">
              <iframe
                title="Mapa Elo Forte Team"
                src={mapSrc}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="grid gap-4 p-6 sm:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">Endereço</p>
                <p className="mt-1 text-sm text-foreground">
                  R. Santo Antônio, 855<br />
                  Vila Caiçara, Praia Grande — SP<br />
                  CEP 11706-200
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">Fale com o Mestre</p>
                <a
                  href="tel:+5513999999999"
                  className="mt-1 inline-block text-lg font-bold text-foreground transition-colors hover:text-primary"
                >
                  +55 (13) 99739-8387
                </a>
                <p className="mt-1 text-xs text-muted-foreground">WhatsApp disponível</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-background p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-md bg-red-gradient">
                <span className="text-primary-foreground">🥋</span>
              </div>
              <h3 className="font-display text-2xl font-bold">Grade de horários</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">De segunda a sexta-feira</p>

            <div className="mt-6 divide-y divide-border overflow-hidden rounded-xl border border-border">
              <div className="grid grid-cols-[1fr_auto_auto] items-center gap-4 bg-secondary/50 px-4 py-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                <span>Dia</span>
                <span className="w-20 text-center">Manhã</span>
                <span className="w-20 text-center">Noite</span>
              </div>
              {days.map((d) => (
                <div key={d} className="grid grid-cols-[1fr_auto_auto] items-center gap-4 px-4 py-3 text-sm">
                  <span className="font-semibold">{d}</span>
                  <span className="w-20 rounded-md bg-primary/15 py-1 text-center font-mono font-bold text-primary">08h</span>
                  <span className="w-20 rounded-md bg-primary/15 py-1 text-center font-mono font-bold text-primary">19h</span>
                </div>
              ))}
              <div className="grid grid-cols-[1fr_auto_auto] items-center gap-4 px-4 py-3 text-sm text-muted-foreground">
                <span className="font-semibold">Sáb & Dom</span>
                <span className="col-span-2 text-right text-xs uppercase tracking-widest">Descanso do guerreiro</span>
              </div>
            </div>

            <a
              href="https://wa.me/5513999999999"
              className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-red-gradient px-6 py-3 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-red-glow transition-transform hover:scale-[1.02]"
            >
              Agendar aula experimental
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Social() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
        <SectionHeader eyebrow="Siga a equipe" title="Nas" accent="redes sociais" />
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="https://instagram.com/eloforteteampg"
            target="_blank"
            rel="noreferrer"
            className="group flex min-w-[220px] items-center gap-4 rounded-xl border border-border bg-card px-6 py-4 transition-all hover:border-primary hover:shadow-red-glow"
          >
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-red-gradient text-2xl">
              <Instagram className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="text-left">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Instagram</p>
              <p className="font-display text-lg font-bold group-hover:text-primary">@eloforteteampg</p>
            </div>
          </a>
          <a
            href="https://facebook.com/eloforteteam"
            target="_blank"
            rel="noreferrer"
            className="group flex min-w-[220px] items-center gap-4 rounded-xl border border-border bg-card px-6 py-4 transition-all hover:border-primary hover:shadow-red-glow"
          >
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-red-gradient text-2xl">
              <Facebook className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="text-left">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Facebook</p>
              <p className="font-display text-lg font-bold group-hover:text-primary">/eloforteteampg</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

function LoginCTA() {
  return (
    <section className="px-4 py-16 sm:px-6">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-primary/30 bg-red-gradient p-10 text-center shadow-red-glow sm:p-16">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.4), transparent 40%), radial-gradient(circle at 80% 80%, rgba(0,0,0,0.4), transparent 40%)"
        }} />
        <div className="relative">
          <h2 className="font-display text-4xl font-bold text-primary-foreground sm:text-5xl">
            Já é aluno? Faça login!
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/90">
            Acesse sua área do aluno para acompanhar sua evolução, ver graduações e conferir avisos da equipe.
          </p>
          <a
            href="https://eloforteteam.com.br/login"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-background px-8 py-4 text-sm font-bold uppercase tracking-widest text-foreground shadow-hard transition-transform hover:scale-105"
          >
            Entrar agora →
          </a>
        </div>
      </div>
    </section>
  );
}

{/*
function LoginArea() {

  {/* 
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [msg, setMsg] = useState<string | null>(null); 

  return (
    <section id="login" className="scroll-mt-24 border-t border-border py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Área do aluno</span>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Bem-vindo de <span className="text-gradient-red">volta</span>.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Entre com seu e-mail cadastrado na academia para acessar o painel.
            Novo por aqui? Fale com o mestre para obter seu acesso.
          </p>
          <button>
            <a
            href="https://app.eloforteteam.com.br"
            target="_blank"
            rel="noreferrer"
            className="mt-6 w-full rounded-md bg-red-gradient px-6 py-3 text-sm font-bold uppercase tracking-widest text-primary-foreground shadow-red-glow transition-transform hover:scale-[1.01]"
            >
            Entrar
            </a>
          </button>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setMsg("Login em breve! O acesso do aluno será liberado pela recepção.");
          }}
          className="rounded-2xl border border-border bg-card p-6 shadow-hard sm:p-8"
        >
          <label className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground">E-mail</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="voce@email.com"
            className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/40"
          />
          <label className="mt-5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">Senha</label>
          <input
            type="password"
            required
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="••••••••"
            className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/40"
          />
          <div className="mt-3 flex items-center justify-between text-xs">
            <label className="flex items-center gap-2 text-muted-foreground">
              <input type="checkbox" className="accent-[color:var(--primary)]" /> Lembrar de mim
            </label>
            <a href="#" className="font-semibold uppercase tracking-widest text-primary hover:underline">
              Esqueci a senha
            </a>
          </div>
          <button
            type="submit"
            className="mt-6 w-full rounded-md bg-red-gradient px-6 py-3 text-sm font-bold uppercase tracking-widest text-primary-foreground shadow-red-glow transition-transform hover:scale-[1.01]"
          >
            Entrar
          </button>
          {msg && (
            <p className="mt-4 rounded-md border border-primary/30 bg-primary/10 px-4 py-3 text-center text-sm text-primary">
              {msg}
            </p>
          )}
        </form>

      </div>
    </section>
  );
*/}

function Footer() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 text-sm sm:px-6 md:grid-cols-[auto_1fr_auto] md:items-center">

        <div className="flex items-center gap-3 justify-center md:justify-start">
          <img src={logo} alt="Elo Forte Team" width={40} height={40} className="h-10 w-10 rounded-full" />
          <span className="font-display font-bold tracking-widest">
            ELO FORTE <span className="text-primary">TEAM</span>
          </span>
        </div>

        <p className="text-center text-muted-foreground">
          © {new Date().getFullYear()} Elo Forte Team
        </p>

        <p className="text-center text-muted-foreground md:text-right">
          Desenvolvido por <a href="https://www.linkedin.com/in/davirandos/" target="_blank" rel="noreferrer" className="font-semibold text-primary hover:underline">davirandos</a>.
        </p>

      </div>
    </footer>
  );
}
