import React from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css';

const Welfare = () => {
  return (
    <div className="welfare-page">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-8 col-md-4">
              <div className="logo">
                <Link to="/">
                  <img src="/img/logo1.png" alt="LifeLinkHealthHub Logo" loading="lazy" />
                  <Link className="navbar-brand" to="/">
                    <i className="fas fa-heartbeat me-2"></i>LifeLinkHealthHub
                  </Link>
                </Link>
              </div>
            </div>
            <div className="col-4 d-md-none text-end position-relative">
              <button id="menu-toggle" aria-label="Toggle menu">
                <i className="fas fa-bars"></i>
              </button>
            </div>
            
            <div className="col-md-8 d-none d-md-block">
              <nav className="main-menu">
                <ul id="main-menu-list">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/firstAid">FirstAid</Link></li>
                  <li><Link to="/bloodGroups">BloodGroups</Link></li>
                  <li><Link to="/free-Medicines">Medicines</Link></li>
                  <li><Link to="/Doctors">Doctors</Link></li>
                  <li><Link to="/SymptomsChecker">SymptomsChecker</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                  <li><Link className="active" to="/welfare">WelfareServices</Link></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Welfare Banner */}
      <section className="welfare-banner">
        <div className="container">
          <div className="banner-content animate__animated animate__fadeIn">
            <h1>Community Welfare Services</h1>
            <p>Find free food, shelter and essential resources for those in need</p>
            <div className="mt-4">
              <Link to="#food-resources" className="btn btn-primary me-3"><i className="fas fa-utensils me-2"></i>Find Food</Link>
              <Link to="#shelter-services" className="btn btn-outline-light"><i className="fas fa-home me-2"></i>Find Shelter</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Welfare Services */}
      <section className="welfare-services">
        <div className="container">
          {/* Food Resources */}
          <div className="row mb-5" id="food-resources">
            <div className="col-12">
              <h2 className="section-title animate__animated animate__fadeIn">Food Assistance</h2>
            </div>
            <div className="col-lg-6 animate__animated animate__fadeInLeft">
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-utensils"></i>
                </div>
                <h3>Community Kitchens</h3>
                <div className="service-list">
                  <div className="service-item">
                    <h4>Hope Community Kitchen</h4>
                    <p><i className="fas fa-map-marker-alt"></i> 123 Main Street, Abbottabad</p>
                    <p><i className="fas fa-clock"></i> Open Daily: 12PM - 3PM</p>
                    <p><i className="fas fa-info-circle"></i> Provides hot meals for individuals and families</p>
                    <div className="mt-3">
                      <Link to="tel:+923441234567" className="btn btn-primary me-2"><i className="fas fa-phone me-2"></i>Call Now</Link>
                      <Link to="https://maps.google.com?q=123+Main+Street+Abbottabad" target="_blank" className="btn btn-outline-primary"><i className="fas fa-map-marked-alt me-2"></i>Get Directions</Link>
                    </div>
                  </div>
                  <div className="service-item">
                    <h4>Food Bank Distribution</h4>
                    <p><i className="fas fa-map-marker-alt"></i> Central Abbottabad Market</p>
                    <p><i className="fas fa-clock"></i> Wednesdays: 9AM - 12PM</p>
                    <p><i className="fas fa-info-circle"></i> Dry goods and staple items for families</p>
                    <div className="mt-3">
                      <Link to="tel:+923441234568" className="btn btn-primary me-2"><i className="fas fa-phone me-2"></i>Call Now</Link>
                      <Link to="https://maps.google.com?q=Central+Abbottabad+Market" target="_blank" className="btn btn-outline-primary"><i className="fas fa-map-marked-alt me-2"></i>Get Directions</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 animate__animated animate__fadeInRight">
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-apple-alt"></i>
                </div>
                <h3>Food Pantries</h3>
                <div className="service-list">
                  <div className="service-item">
                    <h4>Blessings Food Pantry</h4>
                    <p><i className="fas fa-map-marker-alt"></i> Near City Hospital</p>
                    <p><i className="fas fa-clock"></i> Mon-Fri: 10AM - 4PM</p>
                    <p><i className="fas fa-info-circle"></i> Non-perishable food items, no ID required</p>
                    <div className="mt-3">
                      <Link to="tel:+923441234569" className="btn btn-primary me-2"><i className="fas fa-phone me-2"></i>Call Now</Link>
                      <Link to="https://maps.google.com?q=Near+City+Hospital+Abbottabad" target="_blank" className="btn btn-outline-primary"><i className="fas fa-map-marked-alt me-2"></i>Get Directions</Link>
                    </div>
                  </div>
                  <div className="service-item">
                    <h4>Mobile Food Truck</h4>
                    <p><i className="fas fa-map-marker-alt"></i> Various locations weekly</p>
                    <p><i className="fas fa-clock"></i> Schedule varies - call for details</p>
                    <p><i className="fas fa-info-circle"></i> Fresh produce and ready-to-eat meals</p>
                    <div className="mt-3">
                      <Link to="tel:+923441234570" className="btn btn-primary"><i className="fas fa-phone me-2"></i>Call for Schedule</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Shelter Services */}
          <div className="row mb-5" id="shelter-services">
            <div className="col-12">
              <h2 className="section-title animate__animated animate__fadeIn">Shelter Services</h2>
            </div>
            <div className="col-lg-6 animate__animated animate__fadeInLeft">
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-home"></i>
                </div>
                <h3>Emergency Shelter</h3>
                <div className="service-list">
                  <div className="service-item">
                    <h4>Safe Haven Shelter</h4>
                    <p><i className="fas fa-map-marker-alt"></i> 456 Shelter Road, Abbottabad</p>
                    <p><i className="fas fa-clock"></i> Open 24/7</p>
                    <p><i className="fas fa-info-circle"></i> Temporary housing for individuals and families</p>
                    <div className="mt-3">
                      <Link to="tel:+923445678901" className="btn btn-primary me-2"><i className="fas fa-phone me-2"></i>Call Now</Link>
                      <Link to="https://maps.google.com?q=456+Shelter+Road+Abbottabad" target="_blank" className="btn btn-outline-primary"><i className="fas fa-map-marked-alt me-2"></i>Get Directions</Link>
                    </div>
                  </div>
                  <div className="service-item">
                    <h4>Winter Emergency Shelter</h4>
                    <p><i className="fas fa-map-marker-alt"></i> Community Center, Downtown</p>
                    <p><i className="fas fa-clock"></i> Nov-Mar: 7PM - 7AM</p>
                    <p><i className="fas fa-info-circle"></i> Overnight shelter during cold months</p>
                    <div className="mt-3">
                      <Link to="tel:+923445678902" className="btn btn-primary"><i className="fas fa-phone me-2"></i>Call for Availability</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 animate__animated animate__fadeInRight">
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-female"></i>
                </div>
                <h3>Specialized Shelter</h3>
                <div className="service-list">
                  <div className="service-item">
                    <h4>Women's Safe House</h4>
                    <p><i className="fas fa-map-marker-alt"></i> Confidential Location</p>
                    <p><i className="fas fa-clock"></i> 24/7 Security</p>
                    <p><i className="fas fa-info-circle"></i> For women and children escaping domestic violence</p>
                    <div className="mt-3">
                      <Link to="tel:+923449864285" className="btn btn-primary"><i className="fas fa-phone me-2"></i>Confidential Hotline</Link>
                    </div>
                  </div>
                  <div className="service-item">
                    <h4>Youth Shelter</h4>
                    <p><i className="fas fa-map-marker-alt"></i> 789 Hope Avenue</p>
                    <p><i className="fas fa-clock"></i> Open 24/7</p>
                    <p><i className="fas fa-info-circle"></i> For homeless youth ages 12-24</p>
                    <div className="mt-3">
                      <Link to="tel:+923445678903" className="btn btn-primary me-2"><i className="fas fa-phone me-2"></i>Call Now</Link>
                      <Link to="https://maps.google.com?q=789+Hope+Avenue+Abbottabad" target="_blank" className="btn btn-outline-primary"><i className="fas fa-map-marked-alt me-2"></i>Get Directions</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Emergency Contact Banner */}
          <div className="emergency-banner animate__animated animate__fadeIn">
            <div className="container text-center">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <h3>Need Immediate Assistance?</h3>
                  <p>Our 24/7 helpline can connect you with emergency services, food, and shelter right now.</p>
                  <Link to="tel:+923449864285" className="btn btn-light btn-lg"><i className="fas fa-phone me-2"></i>Call Emergency Helpline</Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional Resources */}
          <div className="row mt-5">
            <div className="col-12">
              <h2 className="section-title animate__animated animate__fadeIn">Additional Support Services</h2>
            </div>
            
            <div className="col-md-4 animate__animated animate__fadeInUp">
              <div className="resource-card">
                <i className="fas fa-tshirt"></i>
                <h4>Clothing Donations</h4>
                <p>Free clothing for all ages and seasons</p>
                <div className="mt-3">
                  <Link to="#" className="btn btn-outline-primary">Find Locations</Link>
                </div>
              </div>
            </div>
            
            <div className="col-md-4 animate__animated animate__fadeInUp animate__delay-1s">
              <div className="resource-card">
                <i className="fas fa-book"></i>
                <h4>Education Support</h4>
                <p>Free tutoring, school supplies and scholarships</p>
                <div className="mt-3">
                  <Link to="#" className="btn btn-outline-primary">Learn More</Link>
                </div>
              </div>
            </div>
            
            <div className="col-md-4 animate__animated animate__fadeInUp animate__delay-2s">
              <div className="resource-card">
                <i className="fas fa-hand-holding-heart"></i>
                <h4>Counseling Services</h4>
                <p>Professional mental health and crisis support</p>
                <div className="mt-3">
                  <Link to="#" className="btn btn-outline-primary">Get Help</Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Resource Map */}
          <div className="row mt-5 animate__animated animate__fadeIn">
            <div className="col-12">
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-map-marked-alt"></i>
                </div>
                <h3>Resource Map</h3>
                <p>Use our interactive map to find all welfare services near your current location</p>
                <div className="mt-4">
                  <Link to="#" className="btn btn-primary"><i className="fas fa-map me-2"></i>View Resource Map</Link>
                </div>
                <div className="mt-3" id="resourceMap" style={{ height: '300px', background: '#f5f5f5', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <p className="text-muted">Interactive map would appear here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-5">
              <img src="/img/logo1.png" alt="LifeLinkHealthHub Logo" className="footer-logo" loading="lazy" />
              <div className="footer-about">
                <p>LifeLinkHealthHub provides comprehensive welfare services and resources to support our community members in need.</p>
                <div className="social-links">
                  <Link to="https://www.facebook.com/LifeLinkHealthHub" target="_blank" aria-label="Facebook"><i className="fab fa-facebook-f"></i></Link>
                  <Link to="https://twitter.com/LifeLinkHealth" target="_blank" aria-label="Twitter"><i className="fab fa-twitter"></i></Link>
                  <Link to="https://instagram.com/LifeLinkHealthHub" target="_blank" aria-label="Instagram"><i className="fab fa-instagram"></i></Link>
                  <Link to="https://youtube.com/c/LifeLinkHealthHub" target="_blank" aria-label="YouTube"><i className="fab fa-youtube"></i></Link>
                </div>
              </div>
            </div>
            
            <div className="col-lg-2 col-md-6 mb-5">
              <div className="footer-links">
                <h5>Quick Links</h5>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/firstAid">First Aid</Link></li>
                  <li><Link to="/bloodGroups">Blood Groups</Link></li>
                  <li><Link to="/free-Medicines">Medicines</Link></li>
                  <li><Link to="/Doctors">Doctors</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="col-lg-2 col-md-6 mb-5">
              <div className="footer-links">
                <h5>Welfare Services</h5>
                <ul>
                  <li><Link to="/welfare#food-resources">Food Assistance</Link></li>
                  <li><Link to="/welfare#shelter-services">Shelter Services</Link></li>
                  <li><Link to="#">Clothing Donations</Link></li>
                  <li><Link to="#">Counseling</Link></li>
                  <li><Link to="#">Job Training</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6 mb-5">
              <div className="footer-contact">
                <h5>Contact Us</h5>
                <p><i className="fas fa-map-marker-alt"></i> Safdar Road Dab no 1, Mansehra, Pakistan</p>
                <p><i className="fas fa-phone"></i> <Link to="tel:+923449864285">+92 344 9864285</Link></p>
                <p><i className="fas fa-envelope"></i> <Link to="mailto:contact@lifelinkhealthhub.com">contact@lifelinkhealthhub.com</Link></p>
                <p><i className="fas fa-clock"></i> 24/7 Emergency Support Available</p>
              </div>
            </div>
          </div>
          
          <div className="copyright">
            &copy; {new Date().getFullYear()} LifeLinkHealthHub. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <Link to="#" className="back-to-top" aria-label="Back to top"><i className="fas fa-arrow-up"></i></Link>
    </div>
  );
};

export default Welfare;