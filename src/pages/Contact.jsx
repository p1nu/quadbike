import React from 'react'
import { ContactSection } from './Homepage'
import '../styles/components/contact.css'

const Contact = () => {
  return (
    <div>
      <ContactSection background={"https://picsum.photos/id/11/2500/1667.jpg"}/>
      <ContactForm />
    </div>
  )
}

//Contact Form Section Component
export const ContactForm = () => {
  return (
    <section className="contact-form">
      <div className="container">
        <div className="contact-form__wrapper">
          <h2 className="contact-form__title title">Contact Us</h2>
          <div className="contact-form__content">
            <form action="#" className="contact-form__form">
              <div className="contact-form__group">
                <label htmlFor="name" className="contact-form__label">Name</label>
                <input type="text" id="name" className="contact-form__input" placeholder="Your Name" required />
              </div>
              <div className="contact-form__group">
                <label htmlFor="email" className="contact-form__label">Email</label>
                <input type="email" id="email" className="contact-form__input" placeholder="Your Email" required />
              </div>
              <div className="contact-form__group">
                <label htmlFor="phone" className="contact-form__label">Phone</label>
                <input type="tel" id="phone" className="contact-form__input" placeholder="Your Phone Number" required />
              </div>
              <div className="contact-form__group">
                <label htmlFor="message" className="contact-form__label">Message</label>
                <textarea name="message" id="message" cols="30" rows="10" className="contact-form__textarea" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="contact-form__button">Send</button>
            </form>
            <div className="contact-form__map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019112484399!2d144.9630579153169!3d-37.81410797975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d9f0b1a0b1a!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1633078871234!5m2!1sen!2sau"
                width="600"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Maps"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact