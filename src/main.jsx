// src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { QRCodeSVG } from 'qrcode.react';
import {
  ArrowRight, Code2, Layers, Database, BarChart3, TestTube2, GitBranch,
  Mail, MapPin, Menu, MessageCircle, ShieldCheck, Sparkles, X
} from 'lucide-react';
import logo from './assets/mehtha-logo.png';
import './styles.css';

/* ------------------------------------------------------------------
   CONFIG — update these values before publishing
   ------------------------------------------------------------------ */
const COMPANY = {
  name: 'Mehtha Software Solutions',
  email: 'mehthacreativecollections@gmail.com',
  phoneDisplay: 'Add your contact number',
  phoneDigits: '',          // e.g. '919876543210' (country code + number, digits only)
  location: 'Bengaluru, Karnataka, India',
  googleFormUrl: '',        // e.g. 'https://forms.gle/xxxxxxxx'
};

const programs = [
  { icon: Code2,     title: 'Web Development',        desc: 'HTML, CSS and modern JavaScript — build responsive, accessible websites from scratch.' },
  { icon: Layers,    title: 'Full Stack Development', desc: 'Connect frontend interfaces to APIs, servers and databases to ship complete applications.' },
  { icon: Database,  title: 'Database & SQL',         desc: 'Design schemas, write efficient queries and understand how real apps store data.' },
  { icon: BarChart3, title: 'Python & Data',          desc: 'Learn programming fundamentals and use Python to clean, analyse and visualise real data.' },
  { icon: TestTube2, title: 'Software Testing',       desc: 'Write test cases, report defects and learn the QA workflow used by real teams.' },
  { icon: GitBranch, title: 'Git & Deployment',       desc: 'Version control, branching, pull requests and shipping projects live.' },
];

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const applyHref   = COMPANY.googleFormUrl || '#apply';
  const applyTarget = COMPANY.googleFormUrl ? '_blank' : undefined;
  const emailHref   = `mailto:${COMPANY.email}`;
  const phoneHref   = COMPANY.phoneDigits ? `tel:+${COMPANY.phoneDigits}` : '#contact';
  const whatsappHref = COMPANY.phoneDigits ? `https://wa.me/${COMPANY.phoneDigits}` : '#contact';

  const goToApply = (e) => {
    if (!COMPANY.googleFormUrl) {
      e.preventDefault();
      document.querySelector('#apply')?.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="header">
        <a className="brand" href="#home" aria-label="Mehtha Software Solutions home">
          <img src={logo} alt="Mehtha Software Solutions logo" />
          <span><strong>MEHTHA</strong><small>SOFTWARE SOLUTIONS</small></span>
        </a>

        <button
          className="menu-toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          <a href="#about"    onClick={closeMenu}>About</a>
          <a href="#programs" onClick={closeMenu}>Programs</a>
          <a href="#approach" onClick={closeMenu}>Our Approach</a>
          <a href="#contact"  onClick={closeMenu}>Contact</a>
          <a className="nav-cta" href={applyHref} target={applyTarget} rel="noreferrer" onClick={goToApply}>
            Apply Now <ArrowRight size={16} />
          </a>
        </nav>
      </header>

      <main>
        {/* ================= HERO ================= */}
        <section className="hero" id="home">
          <div className="hero-shape shape-one" />
          <div className="hero-shape shape-two" />

          <div className="hero-content">
            <div className="eyebrow"><Sparkles size={15} /> LEARN · BUILD · GROW</div>
            <h1>Turn your curiosity into <span>real-world skills.</span></h1>
            <p className="hero-copy">
              Mehtha Software Solutions runs internship programs for students and fresh
              graduates. Work on real projects, learn from developers, and build a portfolio
              you can actually show.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href={applyHref} target={applyTarget} rel="noreferrer" onClick={goToApply}>
                Explore Opportunities <ArrowRight size={17} />
              </a>
              <a className="button button-outline" href="#about">Discover Our Company</a>
            </div>
            <div className="hero-note">
              <ShieldCheck size={17} /> Internship programs for students &amp; fresh graduates
            </div>
          </div>

          <div className="hero-logo-wrap">
            <div className="logo-glow" />
            <img className="hero-logo" src={logo} alt="Mehtha Software Solutions emblem" />
            <div className="floating-label"><span className="status-dot" /> Ideas into implementation</div>
          </div>
        </section>

        {/* ================= TRUST STRIP ================= */}
        <section className="trust-strip">
          <div><strong>Internship programs</strong><span>For students &amp; freshers</span></div>
          <i />
          <div><strong>Live projects</strong><span>Build a real portfolio</span></div>
          <i />
          <div><strong>Mentorship</strong><span>Guidance from developers</span></div>
        </section>

        {/* ================= ABOUT ================= */}
        <section className="section about-section" id="about">
          <div className="section-tag">ABOUT US</div>
          <div className="about-grid">
            <div><h2>Technology learning with a <span>purpose.</span></h2></div>
            <div>
              <p className="section-copy">
                Mehtha Software Solutions helps aspiring technology professionals strengthen
                their skills through structured internship programs, hands-on practice, and
                project-oriented experiences.
              </p>
              <p className="muted">
                Our goal is to make technology approachable and to show learners exactly how
                software ideas become useful digital products — one project at a time.
              </p>
            </div>
          </div>
        </section>

        {/* ================= PROGRAMS ================= */}
        <section className="section programs-section" id="programs">
          <div className="section-heading">
            <div>
              <div className="section-tag">AREAS OF LEARNING</div>
              <h2>Find your starting point.</h2>
            </div>
            <p className="muted">
              Choose a track, get a project brief, and build your skills one deliverable at a time.
            </p>
          </div>

          <div className="program-grid">
            {programs.map(({ icon: Icon, title, desc }, i) => (
              <article className="program-card" key={title}>
                <div className="program-icon"><Icon size={24} /></div>
                <div className="program-number">0{i + 1}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <a href={applyHref} target={applyTarget} rel="noreferrer" onClick={goToApply}>
                  Learn more <ArrowRight size={15} />
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* ================= APPROACH ================= */}
        <section className="approach-section" id="approach">
          <div className="approach-inner">
            <div className="section-tag light-tag">OUR APPROACH</div>
            <h2>Learn the concepts.<br /><span>Put them into practice.</span></h2>
            <div className="steps">
              <div><b>01</b><h3>Learn</h3><p>Build a foundation in the tools and concepts that matter.</p></div>
              <div><b>02</b><h3>Build</h3><p>Apply what you learn through practical exercises and real projects.</p></div>
              <div><b>03</b><h3>Improve</h3><p>Review your work, strengthen your skills, and keep growing.</p></div>
            </div>
          </div>
        </section>

        {/* ================= APPLY ================= */}
        <section className="apply-section" id="apply">
          <div className="apply-copy">
            <div className="section-tag">TAKE THE NEXT STEP</div>
            <h2>Ready to start your <span>internship journey?</span></h2>
            <p className="muted">
              Scan the QR code or use the application button to share your details and
              express your interest. We'll get back to you with the next steps.
            </p>
            <a className="button button-primary" href={applyHref} target={applyTarget} rel="noreferrer" onClick={goToApply}>
              {COMPANY.googleFormUrl ? 'Open Application Form' : 'Application Form Setup Needed'}
              <ArrowRight size={17} />
            </a>
            {!COMPANY.googleFormUrl && (
              <p className="setup-hint">
                The QR code will appear here after you add your Google Form link in{' '}
                <code>src/main.jsx</code>.
              </p>
            )}
          </div>

          <div className="qr-card">
            <div className="qr-frame">
              {COMPANY.googleFormUrl ? (
                <QRCodeSVG value={COMPANY.googleFormUrl} size={190} level="H" includeMargin />
              ) : (
                <div className="qr-placeholder">
                  <Code2 size={42} />
                  <strong>Application QR</strong>
                  <span>Add your Google Form URL to activate</span>
                </div>
              )}
            </div>
            <h3>Scan to apply</h3>
            <p>Open your phone camera and scan the code to access the application form.</p>
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section className="contact-section" id="contact">
          <div>
            <div className="section-tag light-tag">GET IN TOUCH</div>
            <h2>Let's connect.</h2>
            <p>Have a question about our internship programs? Reach out to us.</p>
          </div>

          <div className="contact-links">
            <a href={emailHref}>
              <span className="contact-icon"><Mail /></span>
              <span><small>EMAIL US</small><strong>{COMPANY.email}</strong></span>
              <ArrowRight className="contact-arrow" size={18} />
            </a>

            <a href={phoneHref}>
              <span className="contact-icon"><MessageCircle /></span>
              <span><small>CALL / WHATSAPP</small><strong>{COMPANY.phoneDisplay}</strong></span>
              <ArrowRight className="contact-arrow" size={18} />
            </a>

            <div className="contact-location">
              <MapPin size={19} /><span>{COMPANY.location}</span>
            </div>

            {COMPANY.phoneDigits && (
              <a className="whatsapp-link" href={whatsappHref} target="_blank" rel="noreferrer">
                Message us on WhatsApp <ArrowRight size={15} />
              </a>
            )}
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <a className="footer-brand" href="#home">
          <img src={logo} alt="" />
          <span>Mehtha Software Solutions</span>
        </a>
        <p>Learn. Build. Grow.</p>
        <small>© {new Date().getFullYear()} Mehtha Software Solutions. All rights reserved.</small>
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode><App /></React.StrictMode>
);