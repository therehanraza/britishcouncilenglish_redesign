import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { useState } from 'react';

import PageHero from '../components/ui/PageHero.jsx';
import SectionTitle from '../components/ui/SectionTitle.jsx';
import { contactCards, images } from '../data/siteContent.js';
import { submitContact } from '../services/api.js';

function Contact() {
  const [formStatus, setFormStatus] = useState('idle');
  const [formMessage, setFormMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormStatus('loading');
    setFormMessage('');

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      topic: formData.get('topic'),
      message: formData.get('message'),
    };

    try {
      await submitContact(payload);
      form.reset();
      setFormStatus('success');
      setFormMessage('Thanks. Your message has been sent.');
    } catch (error) {
      setFormStatus('error');
      setFormMessage(error.message);
    }
  };

  return (
    <main className="page">
      <PageHero
        eyebrow="Contact us"
        title="How can we help?"
        copy="Find the right support for English courses, exams, library membership, partnerships, and general enquiries."
        image={images.contact}
        imageAlt="Person using a laptop for support"
      />

      <section className="section-block">
        <SectionTitle title="Contact options" copy="Support is grouped by need so visitors do not have to search through long pages." />
        <div className="contact-grid">
          {contactCards.map((card) => (
            <article className="contact-card" key={card.title}>
              <div className="contact-card__icon" aria-hidden="true">
                <MessageCircle size={22} strokeWidth={2.4} />
              </div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <strong>{card.detail}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="form-section">
        <SectionTitle
          title="Send an enquiry"
          copy="Share your question and the right support team can follow up."
        />
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <label>
              Full name
              <input type="text" name="name" placeholder="Enter your name" required />
            </label>
            <label>
              Email address
              <input type="email" name="email" placeholder="you@example.com" required />
            </label>
          </div>

          <label>
            Topic
            <select name="topic" required defaultValue="">
              <option value="" disabled>
                Select a topic
              </option>
              <option value="English courses">English courses</option>
              <option value="Exams">Exams</option>
              <option value="Library">Library</option>
              <option value="Study in the UK">Study in the UK</option>
              <option value="Events">Events</option>
              <option value="Partnerships">Partnerships</option>
            </select>
          </label>

          <label>
            Message
            <textarea
              name="message"
              placeholder="Tell us how we can help"
              rows="6"
              minLength="10"
              required
            />
          </label>

          <button className="submit-button" type="submit" disabled={formStatus === 'loading'}>
            {formStatus === 'loading' ? 'Sending...' : 'Send enquiry'}
          </button>

          {formMessage && (
            <p className={formStatus === 'error' ? 'form-error' : 'form-success'} role="status">
              {formMessage}
            </p>
          )}
        </form>
      </section>

      <section className="contact-band">
        <div>
          <Phone size={24} aria-hidden="true" />
          <h3>Call us</h3>
          <p>011-69032222, Mon-Sat 9.00 a.m. to 6.00 p.m.</p>
        </div>
        <div>
          <Mail size={24} aria-hidden="true" />
          <h3>Email support</h3>
          <p>Use the enquiry form to reach the right support team.</p>
        </div>
        <div>
          <MapPin size={24} aria-hidden="true" />
          <h3>Visit us</h3>
          <p>Library and office support is available in key Indian cities.</p>
        </div>
      </section>
    </main>
  );
}

export default Contact;
