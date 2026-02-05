import PropTypes from 'prop-types'
import './FeatureCard.css'

function FeatureCard({ icon, title, description }) {
  return (
    <div className="feature-card-component">
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

FeatureCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default FeatureCard