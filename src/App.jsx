import './App.css';
import { projects } from './projects';
import {
  ArrowRight,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Cpu,
  ExternalLink,
  Github,
  Globe2,
  Layers3,
  Mail,
  Menu,
  MonitorCog,
  Rocket,
  Sparkles,
  TerminalSquare,
  X,
} from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

const content = {
  es: {
    nav: ['Inicio', 'Portafolio', 'Servicios', 'Proceso', 'Contacto'],
    languageLabel: 'EN',
    hero: {
      eyebrow: 'Innovalogic.tech · Portafolio y consultoría técnica',
      title: 'Construyo software práctico, automatización e IA aplicada para problemas reales.',
      body:
        'Soy Dario Meneses. Diseño y desarrollo productos, herramientas internas y sistemas que conectan datos, operaciones y decisiones. Aquí encontrarás proyectos, demostraciones y código para conocer mi trabajo.',
      primary: 'Ver portafolio',
      secondary: 'Hablemos de una idea',
      github: 'Ver GitHub',
    },
    projectLinks: {
      demo: 'Abrir demo', landing: 'Presentación', pilot: 'Acceso al piloto', website: 'Visitar sitio',
      repo: 'Ver repo', protected: 'Demo con clave', installation: 'Instalación y docs', preview: 'Ver avance',
    },
    proof: [
      ['Full-stack', 'React, Node, .NET, APIs y productos web'],
      ['Automatización', 'Flujos, reportes, integraciones y tareas repetibles'],
      ['IA aplicada', 'LLMs, asistentes, análisis y experiencias inteligentes'],
      ['Producto', 'MVPs, apps publicables y herramientas para negocio'],
    ],
    categories: { all: 'Todos', learning: 'Aprendizaje y accesibilidad', operations: 'Datos y productividad', ai: 'IA y conversación', web: 'Multimedia y sitios web' },
    statuses: { protected: 'Demo con clave', demo: 'Demo web', code: 'Código público', extension: 'Extensión Chrome', local: 'Aplicación local', desktop: 'Escritorio Windows', private: 'Desarrollo privado', development: 'En desarrollo', pilot: 'Piloto con acceso', website: 'Sitio web' },
    filterLabel: 'Filtrar proyectos por temática', countLabel: 'proyectos', repoLabel: 'repositorios públicos', privateNote: 'Código no público',
    navLabel: 'Navegación principal', menuLabel: 'Abrir o cerrar menú', languageAria: 'Switch to English',
    signalTitle: 'Un portafolio para explorar', signalBody: 'Aprendizaje, productividad, operaciones e IA aplicada. Conoce cada proyecto y consulta su código o demostración disponible.',
    portfolioTitle: 'Explora mis proyectos',
    portfolioIntro:
      'Aplicaciones web, herramientas locales y productos en desarrollo. Filtra por temática y descubre qué puedes probar, instalar o explorar en GitHub.',
    servicesTitle: 'Servicios que podemos activar',
    servicesIntro:
      'Te ayudo a convertir una necesidad en una solución concreta: desarrollar un producto, conectar herramientas o simplificar un proceso.',
    services: [
      {
        icon: Code2,
        title: 'Desarrollo de productos y MVPs',
        text: 'Web apps, herramientas internas, prototipos publicables y reconstrucción de sistemas existentes.',
      },
      {
        icon: MonitorCog,
        title: 'Automatización de procesos',
        text: 'Flujos repetitivos, reportes, integraciones, formularios, datos y operaciones que hoy consumen demasiado tiempo.',
      },
      {
        icon: BrainCircuit,
        title: 'IA aplicada a negocio',
        text: 'Asistentes, búsqueda inteligente, clasificación, generación de contenido, análisis y copilotos sobre datos propios.',
      },
      {
        icon: Layers3,
        title: 'Consultoría técnica',
        text: 'Arquitectura, roadmaps, evaluación de ideas, selección de stack y acompañamiento para lanzar con menos fricción.',
      },
    ],
    processTitle: 'Cómo trabajaría contigo',
    process: [
      ['01', 'Entender', 'Aterrizamos el problema, usuarios, restricciones y qué sería una victoria concreta.'],
      ['02', 'Prototipar', 'Construimos una primera versión visible rápidamente para validar dirección.'],
      ['03', 'Productizar', 'Pulimos arquitectura, experiencia, datos, seguridad y despliegue.'],
      ['04', 'Evolucionar', 'Medimos, documentamos y dejamos una base mantenible para crecer.'],
    ],
    aboutTitle: 'Sobre Dario',
    about:
      'Me gusta construir herramientas que reduzcan ruido. Trabajo bien cuando puedo juntar producto, código, automatización y criterio de negocio. Mi enfoque no es llenar una página de palabras grandes: es tomar una idea, volverla concreta y dejar algo que se pueda usar.',
    contactTitle: 'Construyamos la siguiente versión',
    contactBody:
      'Si tienes una idea, un proceso desordenado o un proyecto que necesita forma, escríbeme. Podemos empezar pequeño y convertirlo en algo serio.',
    emailCta: 'Escribirme',
    footer: 'Portafolio vivo de Dario Meneses e Innovalogic.tech.',
  },
  en: {
    nav: ['Home', 'Portfolio', 'Services', 'Process', 'Contact'],
    languageLabel: 'ES',
    hero: {
      eyebrow: 'Innovalogic.tech · Portfolio and technical consulting',
      title: 'I build practical software, automation and applied AI for real problems.',
      body:
        'I am Dario Meneses. I design and build products, internal tools and systems that connect data, operations and decisions. Explore my projects, demonstrations, and code to see what I build.',
      primary: 'View portfolio',
      secondary: 'Discuss an idea',
      github: 'View GitHub',
    },
    projectLinks: {
      demo: 'Open demo', landing: 'Landing page', pilot: 'Pilot access', website: 'Visit website',
      repo: 'View repo', protected: 'Demo with access key', installation: 'Installation & docs', preview: 'View progress',
    },
    proof: [
      ['Full-stack', 'React, Node, .NET, APIs and web products'],
      ['Automation', 'Workflows, reports, integrations and repeatable tasks'],
      ['Applied AI', 'LLMs, assistants, analysis and intelligent experiences'],
      ['Product', 'MVPs, shippable apps and business tools'],
    ],
    categories: { all: 'All', learning: 'Learning and accessibility', operations: 'Data and productivity', ai: 'AI and conversation', web: 'Media and websites' },
    statuses: { protected: 'Key-protected demo', demo: 'Web demo', code: 'Public code', extension: 'Chrome extension', local: 'Local application', desktop: 'Windows desktop', private: 'Private development', development: 'In development', pilot: 'Restricted pilot', website: 'Website' },
    filterLabel: 'Filter projects by topic', countLabel: 'projects', repoLabel: 'public repositories', privateNote: 'Code not public',
    navLabel: 'Main navigation', menuLabel: 'Open or close menu', languageAria: 'Cambiar a español',
    signalTitle: 'A portfolio to explore', signalBody: 'Learning, productivity, operations, and applied AI. Explore each project and its available code or demonstration.',
    portfolioTitle: 'Explore my projects',
    portfolioIntro:
      'Web applications, local tools, and products under development. Browse by topic to find what you can try, install, or explore on GitHub.',
    servicesTitle: 'Services we can activate',
    servicesIntro:
      'I help turn a practical need into a working solution: build a product, connect tools, or simplify a process.',
    services: [
      {
        icon: Code2,
        title: 'Product and MVP development',
        text: 'Web apps, internal tools, shippable prototypes and rebuilds of existing systems.',
      },
      {
        icon: MonitorCog,
        title: 'Process automation',
        text: 'Repetitive workflows, reports, integrations, forms, data and operations that consume too much time today.',
      },
      {
        icon: BrainCircuit,
        title: 'Applied AI for business',
        text: 'Assistants, intelligent search, classification, content generation, analysis and copilots over private data.',
      },
      {
        icon: Layers3,
        title: 'Technical consulting',
        text: 'Architecture, roadmaps, idea evaluation, stack selection and guidance to launch with less friction.',
      },
    ],
    processTitle: 'How I would work with you',
    process: [
      ['01', 'Understand', 'We ground the problem, users, constraints and what a concrete win would look like.'],
      ['02', 'Prototype', 'We build a visible first version quickly to validate direction.'],
      ['03', 'Productize', 'We polish architecture, experience, data, security and deployment.'],
      ['04', 'Evolve', 'We measure, document and leave a maintainable base for growth.'],
    ],
    aboutTitle: 'About Dario',
    about:
      'I like building tools that reduce noise. I work best when I can combine product thinking, code, automation and business judgment. My focus is not filling a page with big words: it is taking an idea, making it concrete and leaving something usable behind.',
    contactTitle: 'Let us build the next version',
    contactBody:
      'If you have an idea, a messy process or a project that needs shape, write to me. We can start small and turn it into something serious.',
    emailCta: 'Email me',
    footer: 'Living portfolio of Dario Meneses and Innovalogic.tech.',
  },
};

const sectionIds = ['home', 'portfolio', 'services', 'process', 'contact'];
const email = 'contact@innovalogic.tech';
const domainUrl = 'https://innovalogic.tech/';
const domainLabel = 'innovalogic.tech';
const githubUrl = 'https://github.com/dafermen';

function App() {
  const [language, setLanguage] = useState('en');
  const [menuOpen, setMenuOpen] = useState(false);
  const t = content[language];
  const [category, setCategory] = useState('all');
  const visibleProjects = projects.filter((project) => category === 'all' || project.category === category);
  useEffect(() => { document.documentElement.lang = language; }, [language]);
  useEffect(() => {
    const closeOnEscape = (event) => { if (event.key === 'Escape') setMenuOpen(false); };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, []);
  const mailSubject = useMemo(
    () => encodeURIComponent(language === 'es' ? 'Hablemos de un proyecto' : 'Let us discuss a project'),
    [language],
  );

  const goTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-[#f5f8fb] text-[#0f172a]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-[#f5f8fb]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <button className="flex items-center gap-3 text-left" onClick={() => goTo('home')} aria-label="Innovalogic.tech home">
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-[#0f172a] text-lg font-black text-[#f5f8fb] shadow-sm">
              IL
            </span>
            <span>
              <span className="block text-base font-black tracking-tight">Innovalogic.tech</span>
              <span className="block text-xs uppercase tracking-[0.22em] text-[#64748b]">Dario Meneses</span>
            </span>
          </button>

          <nav aria-label={t.navLabel} className="hidden items-center gap-1 md:flex">
            {t.nav.map((item, index) => (
              <button
                key={item}
                onClick={() => goTo(sectionIds[index])}
                className="rounded-full px-4 py-2 text-sm font-semibold text-[#475569] transition hover:bg-black/5 hover:text-[#0f172a]"
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-2 text-sm font-bold shadow-sm transition hover:border-black/20"
              aria-label={t.languageAria}
            >
              <Globe2 className="h-4 w-4" />
              {t.languageLabel}
            </button>
            <button
              className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white md:hidden"
              onClick={() => setMenuOpen((value) => !value)}
              aria-label={t.menuLabel}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div id="mobile-navigation" className="border-t border-black/10 bg-[#f5f8fb] px-5 py-4 md:hidden">
            <div className="mx-auto grid max-w-7xl gap-2">
              {t.nav.map((item, index) => (
                <button
                  key={item}
                  onClick={() => goTo(sectionIds[index])}
                  className="rounded-lg px-3 py-3 text-left font-semibold text-[#334155] hover:bg-black/5"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="relative overflow-hidden px-5 pb-20 pt-32 sm:px-8 lg:pb-28 lg:pt-40">
          <div className="absolute left-1/2 top-28 h-[460px] w-[900px] -translate-x-1/2 rounded-full bg-[#38bdf8]/25 blur-3xl" />
          <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-4 py-2 text-sm font-bold text-[#334155] shadow-sm">
                <Sparkles className="h-4 w-4 text-[#0ea5e9]" />
                {t.hero.eyebrow}
              </div>
              <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-tight text-[#0f172a] sm:text-6xl lg:text-7xl">
                {t.hero.title}
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#475569] sm:text-xl">{t.hero.body}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={() => goTo('portfolio')}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0f172a] px-6 py-4 text-base font-black text-white shadow-lg shadow-black/10 transition hover:-translate-y-0.5"
                >
                  {t.hero.primary}
                  <ArrowRight className="h-5 w-5" />
                </button>
                <a
                  href={`mailto:${email}?subject=${mailSubject}`}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-black/15 bg-white px-6 py-4 text-base font-black text-[#0f172a] shadow-sm transition hover:-translate-y-0.5"
                >
                  {t.hero.secondary}
                </a>
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-black/15 bg-white/70 px-6 py-4 text-base font-black text-[#0f172a] shadow-sm transition hover:-translate-y-0.5"
                >
                  <Github className="h-5 w-5" />
                  {t.hero.github}
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-black/10 bg-[#0f172a] p-4 text-white shadow-2xl shadow-black/20">
              <div className="rounded-xl border border-white/10 bg-[#162033] p-5">
                <div className="mb-4 flex items-center gap-2 text-sm text-[#67e8f9]">
                  <TerminalSquare className="h-4 w-4" />
                  {t.signalTitle}
                </div>
                <p className="text-base leading-7 text-[#dbeafe]">{t.signalBody}</p>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div><strong className="block text-4xl">{projects.length}</strong><span className="text-sm text-white/70">{t.countLabel}</span></div>
                  <div><strong className="block text-4xl">{projects.filter((project) => project.repoUrl).length}</strong><span className="text-sm text-white/70">{t.repoLabel}</span></div>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {t.proof.map(([label, text]) => (
                  <div key={label} className="rounded-xl border border-white/10 bg-white/[0.06] p-4">
                    <div className="text-sm font-black text-white">{label}</div>
                    <p className="mt-2 text-sm leading-6 text-white/65">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="scroll-mt-24 border-y border-black/10 bg-white px-5 py-20 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-[#0ea5e9]">Portfolio</p>
                <h2 className="text-4xl font-black tracking-tight sm:text-5xl">{t.portfolioTitle}</h2>
              </div>
              <p className="max-w-2xl text-lg leading-8 text-[#64748b]">{t.portfolioIntro}</p>
            </div>

            <div className="mb-6 flex flex-wrap gap-2" role="group" aria-label={t.filterLabel}>
              {Object.entries(t.categories).map(([key, label]) => (
                <button key={key} type="button" aria-pressed={category === key} onClick={() => setCategory(key)}
                  className={`rounded-full border px-4 py-3 text-sm font-bold transition ${category === key ? 'border-[#0f172a] bg-[#0f172a] text-white' : 'border-black/15 bg-white text-[#475569] hover:bg-[#f5f8fb]'}`}>
                  {label}
                </button>
              ))}
            </div>
            <p className="mb-6 text-sm text-[#64748b]" aria-live="polite" aria-atomic="true">{visibleProjects.length} / {projects.length} {t.countLabel}</p>
            <div className="grid gap-5 md:grid-cols-2">
              {visibleProjects.map((project) => (
                <article key={project.name} className="group flex flex-col rounded-2xl border border-black/10 bg-[#f5f8fb] p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="mb-3 inline-flex rounded-full bg-[#dbeafe] px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-[#075985]">
                        {t.statuses[project.status]}
                      </p>
                      <h3 className="text-2xl font-black tracking-tight">{project.name}</h3>
                    </div>
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-white text-[#0f172a] shadow-sm">
                      <Rocket className="h-5 w-5" />
                    </span>
                  </div>
                  <p className="mt-5 text-base leading-7 text-[#475569]">{project.summary[language]}</p>
                  {project.accessNote && <p className="mt-3 text-sm font-semibold text-[#475569]">{project.accessNote[language]}</p>}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-bold text-[#475569]">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap gap-3 pt-6">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0f172a] px-4 py-2 text-sm font-black text-white transition hover:-translate-y-0.5"
                      >
                        <ExternalLink className="h-4 w-4" />
                        {t.projectLinks[project.linkType]}
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-black/15 bg-white px-4 py-2 text-sm font-black text-[#0f172a] transition hover:-translate-y-0.5"
                      >
                        <Github className="h-4 w-4" />
                        {t.projectLinks.repo}
                      </a>
                    )}
                    {!project.repoUrl && (
                      <span className="inline-flex items-center justify-center rounded-lg border border-black/10 bg-white/70 px-4 py-2 text-sm font-black text-[#64748b]">
                        {t.privateNote}
                      </span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="scroll-mt-24 px-5 py-20 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-[#0ea5e9]">{language === 'es' ? 'Servicios' : 'Services'}</p>
              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">{t.servicesTitle}</h2>
              <p className="mt-5 text-lg leading-8 text-[#64748b]">{t.servicesIntro}</p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {t.services.map((service) => (
                <article key={service.title} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                  <div className="mb-6 grid h-12 w-12 place-items-center rounded-lg bg-[#0f172a] text-white">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-black">{service.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#64748b]">{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="scroll-mt-24 bg-[#0f172a] px-5 py-20 text-white sm:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex items-center gap-3">
              <Cpu className="h-8 w-8 text-[#67e8f9]" />
              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">{t.processTitle}</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-4">
              {t.process.map(([number, title, text]) => (
                <article key={number} className="rounded-2xl border border-white/10 bg-white/[0.06] p-6">
                  <div className="mb-8 text-sm font-black tracking-[0.22em] text-[#67e8f9]">{number}</div>
                  <h3 className="text-2xl font-black">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/65">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <div className="grid aspect-[4/3] place-items-center rounded-xl bg-[#e0f2fe]">
                <div className="text-center">
                  <BriefcaseBusiness className="mx-auto h-12 w-12 text-[#075985]" />
                  <p className="mt-4 text-sm font-black uppercase tracking-[0.22em] text-[#075985]">{language === 'es' ? 'Perfil profesional' : 'Builder profile'}</p>
                </div>
              </div>
            </div>
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-[#0ea5e9]">{language === 'es' ? 'Sobre mí' : 'About'}</p>
              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">{t.aboutTitle}</h2>
              <p className="mt-6 text-xl leading-9 text-[#475569]">{t.about}</p>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 px-5 pb-20 sm:px-8">
          <div className="mx-auto max-w-7xl rounded-3xl bg-[#bae6fd] p-8 text-[#082f49] sm:p-12 lg:p-16">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-[#075985]">{language === 'es' ? 'Contacto' : 'Contact'}</p>
                <h2 className="max-w-3xl text-4xl font-black tracking-tight sm:text-6xl">{t.contactTitle}</h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-[#0c4a6e]">{t.contactBody}</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a href={`mailto:${email}?subject=${mailSubject}`} className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0f172a] px-6 py-4 font-black text-white">
                  <Mail className="h-5 w-5" />
                  {t.emailCta}
                </a>
                <a href={domainUrl} className="inline-flex items-center justify-center gap-2 rounded-lg border border-black/15 bg-white/50 px-6 py-4 font-black text-[#0f172a]">
                  <ExternalLink className="h-5 w-5" />
                  {domainLabel}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/10 px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-[#64748b] md:flex-row md:items-center md:justify-between">
          <p>{t.footer}</p>
          <div className="flex gap-3">
            <a href={`mailto:${email}`} aria-label="Email" className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white">
              <Mail className="h-4 w-4" />
            </a>
            <a href={githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub" className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white">
              <Github className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
