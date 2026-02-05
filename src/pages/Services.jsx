import { Link } from 'react-router-dom'
import './Services.css'

function Services() {
  return (
    <div className="services">
      {/* Services Hero */}
      <section className="services-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p className="lead">Comprehensive consulting solutions tailored to your unique needs</p>
        </div>
      </section>

      {/* Main Services */}
      <section className="main-services">
        <div className="container">
          <div className="service-detail">
            <div className="service-icon-large">💼</div>
            <div className="service-content">
              <h2>Business Strategy Consulting</h2>
              <p>
                Transform your business with strategic planning and execution support. We help you identify opportunities, overcome challenges, and achieve sustainable growth.
              </p>
              <ul className="service-features">
                <li>✓ Market Analysis & Research</li>
                <li>✓ Business Model Development</li>
                <li>✓ Growth Strategy Planning</li>
                <li>✓ Competitive Positioning</li>
                <li>✓ Financial Planning & Forecasting</li>
              </ul>
            </div>
          </div>

          <div className="service-detail reverse">
            <div className="service-icon-large">💻</div>
            <div className="service-content">
              <h2>Technical Consulting</h2>
              <p>
                Navigate the complexities of technology with expert guidance on digital transformation, system architecture, and technology implementation.
              </p>
              <ul className="service-features">
                <li>✓ Digital Transformation Strategy</li>
                <li>✓ Technology Stack Selection</li>
                <li>✓ System Architecture Design</li>
                <li>✓ Cloud Migration Planning</li>
                <li>✓ Cybersecurity Assessment</li>
              </ul>
            </div>
          </div>

          <div className="service-detail">
            <div className="service-icon-large">🎯</div>
            <div className="service-content">
              <h2>Career Development & Guidance</h2>
              <p>
                Accelerate your professional growth with personalized career coaching, resume optimization, and interview preparation from industry experts.
              </p>
              <ul className="service-features">
                <li>✓ Career Path Planning</li>
                <li>✓ Resume & LinkedIn Optimization</li>
                <li>✓ Interview Preparation & Coaching</li>
                <li>✓ Salary Negotiation Guidance</li>
                <li>✓ Professional Skill Development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process">
        <div className="container">
          <h2 className="section-title">Our Consulting Process</h2>
          <div className="process-grid">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Discovery</h3>
              <p>We start by understanding your challenges, goals, and current situation through in-depth consultation.</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Analysis</h3>
              <p>Our team conducts thorough research and analysis to identify opportunities and develop insights.</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Strategy</h3>
              <p>We create a customized action plan with clear milestones and measurable objectives.</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Implementation</h3>
              <p>We work alongside you to execute the strategy and ensure successful outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Let's discuss how our services can help you achieve your goals</p>
          <Link to="/contact" className="btn btn-primary btn-large">Book a Free Consultation</Link>
        </div>
      </section>
    </div>
  )
}

export default Services