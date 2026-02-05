import './Portfolio.css'

function Portfolio() {
  return (
    <div className="portfolio">
      {/* Portfolio Hero */}
      <section className="portfolio-hero">
        <div className="container">
          <h1>Our Portfolio</h1>
          <p className="lead">Real results from real partnerships. Explore our successful projects and case studies.</p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="portfolio-grid-section">
        <div className="container">
          <div className="portfolio-grid">
            {/* Project 1 */}
            <div className="portfolio-card">
              <div className="portfolio-image">
                <span className="portfolio-icon">🚀</span>
              </div>
              <div className="portfolio-content">
                <span className="portfolio-category">Business Strategy</span>
                <h3>TechStart Digital Transformation</h3>
                <p>Helped a tech startup scale from 10 to 100 employees while increasing revenue by 300% in 18 months.</p>
                <div className="portfolio-stats">
                  <div className="stat">
                    <strong>300%</strong>
                    <span>Revenue Growth</span>
                  </div>
                  <div className="stat">
                    <strong>18</strong>
                    <span>Months</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="portfolio-card">
              <div className="portfolio-image">
                <span className="portfolio-icon">💻</span>
              </div>
              <div className="portfolio-content">
                <span className="portfolio-category">Technical Consulting</span>
                <h3>Enterprise Cloud Migration</h3>
                <p>Successfully migrated legacy infrastructure to cloud, reducing operational costs by 40% and improving system reliability.</p>
                <div className="portfolio-stats">
                  <div className="stat">
                    <strong>40%</strong>
                    <span>Cost Reduction</span>
                  </div>
                  <div className="stat">
                    <strong>99.9%</strong>
                    <span>Uptime</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="portfolio-card">
              <div className="portfolio-image">
                <span className="portfolio-icon">📈</span>
              </div>
              <div className="portfolio-content">
                <span className="portfolio-category">Business Strategy</span>
                <h3>Retail Chain Expansion</h3>
                <p>Developed market entry strategy for retail expansion into 5 new markets, resulting in 25% market share increase.</p>
                <div className="portfolio-stats">
                  <div className="stat">
                    <strong>5</strong>
                    <span>New Markets</span>
                  </div>
                  <div className="stat">
                    <strong>25%</strong>
                    <span>Market Share</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="portfolio-card">
              <div className="portfolio-image">
                <span className="portfolio-icon">🎯</span>
              </div>
              <div className="portfolio-content">
                <span className="portfolio-category">Career Development</span>
                <h3>Executive Career Coaching</h3>
                <p>Guided 50+ professionals to secure leadership positions at Fortune 500 companies with average salary increase of 35%.</p>
                <div className="portfolio-stats">
                  <div className="stat">
                    <strong>50+</strong>
                    <span>Professionals</span>
                  </div>
                  <div className="stat">
                    <strong>35%</strong>
                    <span>Salary Increase</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 5 */}
            <div className="portfolio-card">
              <div className="portfolio-image">
                <span className="portfolio-icon">🏆</span>
              </div>
              <div className="portfolio-content">
                <span className="portfolio-category">Technical Consulting</span>
                <h3>AI Implementation Strategy</h3>
                <p>Designed and implemented AI-powered automation system, reducing manual processing time by 60%.</p>
                <div className="portfolio-stats">
                  <div className="stat">
                    <strong>60%</strong>
                    <span>Time Saved</span>
                  </div>
                  <div className="stat">
                    <strong>$2M</strong>
                    <span>Annual Savings</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 6 */}
            <div className="portfolio-card">
              <div className="portfolio-image">
                <span className="portfolio-icon">🌟</span>
              </div>
              <div className="portfolio-content">
                <span className="portfolio-category">Business Strategy</span>
                <h3>Startup Funding Success</h3>
                <p>Helped early-stage startup secure Series A funding through strategic pitch development and investor connections.</p>
                <div className="portfolio-stats">
                  <div className="stat">
                    <strong>$5M</strong>
                    <span>Funding Raised</span>
                  </div>
                  <div className="stat">
                    <strong>3</strong>
                    <span>Months</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="portfolio-testimonial">
        <div className="container">
          <blockquote>
            "The results speak for themselves. Our partnership with Consult Me has been transformative for our business. Their strategic insights and hands-on approach delivered outcomes beyond our expectations."
          </blockquote>
          <cite>— Jennifer Lewis, CEO of Innovation Labs</cite>
        </div>
      </section>
    </div>
  )
}

export default Portfolio