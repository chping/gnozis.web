"use client";

import {
  Activity,
  ArrowRight,
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  CircuitBoard,
  Cpu,
  Database,
  FileChartColumnIncreasing,
  Gauge,
  GitBranch,
  Layers3,
  LockKeyhole,
  Mail,
  Menu,
  Network,
  ScanSearch,
  Sparkles,
  Target,
  UserRound,
  X,
  Zap,
} from "lucide-react";
import type { CSSProperties, FormEvent } from "react";
import { useEffect, useRef, useState } from "react";

const navigation = [
  { label: "Product", href: "#product" },
  { label: "Platform", href: "#platform" },
  { label: "Why Gnozis", href: "#why" },
  { label: "Vision", href: "#vision" },
];

const challenges = [
  {
    icon: Gauge,
    number: "01",
    title: "Simulation Cost",
    body: "Corner-heavy characterization and Monte Carlo runs consume weeks of compute and engineering time.",
  },
  {
    icon: Database,
    number: "02",
    title: "Data Fragmentation",
    body: "TCAD, SPICE, silicon and lab data stay scattered across tools, formats and teams.",
  },
  {
    icon: BrainCircuit,
    number: "03",
    title: "Engineering Knowledge",
    body: "Critical debug knowledge remains trapped in scripts, reports and expert memory.",
  },
  {
    icon: Activity,
    number: "04",
    title: "Silicon Learning",
    body: "Measured-silicon lessons arrive late and rarely flow back into the next design cycle.",
  },
];

const workflow = [
  { label: "Simulation", detail: "TCAD · SPICE" },
  { label: "Data", detail: "Unified layer" },
  { label: "AI Models", detail: "Predictive" },
  { label: "Root Cause", detail: "Explainable" },
  { label: "Optimization", detail: "Design space" },
  { label: "DTCO Report", detail: "Traceable" },
];

const capabilities = [
  {
    icon: Database,
    title: "Simulation Data Parser",
    body: "Normalize TCAD, SPICE, Monte Carlo and silicon results into one engineering-ready data layer.",
    metric: "One data model",
  },
  {
    icon: BarChart3,
    title: "Surrogate Modeling",
    body: "Build fast predictive models for the behaviors SRAM engineers care about.",
    metric: "Fast prediction",
  },
  {
    icon: Target,
    title: "Active Learning DOE",
    body: "Select the most informative simulations and reduce iteration cost.",
    metric: "Focused experiments",
  },
  {
    icon: ScanSearch,
    title: "Root Cause Analysis",
    body: "Expose the drivers, interactions and sensitivities behind failures.",
    metric: "Explainable insight",
  },
  {
    icon: Gauge,
    title: "Yield & Vmin Projection",
    body: "Project distribution tails and operating margin across design and process conditions.",
    metric: "Margin visibility",
  },
  {
    icon: FileChartColumnIncreasing,
    title: "Automated DTCO Reports",
    body: "Generate traceable findings, comparisons and engineering recommendations.",
    metric: "Decision ready",
  },
];

const platformLayers = [
  {
    icon: CircuitBoard,
    label: "EDA Tools",
    items: ["TCAD", "SPICE", "Monte Carlo", "Silicon Data"],
  },
  {
    icon: Database,
    label: "Data Layer",
    items: ["Parsing", "Normalization", "Features"],
  },
  {
    icon: BrainCircuit,
    label: "AI Layer",
    items: ["Surrogates", "Active Learning", "Explainability"],
  },
  {
    icon: Network,
    label: "Engineering Knowledge",
    items: ["Process", "Device", "Cell", "Circuit"],
  },
  {
    icon: Layers3,
    label: "Applications",
    items: ["Optimization", "Yield / Vmin", "DTCO Reports"],
  },
];

const advantages = [
  {
    icon: Cpu,
    title: "SRAM Native",
    body: "Designed around cells, arrays, variation, yield and Vmin—not generic analytics.",
  },
  {
    icon: Zap,
    title: "AI First",
    body: "Intelligence is embedded across DOE, modeling, diagnosis and optimization.",
  },
  {
    icon: GitBranch,
    title: "Explainable",
    body: "Every recommendation stays connected to evidence engineers can inspect.",
  },
  {
    icon: LockKeyhole,
    title: "Private Deployment",
    body: "Keep proprietary PDK, design and silicon data inside your controlled environment.",
  },
];

const revealStyle = (index: number) =>
  ({ "--delay": `${index * 70}ms` }) as CSSProperties;

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState("");
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  const handleDemoRequest = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const company = String(data.get("company") || "").trim();
    const role = String(data.get("role") || "").trim();

    if (!name || !email || !company || !role) {
      setFormStatus("Please complete every field before continuing.");
      return;
    }

    const subject = encodeURIComponent(`Gnozis demo request — ${company}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nRole: ${role}\n\nI would like to request a Gnozis demo.`,
    );

    setFormStatus(
      "Your email app should open with a prepared request. Send it to finish.",
    );
    window.location.href = `mailto:hello@gnozis.ai?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header" id="top">
        <div className="nav-shell">
          <a className="wordmark" href="#top" aria-label="Gnozis home">
            <span className="logo-mark" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </span>
            <span>Gnozis</span>
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navigation.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a className="button button-small header-cta" href="#contact">
            Request Demo
            <ArrowRight aria-hidden="true" size={16} />
          </a>

          <button
            ref={menuButtonRef}
            className="menu-button"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>

        <div
          className={`mobile-menu ${menuOpen ? "is-open" : ""}`}
          id="mobile-navigation"
          aria-hidden={!menuOpen}
        >
          <nav aria-label="Mobile navigation">
            {navigation.map((item, index) => (
              <a
                href={item.href}
                key={item.href}
                style={revealStyle(index)}
                onClick={() => setMenuOpen(false)}
                tabIndex={menuOpen ? 0 : -1}
              >
                <span>0{index + 1}</span>
                {item.label}
                <ArrowRight aria-hidden="true" />
              </a>
            ))}
            <a
              className="button"
              href="#contact"
              onClick={() => setMenuOpen(false)}
              tabIndex={menuOpen ? 0 : -1}
            >
              Request Demo
            </a>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section className="hero section-grid" id="product">
          <div className="hero-glow hero-glow-one" aria-hidden="true" />
          <div className="hero-glow hero-glow-two" aria-hidden="true" />
          <div className="container hero-layout">
            <div className="hero-copy">
              <div className="eyebrow hero-eyebrow" data-reveal>
                <span className="eyebrow-dot" />
                Intelligence for SRAM engineering
              </div>
              <h1 data-reveal style={revealStyle(1)}>
                AI-Driven SRAM
                <span> DTCO Workbench</span>
              </h1>
              <p className="hero-subtitle" data-reveal style={revealStyle(2)}>
                Connect simulation, silicon and intelligence into one engineering
                workflow.
              </p>
              <div className="hero-actions" data-reveal style={revealStyle(3)}>
                <a className="button" href="#contact">
                  Request Demo
                  <ArrowRight aria-hidden="true" size={18} />
                </a>
                <a className="button button-secondary" href="#platform">
                  View Architecture
                </a>
              </div>
              <div className="hero-proof" data-reveal style={revealStyle(4)}>
                <div>
                  <CheckCircle2 aria-hidden="true" />
                  Purpose-built for SRAM
                </div>
                <div>
                  <CheckCircle2 aria-hidden="true" />
                  Explainable by design
                </div>
              </div>
            </div>

            <figure className="hero-visual" data-reveal style={revealStyle(2)}>
              <figcaption className="visual-toolbar">
                <span>
                  <span className="status-dot" aria-hidden="true" />
                  Closed-loop DTCO
                </span>
                <span className="toolbar-meta">WORKFLOW / 01</span>
              </figcaption>

              <div className="pipeline-canvas">
                <div className="canvas-grid" aria-hidden="true" />
                <div className="pipeline-track" aria-label="TCAD to DTCO report workflow">
                  <div className="pipeline-node node-tcad">
                    <CircuitBoard aria-hidden="true" />
                    <span>TCAD</span>
                    <small>Device physics</small>
                  </div>
                  <div className="flow-line line-one" aria-hidden="true">
                    <i />
                  </div>
                  <div className="pipeline-node node-spice">
                    <Activity aria-hidden="true" />
                    <span>SPICE</span>
                    <small>Circuit behavior</small>
                  </div>
                  <div className="flow-line line-two" aria-hidden="true">
                    <i />
                  </div>
                  <div className="pipeline-node node-monte">
                    <BarChart3 aria-hidden="true" />
                    <span>Monte Carlo</span>
                    <small>Variation space</small>
                  </div>
                  <div className="flow-line line-three" aria-hidden="true">
                    <i />
                  </div>
                  <div className="pipeline-node node-ai">
                    <BrainCircuit aria-hidden="true" />
                    <span>AI</span>
                    <small>Engineering insight</small>
                  </div>
                  <div className="flow-line line-four" aria-hidden="true">
                    <i />
                  </div>
                  <div className="pipeline-node node-report">
                    <FileChartColumnIncreasing aria-hidden="true" />
                    <span>DTCO Report</span>
                    <small>Decisions</small>
                  </div>
                </div>

                <div className="insight-card">
                  <div className="insight-icon">
                    <Sparkles aria-hidden="true" />
                  </div>
                  <div>
                    <span>Model insight</span>
                    <strong>Vmin sensitivity isolated</strong>
                  </div>
                  <span className="confidence">96.4%</span>
                </div>

                <div className="feedback-loop" aria-hidden="true">
                  <span>Silicon learning</span>
                  <div />
                </div>
              </div>
            </figure>
          </div>
          <a className="scroll-cue" href="#challenges" aria-label="Scroll to challenges">
            <span>Explore the system</span>
            <span className="scroll-line" aria-hidden="true" />
          </a>
        </section>

        <section className="section" id="challenges">
          <div className="container">
            <div className="section-heading" data-reveal>
              <span className="section-index">01 / THE CHALLENGE</span>
              <h2>SRAM development is becoming increasingly complex.</h2>
              <p>
                More corners, more data and tighter margins make every design
                cycle harder to understand and optimize.
              </p>
            </div>

            <div className="challenge-grid">
              {challenges.map((item, index) => {
                const Icon = item.icon;
                return (
                  <article
                    className={`challenge-card challenge-card-${index + 1}`}
                    data-reveal
                    key={item.title}
                    style={revealStyle(index)}
                  >
                    <div className="card-topline">
                      <span>{item.number}</span>
                      <Icon aria-hidden="true" />
                    </div>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.body}</p>
                    </div>
                    <div className="card-pattern" aria-hidden="true" />
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section workflow-section" id="workflow">
          <div className="container">
            <div className="section-heading centered" data-reveal>
              <span className="section-index">02 / THE WORKFLOW</span>
              <h2>One platform. Complete DTCO workflow.</h2>
              <p>
                Turn every experiment into reusable engineering intelligence—from
                raw simulation to explainable optimization.
              </p>
            </div>

            <figure className="workflow-figure" data-reveal>
              <figcaption className="sr-only">
                Six-stage workflow from simulation to a traceable DTCO report.
              </figcaption>
              {workflow.map((step, index) => (
                <div className="workflow-item" key={step.label}>
                  <div className="workflow-node">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{step.label}</strong>
                    <small>{step.detail}</small>
                  </div>
                  {index < workflow.length - 1 && (
                    <div className="workflow-connector" aria-hidden="true">
                      <i />
                      <ArrowRight />
                    </div>
                  )}
                </div>
              ))}
            </figure>
          </div>
        </section>

        <section className="section capabilities-section" id="capabilities">
          <div className="container">
            <div className="split-heading" data-reveal>
              <div>
                <span className="section-index">03 / CORE CAPABILITIES</span>
                <h2>Intelligence across the engineering loop.</h2>
              </div>
              <p>
                A modular workbench that helps SRAM teams organize evidence,
                learn faster and make defensible design decisions.
              </p>
            </div>

            <div className="capability-grid">
              {capabilities.map((item, index) => {
                const Icon = item.icon;
                return (
                  <article
                    className="capability-card"
                    data-reveal
                    key={item.title}
                    style={revealStyle(index)}
                  >
                    <div className="capability-icon">
                      <Icon aria-hidden="true" />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                    <div className="capability-meta">
                      <span>{item.metric}</span>
                      <ArrowRight aria-hidden="true" />
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section platform-section" id="platform">
          <div className="container platform-layout">
            <div className="platform-copy" data-reveal>
              <span className="section-index">04 / PLATFORM</span>
              <h2>From EDA data to engineering decisions.</h2>
              <p>
                Gnozis connects the tools you already use with a shared data,
                intelligence and knowledge layer built for SRAM DTCO.
              </p>
              <div className="platform-callout">
                <Sparkles aria-hidden="true" />
                <div>
                  <strong>Closed-loop by design</strong>
                  <span>
                    Simulation and silicon evidence continuously improve the next
                    decision.
                  </span>
                </div>
              </div>
            </div>

            <figure className="architecture" data-reveal>
              <figcaption className="architecture-head">
                <span>Gnozis platform architecture</span>
                <span>5 LAYERS</span>
              </figcaption>
              <div className="architecture-stack">
                {platformLayers.map((layer, index) => {
                  const Icon = layer.icon;
                  return (
                    <div className="architecture-row" key={layer.label}>
                      <div className="layer-label">
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        <Icon aria-hidden="true" />
                        <strong>{layer.label}</strong>
                      </div>
                      <div className="layer-items">
                        {layer.items.map((item) => (
                          <span key={item}>{item}</span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </figure>
          </div>
        </section>

        <section className="section why-section" id="why">
          <div className="container">
            <div className="section-heading centered" data-reveal>
              <span className="section-index">05 / WHY GNOZIS</span>
              <h2>Built for the way SRAM engineers work.</h2>
            </div>

            <div className="advantage-grid">
              {advantages.map((item, index) => {
                const Icon = item.icon;
                return (
                  <article
                    className="advantage-card"
                    data-reveal
                    key={item.title}
                    style={revealStyle(index)}
                  >
                    <span className="advantage-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <Icon aria-hidden="true" />
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section vision-section" id="vision">
          <div className="container">
            <div className="vision-panel" data-reveal>
              <div className="vision-memory" aria-hidden="true">
                {Array.from({ length: 42 }).map((_, index) => (
                  <span key={index} />
                ))}
              </div>
              <div className="vision-orbit" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <div className="vision-copy">
                <span className="section-index">06 / OUR VISION</span>
                <h2>Building the intelligence layer for silicon.</h2>
                <p>
                  A continuously learning engineering system where every
                  simulation and silicon measurement makes the next decision
                  faster, clearer and more confident.
                </p>
                <div className="vision-line">
                  <span />
                  Accelerating SRAM innovation with AI.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container contact-layout">
            <div className="contact-copy" data-reveal>
              <span className="section-index">07 / START A CONVERSATION</span>
              <h2>Ready to build the future of SRAM?</h2>
              <p>
                Bring your hardest SRAM DTCO workflow. We’ll show how Gnozis
                connects your data, models and engineering decisions.
              </p>
              <a className="contact-email" href="mailto:hello@gnozis.ai">
                <Mail aria-hidden="true" />
                hello@gnozis.ai
                <ArrowRight aria-hidden="true" />
              </a>
            </div>

            <form className="demo-form" onSubmit={handleDemoRequest} data-reveal>
              <div className="form-heading">
                <div>
                  <span>Request a demo</span>
                  <h3>Tell us about your team.</h3>
                </div>
                <span className="form-badge">PRIVATE</span>
              </div>

              <div className="form-grid">
                <label>
                  <span>
                    <UserRound aria-hidden="true" />
                    Name
                  </span>
                  <input name="name" type="text" autoComplete="name" required />
                </label>
                <label>
                  <span>
                    <Mail aria-hidden="true" />
                    Work email
                  </span>
                  <input name="email" type="email" autoComplete="email" required />
                </label>
                <label>
                  <span>
                    <Building2 aria-hidden="true" />
                    Company
                  </span>
                  <input
                    name="company"
                    type="text"
                    autoComplete="organization"
                    required
                  />
                </label>
                <label>
                  <span>
                    <BriefcaseBusiness aria-hidden="true" />
                    Role
                  </span>
                  <input name="role" type="text" autoComplete="organization-title" required />
                </label>
              </div>

              <button className="button form-submit" type="submit">
                Prepare demo request
                <ArrowRight aria-hidden="true" />
              </button>
              <p className="form-note">
                Opens your email app. No form data is stored on this site.
              </p>
              <p className="form-status" aria-live="polite">
                {formStatus}
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <a className="wordmark" href="#top">
              <span className="logo-mark" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
              </span>
              <span>Gnozis</span>
            </a>
            <span className="brand-cn">格知算存</span>
            <p>
              Knowledge begins with observation.
              <br />
              Wisdom begins with understanding.
            </p>
          </div>

          <div className="footer-nav">
            <span>Explore</span>
            {navigation.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </div>

          <div className="footer-nav">
            <span>Connect</span>
            <a href="mailto:hello@gnozis.ai">Email</a>
            <a href="https://www.linkedin.com" rel="noreferrer" target="_blank">
              LinkedIn
            </a>
            <a href="https://github.com" rel="noreferrer" target="_blank">
              GitHub
            </a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 Gnozis. All rights reserved.</span>
          <span>AI-native SRAM engineering</span>
        </div>
      </footer>
    </>
  );
}
