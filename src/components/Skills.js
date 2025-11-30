import React from 'react';

const Skills = () => {
    const technicalSkills = [
        'HTML5 & CSS3',
        'JavaScript (ES6+)',
        'React.js',
        'Responsive Design',
        'TypeScript',
        'Tailwind CSS'
    ];

    const designSkills = [
        'UI/UX Design',
        'Figma',
        'Wireframing & Prototyping',
        'Typography & Color Theory',
        'Adobe XD',
        'User Research'
    ];

    const tools = [
        { icon: 'fa-brands fa-html5', name: 'HTML5' },
        { icon: 'fa-brands fa-css3-alt', name: 'CSS3' },
        { icon: 'fa-brands fa-js', name: 'JavaScript' },
        { icon: 'fa-brands fa-react', name: 'React' },
        { icon: 'fa-brands fa-node', name: 'Node.js' },
        { icon: 'fa-brands fa-git-alt', name: 'Git' },
        { icon: 'fa-brands fa-github', name: 'GitHub' },
        { icon: 'fa-brands fa-figma', name: 'Figma' },
        { icon: 'fa-brands fa-npm', name: 'NPM' },
        { icon: 'fa-brands fa-sass', name: 'Sass' },
        { icon: 'fa-brands fa-bootstrap', name: 'Bootstrap' },
        { icon: 'fa-solid fa-wind', name: 'Tailwind' },
        { icon: 'fa-brands fa-wordpress', name: 'WordPress' },
        { icon: 'fa-solid fa-database', name: 'MongoDB' },
        { icon: 'fa-brands fa-python', name: 'Python' },
        { icon: 'fa-solid fa-fire', name: 'Firebase' },
        { icon: 'fa-brands fa-docker', name: 'Docker' },
        { icon: 'fa-solid fa-code-branch', name: 'REST API' },
        { icon: 'fa-brands fa-linux', name: 'Linux' },
        { icon: 'fa-solid fa-terminal', name: 'VS Code' }
    ];

    return (
        <section id="skills" className="skills-section section">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-label">My Capabilities</span>
                    <h2 className="section-title">Skills & Expertise</h2>
                    <p className="section-description">Technologies and tools I work with</p>
                </div>

                <div className="skills-container">
                    <div className="skills-category reveal">
                        <h3 className="category-title">
                            <i className="fa-solid fa-code"></i> Technical Skills
                        </h3>
                        <div className="skills-list">
                            {technicalSkills.map((skill, index) => (
                                <div className="skill-item" key={index}>
                                    <i className="fa-solid fa-check-circle"></i>
                                    <span>{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="skills-category reveal">
                        <h3 className="category-title">
                            <i className="fa-solid fa-palette"></i> Design Skills
                        </h3>
                        <div className="skills-list">
                            {designSkills.map((skill, index) => (
                                <div className="skill-item" key={index}>
                                    <i className="fa-solid fa-check-circle"></i>
                                    <span>{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="tools-section reveal">
                    <h3 className="tools-title">Tools & Technologies</h3>
                    <div className="tools-grid">
                        {tools.map((tool, index) => (
                            <div className="tool-item" key={index}>
                                <i className={tool.icon}></i>
                                <span>{tool.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
