import React, { useState, useEffect } from 'react';

const Hero = () => {
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [displayText, setDisplayText] = useState('');

    const roles = [
        'Frontend Engineer',
        'UI/UX Designer',
        'React Developer',
        'Creative Problem Solver'
    ];

    useEffect(() => {
        const typingSpeed = 100;
        const deletingSpeed = 50;
        const pauseDuration = 2000;

        const currentRole = roles[roleIndex];

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (charIndex < currentRole.length) {
                    setDisplayText(currentRole.substring(0, charIndex + 1));
                    setCharIndex(charIndex + 1);
                } else {
                    setTimeout(() => setIsDeleting(true), pauseDuration);
                }
            } else {
                if (charIndex > 0) {
                    setDisplayText(currentRole.substring(0, charIndex - 1));
                    setCharIndex(charIndex - 1);
                } else {
                    setIsDeleting(false);
                    setRoleIndex((roleIndex + 1) % roles.length);
                }
            }
        }, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, roleIndex]);

    return (
        <header id="home" className="hero section">
            <div className="hero-bg-pattern"></div>
            <div className="hero-container">
                <div className="hero-content fade-in">
                    <p className="hero-greeting">Hello, I'm</p>
                    <h1 className="hero-title">Arju Singh</h1>
                    <div className="hero-subtitle-wrapper">
                        <h2 className="hero-subtitle">
                            <span className="typing-text">{displayText}</span>
                            <span className="cursor">|</span>
                        </h2>
                    </div>
                    <p className="hero-description">
                        Transforming ideas into stunning digital experiences through innovative design and clean code.
                        Specialized in creating responsive, accessible, and high-performance web applications.
                    </p>

                    <div className="hero-buttons">
                        <a href="#projects" className="btn btn-primary">
                            <i className="fa-solid fa-briefcase"></i> View My Work
                        </a>
                        <a href="#contact" className="btn btn-secondary">
                            <i className="fa-solid fa-paper-plane"></i> Let's Talk
                        </a>
                        <a href="#about" className="btn btn-outline">
                            <i className="fa-solid fa-user"></i> About Me
                        </a>
                    </div>

                    <div className="social-bar">
                        <a href="mailto:connect@arjusingh.com" className="social-icon" data-tooltip="Email me">
                            <i className="fa-solid fa-envelope"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/arju-singh-0ab697228/" target="_blank" rel="noopener noreferrer" className="social-icon" data-tooltip="LinkedIn">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/deadxolo" target="_blank" rel="noopener noreferrer" className="social-icon" data-tooltip="GitHub">
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </div>
                </div>

                <div className="profile-section slide-in-right">
                    <div className="profile-wrapper">
                        <div className="profile-border"></div>
                        <div className="profile-container">
                            <img src="/assets/IMG_5341.jpg" alt="Arju Singh - Professional Headshot" className="profile-image" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="scroll-indicator">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                <p>Scroll Down</p>
            </div>
        </header>
    );
};

export default Hero;
