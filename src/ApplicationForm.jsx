
import React, { useState } from 'react';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  LoaderCircle
} from 'lucide-react';

import { COMPANY } from './config';

const SEMESTER_OPTIONS = [
  '1st Sem', '2nd Sem', '3rd Sem', '4th Sem',
  '5th Sem', '6th Sem', '7th Sem', '8th Sem'
];

const PROGRAM_OPTIONS = [
  'Web Development',
  'Full Stack Development'
];

const DURATION_OPTIONS = [
  '1 month', '3 month', '6 month'
];

const INITIAL_FORM = {
  name: '',
  email: '',
  phone: '',
  branch: '',
  college: '',
  address: '',
  semester: '',
  program: '',
  duration: '',
  remark: ''
};

function ApplicationForm({ onSuccess }) {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm(previous => ({
      ...previous,
      [name]: value
    }));

    setStatus('idle');
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !COMPANY.applicationEndpoint ||
      COMPANY.applicationEndpoint.includes('PASTE_YOUR')
    ) {
      setStatus('error');
      setError('Application service is not configured. Please contact us.');
      return;
    }

    setStatus('submitting');
    setError('');

    try {
      const applicationData = new URLSearchParams();

      Object.entries(form).forEach(([key, value]) => {
        applicationData.append(key, value.trim());
      });

      await fetch(COMPANY.applicationEndpoint, {
        method: 'POST',
        mode: 'no-cors',
        body: applicationData
      });

    setForm(INITIAL_FORM);
setStatus('success');

if (onSuccess) {
  onSuccess();
}

    } catch (err) {
      setStatus('error');
      setError('Unable to submit your application. Please try again.');
    }
  };

  return (
    <form className="internship-form" onSubmit={handleSubmit}>

      <div className="form-grid">

        {/* Full Name */}
        <div className="form-group">
          <label className="form-label" htmlFor="name">
            Full Name *
          </label>
          <input
            className="form-control"
            id="name"
            name="name"
            type="text"
            placeholder="Enter your full name"
            autoComplete="name"
            maxLength={100}
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email */}
        <div className="form-group">
          <label className="form-label" htmlFor="email">
            Email Address *
          </label>
          <input
            className="form-control"
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email address"
            autoComplete="email"
            maxLength={150}
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Phone */}
        <div className="form-group">
          <label className="form-label" htmlFor="phone">
            Phone Number *
          </label>
          <input
            className="form-control"
            id="phone"
            name="phone"
            type="tel"
            placeholder="+91 98765 43210"
            autoComplete="tel"
            maxLength={20}
            value={form.phone}
            onChange={handleChange}
            required
          />
        </div>

        {/* Branch */}
        <div className="form-group">
          <label className="form-label" htmlFor="branch">
            Branch *
          </label>
          <input
            className="form-control"
            id="branch"
            name="branch"
            type="text"
            placeholder="Example: Computer Science"
            maxLength={100}
            value={form.branch}
            onChange={handleChange}
            required
          />
        </div>

        {/* College */}
        <div className="form-group">
          <label className="form-label" htmlFor="college">
            College *
          </label>
          <input
            className="form-control"
            id="college"
            name="college"
            type="text"
            placeholder="Enter your college name"
            maxLength={150}
            value={form.college}
            onChange={handleChange}
            required
          />
        </div>

        {/* Semester */}
        <div className="form-group">
          <label className="form-label" htmlFor="semester">
            Current Semester *
          </label>
          <select
            className="form-control"
            id="semester"
            name="semester"
            value={form.semester}
            onChange={handleChange}
            required
          >
            <option value="">Select semester</option>
            {SEMESTER_OPTIONS.map(semester => (
              <option key={semester} value={semester}>
                {semester}
              </option>
            ))}
          </select>
        </div>

        {/* Program */}
        <div className="form-group">
          <label className="form-label" htmlFor="program">
            Applying For *
          </label>
          <select
            className="form-control"
            id="program"
            name="program"
            value={form.program}
            onChange={handleChange}
            required
          >
            <option value="">Select internship</option>
            {PROGRAM_OPTIONS.map(program => (
              <option key={program} value={program}>
                {program}
              </option>
            ))}
          </select>
        </div>

        {/* Duration */}
        <div className="form-group">
          <label className="form-label" htmlFor="duration">
            Internship Duration *
          </label>
          <select
            className="form-control"
            id="duration"
            name="duration"
            value={form.duration}
            onChange={handleChange}
            required
          >
            <option value="">Select duration</option>
            {DURATION_OPTIONS.map(duration => (
              <option key={duration} value={duration}>
                {duration}
              </option>
            ))}
          </select>
        </div>

        {/* Address */}
        <div className="form-group form-full-width">
          <label className="form-label" htmlFor="address">
            Complete Address *
          </label>
          <textarea
            className="form-control"
            id="address"
            name="address"
            rows="2"
            placeholder="Enter your complete address"
            maxLength={500}
            value={form.address}
            onChange={handleChange}
            required
          />
        </div>

        {/* Remark */}
        <div className="form-group form-full-width">
          <label className="form-label" htmlFor="remark">
            Remark (Optional)
          </label>
          <textarea
            className="form-control"
            id="remark"
            name="remark"
            rows="2"
            placeholder="Any additional information..."
            maxLength={1000}
            value={form.remark}
            onChange={handleChange}
          />
        </div>

      </div>

      {/* Submit */}
      <button
        type="submit"
        className="btn btn-primary w-full application-submit"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? (
          <>
            Submitting Application
            <LoaderCircle size={18} className="spin-icon" />
          </>
        ) : (
          <>
            Submit Internship Registration
            <Send size={17} />
          </>
        )}
      </button>

      {status === 'success' && (
        <p className="form-note form-note-success" role="status">
          <CheckCircle2 size={18} />
          Your registration request has been submitted. Thank you for applying!
        </p>
      )}

      {status === 'error' && (
        <p className="form-note form-note-warning" role="alert">
          <AlertCircle size={18} />
          {error}
        </p>
      )}

    </form>
  );
}

export default ApplicationForm;
