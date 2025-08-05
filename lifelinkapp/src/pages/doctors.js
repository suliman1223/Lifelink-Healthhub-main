import React from 'react';
import { Link } from 'react-router-dom';
//import '../css/doc.css';
import '../css/style.css';

const Doctors = () => {
  return (
    <div className="doctors-page">
      {/* Navigation */}
      <nav className="main-menu">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/firstAid">FirstAid</Link></li>
          <li><Link to="/bloodGroups">BloodGroups</Link></li>
          <li><Link to="/free-Medicines">Medicines</Link></li>
          <li><Link className="active" to="/Doctors">Doctors</Link></li>
          <li><Link to="/SymptomsChecker">SymptomsChecker</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/welfare">WelfareServices</Link></li>
        </ul>
      </nav>

      {/* Doctors Main Section */}
      <section className="doctors-section py-5">
        <div className="container">
          <div className="row mb-4">
            <div className="col-md-8 mx-auto text-center">
              <h2 className="section-title">Find Qualified Doctors</h2>
              <p className="section-subtitle">Book appointments with certified medical professionals</p>
            </div>
          </div>

          {/* Search Filters */}
          <div className="row mb-5">
            <div className="col-md-10 mx-auto">
              <div className="card filter-card">
                <div className="card-body">
                  <form id="doctorSearchForm">
                    <div className="row g-3">
                      <div className="col-md-4">
                        <label className="form-label">Specialization</label>
                        <select className="form-select" id="specialization">
                          <option value="">All Specialties</option>
                          <option value="Cardiology">Cardiology</option>
                          <option value="Dermatology">Dermatology</option>
                          <option value="Pediatrics">Pediatrics</option>
                          <option value="Neurology">Neurology</option>
                        </select>
                      </div>
                      <div className="col-md-4">
                        <label className="form-label">Location</label>
                        <select className="form-select" id="location">
                          <option value="">All Locations</option>
                          <option value="Islamabad">Islamabad</option>
                          <option value="Karachi">Karachi</option>
                          <option value="Lahore">Lahore</option>
                        </select>
                      </div>
                      <div className="col-md-4 d-flex align-items-end">
                        <button type="submit" className="btn btn-primary w-100">
                          <i className="fas fa-search me-2"></i>Search
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Doctors Listing */}
          <div className="row" id="doctorsList">
            {/* Dynamic content will be inserted here by JavaScript */}
          </div>

          {/* Appointment Modal */}
          <div className="modal fade" id="appointmentModal" tabIndex="-1">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Book Appointment</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div className="modal-body">
                  <form id="appointmentForm">
                    <input type="hidden" id="doctorId" />
                    <div className="mb-3">
                      <label className="form-label">Patient Name</label>
                      <input type="text" className="form-control" id="patientName" required />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Contact Number</label>
                      <input type="tel" className="form-control" id="contactNumber" required />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Appointment Date</label>
                      <input type="date" className="form-control" id="appointmentDate" required />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Preferred Time</label>
                      <select className="form-select" id="appointmentTime" required>
                        <option value="">Select Time</option>
                        <option value="09:00 AM">09:00 AM</option>
                        <option value="11:00 AM">11:00 AM</option>
                        <option value="02:00 PM">02:00 PM</option>
                        <option value="04:00 PM">04:00 PM</option>
                      </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Confirm Booking</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Doctors;