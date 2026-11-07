// src/main.jsx
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

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
const [isApplicationOpen, setIsApplicationOpen] = useState(false);

// Automatically open the application popup when the website loads
useEffect(() => {
  setIsApplicationOpen(true);
}, []);

const openApplication = () => setIsApplicationOpen(true);
const closeApplication = () => setIsApplicationOpen(false);
  const emailHref    = `mailto:${COMPANY.email}`;
  const phoneHref    = COMPANY.phoneDigits ? `tel:+${COMPANY.phoneDigits}` : '#contact';
  const whatsappHref = COMPANY.phoneDigits
    ? `https://wa.me/${COMPANY.phoneDigits}?text=${encodeURIComponent(
        "Hi! I'd like to know more about your internship programs."
      )}`
    : '#contact';

  // const qrValue = COMPANY.phoneDigits
  //   ? `https://wa.me/${COMPANY.phoneDigits}?text=${encodeURIComponent(
  //       "Hi! I'd like to apply for an internship at Mehtha Software Solutions."
  //     )}`
  //   : '';

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
           <a
  href="#apply"
  onClick={(e) => {
    e.preventDefault();
    closeMenu();
    openApplication();
  }}
>
  Apply
</a>
            <a href="#contact"     onClick={closeMenu}>Contact</a>
    <button
  type="button"
  onClick={() => {
    closeMenu();
    openApplication();
  }}
  className="btn btn-primary nav-apply-mobile"
>
  Apply Now <ArrowRight size={18} />
</button>
          </nav>

      <button
  type="button"
  onClick={openApplication}
  className="btn btn-primary nav-apply"
>
  Apply Now <ArrowRight size={18} />
</button>

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
                  <button
  type="button"
  className="btn btn-primary"
  onClick={openApplication}
>
  Apply Now <ArrowRight size={17} />
</button>
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
    <button
  type="button"
  className="program-apply-btn"
  onClick={openApplication}
>
  Apply Now
  <ArrowRight size={16} />
</button>
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
               <a
  href="#apply"
  onClick={(e) => {
    e.preventDefault();
    openApplication();
  }}
>
  Apply Now
</a>
                <a href="#contact">Contact</a>
              </div>
            </div>

            <div>
              <h4 className="footer-heading">Get in Touch</h4>
              <div className="footer-links">
                <a href={emailHref}>{COMPANY.email}</a>
                <a href={phoneHref}>{COMPANY.phoneDisplay}</a>
                
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            © {new Date().getFullYear()} Mehtha Software Solutions. All rights reserved.
          </div>
        </div>
      </footer>
      {isApplicationOpen && (
  <div
    className="application-modal-overlay"
    onClick={closeApplication}
  >
    <div
      className="application-modal"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        type="button"
        className="application-modal-close"
        onClick={closeApplication}
        aria-label="Close application form"
      >
        <X size={22} />
      </button>

      <div className="application-modal-heading">
        <span className="section-label">Start Your Journey</span>
        <h2>Apply for an Internship</h2>
        <p>
          Complete the registration form to begin your internship journey
          with Mehtha Software Solutions.
        </p>
      </div>

      <ApplicationForm onSuccess={closeApplication} />
    </div>
  </div>
)}


      <FloatingWhatsApp />
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode><App /></React.StrictMode>
);