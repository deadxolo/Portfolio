import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        job: '',
        company: '',
        message: ''
    });
    const [formStatus, setFormStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setFormStatus('');

        try {
            const formDataToSend = new FormData();
            formDataToSend.append('name', formData.name);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('job', formData.job);
            formDataToSend.append('company', formData.company);
            formDataToSend.append('message', formData.message);
            formDataToSend.append('_captcha', 'false');
            formDataToSend.append('_subject', 'New Contact Form Submission from Portfolio');

            // Using FormSubmit AJAX endpoint
            const response = await fetch('https://formsubmit.co/ajax/connect@arjusingh.com', {
                method: 'POST',
                body: formDataToSend
            });

            const data = await response.json();

            if (response.ok && data.success) {
                setFormStatus('✓ Message sent successfully! I\'ll get back to you soon.');
                setFormData({
                    name: '',
                    email: '',
                    job: '',
                    company: '',
                    message: ''
                });

                setTimeout(() => {
                    setFormStatus('');
                }, 5000);
            } else {
                throw new Error(data.message || 'Form submission failed');
            }
        } catch (error) {
            setFormStatus('✗ Oops! Something went wrong. Please try again or email me directly at connect@arjusingh.com');
            console.error('Form submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="contact-section section">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-label">Let's Connect</span>
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="section-description">Have a project in mind? Let's work together</p>
                </div>
                <div className="contact-wrapper">
                    <div className="contact-info-cards reveal">
                        <div className="info-card">
                            <div className="info-icon">
                                <i className="fa-solid fa-envelope"></i>
                            </div>
                            <h3>Email</h3>
                            <a href="mailto:connect@arjusingh.com" className="info-link">connect@arjusingh.com</a>
                        </div>
                        <div className="info-card">
                            <div className="info-icon">
                                <i className="fa-brands fa-linkedin"></i>
                            </div>
                            <h3>LinkedIn</h3>
                            <a href="https://www.linkedin.com/in/arju-singh-0ab697228/" target="_blank" rel="noopener noreferrer" className="info-link">Connect with me</a>
                        </div>
                        <div className="info-card">
                            <div className="info-icon">
                                <i className="fa-brands fa-github"></i>
                            </div>
                            <h3>GitHub</h3>
                            <a href="https://github.com/deadxolo" target="_blank" rel="noopener noreferrer" className="info-link">View my code</a>
                        </div>
                    </div>

                    <div className="contact-form-container reveal">
                        <p className="form-intro">Have a project in mind or want to collaborate? I'd love to hear from you!</p>
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
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
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="job">Job Title</label>
                                    <input
                                        type="text"
                                        id="job"
                                        name="job"
                                        value={formData.job}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="company">Company</label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary btn-block" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <>
                                        <i className="fa-solid fa-spinner fa-spin"></i> Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message <i className="fa-solid fa-paper-plane"></i>
                                    </>
                                )}
                            </button>
                            {formStatus && (
                                <p
                                    className="form-status"
                                    style={{
                                        color: formStatus.startsWith('✓') ? '#10b981' : '#ef4444',
                                        marginTop: '1rem',
                                        textAlign: 'center',
                                        fontWeight: '500'
                                    }}
                                >
                                    {formStatus}
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
