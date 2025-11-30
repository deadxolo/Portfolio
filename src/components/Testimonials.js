import React, { useState, useEffect } from 'react';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            text: "Working with Arju was fantastic! He delivered a beautiful, responsive website that perfectly captured our brand. His attention to detail and technical expertise made the entire process smooth and enjoyable.",
            author: "Sarah Johnson",
            job: "Marketing Director",
            photo: "/assets/465fa792bac7b94c1d229d43edeaa20d.jpg"
        },
        {
            text: "Arju is an exceptional developer with a great eye for design. He transformed our outdated website into a modern, user-friendly platform. Highly recommend his services!",
            author: "Michael Chen",
            job: "Startup Founder",
            photo: "/assets/images.jpeg"
        },
        {
            text: "Professional, creative, and reliable. Arju exceeded our expectations with his React development skills. The project was delivered on time with excellent code quality.",
            author: "Emma Williams",
            job: "Product Manager",
            photo: "/assets/Capture.PNG"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            nextTestimonial();
        }, 5000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    const currentTestimonial = testimonials[currentIndex];

    return (
        <section id="testimonials" className="testimonials-section section">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-label">Testimonials</span>
                    <h2 className="section-title">What Clients Say</h2>
                    <p className="section-description">Feedback from satisfied clients and collaborators</p>
                </div>
                <div className="testimonial-slider">
                    <button className="slider-btn prev-btn" onClick={prevTestimonial} aria-label="Previous testimonial">
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>
                    <div className="testimonial-container">
                        <div className="testimonial-card">
                            <img src={currentTestimonial.photo} alt="Client photo" className="client-photo" />
                            <div className="quote-icon">
                                <i className="fa-solid fa-quote-left"></i>
                            </div>
                            <p className="testimonial-text">"{currentTestimonial.text}"</p>
                            <p className="testimonial-author">{currentTestimonial.author} - {currentTestimonial.job}</p>
                        </div>
                    </div>
                    <button className="slider-btn next-btn" onClick={nextTestimonial} aria-label="Next testimonial">
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
