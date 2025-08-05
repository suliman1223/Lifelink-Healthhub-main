import React from 'react';
import { Link } from 'react-router-dom';
import '../css/BG.css';
import '../css/style.css';

const BloodGroups = () => {
  return (
    <div className="blood-groups-page">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <div className="logo">
                <Link to="/">
                  <img src="/img/logo1.png" alt="LifeLinkHealthHub Logo" />
                </Link>
              </div>
            </div>
            <div className="col-md-8">
              <nav className="main-menu">
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/firstAid">FirstAid</Link></li>
                  <li><Link className="active" to="/bloodGroups">BloodGroups</Link></li>
                  <li><Link to="/free-Medicines">Medicines</Link></li>
                  <li><Link to="/Doctors">Doctors</Link></li>
                  <li><Link to="/SymptomsChecker">SymptomsChecker</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                  <li><Link to="/welfare">Welfare Services</Link></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Page Banner */}
      <section className="page-banner">
        <div className="container">
          <div className="banner-content">
            <h1>Blood Group Information</h1>
            <p>Understanding blood types and compatibility</p>
          </div>
        </div>
      </section>

      {/* Blood Groups Content */}
      <section className="blood-groups-content">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="blood-intro">
                <h2>Blood Type Compatibility</h2>
                <p>Blood types are classified according to the presence or absence of certain antigens on the surface of red blood cells. There are four main blood groups: A, B, AB, and O. Each group can be either RhD positive or RhD negative, which means your blood group can be one of eight types.</p>
                <p>Knowing your blood type is important when receiving blood transfusions or donating blood. Compatibility between donor and recipient blood types ensures safety and effectiveness of transfusions.</p>
              </div>
              
              <div className="compatibility-chart">
                <h3>Blood Type Compatibility Chart</h3>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Blood Type</th>
                        <th>Can Donate To</th>
                        <th>Can Receive From</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>A+</td>
                        <td>A+, AB+</td>
                        <td>A+, A-, O+, O-</td>
                      </tr>
                      <tr>
                        <td>A-</td>
                        <td>A+, A-, AB+, AB-</td>
                        <td>A-, O-</td>
                      </tr>
                      <tr>
                        <td>B+</td>
                        <td>B+, AB+</td>
                        <td>B+, B-, O+, O-</td>
                      </tr>
                      <tr>
                        <td>B-</td>
                        <td>B+, B-, AB+, AB-</td>
                        <td>B-, O-</td>
                      </tr>
                      <tr>
                        <td>AB+</td>
                        <td>AB+</td>
                        <td>All blood types</td>
                      </tr>
                      <tr>
                        <td>AB-</td>
                        <td>AB+, AB-</td>
                        <td>A-, B-, AB-, O-</td>
                      </tr>
                      <tr>
                        <td>O+</td>
                        <td>O+, A+, B+, AB+</td>
                        <td>O+, O-</td>
                      </tr>
                      <tr>
                        <td>O-</td>
                        <td>All blood types</td>
                        <td>O-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="blood-donation-info">
                <div className="row">
                  <div className="col-md-6">
                    <div className="donation-process">
                      <h3>Blood Donation Process</h3>
                      <ol>
                        <li><strong>Registration:</strong> Provide basic information and show a valid ID.</li>
                        <li><strong>Health Screening:</strong> Answer health history questions and receive a quick physical check, including blood pressure, pulse, and temperature.</li>
                        <li><strong>Donation:</strong> The actual blood collection typically takes 8-10 minutes.</li>
                        <li><strong>Post-Donation:</strong> Enjoy refreshments and rest for 10-15 minutes to help your body recover.</li>
                      </ol>
                      <p>The total process takes approximately 45-60 minutes. Whole blood donations can be made every 56 days. Plasma and platelet donations have different intervals.</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="donation-benefits">
                      <h3>Benefits of Blood Donation</h3>
                      <ul>
                        <li>Helps save lives: One donation can potentially save up to three lives.</li>
                        <li>Health screening: Donors get a free health checkup to monitor vital signs.</li>
                        <li>Reduces excess iron in the body, which may lower the risk of heart disease.</li>
                        <li>Stimulates production of new blood cells, improving overall blood health.</li>
                        <li>Burns approximately 650 calories per donation.</li>
                        <li>Fosters community and altruism by helping others in need.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="important-facts mt-4">
                <h3>Important Facts About Blood Donation</h3>
                <ul>
                  <li>Donors must be at least 17 years old (16 with parental consent in some regions), weigh at least 110 pounds, and be in good health.</li>
                  <li>Pregnant women and people with certain medical conditions should consult a doctor before donating.</li>
                  <li>Always disclose any travel history or medications during health screening for safety reasons.</li>
                  <li>Hydrate well and eat a healthy meal before donating blood.</li>
                  <li>Wear comfortable clothing with sleeves that can be rolled up easily.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blood Donation CTA */}
      <section className="blood-donation-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Donate Blood?</h2>
            <p>Your donation could save a life today. Find a blood drive near you, or schedule an appointment at our blood center.</p>
            <div className="cta-buttons">
              <Link to="#" className="btn btn-primary">Find a Blood Drive</Link>
              <Link to="#" className="btn btn-outline-light ms-3">Schedule Appointment</Link>
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
                <img src="/img/logo1.png" alt="LifeLinkHealthHub Logo" className="footer-logo" />
                <p>Committed to providing quality healthcare services to our community.</p>
                <div className="social-links">
                  <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                  <Link to="#"><i className="fab fa-twitter"></i></Link>
                  <Link to="#"><i className="fab fa-instagram"></i></Link>
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
                  Safdar road dab no 1 mansehra<br />
                  +92 3449864285<br />
                  contact@uzaairmalik.dev@gmail.com
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

export default BloodGroups;