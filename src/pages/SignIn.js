import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';

const SignIn = () => {
    const [formData, setFormData] = useState({
        user_email: '',
        user_password: '',
    });

    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        try {
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const user = users.find(
                (user) => user.user_email === formData.user_email && user.user_password === formData.user_password
            );

            if (user) {
                localStorage.setItem('loggedInUser', JSON.stringify(user));
                alert('Signin successful!');
                navigate('/home'); // Navigate to the home page
            } else {
                setError('Signin failed. Please check your email and password.');
            }
        } catch (error) {
            console.error(error);
            setError('Signin failed. Please try again.');
        }
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Log In</h2>
                <form onSubmit={handleSubmit}>
                    <input type="email" name="user_email" placeholder="Email address" onChange={handleChange} required />
                    <input type="password" name="user_password" placeholder="Password" onChange={handleChange} required />
                    <button type="submit">Log In</button>
                </form>
                {error && <p className="error-message">{error}</p>}
            </div>
        </div>
    );
};

export default SignIn;
