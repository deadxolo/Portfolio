import React, { useEffect, useState } from 'react';

const Footer = () => {
    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="site-footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <h3>AS</h3>
                    <p>Frontend Engineer & UI/UX Designer</p>
                </div>
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/arju-singh-0ab697228/" aria-label="LinkedIn Profile" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="mailto:connect@arjusingh.com" aria-label="Email">
                        <i className="fa-solid fa-envelope"></i>
                    </a>
                    <a href="https://github.com/deadxolo" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-github"></i>
                    </a>
                </div>
                <p className="copyright">&copy; {year} Arju Singh. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
