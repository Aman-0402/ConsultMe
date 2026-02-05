import './About.css'

function About() {
  return (
    <div className="about">
      {/* About Hero */}
      <section className="about-hero">
        <div className="container">
          <h1>About Consult Me</h1>
          <p className="lead">Empowering businesses and individuals to achieve their full potential through expert consulting and strategic guidance.</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="our-story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                Founded in 2018, Consult Me emerged from a simple belief: every business and individual deserves access to world-class consulting expertise. What started as a small team of passionate consultants has grown into a trusted partner for organizations and professionals worldwide.
              </p>
              <p>
                Our journey has been defined by our commitment to delivering measurable results, fostering long-term partnerships, and staying ahead of industry trends. Today, we're proud to have helped hundreds of clients transform their challenges into opportunities.
              </p>
            </div>
            <div className="story-image">
              <div className="image-placeholder">
                <span>🏢</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card">
              <div className="mv-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To provide innovative, tailored consulting solutions that drive sustainable growth and empower our clients to excel in their respective fields.
              </p>
            </div>
            <div className="mv-card">
              <div className="mv-icon">🔭</div>
              <h3>Our Vision</h3>
              <p>
                To be the most trusted consulting partner globally, recognized for transforming businesses and careers through expertise, integrity, and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="core-values">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h4>Innovation</h4>
              <p>We embrace creativity and cutting-edge solutions to solve complex challenges.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h4>Integrity</h4>
              <p>We operate with honesty, transparency, and ethical standards in everything we do.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">⭐</div>
              <h4>Excellence</h4>
              <p>We strive for the highest quality in every project and interaction.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌱</div>
              <h4>Growth</h4>
              <p>We are committed to continuous learning and development for ourselves and our clients.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-photo">
                <span>👨‍💼</span>
              </div>
              <h4>John Anderson</h4>
              <p className="role">Founder & CEO</p>
              <p className="bio">15+ years in business strategy and digital transformation</p>
            </div>
            <div className="team-member">
              <div className="member-photo">
                <span>👩‍💼</span>
              </div>
              <h4>Sarah Mitchell</h4>
              <p className="role">Head of Technical Consulting</p>
              <p className="bio">Expert in technology implementation and IT strategy</p>
            </div>
            <div className="team-member">
              <div className="member-photo">
                <span>👨‍💼</span>
              </div>
              <h4>David Park</h4>
              <p className="role">Career Development Specialist</p>
              <p className="bio">Helping professionals achieve career goals for 10+ years</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>500+</h3>
              <p>Clients Served</p>
            </div>
            <div className="stat-item">
              <h3>95%</h3>
              <p>Client Satisfaction</p>
            </div>
            <div className="stat-item">
              <h3>6+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-item">
              <h3>50+</h3>
              <p>Industry Awards</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About