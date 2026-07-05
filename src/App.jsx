import './App.css';
import {
  ArrowRight,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
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
import { useMemo, useState } from 'react';

const content = {
  es: {
    nav: ['Inicio', 'Portafolio', 'Servicios', 'Proceso', 'Contacto'],
    languageLabel: 'EN',
    hero: {
      eyebrow: 'Innovalogic.tech · Portafolio y consultoría técnica',
      title: 'Construyo software práctico, automatización e IA aplicada para problemas reales.',
      body:
        'Soy Dario Meneses. Diseño y desarrollo productos, herramientas internas y sistemas que conectan datos, operaciones y decisiones. Esta es la nueva casa de mi trabajo: menos página genérica, más evidencia.',
      primary: 'Ver portafolio',
      secondary: 'Hablemos de una idea',
      github: 'Ver GitHub',
    },
    projectLinks: {
      live: 'Abrir demo',
      repo: 'Ver repo',
    },
    proof: [
      ['Full-stack', 'React, Node, .NET, APIs y productos web'],
      ['Automatización', 'Flujos, reportes, integraciones y tareas repetibles'],
      ['IA aplicada', 'LLMs, asistentes, análisis y experiencias inteligentes'],
      ['Producto', 'MVPs, apps publicables y herramientas para negocio'],
    ],
    portfolioTitle: 'Trabajo seleccionado',
    portfolioIntro:
      'Proyectos reales publicados en GitHub y en el servidor de pruebas de Innovalogic: productividad, aprendizaje, automatización, monitoreo y experiencias útiles.',
    projects: [
      {
        name: 'TaskPilot',
        status: 'Publicado',
        summary:
          'Aplicación para organizar tareas, priorizar trabajo y mantener claridad sobre lo que sigue.',
        stack: ['React', 'Productivity UX', 'Task management', 'Workflow'],
        impact: 'Convierte listas dispersas en una experiencia enfocada para ejecutar trabajo diario.',
        liveUrl: 'https://taskpilot.innovalogic.tech',
        repoUrl: 'https://github.com/dafermen/TaskPilot',
      },
      {
        name: 'SmartQuiz',
        status: 'Publicado',
        summary:
          'Herramienta educativa para practicar con preguntas, validar conocimiento y reforzar aprendizaje.',
        stack: ['React', 'Education', 'Quiz engine', 'Content systems'],
        impact: 'Transforma contenido de estudio en práctica medible y fácil de repetir.',
        liveUrl: 'https://smartquiz.innovalogic.tech/home',
        repoUrl: 'https://github.com/dafermen/SmartQuiz',
      },
      {
        name: 'SmartTense',
        status: 'Publicado',
        summary:
          'Aplicación de aprendizaje para practicar tiempos verbales y mejorar dominio del inglés con ejercicios estructurados.',
        stack: ['React', 'Language learning', 'Practice flow', 'Mobile UX'],
        impact: 'Hace que la práctica gramatical sea más clara, guiada y constante.',
        liveUrl: 'https://smarttense.innovalogic.tech',
        repoUrl: 'https://github.com/dafermen/SmartTense',
      },
      {
        name: 'DMV NY Practice',
        status: 'Privado · Demo pública',
        summary:
          'Software para estudiar, practicar y prepararse para aprobar el examen del DMV en New York.',
        stack: ['React', 'Education', 'DMV prep', 'Bilingual UX'],
        impact: 'Organiza teoría, práctica y progreso en una herramienta simple para estudiantes.',
        liveUrl: 'https://dmv.innovalogic.tech/',
        privateNote: 'Repositorio privado',
      },
      {
        name: 'Netwatch Lite',
        status: 'Próximo lanzamiento',
        summary:
          'Herramienta para monitoreo, reportes e integraciones operativas con foco en claridad, historial y acciones rápidas.',
        stack: ['React', '.NET', 'Capacitor', 'Reports', 'Automation'],
        impact: 'Convierte datos técnicos en una superficie entendible para operar y decidir.',
        liveUrl: 'https://netwatch.innovalogic.tech/',
        repoUrl: 'https://github.com/dafermen/netwatch-lite',
      },
      {
        name: 'Netwatch Wallboard',
        status: 'Repositorio público',
        summary:
          'Vista de pared para monitorear estados, actividad y señales clave en tiempo real o casi real.',
        stack: ['Dashboard', 'Data visualization', 'Realtime UX'],
        impact: 'Ayuda a equipos a ver lo importante sin navegar por sistemas complejos.',
        repoUrl: 'https://github.com/dafermen/netwatch-lite-wallboard',
      },
      {
        name: 'Innovalogic.tech Rebuild',
        status: 'Marca y plataforma',
        summary:
          'Reconstrucción de esta presencia digital como portafolio vivo, base de consultoría y archivo de casos de estudio.',
        stack: ['React', 'Content strategy', 'SEO', 'Design system'],
        impact: 'Transforma una página genérica en una plataforma que comunica criterio y trabajo real.',
        liveUrl: 'https://innovalogic.tech/',
        repoUrl: 'https://github.com/dafermen/innovalogic.tech',
      },
    ],
    servicesTitle: 'Servicios que podemos activar',
    servicesIntro:
      'No necesito venderlo como una mega agencia. La oferta puede crecer desde lo que ya sabes hacer: construir, integrar, automatizar y explicar.',
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
        'I am Dario Meneses. I design and build products, internal tools and systems that connect data, operations and decisions. This is the new home for my work: less generic website, more evidence.',
      primary: 'View portfolio',
      secondary: 'Discuss an idea',
      github: 'View GitHub',
    },
    projectLinks: {
      live: 'Open demo',
      repo: 'View repo',
    },
    proof: [
      ['Full-stack', 'React, Node, .NET, APIs and web products'],
      ['Automation', 'Workflows, reports, integrations and repeatable tasks'],
      ['Applied AI', 'LLMs, assistants, analysis and intelligent experiences'],
      ['Product', 'MVPs, shippable apps and business tools'],
    ],
    portfolioTitle: 'Selected work',
    portfolioIntro:
      'Real projects published on GitHub and the Innovalogic staging server: productivity, learning, automation, monitoring and useful experiences.',
    projects: [
      {
        name: 'TaskPilot',
        status: 'Published',
        summary:
          'An app for organizing tasks, prioritizing work and keeping clarity around what comes next.',
        stack: ['React', 'Productivity UX', 'Task management', 'Workflow'],
        impact: 'Turns scattered lists into a focused experience for executing daily work.',
        liveUrl: 'https://taskpilot.innovalogic.tech',
        repoUrl: 'https://github.com/dafermen/TaskPilot',
      },
      {
        name: 'SmartQuiz',
        status: 'Published',
        summary:
          'An education tool for practicing with questions, validating knowledge and reinforcing learning.',
        stack: ['React', 'Education', 'Quiz engine', 'Content systems'],
        impact: 'Turns study content into measurable practice that is easy to repeat.',
        liveUrl: 'https://smartquiz.innovalogic.tech/home',
        repoUrl: 'https://github.com/dafermen/SmartQuiz',
      },
      {
        name: 'SmartTense',
        status: 'Published',
        summary:
          'A learning app for practicing verb tenses and improving English through structured exercises.',
        stack: ['React', 'Language learning', 'Practice flow', 'Mobile UX'],
        impact: 'Makes grammar practice clearer, more guided and easier to keep consistent.',
        liveUrl: 'https://smarttense.innovalogic.tech',
        repoUrl: 'https://github.com/dafermen/SmartTense',
      },
      {
        name: 'DMV NY Practice',
        status: 'Private · Public demo',
        summary:
          'Software for studying, practicing and preparing to pass the New York DMV exam.',
        stack: ['React', 'Education', 'DMV prep', 'Bilingual UX'],
        impact: 'Organizes theory, practice and progress into a simple tool for students.',
        liveUrl: 'https://dmv.innovalogic.tech/',
        privateNote: 'Private repository',
      },
      {
        name: 'Netwatch Lite',
        status: 'Coming soon',
        summary:
          'A tool for monitoring, reports and operational integrations focused on clarity, history and fast actions.',
        stack: ['React', '.NET', 'Capacitor', 'Reports', 'Automation'],
        impact: 'Turns technical data into a clear surface for operating and deciding.',
        liveUrl: 'https://netwatch.innovalogic.tech/',
        repoUrl: 'https://github.com/dafermen/netwatch-lite',
      },
      {
        name: 'Netwatch Wallboard',
        status: 'Public repository',
        summary:
          'A wallboard view for monitoring status, activity and key signals in real time or near real time.',
        stack: ['Dashboard', 'Data visualization', 'Realtime UX'],
        impact: 'Helps teams see what matters without digging through complex systems.',
        repoUrl: 'https://github.com/dafermen/netwatch-lite-wallboard',
      },
      {
        name: 'Innovalogic.tech Rebuild',
        status: 'Brand and platform',
        summary:
          'Rebuilding this digital presence into a living portfolio, consulting base and case study archive.',
        stack: ['React', 'Content strategy', 'SEO', 'Design system'],
        impact: 'Turns a generic page into a platform that communicates judgment and real work.',
        liveUrl: 'https://innovalogic.tech/',
        repoUrl: 'https://github.com/dafermen/innovalogic.tech',
      },
    ],
    servicesTitle: 'Services we can activate',
    servicesIntro:
      'This does not need to sound like a giant agency. The offer can grow from what you already do well: build, integrate, automate and explain.',
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
  const mailSubject = useMemo(
    () => encodeURIComponent(language === 'es' ? 'Hablemos de un proyecto' : 'Let us discuss a project'),
    [language],
  );

  const goTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
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

          <nav className="hidden items-center gap-1 md:flex">
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
              aria-label="Toggle language"
            >
              <Globe2 className="h-4 w-4" />
              {t.languageLabel}
            </button>
            <button
              className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white md:hidden"
              onClick={() => setMenuOpen((value) => !value)}
              aria-label="Toggle navigation"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="border-t border-black/10 bg-[#f5f8fb] px-5 py-4 md:hidden">
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
                  portfolio.signal
                </div>
                <div className="space-y-3 font-mono text-sm leading-7 text-[#dbeafe]">
                  <p><span className="text-[#67e8f9]">builder</span>: Dario Meneses</p>
                  <p><span className="text-[#67e8f9]">focus</span>: software + automation + applied_ai</p>
                  <p><span className="text-[#67e8f9]">mode</span>: practical, shippable, clear</p>
                  <p><span className="text-[#67e8f9]">next</span>: portfolio {'->'} services {'->'} case_studies</p>
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

            <div className="grid gap-5 md:grid-cols-2">
              {t.projects.map((project) => (
                <article key={project.name} className="group rounded-2xl border border-black/10 bg-[#f5f8fb] p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="mb-3 inline-flex rounded-full bg-[#dbeafe] px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-[#075985]">
                        {project.status}
                      </p>
                      <h3 className="text-2xl font-black tracking-tight">{project.name}</h3>
                    </div>
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-white text-[#0f172a] shadow-sm">
                      <Rocket className="h-5 w-5" />
                    </span>
                  </div>
                  <p className="mt-5 text-base leading-7 text-[#475569]">{project.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-bold text-[#475569]">
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 rounded-xl border border-black/10 bg-white p-4 text-sm font-semibold leading-6 text-[#334155]">
                    <CheckCircle2 className="mr-2 inline h-4 w-4 text-[#0ea5e9]" />
                    {project.impact}
                  </div>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0f172a] px-4 py-2 text-sm font-black text-white transition hover:-translate-y-0.5"
                      >
                        <ExternalLink className="h-4 w-4" />
                        {t.projectLinks.live}
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
                    {project.privateNote && (
                      <span className="inline-flex items-center justify-center rounded-lg border border-black/10 bg-white/70 px-4 py-2 text-sm font-black text-[#64748b]">
                        {project.privateNote}
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
              <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-[#0ea5e9]">Services</p>
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
                  <p className="mt-4 text-sm font-black uppercase tracking-[0.22em] text-[#075985]">Builder profile</p>
                </div>
              </div>
            </div>
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-[#0ea5e9]">About</p>
              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">{t.aboutTitle}</h2>
              <p className="mt-6 text-xl leading-9 text-[#475569]">{t.about}</p>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 px-5 pb-20 sm:px-8">
          <div className="mx-auto max-w-7xl rounded-3xl bg-[#bae6fd] p-8 text-[#082f49] sm:p-12 lg:p-16">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-[#075985]">Contact</p>
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
