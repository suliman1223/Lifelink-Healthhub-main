import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/SympChe.css';
import '../css/style.css';

const SymptomsChecker = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [possibleConditions, setPossibleConditions] = useState([]);
  const [recommendedActions, setRecommendedActions] = useState([]);
  const [whenToSeekHelp, setWhenToSeekHelp] = useState([]);
  const [selfCare, setSelfCare] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate AI processing
    setTimeout(() => {
      setIsLoading(false);
      setShowResults(true);
      
      // Simulated results based on symptoms
      const symptoms = e.target.symptoms.value.toLowerCase();
      let conditions = [];
      let actions = [];
      let whenToSeek = [];
      let care = [];
      
      if (symptoms.includes('headache')) {
        conditions = ['Tension headache', 'Migraine', 'Sinusitis'];
        actions = [
          'Rest in a quiet, dark room',
          'Stay hydrated',
          'Consider over-the-counter pain relievers like acetaminophen or ibuprofen'
        ];
        whenToSeek = [
          'If headache is severe or sudden',
          'If accompanied by fever, stiff neck, confusion, or vision changes',
          'If headache persists for more than a few days'
        ];
        care = [
          'Apply a cool compress to your forehead',
          'Practice relaxation techniques',
          'Maintain regular sleep patterns'
        ];
      } else if (symptoms.includes('fever')) {
        conditions = ['Viral infection', 'Bacterial infection', 'Flu'];
        actions = [
          'Stay hydrated',
          'Get plenty of rest',
          'Take fever-reducing medication if needed'
        ];
        whenToSeek = [
          'If fever is above 103°F (39.4°C)',
          'If fever lasts more than 3 days',
          'If accompanied by rash, difficulty breathing, or severe pain'
        ];
        care = [
          'Use lukewarm sponge baths to reduce fever',
          'Wear lightweight clothing',
          'Monitor temperature regularly'
        ];
      } else if (symptoms.includes('cough')) {
        conditions = ['Common cold', 'Allergies', 'Bronchitis'];
        actions = [
          'Stay hydrated',
          'Use a humidifier',
          'Consider cough drops or honey for throat irritation'
        ];
        whenToSeek = [
          'If cough persists for more than 3 weeks',
          'If coughing up blood',
          'If accompanied by difficulty breathing or chest pain'
        ];
        care = [
          'Avoid irritants like smoke',
          'Elevate your head while sleeping',
          'Gargle with warm salt water'
        ];
      } else {
        conditions = ['Based on your symptoms, it could be a mild viral illness or other condition'];
        actions = [
          'Monitor your symptoms',
          'Get plenty of rest',
          'Stay hydrated'
        ];
        whenToSeek = [
          'If symptoms worsen or persist',
          'If you develop severe pain or difficulty breathing',
          'If you have concerns about your symptoms'
        ];
        care = [
          'Maintain good hygiene',
          'Eat nutritious foods',
          'Get adequate sleep'
        ];
      }
      
      setPossibleConditions(conditions);
      setRecommendedActions(actions);
      setWhenToSeekHelp(whenToSeek);
      setSelfCare(care);
    }, 2000);
  };

  const handleRestart = () => {
    setShowResults(false);
  };

  return (
    <div className="symptom-checker-page">
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
                  <li><Link to="/firstAid">First Aid</Link></li>
                  <li><Link to="/bloodGroups">Blood Groups</Link></li>
                  <li><Link to="/free-Medicines">Medicines</Link></li>
                  <li><Link to="/Doctors">Doctors</Link></li>
                  <li><Link className="active" to="/SymptomsChecker">Symptom Checker</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Symptom Checker Section */}
      <section className="symptom-checker">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <div className="checker-container">
                <h2>AI Symptom Checker</h2>
                <p className="subtitle">Describe your symptoms and get personalized health information</p>
                
                {!showResults && !isLoading && (
                  <form className="checker-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="age">Age</label>
                      <input type="number" id="age" className="form-control" min="1" max="120" required />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="gender">Gender</label>
                      <select id="gender" className="form-control" required>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="symptoms">Describe Your Symptoms</label>
                      <textarea 
                        id="symptoms" 
                        className="form-control" 
                        rows="5" 
                        placeholder="Describe your symptoms in detail, including when they started, severity, and any other relevant information" 
                        required
                      ></textarea>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="duration">Duration of Symptoms</label>
                      <select id="duration" className="form-control" required>
                        <option value="">Select Duration</option>
                        <option value="less-than-day">Less than a day</option>
                        <option value="1-3-days">1-3 days</option>
                        <option value="4-7-days">4-7 days</option>
                        <option value="1-2-weeks">1-2 weeks</option>
                        <option value="more-than-2-weeks">More than 2 weeks</option>
                      </select>
                    </div>
                    
                    <div className="form-group">
                      <label>Any Other Relevant Information</label>
                      <textarea 
                        id="additional-info" 
                        className="form-control" 
                        rows="3" 
                        placeholder="Any pre-existing conditions, medications, or other relevant health information"
                      ></textarea>
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Analyze Symptoms</button>
                  </form>
                )}
                
                {showResults && (
                  <div className="results-container">
                    <h3>Analysis Results</h3>
                    <div className="disclaimer">
                      <p><strong>Disclaimer:</strong> This AI symptom checker is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.</p>
                    </div>
                    
                    <div className="results-section">
                      <h4>Possible Conditions</h4>
                      <div className="condition-list">
                        <ul>
                          {possibleConditions.map((condition, index) => (
                            <li key={index}>{condition}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="results-section">
                      <h4>Recommended Actions</h4>
                      <div className="action-list">
                        <ul>
                          {recommendedActions.map((action, index) => (
                            <li key={index}>{action}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="results-section">
                      <h4>When to Seek Medical Help</h4>
                      <div className="help-list">
                        <ul>
                          {whenToSeekHelp.map((help, index) => (
                            <li key={index}>{help}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="results-section">
                      <h4>Self-Care Suggestions</h4>
                      <div className="care-list">
                        <ul>
                          {selfCare.map((care, index) => (
                            <li key={index}>{care}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <button onClick={handleRestart} className="btn btn-secondary">Start New Check</button>
                  </div>
                )}
                
                {isLoading && (
                  <div className="loading-container">
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <p>Analyzing your symptoms...</p>
                  </div>
                )}
              </div>
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

export default SymptomsChecker;