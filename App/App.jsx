import { useState, useEffect } from 'react'
import profilePhoto from './assets/seth.jpg'
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
    title: 'Weather App',
    desc: 'A full functional weather app platform with real-time weather updates globally using live weather data.',
    tags: ['JavaScript', 'API', 'HTML', 'CSS'],
    color: 'linear-gradient(135deg,rgba(139,92,246,0.15),rgba(6,182,212,0.08))',
    github: 'https://github.com/sethmalefo-del/weather-app-project',
    demo: 'https://github.com/sethmalefo-del/weather-app-project',
  },
  {
    emoji: '💰',
    badge: 'Finance Tool',
    title: 'Budget Tracker',
    desc: 'Smart budget tracking application to monitor expenses and manage personal finances efficiently.',
    tags: ['JavaScript', 'Local Storage', 'HTML', 'CSS'],
    color: 'linear-gradient(135deg,rgba(6,182,212,0.15),rgba(245,158,11,0.08))',
    github: 'https://github.com/sethmalefo-del/BudgetTracker',
    demo: 'https://github.com/sethmalefo-del/BudgetTracker',
  },
  {
    emoji: '🎵',
    badge: 'Media Player',
    title: 'Soulify Music Player',
    desc: 'A sleek music player application with intuitive controls and beautiful UI for music lovers.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    color: 'linear-gradient(135deg,rgba(245,158,11,0.15),rgba(139,92,246,0.08))',
    github: 'https://github.com/sethmalefo-del/Soulify-Music-player',
    demo: 'https://github.com/sethmalefo-del/Soulify-Music-player',
  },
  {
    emoji: '✅',
    badge: 'Productivity',
    title: 'Todo Meter',
    desc: 'A meter-based to-do list application that visualizes your productivity progress with interactive metrics.',
    tags: ['JavaScript', 'React', 'UI/UX'],
    color: 'linear-gradient(135deg,rgba(139,92,246,0.12),rgba(6,182,212,0.08))',
    github: 'https://github.com/sethmalefo-del/todometer',
    demo: 'https://github.com/sethmalefo-del/todometer',
  },
  {
    emoji: '🏦',
    badge: 'Banking App',
    title: 'Banking Application',
    desc: 'A comprehensive banking application showcasing modern web design and functional finance management.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    color: 'linear-gradient(135deg,rgba(6,182,212,0.12),rgba(245,158,11,0.08))',
    github: 'https://github.com/sethmalefo-del/banking-application',
    demo: 'https://github.com/sethmalefo-del/banking-application',
  },
  {
    emoji: '🤖',
    badge: 'AI Platform',
    title: 'OM1 - AI Runtime',
    desc: 'Modular AI runtime for robots - an innovative platform for robotics and AI integration.',
    tags: ['Python', 'AI', 'Robotics', 'Module Design'],
    color: 'linear-gradient(135deg,rgba(245,158,11,0.12),rgba(139,92,246,0.08))',
    github: 'https://github.com/sethmalefo-del/OM1',
    demo: 'https://github.com/sethmalefo-del/OM1',
  },
]
const experience = [
  {
    icon: '🚀',
    role: 'Junior Full-Stack Developer',
    company: 'TechBridle Foundation.',
    period: '2026 – Present',
    desc: 'A learning platform with a hands-on-experience plus buildup projects to elevate students.',
  },
  {
    icon: '💡',
    role: 'Frontend Engineer',
    company: 'Empower AI',
    period: 'March – 2026',
    desc: 'A build up project that was built by last years students in the Foundation. I had the experience to test, update, review and building up on my Agile methodology and collaborating with the team.',
  },

  {
    icon: '🌱',
    role: 'Junior Developer',
    company: 'Start-up FlyRank AI',
    period: 'July-2026',
    desc: 'A new platform i had embarked on to sharpen my skill using Real-time data and Clients.',
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
          Seth<span>.</span>dev
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
              Hi, I'm <span className="gradient-text">Seth</span>
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
                alt="Seth Malefo"
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
                    <a href={p.github} target="_blank" rel="noreferrer" className="project-link">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.04c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.32-1.74-1.32-1.74-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.49.99.1-.77.42-1.3.76-1.6-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.18 0 0 1-.32 3.3 1.23.96-.27 1.98-.4 3-.41 1.02.01 2.04.14 3 .41 2.29-1.55 3.29-1.23 3.29-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.47 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.21.69.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
                      GitHub
                    </a>
                    <a href={p.demo} target="_blank" rel="noreferrer" className="project-link">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                      View Project
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
              My professional journey building products people love and helping in the community & businesses at large.
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
              <a href="mailto:setlhomara@gmail.com" className="contact-link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                Email Me
              </a>
              <a href="https://github.com/sethmalefo-del" target="_blank" rel="noreferrer" className="contact-link">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.04c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.32-1.74-1.32-1.74-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.49.99.1-.77.42-1.3.76-1.6-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.18 0 0 1-.32 3.3 1.23.96-.27 1.98-.4 3-.41 1.02.01 2.04.14 3 .41 2.29-1.55 3.29-1.23 3.29-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.47 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.21.69.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
                GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="contact-link">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.67 7.68c-1.15 0-2.07-.93-2.07-2.07 0-1.14.92-2.07 2.07-2.07 1.14 0 2.06.93 2.06 2.07 0 1.14-.92 2.07-2.06 2.07zm1.81 12.77H3.86V9h3.62v11.45zM22.22 0H1.77C.79 0 0 .78 0 1.74v20.52C0 23.22.79 24 1.77 24h20.45c.98 0 1.77-.78 1.77-1.74V1.74C24 .78 23.2 0 22.22 0z"/></svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* ── FOOTER ── */}
      <footer className="footer">
        <p>Designed &amp; Built with <span>♥</span> by Seth Malefo · {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}
export default App
