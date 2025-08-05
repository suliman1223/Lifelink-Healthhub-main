import React from 'react';
import { Link } from 'react-router-dom';
import '../css/contact.css';
import '../css/style.css';
const Contact = () => {
  return (
    <div className="contact-page">
      {/* Navigation */}
      <nav className="main-menu">
        <Link className="navbar-brand" to="/">
          <i className="fas fa-heartbeat me-2"></i>LifeLinkHealthHub
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link className="active" to="/firstAid">FirstAid</Link></li>
          <li><Link to="/bloodGroups">BloodGroups</Link></li>
          <li><Link to="/free-Medicines">Medicines</Link></li>
          <li><Link to="/Doctors">Doctors</Link></li>
          <li><Link to="/SymptomsChecker">SymptomsChecker</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/welfare">WelfareServices</Link></li>
        </ul>
      </nav>

      {/* Contact Section */}
      <section className="contact-section py-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-8 mx-auto text-center">
              <h2 className="section-title">Contact Us</h2>
              <p className="section-subtitle">We're here to help and answer any questions you may have</p>
            </div>
          </div>

          <div className="row g-4">
            {/* Contact Information */}
            <div className="col-md-4">
              <div className="contact-card">
                <div className="contact-info text-center">
                  <div className="contact-icon mx-auto">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <h5>Our Location</h5>
                  <p className="text-muted">COMSATS University Islamabad, Abbottabad Campus</p>
                </div>

                <div className="contact-info text-center">
                  <div className="contact-icon mx-auto">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <h5>Phone Number</h5>
                  <p className="text-muted">+92 123 4567890</p>
                </div>

                <div className="contact-info text-center">
                  <div className="contact-icon mx-auto">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <h5>Email Address</h5>
                  <p className="text-muted">info@lifelinkhealthhub.com</p>
                </div>

                <div className="text-center">
                  <h5 className="mt-4">Follow Us</h5>
                  <div className="social-links justify-content-center">
                    <Link to="#" className="social-link"><i className="fab fa-facebook-f"></i></Link>
                    <Link to="#" className="social-link"><i className="fab fa-twitter"></i></Link>
                    <Link to="#" className="social-link"><i className="fab fa-instagram"></i></Link>
                    <Link to="#" className="social-link"><i className="fab fa-linkedin-in"></i></Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-md-5">
              <div className="contact-card">
                <h4 className="mb-4">Send Us a Message</h4>
                <form id="contactForm">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="name" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input type="email" className="form-control" id="email" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input type="text" className="form-control" id="subject" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" rows="5" required></textarea>
                  </div>
                  <div id="formStatus"></div>
                  <button type="submit" className="btn btn-primary" id="submitBtn">Send Message</button>
                </form>
              </div>
            </div>

            {/* Google Map */}
            <div className="col-md-3">
              <div className="contact-card">
                <h4 className="mb-4">Our Location</h4>
                <div className="map-container" id="map">
                  {/* Google Map will be loaded here */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;