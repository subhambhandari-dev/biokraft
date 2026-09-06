import { useState } from "react";

function Arrow() {
  return <span className="arrow">{"->"}</span>;
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section className="contact-page-hero">
        <div className="contact-page-heading">
          <p className="contact-page-eyebrow">Get in touch</p>
          <h1>Contact Us</h1>
          <p>Have a question or need more information? We&apos;re here to help you find<br className="contact-heading-break" /> the right sustainable packaging solution.</p>
        </div>
      </section>

      <section className="contact-page-content">
        <aside className="contact-page-details">
          <h2>Let&apos;s start a conversation</h2>
          <p>Whether you need a bulk quote, product samples or have a question about our materials, reach out directly or use the form and we&apos;ll respond within 24 hours.</p>
          <div className="contact-detail"><strong>Phone</strong><a href="tel:+918939097779">+91 89397549799</a></div>
          <div className="contact-detail"><strong>Email</strong><a href="mailto:temaindustries.ltd@gmail.com">temaindustries.ltd@gmail.com</a></div>
          <div className="contact-detail"><strong>Registered office</strong><span>Tema Industries Pvt. Ltd.<br />Kotdwar, Uttarakhand 500001</span></div>
          <div className="contact-hours"><strong>Business hours</strong><span>Mon - Fri <b>9:00 AM - 6:00 PM</b></span><span>Saturday <b>10:00 AM - 5:00 PM</b></span><span>Sunday <b>Closed</b></span></div>
        </aside>

        <form className="contact-page-form" onSubmit={handleSubmit}>
          <div className="contact-form-row">
            <label>Name *<input required name="name" placeholder="Your name" /></label>
            <label>Company<input name="company" placeholder="Your company" /></label>
          </div>
          <div className="contact-form-row">
            <label>Phone *<input required name="phone" type="tel" placeholder="+91 9876543210" /></label>
            <label>Email *<input required name="email" type="email" placeholder="you@company.com" /></label>
          </div>
          <label>Subject *<input required name="subject" placeholder="Bulk order enquiry, private labelling, general questions..." /></label>
          <label>Message *<textarea required name="message" rows="6" placeholder="Tell us about your volumes, requirements or any other query you have..." /></label>
          <div className="contact-form-footer">
            <small>Your information is kept private and never shared.</small>
            <button className="contact-submit" type="submit">{submitted ? "Message sent" : "Send message"} <Arrow /></button>
          </div>
        </form>
      </section>

      <section className="contact-page-location" aria-label="Registered office location">
        <span className="contact-location-pin" aria-hidden="true" />
        <p>KOTHDWAR, UTTARAKHAND - MAP PREVIEW</p>
      </section>
    </>
  );
}