import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'; // Reuse styles for consistency

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Signup submitted:', formData);
    };

    return (
        <div className="login-page">
            <div className="login-container fade-in-up">
                <div className="login-header">
                    <h2>Create Account</h2>
                    <p>Join ConsultME to connect with experts</p>
                </div>

                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <button type="submit" className="premium-button full-width">
                        <span className="top-key"></span>
                        <span className="gradient-text">Sign Up</span>
                        <span className="bottom-key-1"></span>
                        <span className="bottom-key-2"></span>
                    </button>
                </form>

                <div className="login-footer">
                    <p>Already have an account? <Link to="/login" className="link-highlight">Sign In</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
