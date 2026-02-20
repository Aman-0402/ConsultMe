import './Blog.css'

function Blog() {
  return (
    <div className="blog">
      {/* Blog Hero */}
      <section className="blog-hero">
        <div className="container">
          <h1>Blog & Insights</h1>
          <p className="lead">Expert perspectives on business, technology, and career development</p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="blog-grid-section">
        <div className="container">
          <div className="blog-grid">
            {/* Article 1 */}
            <article className="blog-card">
              <div className="blog-image">
                <span className="blog-icon">📊</span>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-category">Business Strategy</span>
                  <span className="blog-date">Jan 15, 2026</span>
                </div>
                <h3>5 Digital Transformation Strategies for 2026</h3>
                <p>Discover the key trends and strategies that will define successful digital transformation initiatives this year.</p>
                <a href="#" className="read-more">Read More →</a>
              </div>
            </article>

            {/* Article 2 */}
            <article className="blog-card">
              <div className="blog-image">
                <span className="blog-icon">💡</span>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-category">Career Development</span>
                  <span className="blog-date">Jan 10, 2026</span>
                </div>
                <h3>How to Negotiate Your Salary Like a Pro</h3>
                <p>Learn effective negotiation techniques that can help you secure better compensation and benefits packages.</p>
                <a href="#" className="read-more">Read More →</a>
              </div>
            </article>

            {/* Article 3 */}
            <article className="blog-card">
              <div className="blog-image">
                <span className="blog-icon">🔐</span>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-category">Technology</span>
                  <span className="blog-date">Jan 5, 2026</span>
                </div>
                <h3>Cybersecurity Best Practices for Small Businesses</h3>
                <p>Essential security measures every small business should implement to protect their data and customers.</p>
                <a href="#" className="read-more">Read More →</a>
              </div>
            </article>

            {/* Article 4 */}
            <article className="blog-card">
              <div className="blog-image">
                <span className="blog-icon">🚀</span>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-category">Startups</span>
                  <span className="blog-date">Dec 28, 2025</span>
                </div>
                <h3>From Idea to Launch: A Startup Guide</h3>
                <p>A comprehensive roadmap for entrepreneurs looking to turn their ideas into successful businesses.</p>
                <a href="#" className="read-more">Read More →</a>
              </div>
            </article>

            {/* Article 5 */}
            <article className="blog-card">
              <div className="blog-image">
                <span className="blog-icon">📈</span>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-category">Business Strategy</span>
                  <span className="blog-date">Dec 20, 2025</span>
                </div>
                <h3>Data-Driven Decision Making in Modern Business</h3>
                <p>How to leverage analytics and data insights to make better strategic decisions for your organization.</p>
                <a href="#" className="read-more">Read More →</a>
              </div>
            </article>

            {/* Article 6 */}
            <article className="blog-card">
              <div className="blog-image">
                <span className="blog-icon">🎯</span>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-category">Career Development</span>
                  <span className="blog-date">Dec 15, 2025</span>
                </div>
                <h3>Building a Personal Brand on LinkedIn</h3>
                <p>Strategies for creating a compelling professional presence that attracts opportunities and connections.</p>
                <a href="#" className="read-more">Read More →</a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="container">
          <h2>Stay Updated</h2>
          <p>Subscribe to our newsletter for the latest insights and updates</p>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email address"
              className="newsletter-input"
            />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Blog