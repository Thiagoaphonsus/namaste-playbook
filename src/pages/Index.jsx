/**
 * NAMASTÊ AGENCY — PLAYBOOK HUB
 * Landing page para o Playbook Operacional
 *
 * ══════════════════════════════════════════════════════════════
 * SETUP NO LOVABLE (faça isso antes de publicar):
 * ══════════════════════════════════════════════════════════════
 *
 * 1. LOGO (obrigatório para aparecer a marca fiel):
 *    → No Lovable, clique em "Assets" (ou arraste o arquivo)
 *    → Faça upload do arquivo: namaste-logo.png (o PNG branco/preto)
 *    → O Lovable vai gerar uma URL tipo: /lovable-uploads/xxx.png
 *    → Cole essa URL na constante LOGO_URL abaixo
 *
 * 2. GOOGLE DOCS:
 *    → Suba o DOCX no Drive, converta para Google Doc
 *    → Compartilhe como "Qualquer pessoa com o link pode visualizar"
 *    → Cole o link em GDOC_URL abaixo
 *
 * 3. Crie src/pages/Playbook.jsx e cole este arquivo inteiro
 *    (ou cole direto no Index.jsx para ir ao ar rapidinho)
 *
 * ══════════════════════════════════════════════════════════════
 * Identidade visual: Namastê Agency — Mentes Criativas. Soluções Inteligentes.
 * Paleta: #0D0D0D (fundo), #FF6B2B→#C0392B→#E91E8C (gradiente), #FFFFFF (texto)
 * ══════════════════════════════════════════════════════════════
 */

import { useState, useEffect } from "react";

// ─── CONFIGURAÇÃO — PREENCHA ANTES DE PUBLICAR ───────────────────────────────
const GDOC_URL = "COLE_AQUI_O_LINK_DO_GOOGLE_DOCS"; // ← link do Google Docs (view-only)
const LOGO_URL = "/lovable-uploads/namaste-logo.png"; // ← troque pelo caminho gerado no Lovable Assets

// ─── DADOS DOS MÓDULOS ────────────────────────────────────────────────────────
const MODULES = [
  {
    num: "00",
    label: "PÁGINA 0",
    title: "Cultura e Identidade",
    desc: "Quem somos, como pensamos e o que nos move. A base de tudo antes de qualquer processo.",
    icon: "🧭",
    tags: ["Cultura", "Propósito", "Valores"],
  },
  {
    num: "01",
    label: "MÓDULO 1",
    title: "Comercial",
    desc: "Prospecção, R1, proposta, follow-up e fechamento. O pipeline completo de vendas da Namastê.",
    icon: "💼",
    tags: ["Prospecção", "R1", "Fechamento"],
  },
  {
    num: "02",
    label: "MÓDULO 2",
    title: "Onboarding Operacional",
    desc: "Do contrato assinado ao primeiro mês: briefing, plataformas, acessos e kick-off com o cliente.",
    icon: "🚀",
    tags: ["Briefing", "Kick-off", "Plataformas"],
  },
  {
    num: "03",
    label: "MÓDULO 3",
    title: "Social Media & Planejamento",
    desc: "Calendário editorial, pautas, aprovação, publicação e análise de resultados.",
    icon: "📱",
    tags: ["Calendário", "Pautas", "Métricas"],
  },
  {
    num: "04",
    label: "MÓDULO 4",
    title: "Criação e Design",
    desc: "Briefing criativo, fluxo de produção visual e padrões de entrega para cada cliente.",
    icon: "🎨",
    tags: ["Briefing", "Produção", "Entrega"],
  },
  {
    num: "05",
    label: "MÓDULO 5",
    title: "Vídeo e Filmagem",
    desc: "Planejamento de gravações, roteiros, pós-produção e entrega de materiais audiovisuais.",
    icon: "🎬",
    tags: ["Roteiro", "Gravação", "Edição"],
  },
  {
    num: "06",
    label: "MÓDULO 6",
    title: "Tráfego Pago",
    desc: "Meta Ads, Google Ads, estrutura de campanhas, gestão de budget e relatórios de performance.",
    icon: "📊",
    tags: ["Meta Ads", "Google Ads", "Budget"],
  },
  {
    num: "07",
    label: "MÓDULO 7",
    title: "Automações e Tecnologia",
    desc: "N8n, WhatsApp API, CRM, eKyte e o ecossistema completo de automação da agência.",
    icon: "⚡",
    tags: ["N8n", "WhatsApp API", "eKyte"],
  },
];

const STATS = [
  { value: "15+", label: "Anos de mercado" },
  { value: "13", label: "Colaboradores" },
  { value: "21", label: "Clientes ativos" },
  { value: "360°", label: "Visão estratégica" },
];

const VIDEOS = [
  {
    title: "Nossa História",
    subtitle: "Conheça a Namastê antes de começar",
    module: "PÁGINA 0",
    embedUrl: "https://www.youtube.com/embed/cMhdRbwKsBI",
    watchUrl: "https://www.youtube.com/watch?v=cMhdRbwKsBI",
  },
  {
    title: "Conversão de Leads",
    subtitle: "Como converter com mais eficiência",
    module: "MÓDULO 1 — COMERCIAL",
    embedUrl: "https://www.youtube.com/embed/3mZKKdKzBJU",
    watchUrl: "https://www.youtube.com/watch?v=3mZKKdKzBJU",
  },
  {
    title: "Prospecção com Apollo",
    subtitle: "Tutorial completo de outbound B2B",
    module: "APÊNDICE",
    embedUrl: "https://www.youtube.com/embed/YWhm2KQIdLA",
    watchUrl: "https://www.youtube.com/watch?v=YWhm2KQIdLA",
  },
];

// ─── MANDALA SVG ──────────────────────────────────────────────────────────────
function Mandala({ size = 500, color = "#C0392B", opacity = 0.07 }) {
  const c = size / 2;
  const elements = [];

  // Concentric circles
  [0.48, 0.42, 0.36, 0.30, 0.24, 0.18, 0.12, 0.07, 0.03].forEach((r, i) => {
    elements.push(
      <circle
        key={`c${i}`}
        cx={c}
        cy={c}
        r={size * r}
        stroke={color}
        strokeWidth="0.7"
        fill="none"
        opacity="0.5"
      />
    );
  });

  // Petal rings — each ring has petals at its radius
  const rings = [
    { r: size * 0.45, n: 24, ps: size * 0.045 },
    { r: size * 0.36, n: 18, ps: size * 0.04 },
    { r: size * 0.27, n: 12, ps: size * 0.038 },
    { r: size * 0.18, n: 8, ps: size * 0.032 },
    { r: size * 0.10, n: 6, ps: size * 0.024 },
  ];

  rings.forEach((ring, ri) => {
    for (let i = 0; i < ring.n; i++) {
      const a = ((360 / ring.n) * i * Math.PI) / 180;
      const px = c + ring.r * Math.cos(a);
      const py = c + ring.r * Math.sin(a);
      const perp = a + Math.PI / 2;
      const sw = Math.cos(perp) * ring.ps * 0.35;
      const sh = Math.sin(perp) * ring.ps * 0.35;
      const outerX = c + (ring.r + ring.ps) * Math.cos(a);
      const outerY = c + (ring.r + ring.ps) * Math.sin(a);
      const innerX = c + (ring.r - ring.ps) * Math.cos(a);
      const innerY = c + (ring.r - ring.ps) * Math.sin(a);

      // Almond petal
      elements.push(
        <path
          key={`p${ri}_${i}`}
          d={`M ${innerX} ${innerY} Q ${px + sw} ${py + sh} ${outerX} ${outerY} Q ${px - sw} ${py - sh} Z`}
          stroke={color}
          strokeWidth="0.4"
          fill={color}
          fillOpacity="0.12"
          opacity="0.9"
        />
      );

      // Dot at petal center
      elements.push(
        <circle
          key={`d${ri}_${i}`}
          cx={px}
          cy={py}
          r={size * 0.006}
          fill={color}
          opacity="0.5"
        />
      );

      // Radial spoke (only on outer ring)
      if (ri === 0) {
        elements.push(
          <line
            key={`l${i}`}
            x1={c + (ring.r - ring.ps) * Math.cos(a)}
            y1={c + (ring.r - ring.ps) * Math.sin(a)}
            x2={c}
            y2={c}
            stroke={color}
            strokeWidth="0.25"
            opacity="0.08"
          />
        );
      }
    }
  });

  // Center flower
  for (let i = 0; i < 8; i++) {
    const a = (45 * i * Math.PI) / 180;
    elements.push(
      <circle
        key={`cf${i}`}
        cx={c + size * 0.04 * Math.cos(a)}
        cy={c + size * 0.04 * Math.sin(a)}
        r={size * 0.012}
        fill={color}
        opacity="0.7"
      />
    );
  }
  elements.push(
    <circle key="ctrdot" cx={c} cy={c} r={size * 0.018} fill={color} opacity="0.9" />
  );

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      style={{ opacity }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {elements}
    </svg>
  );
}

// ─── ESTILOS BASE ─────────────────────────────────────────────────────────────
// Degradê tri-tonal da identidade Namastê: Laranja → Vermelho → Pink/Magenta
// Extraído do anel neon da capa da apresentação
const GRAD = "linear-gradient(135deg, #FF6B2B 0%, #C0392B 55%, #E91E8C 100%)";
const GRAD_90 = "linear-gradient(90deg, #FF6B2B 0%, #C0392B 50%, #E91E8C 100%)";
const GRAD_GLOW = "radial-gradient(circle, rgba(233,30,140,0.18) 0%, rgba(192,57,43,0.15) 40%, transparent 70%)";

const S = {
  gradientText: {
    background: GRAD_90,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    display: "inline-block",
  },
  gradientBg: {
    background: GRAD,
  },
  gradientBar: {
    width: 60,
    height: 3,
    background: GRAD_90,
    borderRadius: 2,
  },
  tag: {
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: 1,
    textTransform: "uppercase",
    padding: "3px 8px",
    borderRadius: 2,
    background: "rgba(233,30,140,0.1)",
    color: "#FF6B2B",
    border: "1px solid rgba(233,30,140,0.2)",
  },
};

// ─── COMPONENTE PRINCIPAL ─────────────────────────────────────────────────────
export default function PlaybookHub() {
  const [hoveredModule, setHoveredModule] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Início", href: "#hero" },
    { label: "Módulos", href: "#modules" },
    { label: "Vídeos", href: "#videos" },
    { label: "Acesso", href: "#access" },
  ];

  return (
    <div
      style={{
        fontFamily: "'Montserrat', 'Inter', 'Segoe UI', sans-serif",
        background: "#0D0D0D",
        color: "#FFFFFF",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      {/* ── NAVBAR ─────────────────────────────────────────────────── */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "0 32px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: scrolled
            ? "rgba(10,10,10,0.96)"
            : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid #1A1A1A" : "none",
          transition: "all 0.3s ease",
        }}
      >
        {/* Logo — imagem PNG fiel da Namastê */}
        <a href="#hero" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <img
            src={LOGO_URL}
            alt="Namastê Agency"
            style={{
              height: 36,
              width: "auto",
              // O logo original tem fundo preto — filter inverte para branco no navbar escuro
              // Se o seu PNG já for transparente com texto branco, remova o filter abaixo
              filter: "brightness(0) invert(1)",
              objectFit: "contain",
            }}
            onError={(e) => {
              // Fallback caso o logo não carregue
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />
          {/* Fallback textual — some quando o logo carrega */}
          <span
            style={{
              display: "none",
              fontSize: 18,
              fontWeight: 900,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "#fff",
            }}
          >
            Nam<span style={S.gradientText}>ast</span>ê
          </span>
        </a>

        {/* Nav links */}
        <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              style={{
                fontSize: 12,
                letterSpacing: 2,
                textTransform: "uppercase",
                fontWeight: 600,
                color: "#666",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#E67E22")}
              onMouseLeave={(e) => (e.target.style.color = "#666")}
            >
              {item.label}
            </a>
          ))}
          <a
            href={GDOC_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              ...S.gradientBg,
              color: "#fff",
              padding: "8px 20px",
              borderRadius: 3,
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: 2,
              textDecoration: "none",
              textTransform: "uppercase",
            }}
          >
            ACESSAR →
          </a>
        </div>
      </nav>

      {/* ── HERO ───────────────────────────────────────────────────── */}
      <section
        id="hero"
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px 24px",
          overflow: "hidden",
        }}
      >
        {/* Mandala dupla: vermelho + pink para criar profundidade */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          <div style={{ position: "absolute" }}>
            <Mandala size={800} color="#C0392B" opacity={0.06} />
          </div>
          <div style={{ position: "absolute", transform: "rotate(7.5deg) scale(0.92)" }}>
            <Mandala size={800} color="#E91E8C" opacity={0.035} />
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 800,
            height: 800,
            background: GRAD_GLOW,
            borderRadius: "50%",
            filter: "blur(80px)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "5%",
            left: "15%",
            width: 400,
            height: 300,
            background: "radial-gradient(ellipse, rgba(233,30,140,0.08) 0%, transparent 70%)",
            filter: "blur(50px)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 3,
            background: "linear-gradient(90deg, transparent 0%, #FF6B2B 20%, #C0392B 50%, #E91E8C 80%, transparent 100%)",
          }}
        />

        <div style={{ position: "relative", textAlign: "center", maxWidth: 860 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(192,57,43,0.12)",
              border: "1px solid rgba(192,57,43,0.3)",
              borderRadius: 40,
              padding: "6px 18px",
              marginBottom: 32,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#E67E22",
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 3,
                color: "#E67E22",
                textTransform: "uppercase",
              }}
            >
              USO INTERNO — NAMASTÊ AGENCY®
            </span>
          </div>

          {/* Título principal */}
          <h1
            style={{
              fontSize: "clamp(52px, 10vw, 108px)",
              fontWeight: 900,
              lineHeight: 0.9,
              margin: "0 0 6px",
              textTransform: "uppercase",
              letterSpacing: -3,
            }}
          >
            PLAY
            <span style={S.gradientText}>BOOK</span>
          </h1>
          <h2
            style={{
              fontSize: "clamp(20px, 4vw, 42px)",
              fontWeight: 900,
              letterSpacing: 8,
              textTransform: "uppercase",
              color: "#333",
              margin: "0 0 40px",
            }}
          >
            OPERACIONAL
          </h2>

          <div
            style={{
              width: 80,
              height: 3,
              background: "linear-gradient(90deg, #C0392B, #E67E22)",
              margin: "0 auto 40px",
              borderRadius: 2,
            }}
          />

          <p
            style={{
              fontSize: "clamp(15px, 2vw, 19px)",
              color: "#777",
              maxWidth: 600,
              margin: "0 auto 16px",
              lineHeight: 1.7,
              fontWeight: 400,
            }}
          >
            <strong style={{ color: "#AAA" }}>
              Mentes Criativas. Soluções Inteligentes.
            </strong>
            <br />O guia completo de como a Namastê opera — do comercial às
            automações.
          </p>

          <p style={{ fontSize: 13, color: "#444", margin: "0 0 52px" }}>
            Brasília & Palmas · 7 Módulos + Base Cultural
          </p>

          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href={GDOC_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...S.gradientBg,
                color: "#fff",
                padding: "16px 44px",
                borderRadius: 4,
                fontWeight: 800,
                letterSpacing: 3,
                textDecoration: "none",
                fontSize: 13,
                textTransform: "uppercase",
                boxShadow: "0 8px 36px rgba(233,30,140,0.25), 0 4px 16px rgba(192,57,43,0.3)",
              }}
            >
              ACESSAR PLAYBOOK COMPLETO →
            </a>
            <a
              href="#modules"
              style={{
                border: "1px solid #222",
                color: "#AAA",
                padding: "16px 44px",
                borderRadius: 4,
                fontWeight: 600,
                letterSpacing: 3,
                textDecoration: "none",
                fontSize: 13,
                textTransform: "uppercase",
                background: "transparent",
              }}
            >
              VER MÓDULOS ↓
            </a>
          </div>
        </div>
      </section>

      <section
        style={{
          background: "#0A0A0A",
          borderTop: "1px solid #161616",
          borderBottom: "1px solid #161616",
          padding: "48px 24px",
        }}
      >
        <div
          style={{
            maxWidth: 960,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 0,
          }}
        >
          {STATS.map((stat, i) => (
            <div
              key={i}
              style={{
                textAlign: "center",
                padding: "16px 32px",
                borderRight:
                  i < STATS.length - 1 ? "1px solid #1A1A1A" : "none",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(40px, 5vw, 58px)",
                  fontWeight: 900,
                  lineHeight: 1,
                  ...S.gradientText,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: "#555",
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  marginTop: 8,
                  fontWeight: 600,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="modules"
        style={{
          padding: "100px 24px",
          maxWidth: 1160,
          margin: "0 auto",
        }}
      >
        <div style={{ marginBottom: 72 }}>
          <span
            style={{
              fontSize: 11,
              letterSpacing: 5,
              color: "#E67E22",
              textTransform: "uppercase",
              fontWeight: 700,
            }}
          >
            ESTRUTURA DO PLAYBOOK
          </span>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 24, marginTop: 12, flexWrap: "wrap" }}>
            <h2
              style={{
                fontSize: "clamp(36px, 5vw, 60px)",
                fontWeight: 900,
                margin: 0,
                textTransform: "uppercase",
                letterSpacing: -2,
                lineHeight: 1,
              }}
            >
              7 MÓDULOS{" "}
              <span style={S.gradientText}>+ BASE</span>
            </h2>
            <div style={{ ...S.gradientBar, marginBottom: 8 }} />
          </div>
          <p style={{ color: "#555", fontSize: 15, marginTop: 16, maxWidth: 520, lineHeight: 1.6 }}>
            Cada módulo cobre um departamento completo da agência, com processos,
            checklists e scripts prontos para uso.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          {MODULES.map((mod, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredModule(i)}
              onMouseLeave={() => setHoveredModule(null)}
              style={{
                position: "relative",
                background: hoveredModule === i ? "#141414" : "#0F0F0F",
                border: `1px solid ${hoveredModule === i ? "rgba(192,57,43,0.5)" : "#191919"}`,
                borderRadius: 6,
                padding: "28px 26px 24px",
                cursor: "pointer",
                transition: "all 0.25s ease",
                overflow: "hidden",
                transform: hoveredModule === i ? "translateY(-2px)" : "none",
                boxShadow: hoveredModule === i
                  ? "0 16px 48px rgba(192,57,43,0.12)"
                  : "none",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 2,
                  background: hoveredModule === i
                    ? "linear-gradient(90deg, #C0392B, #E67E22)"
                    : "transparent",
                  transition: "background 0.25s",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  bottom: -24,
                  right: -24,
                  pointerEvents: "none",
                  opacity: hoveredModule === i ? 0.12 : 0.05,
                  transition: "opacity 0.3s",
                }}
              >
                <Mandala size={120} color="#C0392B" opacity={1} />
              </div>

              <div
                style={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  fontSize: 28,
                  fontWeight: 900,
                  color: hoveredModule === i ? "#C0392B" : "#1E1E1E",
                  lineHeight: 1,
                  transition: "color 0.25s",
                  letterSpacing: -1,
                }}
              >
                {mod.num}
              </div>

              <div style={{ fontSize: 28, marginBottom: 14 }}>{mod.icon}</div>

              <div
                style={{
                  fontSize: 10,
                  color: "#E67E22",
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  fontWeight: 700,
                  marginBottom: 8,
                }}
              >
                {mod.label}
              </div>

              <h3
                style={{
                  fontSize: 16,
                  fontWeight: 800,
                  margin: "0 0 10px",
                  textTransform: "uppercase",
                  letterSpacing: 0.3,
                  lineHeight: 1.2,
                  paddingRight: 32,
                }}
              >
                {mod.title}
              </h3>

              <p style={{ fontSize: 13, color: "#666", lineHeight: 1.65, margin: "0 0 16px" }}>
                {mod.desc}
              </p>

              <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 16 }}>
                {mod.tags.map((tag, ti) => (
                  <span key={ti} style={S.tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <div
                style={{
                  borderTop: "1px solid #1A1A1A",
                  paddingTop: 14,
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  color: hoveredModule === i ? "#E67E22" : "#333",
                  transition: "color 0.25s",
                }}
              >
                Ver no Playbook →
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="videos"
        style={{
          background: "#080808",
          borderTop: "1px solid #141414",
          padding: "100px 24px",
        }}
      >
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div style={{ marginBottom: 64 }}>
            <span
              style={{
                fontSize: 11,
                letterSpacing: 5,
                color: "#E67E22",
                textTransform: "uppercase",
                fontWeight: 700,
              }}
            >
              CONTEÚDO EM VÍDEO
            </span>
            <h2
              style={{
                fontSize: "clamp(32px, 4vw, 52px)",
                fontWeight: 900,
                margin: "12px 0 0",
                textTransform: "uppercase",
                letterSpacing: -1,
              }}
            >
              ASSISTA{" "}
              <span style={S.gradientText}>ANTES DE COMEÇAR</span>
            </h2>
            <div style={{ ...S.gradientBar, marginTop: 16 }} />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: 28,
            }}
          >
            {VIDEOS.map((video, i) => (
              <div
                key={i}
                style={{
                  background: "#0F0F0F",
                  border: "1px solid #191919",
                  borderRadius: 6,
                  overflow: "hidden",
                }}
              >
                <div style={{ position: "relative", paddingTop: "56.25%", background: "#000" }}>
                  <iframe
                    src={video.embedUrl}
                    title={video.title}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      border: "none",
                    }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>

                <div style={{ padding: "18px 20px 20px" }}>
                  <div
                    style={{
                      fontSize: 10,
                      color: "#E67E22",
                      letterSpacing: 3,
                      textTransform: "uppercase",
                      fontWeight: 700,
                      marginBottom: 6,
                    }}
                  >
                    {video.module}
                  </div>
                  <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 4, textTransform: "uppercase", letterSpacing: 0.3 }}>
                    {video.title}
                  </div>
                  <div style={{ fontSize: 13, color: "#555", lineHeight: 1.5 }}>
                    {video.subtitle}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="access"
        style={{
          position: "relative",
          padding: "120px 24px",
          textAlign: "center",
          overflow: "hidden",
          background: "#0D0D0D",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          <Mandala size={700} color="#C0392B" opacity={0.06} />
        </div>

        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 700,
            height: 500,
            background: GRAD_GLOW,
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", maxWidth: 680, margin: "0 auto" }}>
          <span
            style={{
              fontSize: 11,
              letterSpacing: 5,
              color: "#E67E22",
              textTransform: "uppercase",
              fontWeight: 700,
            }}
          >
            DOCUMENTO OFICIAL
          </span>
          <h2
            style={{
              fontSize: "clamp(36px, 5vw, 60px)",
              fontWeight: 900,
              margin: "16px 0",
              textTransform: "uppercase",
              lineHeight: 1,
              letterSpacing: -2,
            }}
          >
            ACESSE O PLAYBOOK
            <br />
            <span style={S.gradientText}>COMPLETO</span>
          </h2>

          <div
            style={{
              ...S.gradientBar,
              margin: "0 auto 32px",
            }}
          />

          <p
            style={{
              color: "#555",
              fontSize: 16,
              lineHeight: 1.7,
              margin: "0 0 48px",
              maxWidth: 520,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Todos os módulos, scripts, checklists, fluxos e materiais operacionais
            da Namastê — em um único documento no Google Docs.
            <br />
            <strong style={{ color: "#333", fontSize: 13 }}>
              Somente leitura · Atualizado pela gestão
            </strong>
          </p>

          <a
            href={GDOC_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              ...S.gradientBg,
              color: "#fff",
              padding: "20px 56px",
              borderRadius: 4,
              fontWeight: 800,
              letterSpacing: 3,
              textDecoration: "none",
              fontSize: 14,
              textTransform: "uppercase",
              display: "inline-block",
              boxShadow: "0 12px 48px rgba(233,30,140,0.3), 0 6px 20px rgba(192,57,43,0.35)",
            }}
          >
            ABRIR NO GOOGLE DOCS →
          </a>

          <p style={{ marginTop: 20, fontSize: 12, color: "#2A2A2A" }}>
            Acesso restrito a colaboradores Namastê
          </p>
        </div>
      </section>

      <footer
        style={{
          background: "#060606",
          borderTop: "1px solid #111",
          padding: "48px 32px",
        }}
      >
        <div
          style={{
            maxWidth: 960,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          <div>
            <img
              src={LOGO_URL}
              alt="Namastê Agency"
              style={{
                height: 48,
                width: "auto",
                objectFit: "contain",
                marginBottom: 8,
                filter: "brightness(0) invert(1) opacity(0.85)",
              }}
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "block";
              }}
            />
            <div
              style={{
                display: "none",
                fontSize: 20,
                fontWeight: 900,
                letterSpacing: 2,
                textTransform: "uppercase",
                marginBottom: 4,
                color: "#fff",
              }}
            >
              Nam<span style={S.gradientText}>ast</span>ê
              <span style={{ fontSize: 11, fontWeight: 400, color: "#333", marginLeft: 6 }}>
                AGENCY®
              </span>
            </div>
            <p style={{ fontSize: 12, color: "#2A2A2A", margin: 0, letterSpacing: 1 }}>
              MENTES CRIATIVAS · SOLUÇÕES INTELIGENTES
            </p>
          </div>

          <div style={{ display: "flex", gap: 24 }}>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                style={{
                  fontSize: 11,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  fontWeight: 600,
                  color: "#333",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#E67E22")}
                onMouseLeave={(e) => (e.target.style.color = "#333")}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div style={{ textAlign: "right" }}>
            <p style={{ fontSize: 11, color: "#222", margin: 0, letterSpacing: 1 }}>
              BRASÍLIA & PALMAS · 2026
            </p>
            <p style={{ fontSize: 11, color: "#1A1A1A", margin: "4px 0 0", letterSpacing: 1 }}>
              USO INTERNO — CONFIDENCIAL
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
