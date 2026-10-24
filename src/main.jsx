// src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { QRCodeSVG } from 'qrcode.react';
import {
  ArrowRight, Code2, Layers, Database, BarChart3, TestTube2, GitBranch,
  Mail, MapPin, Menu, MessageCircle, Check, Sparkles, X,
  Award, BadgeCheck,
} from 'lucide-react';
import logo from './assets/mehtha-logo.png';
import './styles.css';
import { COMPANY } from './config';
import ApplicationForm from './ApplicationForm';
import FloatingWhatsApp from './FloatingWhatsApp';

const programs = [
  { icon: Code2,     title: 'Web Development',        desc: 'HTML, CSS and modern JavaScript — build responsive, accessible websites from scratch.' },
  { icon: Layers,    title: 'Full Stack Development', desc: 'Connect frontend interfaces to APIs, servers and databases to ship complete applications.' },
  { icon: Database,  title: 'Database & SQL',         desc: 'Design schemas, write efficient queries and understand how real apps store data.' },
  // { icon: BarChart3, title: 'Python & Data',          desc: 'Learn programming fundamentals and use Python to clean, analyse and visualise real data.' },
  // { icon: TestTube2, title: 'Software Testing',       desc: 'Write test cases, report defects and learn the QA workflow used by real teams.' },
  // { icon: GitBranch, title: 'Git & Deployment',       desc: 'Version control, branching, pull requests and shipping projects live.' },
];

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const emailHref    = `mailto:${COMPANY.email}`;
  const phoneHref    = COMPANY.phoneDigits ? `tel:+${COMPANY.phoneDigits}` : '#contact';
  const whatsappHref = COMPANY.phoneDigits
    ? `https://wa.me/${COMPANY.phoneDigits}?text=${encodeURIComponent(
        "Hi! I'd like to know more about your internship programs."
      )}`
    : '#contact';

  const qrValue = COMPANY.phoneDigits
    ? `https://wa.me/${COMPANY.phoneDigits}?text=${encodeURIComponent(
        "Hi! I'd like to apply for an internship at Mehtha Software Solutions."
      )}`
    : '';

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header className="navbar">
        <div className="container navbar-inner">
          <a className="brand" href="#home" aria-label="Mehtha Software Solutions home">
            <img className="brand-logo" src={logo} alt="Mehtha logo" />
            <span>
              <span className="brand-name">Mehtha Software Solutions</span>
              <span className="brand-subtitle">LEARN · BUILD · GROW</span>
            </span>
          </a>

          <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
            <a href="#about"       onClick={closeMenu}>About</a>
            <a href="#internships" onClick={closeMenu}>Internships</a>
            <a href="#apply"       onClick={closeMenu}>Apply</a>
            <a href="#contact"     onClick={closeMenu}>Contact</a>
            <a className="btn btn-primary nav-apply-mobile" href="#apply" onClick={closeMenu}>
              Apply Now
            </a>
          </nav>

          <a className="btn btn-primary nav-apply" href="#apply">
            Apply Now <ArrowRight size={16} />
          </a>

          <button
            className="menu-toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main>
        {/* ================= HERO ================= */}
        <section className="hero" id="home">
          <div className="container">
            <div className="hero-content">
              <div className="hero-copy">
                <span className="hero-badge">
                  <Sparkles size={15} /> LEARN · BUILD · GROW
                </span>
                <span className="hero-badge iso-badge">
                  <BadgeCheck size={15} /> ISO Certified Internships
                </span>

                <h1 className="hero-title">
                  Turn your curiosity into <span>real-world skills.</span>
                </h1>
                <p className="hero-description">
                  Mehtha Software Solutions runs internship programs for students and fresh
                  graduates. Work on real projects, learn from developers, and build a portfolio
                  you can actually show. Every intern receives an{' '}
                  <strong>ISO-certified completion certificate</strong>.
                </p>
                <div className="hero-actions">
                  <a className="btn btn-primary" href="#apply">
                    Explore Internships <ArrowRight size={17} />
                  </a>
                  <a className="btn btn-light" href="#about">Learn More</a>
                </div>
              </div>

              <div className="hero-visual">
                <img className="hero-logo" src={logo} alt="Mehtha Software Solutions emblem" />
              </div>
            </div>
          </div>
        </section>

        {/* ================= TRUST STRIP ================= */}
        <section className="trust-strip">
          <div className="container trust-strip-inner">
            <div className="trust-item">
              <Award size={22} />
              <div>
                <strong>ISO Certified</strong>
                <span>Certificate on completion</span>
              </div>
            </div>
            <div className="trust-item">
              <Code2 size={22} />
              <div>
                <strong>Live Projects</strong>
                <span>Real portfolio work</span>
              </div>
            </div>
            <div className="trust-item">
              <Check size={22} />
              <div>
                <strong>Mentorship</strong>
                <span>Guided by developers</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= INTERNSHIPS ================= */}
        <section className="section internship-section" id="internships">
          <div className="container">
            <div className="section-header">
              <span className="section-label">Programs</span>
              <h2 className="section-title">Find your starting point.</h2>
              <p className="section-description">
                Choose a track, get a project brief, and build your skills one deliverable at a time.
              </p>
            </div>

            <div className="card-grid">
              {programs.map(({ icon: Icon, title, desc }) => (
                <article className="card internship-card" key={title}>
                  <div className="card-icon"><Icon size={24} /></div>
                  <h3 className="card-title">{title}</h3>
                  <p className="card-description">{desc}</p>
                  <a className="card-link" href="#apply">
                    Learn more <ArrowRight size={15} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section className="section about-section" id="about">
          <div className="container">
            <div className="about-content">
              <div className="about-text">
                <span className="section-label">About Us</span>
                <h2 className="section-title">Technology learning with a purpose.</h2>
                <p>
                  Mehtha Software Solutions helps aspiring technology professionals strengthen
                  their skills through structured internship programs, hands-on practice, and
                  project-oriented experiences.
                </p>
                <p>
                  Our goal is to make technology approachable and to show learners exactly how
                  software ideas become useful digital products — one project at a time.
                </p>
              </div>

              <ul className="feature-list">
                <li className="feature-item">
                  <span className="feature-check"><Check size={14} /></span>
                  ISO-certified certificate on successful completion
                </li>
                <li className="feature-item">
                  <span className="feature-check"><Check size={14} /></span>
                  Real project experience
                </li>
                <li className="feature-item">
                  <span className="feature-check"><Check size={14} /></span>
                  Mentorship from working developers
                </li>
                <li className="feature-item">
                  <span className="feature-check"><Check size={14} /></span>
                  Portfolio-ready outcomes
                </li>
                <li className="feature-item">
                  <span className="feature-check"><Check size={14} /></span>
                  Flexible learning tracks
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ================= APPLY (form + QR) ================= */}
        <section className="section application-section" id="apply">
          <div className="container">
            <div className="section-header">
              <span className="section-label">Take the Next Step</span>
              <h2 className="section-title">Ready to start your internship journey?</h2>
              <p className="section-description">
                Fill in the form below and we'll receive your application directly on WhatsApp.
                On successful completion, you'll receive an{' '}
                <strong>ISO-certified certificate</strong>.
              </p>
            </div>

            <div className="application-content">
              <div className="application-panel">
                <h3 className="application-title">Apply for an Internship</h3>
                <p className="application-description">
                  Your details go straight to our WhatsApp — no sign-up required.
                </p>
                <ApplicationForm />
              </div>

              <div className="application-panel">
                <div className="qr-wrapper">
                  {qrValue ? (
                    <QRCodeSVG value={qrValue} size={180} level="H" className="qr-code" />
                  ) : (
                    <Code2 size={42} />
                  )}
                </div>
                <h3 className="application-title">Scan to Chat</h3>
                <p className="application-description">
                  Open your phone camera and scan the code to start a WhatsApp conversation with us.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section className="section contact-section" id="contact">
          <div className="container">
            <div className="section-header">
              <span className="section-label">Get in Touch</span>
              <h2 className="section-title">Let's connect.</h2>
              <p className="section-description">
                Have a question about our internship programs? Reach out to us.
              </p>
            </div>

            <div className="contact-grid">
              <div className="contact-card">
                <div className="card-icon"><Mail size={22} /></div>
                <h3 className="card-title">Email Us</h3>
                <a href={emailHref}>{COMPANY.email}</a>
              </div>

              <div className="contact-card">
                <div className="card-icon"><MessageCircle size={22} /></div>
                <h3 className="card-title">Call / WhatsApp</h3>
                <a href={phoneHref}>{COMPANY.phoneDisplay}</a>
              </div>

              <div className="contact-card">
                <div className="card-icon"><MapPin size={22} /></div>
                <h3 className="card-title">Location</h3>
                <p className="text-muted">{COMPANY.location}</p>
              </div>
            </div>

            {COMPANY.phoneDigits && (
              <div className="text-center mt-3">
                <a className="btn btn-primary" href={whatsappHref} target="_blank" rel="noreferrer">
                  Message us on WhatsApp <ArrowRight size={16} />
                </a>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div>
              <div className="brand">
                <img className="brand-logo" src={logo} alt="" />
                <span>
                  <span className="brand-name">Mehtha Software Solutions</span>
                  <span className="brand-subtitle">LEARN · BUILD · GROW</span>
                </span>
              </div>
              <p className="footer-description">
                Structured internship programs that help students turn curiosity into real-world
                software skills.
              </p>
              <p className="footer-iso">
                <BadgeCheck size={16} /> ISO Certified · Certificate provided on completion
              </p>
            </div>

            <div>
              <h4 className="footer-heading">Quick Links</h4>
              <div className="footer-links">
                <a href="#about">About</a>
                <a href="#internships">Internships</a>
                <a href="#apply">Apply</a>
                <a href="#contact">Contact</a>
              </div>
            </div>

            <div>
              <h4 className="footer-heading">Get in Touch</h4>
              <div className="footer-links">
                <a href={emailHref}>{COMPANY.email}</a>
                <a href={phoneHref}>{COMPANY.phoneDisplay}</a>
                <a href={whatsappHref} target="_blank" rel="noreferrer">WhatsApp</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            © {new Date().getFullYear()} Mehtha Software Solutions. All rights reserved.
          </div>
        </div>
      </footer>

      <FloatingWhatsApp />
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode><App /></React.StrictMode>
);