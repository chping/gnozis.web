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

export type Locale = "en" | "zh";

const icons = {
  challenges: [Gauge, Database, BrainCircuit, Activity],
  capabilities: [
    Database,
    BarChart3,
    Target,
    ScanSearch,
    Gauge,
    FileChartColumnIncreasing,
  ],
  platform: [CircuitBoard, Database, BrainCircuit, Network, Layers3],
  advantages: [Cpu, Zap, GitBranch, LockKeyhole],
};

const messages = {
  en: {
    brand: "Gnozis",
    brandFull: "Gnozis · 格知算存",
    homeLabel: "Gnozis home",
    languageLabel: "中文",
    languageHref: "/zh/",
    skip: "Skip to content",
    primaryNavigation: "Primary navigation",
    mobileNavigation: "Mobile navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    navigation: [
      { label: "Product", href: "#product" },
      { label: "Platform", href: "#platform" },
      { label: "Why Gnozis", href: "#why" },
      { label: "Vision", href: "#vision" },
    ],
    requestDemo: "Request Demo",
    hero: {
      eyebrow: "Intelligence for SRAM engineering",
      title: "AI-Driven SRAM",
      titleAccent: " DTCO Workbench",
      subtitle:
        "Connect simulation, silicon and intelligence into one engineering workflow.",
      architecture: "View Architecture",
      proof: ["Purpose-built for SRAM", "Explainable by design"],
      closedLoop: "Closed-loop DTCO",
      workflowMeta: "WORKFLOW / 01",
      pipelineLabel: "TCAD to DTCO report workflow",
      nodes: [
        ["TCAD", "Device physics"],
        ["SPICE", "Circuit behavior"],
        ["Monte Carlo", "Variation space"],
        ["AI", "Engineering insight"],
        ["DTCO Report", "Decisions"],
      ],
      modelInsight: "Model insight",
      insight: "Vmin sensitivity isolated",
      siliconLearning: "Silicon learning",
      explore: "Explore the system",
      exploreLabel: "Scroll to challenges",
    },
    challenge: {
      index: "01 / THE CHALLENGE",
      title: "SRAM development is becoming increasingly complex.",
      body: "More corners, more data and tighter margins make every design cycle harder to understand and optimize.",
      items: [
        [
          "Simulation Cost",
          "Corner-heavy characterization and Monte Carlo runs consume weeks of compute and engineering time.",
        ],
        [
          "Data Fragmentation",
          "TCAD, SPICE, silicon and lab data stay scattered across tools, formats and teams.",
        ],
        [
          "Engineering Knowledge",
          "Critical debug knowledge remains trapped in scripts, reports and expert memory.",
        ],
        [
          "Silicon Learning",
          "Measured-silicon lessons arrive late and rarely flow back into the next design cycle.",
        ],
      ],
    },
    workflow: {
      index: "02 / THE WORKFLOW",
      title: "One platform. Complete DTCO workflow.",
      body: "Turn every experiment into reusable engineering intelligence—from raw simulation to explainable optimization.",
      label: "Six-stage workflow from simulation to a traceable DTCO report.",
      steps: [
        ["Simulation", "TCAD · SPICE"],
        ["Data", "Unified layer"],
        ["AI Models", "Predictive"],
        ["Root Cause", "Explainable"],
        ["Optimization", "Design space"],
        ["DTCO Report", "Traceable"],
      ],
    },
    capabilities: {
      index: "03 / CORE CAPABILITIES",
      title: "Intelligence across the engineering loop.",
      body: "A modular workbench that helps SRAM teams organize evidence, learn faster and make defensible design decisions.",
      items: [
        [
          "Simulation Data Parser",
          "Normalize TCAD, SPICE, Monte Carlo and silicon results into one engineering-ready data layer.",
          "One data model",
        ],
        [
          "Surrogate Modeling",
          "Build fast predictive models for the behaviors SRAM engineers care about.",
          "Fast prediction",
        ],
        [
          "Active Learning DOE",
          "Select the most informative simulations and reduce iteration cost.",
          "Focused experiments",
        ],
        [
          "Root Cause Analysis",
          "Expose the drivers, interactions and sensitivities behind failures.",
          "Explainable insight",
        ],
        [
          "Yield & Vmin Projection",
          "Project distribution tails and operating margin across design and process conditions.",
          "Margin visibility",
        ],
        [
          "Automated DTCO Reports",
          "Generate traceable findings, comparisons and engineering recommendations.",
          "Decision ready",
        ],
      ],
    },
    platform: {
      index: "04 / PLATFORM",
      title: "From EDA data to engineering decisions.",
      body: "Gnozis connects the tools you already use with a shared data, intelligence and knowledge layer built for SRAM DTCO.",
      calloutTitle: "Closed-loop by design",
      calloutBody:
        "Simulation and silicon evidence continuously improve the next decision.",
      architecture: "Gnozis platform architecture",
      layers: "5 LAYERS",
      rows: [
        ["EDA Tools", ["TCAD", "SPICE", "Monte Carlo", "Silicon Data"]],
        ["Data Layer", ["Parsing", "Normalization", "Features"]],
        ["AI Layer", ["Surrogates", "Active Learning", "Explainability"]],
        ["Engineering Knowledge", ["Process", "Device", "Cell", "Circuit"]],
        ["Applications", ["Optimization", "Yield / Vmin", "DTCO Reports"]],
      ],
    },
    why: {
      index: "05 / WHY GNOZIS",
      title: "Built for the way SRAM engineers work.",
      items: [
        [
          "SRAM Native",
          "Designed around cells, arrays, variation, yield and Vmin—not generic analytics.",
        ],
        [
          "AI First",
          "Intelligence is embedded across DOE, modeling, diagnosis and optimization.",
        ],
        [
          "Explainable",
          "Every recommendation stays connected to evidence engineers can inspect.",
        ],
        [
          "Private Deployment",
          "Keep proprietary PDK, design and silicon data inside your controlled environment.",
        ],
      ],
    },
    vision: {
      index: "06 / OUR VISION",
      title: "Building the intelligence layer for silicon.",
      body: "A continuously learning engineering system where every simulation and silicon measurement makes the next decision faster, clearer and more confident.",
      line: "Accelerating SRAM innovation with AI.",
    },
    contact: {
      index: "07 / START A CONVERSATION",
      title: "Ready to build the future of SRAM?",
      body: "Bring your hardest SRAM DTCO workflow. We’ll show how Gnozis connects your data, models and engineering decisions.",
      formLabel: "Request a demo",
      formTitle: "Tell us about your team.",
      private: "PRIVATE",
      fields: ["Name", "Work email", "Company", "Role"],
      submit: "Prepare demo request",
      note: "Opens your email app. No form data is stored on this site.",
      missing: "Please complete every field before continuing.",
      success:
        "Your email app should open with a prepared request. Send it to finish.",
      mailSubject: "Gnozis demo request",
      mailBody: "I would like to request a Gnozis demo.",
    },
    footer: {
      quote: (
        <>
          Knowledge begins with observation.
          <br />
          Wisdom begins with understanding.
        </>
      ),
      explore: "Explore",
      connect: "Connect",
      email: "Email",
      website: "Website",
      copyright: "© 2026 Gnozis. All rights reserved.",
      tagline: "AI-native SRAM engineering",
    },
  },
  zh: {
    brand: "格知算存",
    brandFull: "格知算存 · Gnozis",
    homeLabel: "格知算存首页",
    languageLabel: "EN",
    languageHref: "/",
    skip: "跳转至正文",
    primaryNavigation: "主导航",
    mobileNavigation: "移动端导航",
    openMenu: "打开菜单",
    closeMenu: "关闭菜单",
    navigation: [
      { label: "产品", href: "#product" },
      { label: "平台", href: "#platform" },
      { label: "为何选择格知算存", href: "#why" },
      { label: "愿景", href: "#vision" },
    ],
    requestDemo: "申请演示",
    hero: {
      eyebrow: "面向 SRAM 工程的智能平台",
      title: "AI 驱动的 SRAM",
      titleAccent: " DTCO 工作台",
      subtitle: "将仿真、硅后数据与智能分析连接为统一的工程工作流。",
      architecture: "查看平台架构",
      proof: ["专为 SRAM 打造", "原生可解释设计"],
      closedLoop: "闭环 DTCO",
      workflowMeta: "工作流 / 01",
      pipelineLabel: "从 TCAD 到 DTCO 报告的工作流",
      nodes: [
        ["TCAD", "器件物理"],
        ["SPICE", "电路行为"],
        ["Monte Carlo", "工艺波动空间"],
        ["AI", "工程洞察"],
        ["DTCO 报告", "设计决策"],
      ],
      modelInsight: "模型洞察",
      insight: "已定位 Vmin 敏感因素",
      siliconLearning: "硅后学习",
      explore: "探索完整体系",
      exploreLabel: "滚动至挑战部分",
    },
    challenge: {
      index: "01 / 核心挑战",
      title: "SRAM 研发正变得日益复杂。",
      body: "更多工艺角、更多数据和更紧的裕量，让每轮设计迭代都更难理解与优化。",
      items: [
        [
          "仿真成本",
          "大量工艺角表征与 Monte Carlo 仿真会消耗数周算力和工程时间。",
        ],
        [
          "数据割裂",
          "TCAD、SPICE、硅后及实验室数据分散在不同工具、格式与团队中。",
        ],
        [
          "工程知识沉淀",
          "关键调试知识仍散落在脚本、报告和专家经验之中。",
        ],
        [
          "硅后学习闭环",
          "硅后实测经验反馈滞后，难以有效进入下一轮设计周期。",
        ],
      ],
    },
    workflow: {
      index: "02 / 完整工作流",
      title: "一个平台，贯通完整 DTCO 工作流。",
      body: "将每一次实验转化为可复用的工程智能，从原始仿真走向可解释优化。",
      label: "从仿真到可追溯 DTCO 报告的六阶段工作流。",
      steps: [
        ["仿真", "TCAD · SPICE"],
        ["数据", "统一数据层"],
        ["AI 模型", "快速预测"],
        ["根因分析", "可解释"],
        ["设计优化", "设计空间"],
        ["DTCO 报告", "全程可追溯"],
      ],
    },
    capabilities: {
      index: "03 / 核心能力",
      title: "让智能贯穿整个工程闭环。",
      body: "模块化工作台帮助 SRAM 团队组织证据、加速学习，并做出可验证的设计决策。",
      items: [
        [
          "仿真数据解析",
          "将 TCAD、SPICE、Monte Carlo 与硅后结果标准化为工程可用的统一数据层。",
          "统一数据模型",
        ],
        [
          "代理模型",
          "针对 SRAM 工程师关注的关键行为构建高速预测模型。",
          "快速预测",
        ],
        [
          "主动学习 DOE",
          "选择信息量最高的仿真组合，降低迭代成本。",
          "聚焦关键实验",
        ],
        [
          "根因分析",
          "揭示故障背后的驱动因素、交互关系与敏感度。",
          "可解释洞察",
        ],
        [
          "良率与 Vmin 预测",
          "跨设计与工艺条件预测分布尾部和工作裕量。",
          "裕量可视化",
        ],
        [
          "自动化 DTCO 报告",
          "生成可追溯的结论、对比分析和工程建议。",
          "支持决策",
        ],
      ],
    },
    platform: {
      index: "04 / 平台架构",
      title: "从 EDA 数据到工程决策。",
      body: "格知算存连接您现有的工具，并提供面向 SRAM DTCO 的共享数据、智能与知识层。",
      calloutTitle: "原生闭环设计",
      calloutBody: "仿真与硅后证据持续提升下一次设计决策的质量。",
      architecture: "格知算存平台架构",
      layers: "5 层架构",
      rows: [
        ["EDA 工具", ["TCAD", "SPICE", "Monte Carlo", "硅后数据"]],
        ["数据层", ["解析", "标准化", "特征工程"]],
        ["AI 层", ["代理模型", "主动学习", "可解释性"]],
        ["工程知识", ["工艺", "器件", "存储单元", "电路"]],
        ["应用层", ["设计优化", "良率 / Vmin", "DTCO 报告"]],
      ],
    },
    why: {
      index: "05 / 为何选择格知算存",
      title: "为 SRAM 工程师的真实工作方式而设计。",
      items: [
        [
          "原生面向 SRAM",
          "围绕存储单元、阵列、工艺波动、良率与 Vmin 设计，而非通用数据分析。",
        ],
        [
          "AI 优先",
          "将智能融入 DOE、建模、诊断与优化的每一个环节。",
        ],
        [
          "结果可解释",
          "每项建议都与工程师可核验的证据保持关联。",
        ],
        [
          "私有化部署",
          "让专有 PDK、设计及硅后数据始终留在受控环境内。",
        ],
      ],
    },
    vision: {
      index: "06 / 我们的愿景",
      title: "构建硅设计的智能层。",
      body: "打造持续学习的工程系统，让每一次仿真与硅后测量都使下一次决策更快、更清晰、更有把握。",
      line: "以 AI 加速 SRAM 创新。",
    },
    contact: {
      index: "07 / 开启合作",
      title: "准备好共创 SRAM 的未来了吗？",
      body: "带来您最具挑战的 SRAM DTCO 工作流，我们将展示格知算存如何连接数据、模型与工程决策。",
      formLabel: "申请产品演示",
      formTitle: "告诉我们您的团队情况。",
      private: "隐私保护",
      fields: ["姓名", "工作邮箱", "公司", "职位"],
      submit: "生成演示申请邮件",
      note: "将打开您的邮件客户端；本站不会存储任何表单数据。",
      missing: "请填写全部字段后再继续。",
      success: "邮件客户端将打开预填申请，请发送邮件以完成申请。",
      mailSubject: "格知算存产品演示申请",
      mailBody: "我希望申请格知算存产品演示。",
    },
    footer: {
      quote: (
        <>
          格物以致知，
          <br />
          善思以明智。
        </>
      ),
      explore: "探索",
      connect: "联系",
      email: "电子邮件",
      website: "官方网站",
      copyright: "© 2026 格知算存。保留所有权利。",
      tagline: "AI 原生 SRAM 工程平台",
    },
  },
} as const;

const revealStyle = (index: number) =>
  ({ "--delay": `${index * 70}ms` }) as CSSProperties;

export default function LandingPage({ locale }: { locale: Locale }) {
  const t = messages[locale];
  const navigation = t.navigation;
  const [menuOpen, setMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState("");
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
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
  }, [locale]);

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
      setFormStatus(t.contact.missing);
      return;
    }

    const subject = encodeURIComponent(`${t.contact.mailSubject} — ${company}`);
    const body = encodeURIComponent(
      `${t.contact.fields[0]}: ${name}\n${t.contact.fields[1]}: ${email}\n${t.contact.fields[2]}: ${company}\n${t.contact.fields[3]}: ${role}\n\n${t.contact.mailBody}`,
    );

    setFormStatus(t.contact.success);
    window.location.href = `mailto:hello@gnozis.cn?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <a className="skip-link" href="#main-content">
        {t.skip}
      </a>

      <header className="site-header" id="top">
        <div className="nav-shell">
          <a className="wordmark" href="#top" aria-label={t.homeLabel}>
            <span className="logo-mark" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </span>
            <span>{t.brand}</span>
          </a>

          <nav className="desktop-nav" aria-label={t.primaryNavigation}>
            {navigation.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <a
              className="language-switch"
              href={t.languageHref}
              hrefLang={locale === "zh" ? "en" : "zh-CN"}
              lang={locale === "zh" ? "en" : "zh-CN"}
            >
              {t.languageLabel}
            </a>
            <a className="button button-small header-cta" href="#contact">
              {t.requestDemo}
              <ArrowRight aria-hidden="true" size={16} />
            </a>
          </div>

          <button
            ref={menuButtonRef}
            className="menu-button"
            type="button"
            aria-label={menuOpen ? t.closeMenu : t.openMenu}
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
          <nav aria-label={t.mobileNavigation}>
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
              {t.requestDemo}
            </a>
            <a
              className="button button-secondary mobile-language-switch"
              href={t.languageHref}
              hrefLang={locale === "zh" ? "en" : "zh-CN"}
              lang={locale === "zh" ? "en" : "zh-CN"}
              onClick={() => setMenuOpen(false)}
              tabIndex={menuOpen ? 0 : -1}
            >
              {t.languageLabel}
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
                {t.hero.eyebrow}
              </div>
              <h1 data-reveal style={revealStyle(1)}>
                {t.hero.title}
                <span>{t.hero.titleAccent}</span>
              </h1>
              <p className="hero-subtitle" data-reveal style={revealStyle(2)}>
                {t.hero.subtitle}
              </p>
              <div className="hero-actions" data-reveal style={revealStyle(3)}>
                <a className="button" href="#contact">
                  {t.requestDemo}
                  <ArrowRight aria-hidden="true" size={18} />
                </a>
                <a className="button button-secondary" href="#platform">
                  {t.hero.architecture}
                </a>
              </div>
              <div className="hero-proof" data-reveal style={revealStyle(4)}>
                <div>
                  <CheckCircle2 aria-hidden="true" />
                  {t.hero.proof[0]}
                </div>
                <div>
                  <CheckCircle2 aria-hidden="true" />
                  {t.hero.proof[1]}
                </div>
              </div>
            </div>

            <figure className="hero-visual" data-reveal style={revealStyle(2)}>
              <figcaption className="visual-toolbar">
                <span>
                  <span className="status-dot" aria-hidden="true" />
                  {t.hero.closedLoop}
                </span>
                <span className="toolbar-meta">{t.hero.workflowMeta}</span>
              </figcaption>

              <div className="pipeline-canvas">
                <div className="canvas-grid" aria-hidden="true" />
                <div className="pipeline-track" aria-label={t.hero.pipelineLabel}>
                  <div className="pipeline-node node-tcad">
                    <CircuitBoard aria-hidden="true" />
                    <span>{t.hero.nodes[0][0]}</span>
                    <small>{t.hero.nodes[0][1]}</small>
                  </div>
                  <div className="flow-line line-one" aria-hidden="true">
                    <i />
                  </div>
                  <div className="pipeline-node node-spice">
                    <Activity aria-hidden="true" />
                    <span>{t.hero.nodes[1][0]}</span>
                    <small>{t.hero.nodes[1][1]}</small>
                  </div>
                  <div className="flow-line line-two" aria-hidden="true">
                    <i />
                  </div>
                  <div className="pipeline-node node-monte">
                    <BarChart3 aria-hidden="true" />
                    <span>{t.hero.nodes[2][0]}</span>
                    <small>{t.hero.nodes[2][1]}</small>
                  </div>
                  <div className="flow-line line-three" aria-hidden="true">
                    <i />
                  </div>
                  <div className="pipeline-node node-ai">
                    <BrainCircuit aria-hidden="true" />
                    <span>{t.hero.nodes[3][0]}</span>
                    <small>{t.hero.nodes[3][1]}</small>
                  </div>
                  <div className="flow-line line-four" aria-hidden="true">
                    <i />
                  </div>
                  <div className="pipeline-node node-report">
                    <FileChartColumnIncreasing aria-hidden="true" />
                    <span>{t.hero.nodes[4][0]}</span>
                    <small>{t.hero.nodes[4][1]}</small>
                  </div>
                </div>

                <div className="insight-card">
                  <div className="insight-icon">
                    <Sparkles aria-hidden="true" />
                  </div>
                  <div>
                    <span>{t.hero.modelInsight}</span>
                    <strong>{t.hero.insight}</strong>
                  </div>
                  <span className="confidence">96.4%</span>
                </div>

                <div className="feedback-loop" aria-hidden="true">
                  <span>{t.hero.siliconLearning}</span>
                  <div />
                </div>
              </div>
            </figure>
          </div>
          <a className="scroll-cue" href="#challenges" aria-label={t.hero.exploreLabel}>
            <span>{t.hero.explore}</span>
            <span className="scroll-line" aria-hidden="true" />
          </a>
        </section>

        <section className="section" id="challenges">
          <div className="container">
            <div className="section-heading" data-reveal>
              <span className="section-index">{t.challenge.index}</span>
              <h2>{t.challenge.title}</h2>
              <p>{t.challenge.body}</p>
            </div>

            <div className="challenge-grid">
              {t.challenge.items.map((item, index) => {
                const Icon = icons.challenges[index];
                return (
                  <article
                    className={`challenge-card challenge-card-${index + 1}`}
                    data-reveal
                    key={item[0]}
                    style={revealStyle(index)}
                  >
                    <div className="card-topline">
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <Icon aria-hidden="true" />
                    </div>
                    <div>
                      <h3>{item[0]}</h3>
                      <p>{item[1]}</p>
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
              <span className="section-index">{t.workflow.index}</span>
              <h2>{t.workflow.title}</h2>
              <p>{t.workflow.body}</p>
            </div>

            <figure className="workflow-figure" data-reveal>
              <figcaption className="sr-only">
                {t.workflow.label}
              </figcaption>
              {t.workflow.steps.map((step, index) => (
                <div className="workflow-item" key={step[0]}>
                  <div className="workflow-node">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{step[0]}</strong>
                    <small>{step[1]}</small>
                  </div>
                  {index < t.workflow.steps.length - 1 && (
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
                <span className="section-index">{t.capabilities.index}</span>
                <h2>{t.capabilities.title}</h2>
              </div>
              <p>{t.capabilities.body}</p>
            </div>

            <div className="capability-grid">
              {t.capabilities.items.map((item, index) => {
                const Icon = icons.capabilities[index];
                return (
                  <article
                    className="capability-card"
                    data-reveal
                    key={item[0]}
                    style={revealStyle(index)}
                  >
                    <div className="capability-icon">
                      <Icon aria-hidden="true" />
                    </div>
                    <h3>{item[0]}</h3>
                    <p>{item[1]}</p>
                    <div className="capability-meta">
                      <span>{item[2]}</span>
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
              <span className="section-index">{t.platform.index}</span>
              <h2>{t.platform.title}</h2>
              <p>{t.platform.body}</p>
              <div className="platform-callout">
                <Sparkles aria-hidden="true" />
                <div>
                  <strong>{t.platform.calloutTitle}</strong>
                  <span>{t.platform.calloutBody}</span>
                </div>
              </div>
            </div>

            <figure className="architecture" data-reveal>
              <figcaption className="architecture-head">
                <span>{t.platform.architecture}</span>
                <span>{t.platform.layers}</span>
              </figcaption>
              <div className="architecture-stack">
                {t.platform.rows.map((layer, index) => {
                  const Icon = icons.platform[index];
                  return (
                    <div className="architecture-row" key={layer[0]}>
                      <div className="layer-label">
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        <Icon aria-hidden="true" />
                        <strong>{layer[0]}</strong>
                      </div>
                      <div className="layer-items">
                        {layer[1].map((item) => (
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
              <span className="section-index">{t.why.index}</span>
              <h2>{t.why.title}</h2>
            </div>

            <div className="advantage-grid">
              {t.why.items.map((item, index) => {
                const Icon = icons.advantages[index];
                return (
                  <article
                    className="advantage-card"
                    data-reveal
                    key={item[0]}
                    style={revealStyle(index)}
                  >
                    <span className="advantage-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <Icon aria-hidden="true" />
                    <h3>{item[0]}</h3>
                    <p>{item[1]}</p>
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
                <span className="section-index">{t.vision.index}</span>
                <h2>{t.vision.title}</h2>
                <p>{t.vision.body}</p>
                <div className="vision-line">
                  <span />
                  {t.vision.line}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container contact-layout">
            <div className="contact-copy" data-reveal>
              <span className="section-index">{t.contact.index}</span>
              <h2>{t.contact.title}</h2>
              <p>{t.contact.body}</p>
              <a className="contact-email" href="mailto:hello@gnozis.cn">
                <Mail aria-hidden="true" />
                hello@gnozis.cn
                <ArrowRight aria-hidden="true" />
              </a>
            </div>

            <form className="demo-form" onSubmit={handleDemoRequest} data-reveal>
              <div className="form-heading">
                <div>
                  <span>{t.contact.formLabel}</span>
                  <h3>{t.contact.formTitle}</h3>
                </div>
                <span className="form-badge">{t.contact.private}</span>
              </div>

              <div className="form-grid">
                <label>
                  <span>
                    <UserRound aria-hidden="true" />
                    {t.contact.fields[0]}
                  </span>
                  <input name="name" type="text" autoComplete="name" required />
                </label>
                <label>
                  <span>
                    <Mail aria-hidden="true" />
                    {t.contact.fields[1]}
                  </span>
                  <input name="email" type="email" autoComplete="email" required />
                </label>
                <label>
                  <span>
                    <Building2 aria-hidden="true" />
                    {t.contact.fields[2]}
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
                    {t.contact.fields[3]}
                  </span>
                  <input name="role" type="text" autoComplete="organization-title" required />
                </label>
              </div>

              <button className="button form-submit" type="submit">
                {t.contact.submit}
                <ArrowRight aria-hidden="true" />
              </button>
              <p className="form-note">{t.contact.note}</p>
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
              <span>{t.brand}</span>
            </a>
            <span className="brand-cn">{locale === "zh" ? "Gnozis" : "格知算存"}</span>
            <p>{t.footer.quote}</p>
          </div>

          <div className="footer-nav">
            <span>{t.footer.explore}</span>
            {navigation.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </div>

          <div className="footer-nav">
            <span>{t.footer.connect}</span>
            <a href="mailto:hello@gnozis.cn">{t.footer.email}</a>
            <a href="https://www.gnozis.cn/">{t.footer.website}</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>{t.footer.copyright}</span>
          <span>{t.footer.tagline}</span>
        </div>
      </footer>
    </>
  );
}
