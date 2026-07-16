import { n as __toESM } from "../_runtime.mjs";
import { t as logo_default } from "./logo-B4c9mo58.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as Facebook, t as Instagram } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-hzqzTm9f.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_default = "/assets/hero-D6Sta39h.jpg";
var gym_1_default = "/assets/gym-1-BoyT-Jvs.jpg";
var gym_2_default = "/assets/gym-2-DqAcvXFg.jpg";
var gym_3_default = "/assets/gym-3-CfuysdUk.jpg";
var gym_4_default = "/assets/gym-4-CGNwoz1C.jpg";
var gym_5_default = "/assets/gym-5-aNUCie1P.jpg";
var NAV = [
	{
		href: "#jiujitsu",
		label: "Jiu-Jitsu"
	},
	{
		href: "#metodologia",
		label: "Metodologia"
	},
	{
		href: "#academia",
		label: "Academia"
	},
	{
		href: "#info",
		label: "Horários"
	},
	{
		href: "https://eloforteteam.com.br/cadastro",
		label: "Cadastro"
	}
];
var CAROUSEL = [
	{
		src: gym_1_default,
		alt: "Treino de jiu-jitsu no tatame"
	},
	{
		src: gym_2_default,
		alt: "Interior da academia Elo Forte Team"
	},
	{
		src: gym_3_default,
		alt: "Turma da Elo Forte Team saudando"
	},
	{
		src: gym_4_default,
		alt: "Faixa preta com detalhes vermelhos"
	},
	{
		src: gym_5_default,
		alt: "Treino de jiu-jitsu no tatame"
	}
];
function Landing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyJiuJitsu, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Methodology, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Carousel, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Social, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoginCTA, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function Header() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const on = () => setScrolled(window.scrollY > 20);
		on();
		window.addEventListener("scroll", on, { passive: true });
		return () => window.removeEventListener("scroll", on);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "bg-background/85 backdrop-blur border-b border-border" : "bg-transparent"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-3 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "flex min-w-0 items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: logo_default,
						alt: "Elo Forte Team",
						width: 44,
						height: 44,
						className: "h-11 w-11 shrink-0 rounded-full"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "hidden truncate font-display text-lg font-bold tracking-widest sm:block",
						children: ["ELO FORTE ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: "TEAM"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden justify-center gap-8 lg:flex",
					children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: n.href,
						className: "text-sm font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary",
						children: n.label
					}, n.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-end gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://eloforteteam.com.br/login",
						className: "hidden rounded-md bg-red-gradient px-4 py-2 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-red-glow transition-transform hover:scale-105 lg:inline-flex",
						children: "Já é aluno?"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						"aria-label": "Abrir menu",
						className: "grid h-10 w-10 place-items-center rounded-md border border-border lg:hidden",
						onClick: () => setOpen((o) => !o),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xl",
							children: open ? "✕" : "☰"
						})
					})]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border bg-background/95 backdrop-blur lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "mx-auto flex max-w-7xl flex-col gap-1 p-4",
				children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: n.href,
					onClick: () => setOpen(false),
					className: "rounded-md px-3 py-3 text-sm font-medium uppercase tracking-wider text-foreground hover:bg-secondary",
					children: n.label
				}, n.href))
			})
		})]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative flex min-h-[92vh] items-center overflow-hidden pt-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: hero_default,
				alt: "",
				width: 1920,
				height: 1200,
				className: "absolute inset-0 h-full w-full object-cover opacity-40"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-hero opacity-90" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.3fr_1fr] lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary",
						children: "Since 2024 · Praia Grande — SP"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-6 font-display text-5xl font-bold leading-[0.95] sm:text-6xl lg:text-7xl xl:text-8xl",
						children: [
							"A arte suave ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient-red",
								children: "forjada em aço."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-xl text-lg text-muted-foreground",
						children: "Elo Forte Team — Brazilian Jiu-Jitsu em Vila Caiçara. Treine técnica, disciplina e superação com uma equipe que vira família no tatame."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#info",
							className: "rounded-md bg-red-gradient px-6 py-3 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-red-glow transition-transform hover:scale-105",
							children: "Agende sua aula"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#academia",
							className: "rounded-md border border-border bg-secondary/50 px-6 py-3 text-sm font-bold uppercase tracking-wider text-foreground backdrop-blur transition-colors hover:border-primary hover:text-primary",
							children: "Conheça a academia"
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto lg:justify-self-end",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-8 rounded-full bg-primary/30 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: logo_default,
							alt: "Escudo Elo Forte Team",
							width: 420,
							height: 420,
							className: "relative h-64 w-64 sm:h-80 sm:w-80 lg:h-[420px] lg:w-[420px] drop-shadow-2xl"
						})]
					})
				})]
			})
		]
	});
}
function SectionHeader({ eyebrow, title, accent }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs font-semibold uppercase tracking-[0.3em] text-primary",
			children: eyebrow
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
			className: "mt-3 font-display text-4xl font-bold sm:text-5xl",
			children: [
				title,
				" ",
				accent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gradient-red",
					children: accent
				})
			]
		})]
	});
}
function WhyJiuJitsu() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "jiujitsu",
		className: "scroll-mt-24 py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Por que treinar",
				title: "Por que escolher o",
				accent: "Jiu-Jitsu?"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: [
					{
						t: "Autoconfiança",
						d: "Domine seu corpo, sua mente e o espaço à sua volta. Aprenda a manter a calma sob pressão."
					},
					{
						t: "Condicionamento",
						d: "Treinos intensos que desenvolvem força, resistência e flexibilidade de forma completa."
					},
					{
						t: "Defesa pessoal",
						d: "Técnicas reais e testadas para se proteger e proteger quem você ama em qualquer situação."
					},
					{
						t: "Disciplina",
						d: "Uma filosofia de vida que se estende do tatame para o trabalho, os estudos e a família."
					},
					{
						t: "Comunidade",
						d: "Faça parte de uma equipe onde cada aluno é irmão. O elo forte que dá nome à nossa casa."
					},
					{
						t: "Superação",
						d: "Cada faixa é uma conquista. Cada treino é um passo além de quem você era ontem."
					}
				].map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group relative overflow-hidden rounded-xl border border-border bg-card p-7 transition-all hover:border-primary hover:shadow-red-glow",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-4 grid h-12 w-12 place-items-center rounded-md bg-red-gradient font-display text-lg font-bold text-primary-foreground",
							children: String(i + 1).padStart(2, "0")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl font-bold",
							children: it.t
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted-foreground",
							children: it.d
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" })
					]
				}, it.t))
			})]
		})
	});
}
function Methodology() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "metodologia",
		className: "scroll-mt-24 border-y border-border bg-card/40 py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					eyebrow: "Como treinamos",
					title: "Nossa",
					accent: "metodologia"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-6 max-w-2xl text-center text-muted-foreground",
					children: "Um sistema estruturado em quatro pilares, aplicado em todas as aulas para garantir evolução constante — do primeiro dia à faixa preta."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4",
					children: [
						{
							n: "01",
							t: "Fundamentos",
							d: "Aulas para iniciantes com posições base, quedas e fugas fundamentais do BJJ."
						},
						{
							n: "02",
							t: "Técnica avançada",
							d: "Progressões, transições e detalhes finos de guardas modernas e clássicas."
						},
						{
							n: "03",
							t: "Sparring guiado",
							d: "Rolamentos supervisionados com objetivo técnico, sem ego, com foco em evolução."
						},
						{
							n: "04",
							t: "Preparação física",
							d: "Movimentos específicos do jiu-jitsu para condicionamento e prevenção de lesões."
						}
					].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative rounded-xl border border-border bg-background p-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-6xl font-bold text-primary/30",
								children: s.n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 font-display text-xl font-bold",
								children: s.t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: s.d
							})
						]
					}, s.n))
				})
			]
		})
	});
}
function Carousel() {
	const [idx, setIdx] = (0, import_react.useState)(0);
	const n = CAROUSEL.length;
	(0, import_react.useEffect)(() => {
		const id = setInterval(() => setIdx((i) => (i + 1) % n), 5e3);
		return () => clearInterval(id);
	}, [n]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "academia",
		className: "scroll-mt-24 py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Nossa casa",
				title: "Venha conhecer a",
				accent: "academia"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-12 overflow-hidden rounded-2xl border border-border shadow-hard",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex transition-transform duration-700 ease-out",
						style: { transform: `translateX(-${idx * 100}%)` },
						children: CAROUSEL.map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-[16/10] w-full shrink-0 sm:aspect-[16/8]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: img.src,
								alt: img.alt,
								width: 1600,
								height: 1e3,
								loading: i === 0 ? "eager" : "lazy",
								className: "h-full w-full object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" })]
						}, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						"aria-label": "Anterior",
						onClick: () => setIdx((i) => (i - 1 + n) % n),
						className: "absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-background/70 text-foreground backdrop-blur transition-colors hover:bg-primary hover:text-primary-foreground",
						children: "‹"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						"aria-label": "Próxima",
						onClick: () => setIdx((i) => (i + 1) % n),
						className: "absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-background/70 text-foreground backdrop-blur transition-colors hover:bg-primary hover:text-primary-foreground",
						children: "›"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-x-0 bottom-4 flex justify-center gap-2",
						children: CAROUSEL.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							"aria-label": `Ir para slide ${i + 1}`,
							onClick: () => setIdx(i),
							className: `h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-primary" : "w-4 bg-white/40"}`
						}, i))
					})
				]
			})]
		})
	});
}
function Info() {
	const days = [
		"Segunda",
		"Terça",
		"Quarta",
		"Quinta",
		"Sexta"
	];
	const mapSrc = "https://www.google.com/maps?q=" + encodeURIComponent("R. Santo Antônio, 855 - Vila Caiçara, Praia Grande - SP, 11706-200") + "&output=embed";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "info",
		className: "scroll-mt-24 border-t border-border bg-card/40 py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Contato & Horários",
				title: "Encontre a",
				accent: "Elo Forte"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 grid gap-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "overflow-hidden rounded-2xl border border-border bg-background",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-[4/3] w-full sm:aspect-[16/10]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
							title: "Mapa Elo Forte Team",
							src: mapSrc,
							className: "h-full w-full border-0",
							loading: "lazy",
							referrerPolicy: "no-referrer-when-downgrade"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 p-6 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold uppercase tracking-widest text-primary",
							children: "Endereço"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-sm text-foreground",
							children: [
								"R. Santo Antônio, 855",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Vila Caiçara, Praia Grande — SP",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"CEP 11706-200"
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold uppercase tracking-widest text-primary",
								children: "Fale com o Mestre"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "tel:+5513999999999",
								className: "mt-1 inline-block text-lg font-bold text-foreground transition-colors hover:text-primary",
								children: "(13) 99999-9999"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: "WhatsApp disponível"
							})
						] })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-background p-6 sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-10 w-10 place-items-center rounded-md bg-red-gradient",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary-foreground",
									children: "🥋"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl font-bold",
								children: "Grade de horários"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "De segunda a sexta-feira"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 divide-y divide-border overflow-hidden rounded-xl border border-border",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-[1fr_auto_auto] items-center gap-4 bg-secondary/50 px-4 py-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Dia" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "w-20 text-center",
											children: "Manhã"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "w-20 text-center",
											children: "Noite"
										})
									]
								}),
								days.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-[1fr_auto_auto] items-center gap-4 px-4 py-3 text-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold",
											children: d
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "w-20 rounded-md bg-primary/15 py-1 text-center font-mono font-bold text-primary",
											children: "08h"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "w-20 rounded-md bg-primary/15 py-1 text-center font-mono font-bold text-primary",
											children: "19h"
										})
									]
								}, d)),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-[1fr_auto_auto] items-center gap-4 px-4 py-3 text-sm text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold",
										children: "Sáb & Dom"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "col-span-2 text-right text-xs uppercase tracking-widest",
										children: "Descanso do guerreiro"
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://wa.me/5513999999999",
							className: "mt-6 inline-flex w-full items-center justify-center rounded-md bg-red-gradient px-6 py-3 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-red-glow transition-transform hover:scale-[1.02]",
							children: "Agendar aula experimental"
						})
					]
				})]
			})]
		})
	});
}
function Social() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl px-4 text-center sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Siga a equipe",
				title: "Nas",
				accent: "redes sociais"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 flex flex-wrap justify-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "https://instagram.com/eloforteteampg",
					target: "_blank",
					rel: "noreferrer",
					className: "group flex min-w-[220px] items-center gap-4 rounded-xl border border-border bg-card px-6 py-4 transition-all hover:border-primary hover:shadow-red-glow",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-red-gradient text-2xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-6 w-6 text-primary-foreground" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-widest text-muted-foreground",
							children: "Instagram"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-lg font-bold group-hover:text-primary",
							children: "@eloforteteampg"
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "https://facebook.com/eloforteteam",
					target: "_blank",
					rel: "noreferrer",
					className: "group flex min-w-[220px] items-center gap-4 rounded-xl border border-border bg-card px-6 py-4 transition-all hover:border-primary hover:shadow-red-glow",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-red-gradient text-2xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { className: "h-6 w-6 text-primary-foreground" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-widest text-muted-foreground",
							children: "Facebook"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-lg font-bold group-hover:text-primary",
							children: "/eloforteteampg"
						})]
					})]
				})]
			})]
		})
	});
}
function LoginCTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-4 py-16 sm:px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-primary/30 bg-red-gradient p-10 text-center shadow-red-glow sm:p-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 opacity-20",
				style: { backgroundImage: "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.4), transparent 40%), radial-gradient(circle at 80% 80%, rgba(0,0,0,0.4), transparent 40%)" }
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-4xl font-bold text-primary-foreground sm:text-5xl",
						children: "Já é aluno? Faça login!"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-4 max-w-2xl text-primary-foreground/90",
						children: "Acesse sua área do aluno para acompanhar sua evolução, ver graduações e conferir avisos da equipe."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://eloforteteam.com.br/login",
						className: "mt-8 inline-flex items-center gap-2 rounded-md bg-background px-8 py-4 text-sm font-bold uppercase tracking-widest text-foreground shadow-hard transition-transform hover:scale-105",
						children: "Entrar agora →"
					})
				]
			})]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border bg-background py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-4 px-4 text-sm sm:px-6 md:grid-cols-[auto_1fr_auto] md:items-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 justify-center md:justify-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: logo_default,
						alt: "Elo Forte Team",
						width: 40,
						height: 40,
						className: "h-10 w-10 rounded-full"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-display font-bold tracking-widest",
						children: ["ELO FORTE ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: "TEAM"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-center text-muted-foreground",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Elo Forte Team"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-center text-muted-foreground md:text-right",
					children: [
						"Desenvolvido por ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://www.linkedin.com/in/davirandos/",
							target: "_blank",
							rel: "noreferrer",
							className: "font-semibold text-primary hover:underline",
							children: "davirandos"
						}),
						"."
					]
				})
			]
		})
	});
}
//#endregion
export { Landing as component };
