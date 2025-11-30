import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <a href="#home" className="nav-logo">AS</a>
                <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <li><a href="#home" className="nav-link" onClick={closeMenu}>Home</a></li>
                    <li><a href="#about" className="nav-link" onClick={closeMenu}>About</a></li>
                    <li><a href="#skills" className="nav-link" onClick={closeMenu}>Skills</a></li>
                    <li><a href="#projects" className="nav-link" onClick={closeMenu}>Projects</a></li>
                    <li><a href="#testimonials" className="nav-link" onClick={closeMenu}>Testimonials</a></li>
                    <li><a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a></li>
                </ul>
                <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
