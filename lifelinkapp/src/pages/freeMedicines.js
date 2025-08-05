import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/bootstrap.min.css';
//import '../css/font-awesome.min.css';
import '../css/free_med.css';
import '../css/style.css';
const FreeMedicines = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    // Set the current date as the update date
    setCurrentDate(new Date().toLocaleDateString());
  }, []);

  return (
    <div className="free-medicines-page">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <div className="logo">
                <Link to="/">
                  <img src="img/logo1.png" alt="LifeLinkHealthHub Logo" />
                </Link>
              </div>
            </div>
            <div className="col-md-8">
              <nav className="main-menu">
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/firstAid">FirstAid</Link></li>
                  <li><Link to="/bloodGroups">BloodGroups</Link></li>
                  <li><Link className="active" to="/free-Medicines">Medicines</Link></li>
                  <li><Link to="/Doctors">Doctors</Link></li>
                  <li><Link to="/SymptomsChecker">SymptomsChecker</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                  <li><Link to="/welfare">WelfareServices</Link></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Page Banner */}
      <section className="page-banner" style={{ background: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('img/medicine-bg.jpg') no-repeat center center/cover" }}>
        <div className="container">
          <div className="banner-content">
            <h1>Free Medicines Program</h1>
            <p>Access to essential medications for those in need</p>
          </div>
        </div>
      </section>

      {/* Medicines Content */}
      <section className="medicines-content">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="program-description">
                <h2>About Our Free Medicines Program</h2>
                <p>Our Free Medicines Program is designed to help patients who cannot afford essential medications. We partner with pharmaceutical companies, government agencies, and non-profit organizations to provide life-saving medications to those in financial need.</p>
                
                <div className="eligibility">
                  <h3>Eligibility Requirements</h3>
                  <ul>
                    <li>Must be a resident of our service area</li>
                    <li>Must meet income guidelines (proof of income required)</li>
                    <li>Must have a valid prescription from a licensed physician</li>
                    <li>Must not have prescription drug coverage through insurance</li>
                  </ul>
                </div>
                
                <div className="application-process">
                  <h3>Application Process</h3>
                  <ol>
                    <li>Complete the application form (available at our office or online)</li>
                    <li>Provide proof of income (pay stubs, tax returns, or benefits statements)</li>
                    <li>Submit a valid prescription from your doctor</li>
                    <li>Meet with our program coordinator for review</li>
                    <li>Receive approval notification within 3-5 business days</li>
                  </ol>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="medicines-sidebar">
                <div className="available-medicines">
                  <h3>Commonly Available Medicines</h3>
                  <ul>
                    <li>Antibiotics (Amoxicillin, Ciprofloxacin)</li>
                    <li>Antihypertensives (Lisinopril, Amlodipine)</li>
                    <li>Diabetes medications (Metformin, Insulin)</li>
                    <li>Asthma inhalers (Albuterol)</li>
                    <li>Antidepressants (Fluoxetine, Sertraline)</li>
                    <li>Pain relievers (Ibuprofen, Acetaminophen)</li>
                    <li>Cholesterol medications (Atorvastatin)</li>
                  </ul>
                  <p><em>Availability may vary. Contact us for current stock.</em></p>
                </div>
                
                <div className="donation-info">
                  <h3>Support Our Program</h3>
                  <p>Consider donating to help us provide more free medicines to those in need.</p>
                  <Link to="#" className="btn">Donate Now</Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="medicine-list">
            <h2 className="text-center">Current Medicine Availability</h2>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Medicine Name</th>
                    <th>Dosage</th>
                    <th>Quantity Available</th>
                    <th>Expiration Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Amoxicillin</td>
                    <td>500mg Capsule</td>
                    <td>120</td>
                    <td>12/2023</td>
                  </tr>
                  <tr>
                    <td>Lisinopril</td>
                    <td>10mg Tablet</td>
                    <td>85</td>
                    <td>03/2024</td>
                  </tr>
                  <tr>
                    <td>Metformin</td>
                    <td>850mg Tablet</td>
                    <td>200</td>
                    <td>08/2024</td>
                  </tr>
                  <tr>
                    <td>Atorvastatin</td>
                    <td>20mg Tablet</td>
                    <td>65</td>
                    <td>05/2024</td>
                  </tr>
                  <tr>
                    <td>Albuterol Inhaler</td>
                    <td>90mcg/actuation</td>
                    <td>30</td>
                    <td>10/2023</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-center"><em>Last updated: <span id="update-date">{currentDate}</span></em></p>
          </div>

          {/* Patient Testimonials */}
          <div className="testimonials">
            <h2 className="text-center">Patient Testimonials</h2>
            <div className="testimonial-item">
              <p>"Thanks to the Free Medicines Program, I was able to get my diabetes medication without worrying about the cost. It has changed my life!"</p>
              <p><strong>- Sarah J.</strong></p>
            </div>
            <div className="testimonial-item">
              <p>"I can't express how grateful I am for this program. The staff was so helpful, and I received my medications quickly!"</p>
              <p><strong>- John D.</strong></p>
            </div>
            <div className="testimonial-item">
              <p>"This program is a lifesaver for people like me who struggle to afford necessary medications. Thank you for your support!"</p>
              <p><strong>- Emily R.</strong></p>
            </div>
          </div>

          {/* Frequently Asked Questions */}
          <div className="faq">
            <h2 className="text-center">Frequently Asked Questions (FAQs)</h2>
            <div className="faq-item">
              <h4>1. Who is eligible for the Free Medicines Program?</h4>
              <p>Eligibility is based on residency, income guidelines, and the need for a valid prescription. Please refer to the eligibility requirements above for more details.</p>
            </div>
            <div className="faq-item">
              <h4>2. How can I apply for the program?</h4>
              <p>You can apply by completing the application form available at our office or online. Make sure to provide all required documentation.</p>
            </div>
            <div className="faq-item">
              <h4>3. What types of medicines are available?</h4>
              <p>We offer a variety of essential medications, including antibiotics, antihypertensives, diabetes medications, and more. Please check the current availability section for details.</p>
            </div>
            <div className="faq-item">
              <h4>4. How often is the medicine availability updated?</h4>
              <p>The availability of medicines is updated regularly. Please check back often or contact us for the latest information.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="footer-widget">
                <img src="img/logo1.png" alt="LifeLinkHealthHub Logo" className="footer-logo" />
                <p>Committed to providing quality healthcare services to our community.</p>
                <div className="social-links">
                  <Link to="#"><i className="fa fa-facebook"></i></Link>
                  <Link to="#"><i className="fa fa-twitter"></i></Link>
                  <Link to="#"><i className="fa fa-instagram"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-widget">
                <h3>Departments</h3>
                <ul>
                  <li><Link to="#">Eye Care</Link></li>
                  <li><Link to="#">Skin Care</Link></li>
                  <li><Link to="#">Pathology</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-widget">
                <h3>Contact Us</h3>
                <p>
                  200, D-block, Green lane USA<br />
                  +10 367 467 8934<br />
                  contact@lifelinkhealthhub.com
                </p>
              </div>
            </div>
          </div>
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} LifeLinkHealthHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FreeMedicines;