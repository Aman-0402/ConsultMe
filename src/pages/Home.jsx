import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import "./Home.css";

// Import reusable components
import FeatureCard from "../components/FeatureCard";
import ServiceCard from "../components/ServiceCard";
import TestimonialCard from "../components/TestimonialCard";

function Home() {
  const hasTyped = useRef(false);
  useEffect(() => {
    // ⛔ Prevent duplicate runs (React StrictMode fix)
    if (hasTyped.current) return;
    hasTyped.current = true;

    const el = document.getElementById("typed-text");
    if (!el) return;

    // Disable typing on mobile
    if (window.innerWidth <= 768) {
      el.innerHTML = `
        Connect with verified experts across business, technology, finance, and legal.
        <br />
        <span class="brand-gradient">ConsultME</span> provides a powerful ecosystem to scale your business
        <span class="rotate-word"></span>
      `;
      return;
    }

    const sentence =
      "Connect with verified experts across business, technology, finance, and legal. ConsultME provides a powerful ecosystem to scale your business ";

    const words = sentence.split(" ");
    let index = 0;

    el.textContent = "";

    function typeWord() {
      if (index < words.length) {
        el.textContent += words[index] + " ";
        index++;
        setTimeout(typeWord, 180);
      } else {
        el.innerHTML = `
          Connect with verified experts across business, technology, finance, and legal.
          <br />
          <span class="brand-gradient">ConsultME</span> provides a powerful ecosystem to scale your business
          <span id="rotating-word" class="rotate-word"></span>
        `;
        startRotation();
      }
    }

    function startRotation() {
      const rotateEl = document.getElementById("rotating-word");
      if (!rotateEl) return;

      const wordsToRotate = ["faster", "smarter", "better"];
      let wordIndex = 0;
      let charIndex = 0;
      let isDeleting = false;

      function type() {
        const currentWord = wordsToRotate[wordIndex];

        if (isDeleting) {
          rotateEl.textContent = currentWord.substring(0, charIndex - 1);
          charIndex--;
        } else {
          rotateEl.textContent = currentWord.substring(0, charIndex + 1);
          charIndex++;
        }

        let typeSpeed = isDeleting ? 100 : 200;

        if (!isDeleting && charIndex === currentWord.length) {
          isDeleting = true;
          typeSpeed = 1500; // Pause at the end
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % wordsToRotate.length;
          typeSpeed = 500; // Pause before next word
        }

        setTimeout(type, typeSpeed);
      }

      type();
    }

    typeWord();
  }, []);

  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">
        <div className="bg-particles"></div>
        <div className="hero-bg-elements">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="blob blob-3"></div>
          <div className="grid-overlay"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-title-line">Transform Your Business</span>
            <br />
            <span className="hero-title-line accent">
              with Expert Consulting
            </span>
          </h1>

          <p className="hero-subtitle">
            <span id="typed-text"></span>
            <span className="caret">|</span>
          </p>

          <div className="hero-badge">
            <span className="badge-dot"></span>
            <span className="badge-text">Freelancing</span>
            <span className="badge-dot"></span>
            <span className="badge-text">Consultation</span>
            <span className="badge-dot"></span>
            <span className="badge-text">Mentorship</span>
            <span className="badge-dot"></span>
          </div>
          <div className="hero-buttons">
            <Link to="/contact" className="hero-btn premium-button">
              <span className="glass-shine"></span>
              <span className="gradient-text">Get Started</span>
              <svg className="btn-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>

            <Link to="/experts" className="hero-btn premium-button">
              <span className="glass-shine"></span>
              <span className="gradient-text">Explore Experts</span>
              <svg className="btn-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="services">
        <div className="bg-particles"></div>
        <div className="container">
          <span className="section-eyebrow fade-in-up text-center">Our Services</span>
          <h1 className="section-heading fade-in-up delay-1 text-center">
            Empowering You With Expert Guidance
          </h1>

          <div className="row g-4 services-grid">
            <div className="col-12 col-sm-6 col-lg-4 fade-in-up delay-1">
              <div className="service-box h-100">
                <div className="service-icon">📊</div>
                <h3>Business Consultancy</h3>
                <p>
                  Craft actionable plans and achieve your business goals with
                  expert advice.
                </p>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-4 fade-in-up delay-2">
              <div className="service-box h-100">
                <div className="service-icon">⚖️</div>
                <h3>Legal & Compliance</h3>
                <p>
                  Stay compliant & navigate legal complexities with confidence.
                </p>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-4 fade-in-up delay-3">
              <div className="service-box h-100">
                <div className="service-icon">💰</div>
                <h3>Finance Advisory</h3>
                <p>
                  Optimize your investments & financial health through strategic
                  insights.
                </p>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-4 fade-in-up delay-4">
              <div className="service-box h-100">
                <div className="service-icon">🤖</div>
                <h3>AI Consultants</h3>
                <p>
                  Build & automate your business with AI integration in
                  business.
                </p>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-4 fade-in-up delay-5">
              <div className="service-box h-100">
                <div className="service-icon">🎬</div>
                <h3>Media Consultants</h3>
                <p>
                  Excel your career or business in the entertainment industry.
                </p>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-4 fade-in-up delay-6">
              <div className="service-box h-100">
                <div className="service-icon">🩺</div>
                <h3>Healthcare Experts</h3>
                <p>
                  Live healthier by connecting with trusted health & fitness
                  experts.
                </p>
              </div>
            </div>
          </div>

          <div className="services-cta text-center fade-in-up delay-6">
            <Link to="/services" className="animated-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="arr-2"
                viewBox="0 0 24 24"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
              </svg>

              <span className="text">Explore All Services</span>
              <span className="circle" />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="arr-1"
                viewBox="0 0 24 24"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="services-preview">
        <div className="bg-particles"></div>
        <div className="container">
          {/* Section Header */}
          <span className="section-eyebrow fade-in-up">Our Solutions</span>

          <h2 className="section-title">
            Expertise That Translates <br /> Into Real Results
          </h2>

          <p className="section-subtitle fade-in-up delay-2">
            ConsultME delivers expert-led solutions designed to help
            individuals, startups, and enterprises make better decisions and
            move faster.
          </p>

          {/* Solutions Grid */}
          <div className="services-grid">
            <div className="fade-in-up delay-1">
              <ServiceCard
                title="Precision Guidance"
                description="Tailored expert advice aligned with your goals, industry, and growth stage."
              />
            </div>

            <div className="fade-in-up delay-2">
              <ServiceCard
                title="End-to-End Consulting"
                description="From strategy and planning to execution and optimization—handled seamlessly."
              />
            </div>

            <div className="fade-in-up delay-3">
              <ServiceCard
                title="Elite Expert Network"
                description="Access a curated pool of verified professionals across 50+ domains."
              />
            </div>

            <div className="fade-in-up delay-4">
              <ServiceCard
                title="Growth Roadmaps"
                description="Clear, measurable plans for career acceleration and business scaling."
              />
            </div>
          </div>

          {/* Stats */}
          <div className="stats-row fade-in-up delay-4">
            <div className="stat">
              <h3>1200+</h3>
              <p>Experts</p>
            </div>
            <div className="stat">
              <h3>98%</h3>
              <p>Satisfaction</p>
            </div>
            <div className="stat">
              <h3>50+</h3>
              <p>Domains</p>
            </div>
          </div>

          {/* CTA */}
          <div className="section-cta fade-in-up delay-5">
            <a href="/experts" className="primary-btn fly-btn">
              <span className="icon-wrap">
                <span className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="22"
                    height="22"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      fill="currentColor"
                      d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                    />
                  </svg>
                </span>
              </span>

              <span className="btn-text">
                <span className="text-main">Speak</span>
                <span className="text-extra">with an Expert</span>
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="philosophy">
        <div className="container">
          <h2 className="section-eyebrow fade-in-up">Our Philosophy</h2>
          <h2 className="section-title">
            Principles That Define <br /> How We Create Impact
          </h2>

          <p className="section-subtitle fade-in-up delay-2">
            We connect you with experienced professionals who transform clarity
            into action, enabling confident decisions, strategic execution, and
            long-term impact.
          </p>

          <div className="philosophy-grid">
            <div className="philosophy-card fade-in-up delay-3">
              <h4>Clarity Before Complexity</h4>
              <p>
                We believe complexity slows progress. Our approach prioritizes
                clarity by breaking down challenges into actionable insights,
                enabling faster decisions and confident execution without
                unnecessary noise.
              </p>
            </div>

            <div className="philosophy-card fade-in-up delay-4">
              <h4>Experience-Led Advice</h4>
              <p>
                Advice is only valuable when grounded in experience. ConsultME
                connects you with experts who have implemented strategies,
                managed risks, and delivered results across real business and
                career environments.
              </p>
            </div>

            <div className="philosophy-card fade-in-up delay-5">
              <h4>Outcome-Driven Growth</h4>
              <p>
                Growth should be intentional and measurable. We focus on
                guidance that leads to sustainable outcomes, helping individuals
                and organizations scale with purpose, accountability, and
                long-term impact.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="why-experts">
        <div className="bg-particles"></div>
        <div className="container">
          <h2 className="section-title">
            Why Choose Experts
          </h2>

          <p className="section-subtitle fade-in-up delay-1">
            Why should you hire experts? Because informed decisions lead to better outcomes.
          </p>

          <div className="features-grid">
            <div className="feature-card fade-in-up delay-2">
              <h4>Personalized Solutions</h4>
              <p>
                Receive tailored strategies that fit your specific goals, industry,
                and long-term vision.
              </p>
            </div>

            <div className="feature-card fade-in-up delay-3">
              <h4>Networking Opportunity</h4>
              <p>
                Connect with industry leaders, professionals, and investors to expand
                your network and unlock new opportunities.
              </p>
            </div>

            <div className="feature-card fade-in-up delay-4">
              <h4>Expert Consultation</h4>
              <p>
                Gain deep insights and clarity from top domain experts in every session.
              </p>
            </div>
          </div>

          <div className="section-cta fade-in-up delay-5">
            <a href="/services" className="uiverse-btn type1">
              {/* Text handled by CSS pseudo-elements */}
            </a>
          </div>
        </div>
      </section>


      <section className="final-cta">
        <div className="bg-particles"></div>
        <div className="container fade-in-up">
          <h2 className="section-title">
            Need Consulting Services?
          </h2>

          <p className="section-subtitle">
            Get instant access to verified experts across industries.
            Your consultation starts without delay — reliable, focused,
            and tailored to your needs.
          </p>

          <div className="cta-actions">
            <a href="/register" className="premium-button">
              <span className="glass-shine"></span>
              <span className="gradient-text">Register</span>
            </a>

            <a href="/contact" className="premium-button">
              <span className="glass-shine"></span>
              <span className="gradient-text">Contact Us</span>
            </a>
          </div>
        </div>
      </section>


    </div>
  );
}

export default Home;
