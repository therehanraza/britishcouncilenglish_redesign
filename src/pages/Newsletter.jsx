import { useState } from 'react';

import PageHero from '../components/ui/PageHero.jsx';
import SectionTitle from '../components/ui/SectionTitle.jsx';
import { images, newsletterOptions } from '../data/siteContent.js';
import { submitNewsletter } from '../services/api.js';

function Newsletter() {
  const [formStatus, setFormStatus] = useState('idle');
  const [formMessage, setFormMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormStatus('loading');
    setFormMessage('');

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      interests: formData.getAll('topics'),
      frequency: formData.get('frequency') || 'monthly',
    };

    try {
      await submitNewsletter(payload);
      form.reset();
      setFormStatus('success');
      setFormMessage('Thanks. Your newsletter preferences have been saved.');
    } catch (error) {
      setFormStatus('error');
      setFormMessage(error.message);
    }
  };

  return (
    <main className="page">
      <PageHero
        eyebrow="Newsletters"
        title="Sign up for newsletters"
        copy="Choose the updates you want to receive about courses, exams, study opportunities, library services, events, and professional development."
        image={images.newsletter}
        imageAlt="Workspace with newsletter planning"
      />

      <section className="form-section">
        <SectionTitle
          title="Create your update preferences"
          copy="Select the topics you care about and receive the most relevant updates."
        />

        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <label>
              First name
              <input type="text" name="firstName" placeholder="Enter your first name" required />
            </label>
            <label>
              Last name
              <input type="text" name="lastName" placeholder="Enter your last name" required />
            </label>
          </div>

          <label>
            Email address
            <input type="email" name="email" placeholder="you@example.com" required />
          </label>

          <fieldset>
            <legend>What would you like to hear about?</legend>
            <div className="checkbox-grid">
              {newsletterOptions.map((option) => (
                <label className="checkbox-card" key={option}>
                  <input type="checkbox" name="topics" value={option} />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <label>
            How often would you like to hear from us?
            <select name="frequency" defaultValue="monthly">
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="occasionally">Occasionally</option>
            </select>
          </label>

          <label className="consent-row">
            <input type="checkbox" name="consent" required />
            <span>I agree to receive selected email updates.</span>
          </label>

          <button className="submit-button" type="submit" disabled={formStatus === 'loading'}>
            {formStatus === 'loading' ? 'Saving...' : 'Sign up'}
          </button>

          {formMessage && (
            <p className={formStatus === 'error' ? 'form-error' : 'form-success'} role="status">
              {formMessage}
            </p>
          )}
        </form>
      </section>
    </main>
  );
}

export default Newsletter;
