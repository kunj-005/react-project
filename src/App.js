import React, { useState } from "react";
import "./App.css";

// Profile data
const profile = {
  name: "Kunj Chandak",
  title: "Frontend Developer",
  bio: "Passionate about creating beautiful and functional web applications. I specialize in React and JavaScript.",
  contact: {
    email: "johndoe@example.com",
    phone: "(555) 123-4567",
    github: "https://github.com/johndoe",
    linkedin: "https://www.linkedin.com/in/johndoe",
  },
};

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 88 },
  { name: "React", level: 85 },
  { name: "Node.js", level: 75 },
  { name: "Git", level: 80 },
];

const projects = [
  {
    name: "Portfolio Website",
    description: "A personal portfolio website built with React.",
    link: "https://github.com/johndoe/portfolio",
    image: "https://via.placeholder.com/300x200",
  },
  {
    name: "Todo App",
    description: "A simple to-do app using React and local storage.",
    link: "https://github.com/johndoe/todo-app",
    image: "https://via.placeholder.com/300x200",
  },
  {
    name: "Weather App",
    description: "A weather forecast app that fetches data from an API.",
    link: "https://github.com/johndoe/weather-app",
    image: "https://via.placeholder.com/300x200",
  },
];

function App() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-brand">{profile.name}</div>
        <div className="nav-links">
          <button onClick={() => setActiveSection("home")}>Home</button>
          <button onClick={() => setActiveSection("skills")}>Skills</button>
          <button onClick={() => setActiveSection("projects")}>Projects</button>
          <button onClick={() => setActiveSection("contact")}>Contact</button>
        </div>
      </nav>

      <main className="main-content">
        {activeSection === "home" && (
          <header className="hero">
            <h1>{profile.name}</h1>
            <h2>{profile.title}</h2>
            <p>{profile.bio}</p>
          </header>
        )}

        {activeSection === "skills" && (
          <section className="skills-section">
            <h2>Skills</h2>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-card">
                  <h3>{skill.name}</h3>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeSection === "projects" && (
          <section className="projects-section">
            <h2>Projects</h2>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <div key={index} className="project-card">
                  <img src={project.image} alt={project.name} />
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeSection === "contact" && (
          <section className="contact-section">
            <h2>Contact Me</h2>
            <div className="contact-grid">
              <a href={`mailto:${profile.contact.email}`} className="contact-card">
                <i className="fas fa-envelope"></i>
                <span>{profile.contact.email}</span>
              </a>
              <a href={`tel:${profile.contact.phone}`} className="contact-card">
                <i className="fas fa-phone"></i>
                <span>{profile.contact.phone}</span>
              </a>
              <a href={profile.contact.github} className="contact-card" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
                <span>GitHub</span>
              </a>
              <a href={profile.contact.linkedin} className="contact-card" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
                <span>LinkedIn</span>
              </a>
            </div>
          </section>
        )}
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;