import React from 'react';

const Projects = () => {
    const projects = [
        {
            image: '/assets/images.png',
            title: 'Hope Charity Website',
            description: 'A fully responsive charity website designed to enhance online presence and drive donations. Features include intuitive navigation, compelling storytelling sections, donation integration, and volunteer sign-up forms. Built with accessibility and user engagement as top priorities.',
            tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design']
        },
        {
            image: '/assets/Capture.PNG',
            title: 'E-Commerce Mobile App UI',
            description: 'A complete UI/UX design system for a modern e-commerce mobile application. Includes user flows, wireframes, high-fidelity mockups, and interactive prototypes. Features product browsing, cart management, checkout flow, and user account features with a focus on conversion optimization.',
            tags: ['Figma', 'UI/UX Design', 'Prototyping', 'Design System']
        },
        {
            image: '/assets/images.jpeg',
            title: 'Professional Portfolio Website',
            description: 'A modern, fully responsive portfolio website showcasing projects and skills. Features smooth animations, scroll effects, parallax backgrounds, and interactive elements. Built with performance optimization and SEO best practices. Includes project galleries, testimonials, and contact integration.',
            tags: ['HTML5', 'CSS3', 'JavaScript', 'Animation', 'Responsive']
        },
        {
            image: '/assets/anime-style-cozy-home-interior-with-furnishings_23-2151176469.jpg',
            title: 'Analytics Dashboard',
            description: 'An interactive analytics dashboard built with React.js, featuring real-time data visualization, charts, and graphs. Implements state management, API integration, and responsive data tables. Designed for business intelligence with customizable widgets and export functionality.',
            tags: ['React.js', 'Chart.js', 'REST API', 'Data Visualization']
        },
        {
            image: '/assets/Yuji_Itadori_29.webp',
            title: 'Task Management Web App',
            description: 'A full-featured task management application with drag-and-drop functionality, project organization, and team collaboration features. Includes user authentication, real-time updates, deadline tracking, and progress visualization. Built with modern web technologies and clean architecture.',
            tags: ['React.js', 'Firebase', 'Drag & Drop', 'Real-time']
        },
        {
            image: '/assets/IMG_0648.JPG',
            title: 'SaaS Landing Page',
            description: 'A high-conversion landing page for a SaaS product, featuring modern design principles, engaging animations, and clear call-to-actions. Optimized for performance with lazy loading, integrated with analytics, and includes email capture forms. Fully responsive across all devices.',
            tags: ['HTML5', 'CSS3', 'JavaScript', 'SEO Optimized']
        }
    ];

    return (
        <section id="projects" className="projects-section section">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-label">My Work</span>
                    <h2 className="section-title">Featured Projects</h2>
                </div>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <article className="project-card reveal" key={index}>
                            <div className="project-image">
                                <img src={project.image} alt={project.title} loading="lazy" />
                                <div className="project-overlay">
                                    <a href="#home" className="project-link">
                                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="tech-tags">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span className="tag" key={tagIndex}>{tag}</span>
                                    ))}
                                </div>
                                <a href="#home" className="btn btn-small">
                                    View Project <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
