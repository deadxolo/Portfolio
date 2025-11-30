import React, { useState, useEffect, useRef } from 'react';

const About = () => {
    const [counters, setCounters] = useState({
        projects: 0,
        clients: 0,
        awards: 0,
        coffee: 0
    });
    const [hasAnimated, setHasAnimated] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    animateCounters();
                    setHasAnimated(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [hasAnimated]);

    const animateCounters = () => {
        const targets = { projects: 50, clients: 30, awards: 15, coffee: 1000 };
        const duration = 2000;
        const steps = 60;
        const stepDuration = duration / steps;

        Object.keys(targets).forEach((key) => {
            const target = targets[key];
            const increment = target / steps;
            let current = 0;
            let step = 0;

            const timer = setInterval(() => {
                current += increment;
                step++;

                if (step >= steps) {
                    setCounters(prev => ({ ...prev, [key]: target }));
                    clearInterval(timer);
                } else {
                    setCounters(prev => ({ ...prev, [key]: Math.ceil(current) }));
                }
            }, stepDuration);
        });
    };

    return (
        <section id="about" className="about-section section" ref={sectionRef}>
            <div className="container">
                <div className="section-header reveal">
                    <h2 className="section-title">About Me</h2>
                    <p className="section-description">Passionate about creating exceptional digital experiences</p>
                </div>

                <div className="about-grid">
                    <div className="about-image reveal">
                        <div className="about-image-wrapper">
                            <img src="/assets/IMG_5341.jpg" alt="Arju Singh at work" className="about-img" />
                        </div>
                    </div>

                    <div className="about-content reveal">
                        <p className="about-lead">
                            I'm a <strong>Frontend Engineer</strong> and <strong>UI/UX Designer</strong> who specializes in building exceptional digital experiences. I combine creativity with technical expertise to deliver solutions that are both beautiful and functional.
                        </p>

                        <p className="about-text">
                            My journey in web development started with a fascination for how design and code come together to create interactive experiences. Today, I focus on building responsive, accessible web applications using modern technologies and best practices.
                        </p>

                        <p className="about-text">
                            I believe in pixel-perfect design, clean code, and creating interfaces that users love. Whether it's a landing page, a complex web application, or a complete design system, I approach each project with dedication and attention to detail.
                        </p>

                        <div className="about-highlights">
                            <div className="highlight-item">
                                <i className="fa-solid fa-check-circle"></i>
                                <span>Responsive & Mobile-First Design</span>
                            </div>
                            <div className="highlight-item">
                                <i className="fa-solid fa-check-circle"></i>
                                <span>Clean, Maintainable Code</span>
                            </div>
                            <div className="highlight-item">
                                <i className="fa-solid fa-check-circle"></i>
                                <span>User-Centered Approach</span>
                            </div>
                            <div className="highlight-item">
                                <i className="fa-solid fa-check-circle"></i>
                                <span>Performance Optimization</span>
                            </div>
                        </div>

                        <a href="#contact" className="btn btn-primary">
                            <i className="fa-solid fa-message"></i> Let's Work Together
                        </a>
                    </div>
                </div>

                <div className="stats-grid reveal">
                    <div className="stat-card">
                        <i className="fa-solid fa-code stat-icon"></i>
                        <h3 className="stat-number">{counters.projects}+</h3>
                        <p className="stat-label">Projects Completed</p>
                    </div>
                    <div className="stat-card">
                        <i className="fa-solid fa-users stat-icon"></i>
                        <h3 className="stat-number">{counters.clients}+</h3>
                        <p className="stat-label">Happy Clients</p>
                    </div>
                    <div className="stat-card">
                        <i className="fa-solid fa-award stat-icon"></i>
                        <h3 className="stat-number">{counters.awards}+</h3>
                        <p className="stat-label">Awards Won</p>
                    </div>
                    <div className="stat-card">
                        <i className="fa-solid fa-coffee stat-icon"></i>
                        <h3 className="stat-number">{counters.coffee}+</h3>
                        <p className="stat-label">Cups of Coffee</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
