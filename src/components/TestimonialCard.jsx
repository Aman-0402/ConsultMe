import PropTypes from 'prop-types'
import './TestimonialCard.css'

function TestimonialCard({ text, author, role }) {
  return (
    <div className="testimonial-card-component">
      <p className="testimonial-text">"{text}"</p>
      <div className="testimonial-author">
        <strong>{author}</strong>
        <span>{role}</span>
      </div>
    </div>
  )
}

TestimonialCard.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired
}

export default TestimonialCard