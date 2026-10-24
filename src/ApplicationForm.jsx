// src/ApplicationForm.jsx
import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { COMPANY } from './config';

const PROGRAM_OPTIONS = [
  'Web Development',
  'Full Stack Development',
  'Database & SQL',
//   'Python & Data',
//   'Software Testing',
//   'Git & Deployment',
];

function ApplicationForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    program: PROGRAM_OPTIONS[0],
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (submitted) setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!COMPANY.phoneDigits) {
      alert('Application form is not configured yet. Please contact us by email.');
      return;
    }

    const text = encodeURIComponent(
      `📋 *New Internship Application*\n\n` +
      `*Name:* ${form.name}\n` +
      `*Email:* ${form.email}\n` +
      `*Phone:* ${form.phone}\n` +
      `*Program:* ${form.program}\n` +
      `*Message:* ${form.message || '—'}`
    );

    window.open(`https://wa.me/${COMPANY.phoneDigits}?text=${text}`, '_blank');
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label className="form-label" htmlFor="name">Full Name *</label>
          <input
            className="form-control" id="name" name="name" type="text" required
            value={form.name} onChange={handleChange} placeholder="Your full name"
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="email">Email *</label>
          <input
            className="form-control" id="email" name="email" type="email" required
            value={form.email} onChange={handleChange} placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label" htmlFor="phone">Phone Number *</label>
          <input
            className="form-control" id="phone" name="phone" type="tel" required
            value={form.phone} onChange={handleChange} placeholder="+91 98765 43210"
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="program">Program of Interest *</label>
          <select
            className="form-control" id="program" name="program" required
            value={form.program} onChange={handleChange}
          >
            {PROGRAM_OPTIONS.map((p) => <option key={p}>{p}</option>)}
          </select>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="message">Why do you want to join? (Optional)</label>
        <textarea
          className="form-control" id="message" name="message" rows="3"
          value={form.message} onChange={handleChange}
          placeholder="Tell us a bit about yourself..."
        />
      </div>

      <button type="submit" className="btn btn-primary w-full">
        Send Application via WhatsApp <Send size={17} />
      </button>

      {submitted && (
        <p className="form-note form-note-success">
          <CheckCircle2 size={16} />
          <span>
            WhatsApp opened in a new tab. Please press <strong>Send</strong> there to deliver
            your application.
          </span>
        </p>
      )}

      {!COMPANY.phoneDigits && (
        <p className="form-note form-note-warning">
          <AlertCircle size={16} />
          <span>
            Application form is not configured. Set <code>phoneDigits</code> in{' '}
            <code>src/config.js</code>.
          </span>
        </p>
      )}
    </form>
  );
}

export default ApplicationForm;