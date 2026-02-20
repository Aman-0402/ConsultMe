import PropTypes from 'prop-types'
import './ServiceCard.css'

function ServiceCard({ icon, title, description, link, linkText }) {
  return (
    <div className="service-card">
      {icon && <div className="service-icon">{icon}</div>}
      <h3>{title}</h3>
      <p>{description}</p>
      {link && (
        <a href={link} className="service-link">
          {linkText || 'Learn More →'}
        </a>
      )}
    </div>
  )
}

ServiceCard.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string,
  linkText: PropTypes.string
}

export default ServiceCard