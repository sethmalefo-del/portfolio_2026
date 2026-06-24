import { useState, useEffect } from 'react'
import profilePhoto from './assets/profile.jpg'
import './App.css'
/* ── DATA ──────────────────────────────────────────────────── */
const skills = [
  {
    icon: '⚡',
    name: 'Frontend Development',
    desc: 'Building blazing-fast, pixel-perfect UIs with modern frameworks and best practices.',
    tags: ['React', 'Next.js', 'TypeScript', 'Vite'],
  },
  {
    icon: '🛠️',
    name: 'Backend Engineering',
    desc: 'Designing scalable APIs and microservices that power robust applications.',
    tags: ['Node.js', 'Python', 'REST', 'GraphQL'],
  },
  {
    icon: '🗄️',
    name: 'Database & Cloud',
    desc: 'Architecting reliable data layers and deploying to modern cloud platforms.',
    tags: ['PostgreSQL', 'MongoDB', 'AWS', 'Docker'],
  },
  {
    icon: '🎨',
    name: 'UI/UX Design',
    desc: 'Crafting intuitive, beautiful user experiences grounded in design principles.',
    tags: ['Figma', 'CSS', 'Motion', 'Accessibility'],
  },
  {
    icon: '📱',
    name: 'Mobile Development',
    desc: 'Cross-platform mobile apps that feel native on both iOS and Android.',
    tags: ['React Native', 'Flutter', 'Expo'],
  },
  {
    icon: '🤖',
    name: 'AI Integration',
    desc: 'Embedding intelligent features powered by machine learning and LLMs.',
    tags: ['OpenAI', 'LangChain', 'TensorFlow', 'Python'],
  },
]
const projects = [
  {
    emoji: '🌐',
    badge: 'Web App',
    title: 'NexaCommerce',
    desc: 'A full-stack e-commerce platform with real-time inventory, Stripe payments, and an AI-powered product recommendation engine.',
    tags: ['Next.js', 'Stripe', 'Prisma', 'PostgreSQL'],
    color: 'linear-gradient(135deg,rgba(139,92,246,0.15),rgba(6,182,212,0.08))',
  },
  {
    emoji: '📊',
    badge: 'Dashboard',
    title: 'PulseAnalytics',
    desc: 'Real-time analytics dashboard with interactive charts, custom report generation, and multi-tenant support.',
    tags: ['React', 'D3.js', 'WebSocket', 'Redis'],
    color: 'linear-gradient(135deg,rgba(6,182,212,0.15),rgba(245,158,11,0.08))',
  },
  {
    emoji: '🤖',
    badge: 'AI Tool',
    title: 'CodeMentor AI',
    desc: 'An AI coding assistant that reviews PRs, suggests refactors, and teaches best practices in real-time.',
    tags: ['OpenAI', 'Node.js', 'GitHub API', 'Vue.js'],
    color: 'linear-gradient(135deg,rgba(245,158,11,0.15),rgba(139,92,246,0.08))',
  },
]
const experience = [
  {
    icon: '🚀',
    role: 'Senior Full-Stack Developer',
    company: 'TechForward Inc.',
    period: '2024 – Present',
    desc: 'Leading the rebuild of the core product from monolith to microservices, resulting in a 3× performance improvement. Mentoring a team of 6 developers.',
  },
  {
    icon: '💡',
    role: 'Frontend Engineer',
    company: 'PixelCraft Studio',
    period: '2022 – 2024',
    desc: 'Built design systems from scratch, implemented complex animations, and reduced bundle size by 40% through code-splitting and lazy loading.',
  },
  {
    icon: '🌱',
    role: 'Junior Developer',
    company: 'Startup Foundry',
    period: '2021 – 2022',
    desc: 'Developed internal tools and client-facing dashboards using React and Node.js. Shipped 5 MVPs in under 12 months.',
  },
]
/* ── COMPONENT ─────────────────────────────────────────────── */
function App() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <div className="app-wrapper">
      {/* Background blobs */}
      <div className="blob blob-1" aria-hidden="true" />
      <div className="blob blob-2" aria-hidden="true" />
      <div className="noise-overlay" aria-hidden="true" />
      {/* ── NAV ── */}
      <nav className="nav" style={scrolled ? { background: 'rgba(10,11,18,0.95)' } : {}}>
        <div className="nav-logo">
          Ofentse<span>.</span>dev
        </div>
        <div className="nav-links">
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact" className="nav-cta">Hire Me</a>
        </div>
      </nav>
      {/* ── HERO ── */}
      <section className="hero-section" id="home">
        <div className="hero-inner">
          {/* Left: Text */}
          <div className="hero-text">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Available for work
            </div>
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">Ofentse</span>
              <br />Full-Stack Dev
            </h1>
            <p className="hero-desc">
              I design and build exceptional digital experiences — from elegant
              frontends to scalable backends. Passionate about clean code, great
              UX, and shipping products that matter.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn-primary">
                View My Work
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a href="#contact" className="btn-ghost">
                Get In Touch
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-num">3+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">20+</span>
                <span className="stat-label">Projects Shipped</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">100%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
            </div>
          </div>
          {/* Right: Photo */}
          <div className="hero-photo-wrap">
            <div className="hero-photo-glow" aria-hidden="true" />
            <div className="hero-photo-ring">
              <img
                src={profilePhoto}
                alt="Ofentse Botshelo"
                className="hero-photo"
              />
            </div>
            <div className="floating-tag tag-1"><span>⚡</span>React Expert</div>
            <div className="floating-tag tag-2"><span>🌍</span>Remote Ready</div>
            <div className="floating-tag tag-3"><span>🎯</span>Problem Solver</div>
          </div>
        </div>
      </section>
      {/* ── SKILLS ── */}
      <section className="section" id="skills">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">What I do</span>
            <h2 className="section-title">Skills &amp; Expertise</h2>
            <p className="section-desc">
              I bring a broad toolkit and deep expertise across the full development stack.
            </p>
          </div>
          <div className="skills-grid">
            {skills.map((s, i) => (
              <div className="skill-card" key={i}>
                <div className="skill-icon">{s.icon}</div>
                <div className="skill-name">{s.name}</div>
                <p className="skill-desc">{s.desc}</p>
                <div className="skill-tags">
                  {s.tags.map((t) => <span className="skill-tag" key={t}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ── PROJECTS ── */}
      <section className="section" id="projects">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">My Work</span>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-desc">
              A selection of projects I've built — from MVPs to production-scale applications.
            </p>
          </div>
          <div className="projects-grid">
            {projects.map((p, i) => (
              <div className="project-card" key={i}>
                <div className="project-thumb" style={{ background: p.color }}>
                  <div className="project-thumb-emoji">{p.emoji}</div>
                </div>
                <div className="project-body">
                  <div className="project-meta">
                    <span className="project-badge">{p.badge}</span>
                  </div>
                  <h3 className="project-title">{p.title}</h3>
                  <p className="project-desc">{p.desc}</p>
                  <div className="project-links">
                    <a href="#" className="project-link">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.04c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.32-1.74-1.32-1.74-1.08-.74.08-.73.08-.73 1.2.09 1.83 1.24 1.83 1.24 1.06 1.82 2.8 1.3 3.48.99.1-.77.41-1.3.75-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.21.7.82.58A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                      GitHub
                    </a>
                    <a href="#" className="project-link">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ── EXPERIENCE ── */}
      <section className="section" id="experience">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">Journey</span>
            <h2 className="section-title">Experience</h2>
            <p className="section-desc">
              My professional journey building products people love.
            </p>
          </div>
          <div className="timeline">
            {experience.map((e, i) => (
              <div className="timeline-item" key={i}>
                <div className="timeline-dot">{e.icon}</div>
                <div className="timeline-content">
                  <div className="timeline-head">
                    <h3 className="timeline-role">{e.role}</h3>
                    <span className="timeline-period">{e.period}</span>
                  </div>
                  <div className="timeline-company">{e.company}</div>
                  <p className="timeline-desc">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ── CONTACT ── */}
      <section className="contact-section" id="contact">
        <div className="contact-inner">
          <div className="section-header">
            <span className="section-tag">Get In Touch</span>
            <h2 className="section-title">Let's Work Together</h2>
            <p className="section-desc">
              Whether you have a project in mind or just want to say hi, my inbox is always open.
            </p>
          </div>
          <div className="contact-card">
            <p style={{ color: 'var(--clr-text)', fontSize: '1.1rem', lineHeight: 1.8 }}>
              I'm currently open to freelance, contract, and full-time opportunities.
              If you like what you see — let's talk! 🚀
            </p>
            <div className="contact-links">
              <a href="mailto:ofentse@example.com" className="contact-link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                Email Me
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="contact-link">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.04c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.32-1.74-1.32-1.74-1.08-.74.08-.73.08-.73 1.2.09 1.83 1.24 1.83 1.24 1.06 1.82 2.8 1.3 3.48.99.1-.77.41-1.3.75-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.21.7.82.58A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="contact-link">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM6.93 20.45H3.74V9h3.19v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.44c.98 0 1.79-.77 1.79-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>
                LinkedIn
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="contact-link">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                Twitter / X
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* ── FOOTER ── */}
      <footer className="footer">
        <p>Designed &amp; Built with <span>♥</span> by Ofentse Botshelo · {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}
export default App
