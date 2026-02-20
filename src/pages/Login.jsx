import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login submitted:', formData);
        // Authentication logic here
    };

    return (
        <div className="login-page">
            <div className="login-container fade-in-up">
                <div className="login-header">
                    <h2>Welcome Back</h2>
                    <p>Enter your credentials to access your account</p>
                </div>

                <form className="login-form" onSubmit={handleSubmit}>
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

                    <div className="form-options">
                        <label className="checkbox-container">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                            Remember me
                        </label>
                        <Link to="/forgot-password" title="Forgot Password?" className="forgot-link">Forgot Password?</Link>
                    </div>

                    <button type="submit" className="premium-button full-width">
                        <span className="top-key"></span>
                        <span className="gradient-text">Sign In</span>
                        <span className="bottom-key-1"></span>
                        <span className="bottom-key-2"></span>
                    </button>
                </form>

                <div className="login-footer">
                    <p>Don't have an account? <Link to="/signup" className="link-highlight">Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
