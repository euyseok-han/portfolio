import linkedinLogo from './assets/LinkedIn_icon.png';
import mailLogo from './assets/mail_icon.png';
import upennLogo from './assets/upenn.png';
import youtubeLogo from './assets/youtube_icon.png';
import miniCar from './assets/arduino_car.png';
import patsol from './assets/patsol.png';
import link from './assets/link.png';
import drone from './assets/drone.jpg';
import React from 'react';
import './App.css';

export default function App() {
  // Your personal information
  const profile = {
    name: "Louis Han",
    image: "https://lh3.googleusercontent.com/a/ACg8ocKC6DcW9Or-7rpK7CGDMP1YZYTEL8ojaYE64oFxRASKyVp0Vpo=s288-c-no", // Replace with your photo URL
    bio1: "✅ Mechanical Engineer with mechatronics and manufacturing expertise, professional programming experience, and research in micro drone design under Prof. Mark G. Allen",
    bio2: "✅ Leadership and teamwork skills honed as a Korean Air Force officer and VP of the UPenn Mechanical Engineering Graduate Association (MEGA)"
  };

  // Your projects data
  const projects = [
    {
      id: 1,
      title: "Tiny Drone Research with Prof. Mark G. Allen",
      image: drone,
      description: "Designing and optimizing a tiny drone (~50 g) to achieve a 30-minute flight time through aerodynamic analysis (theoretical calculations), Python simulations for motor and battery specifications, and frame design. Built and prototyped components using SolidWorks and 3D printing for lightweight and efficient performance, conducting this research as a research assistant.",
      technologies: ["Python", "Aerodynamics Analysis", "SolidWorks", "3D Printing",],
      github: "",
      demo: "", 
      link: ""
    },
    {
      id: 2,
      title: "Waldo",
      image: "https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1",
      description: "A Waldo is an input device that tracks motion and maps it to a corresponding output, often mirroring the input’s structure. For this project, I designed and built a Waldo using potentiometers and servo motors, programmed with C on an microcontroller(ATmega32U) using register-level programming, and fabricated components via SolidWorks modeling and laser cutting.",
      technologies: ["microcontroller (ATmega32U)", "C (Programming Language)", "SolidWorks", "Rapid Prototyping"],
      github: "",
      demo: "https://www.youtube.com/shorts/5qD2xaDjFkE",
      link: ""
    },
    {
      id: 3,
      title: "Autonomous Driving Mini Car",
      image: miniCar,
      description: "Won first place among over 100 students at Seoul National University in an Autonomous Driving Competition by designing and building a small self-driving Arduino car and programming navigation logic for fast and accurate route completion.",
      technologies: ["Arduino", "Solidworks", "ultrasonic sensor", "servo motors"],
      github: "",
      demo: "",
      link: ""
    },
    {
      id: 4,
      title: "Patsol",
      image: patsol,
      description: "As the software engineer of a startup, developed Patsol, an AI-powered patent search engine using FastAPI, React, and NLP to streamline prior art discovery and assist inventors in obtaining patents, achieving a 64% hit rate—twice the performance of existing Korean services",
      technologies: ["React", "FastAPI", "AWS", "NLP", "Elasticsearch"],
      github: "",
      demo: "",
      link: "https://patsol.kr/"
    }
  ];

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container">
          <h1 className="header-title">Louis's Portfolio</h1>
          <div className="header-contents">
            <p className="header-item">📍 Philadelphia, PA, USA</p>
            <p className="header-item">📧 <a href="mailto:louishan@seas.upenn.edu">louishan@seas.upenn.edu</a></p>
            <p className="header-item">🎓 M.S.E. in Mechanical Engineering and Applied Mechanics, University of Pennsylvania
              <img 
                src={upennLogo}      // import this at the top: import upennLogo from './assets/upenn.png';
                alt="UPenn Logo" 
                className="school-logo"
              />
            </p>
          </div>
        </div>
      </header>

      {/* Profile Section */}
      <section className="profile-section">
        <div className="container">
          <div className="profile-card">
            <div className="profile-banner"></div>
            <div className="profile-content">
              <img 
                src={profile.image} 
                alt={profile.name}
                className="profile-image"
              />
              <h2 className="profile-name">{profile.name}</h2>
              <p className="profile-bio">{profile.bio1}</p>
              <p className="profile-bio">{profile.bio2}</p>
              
              {/* Social Links */}
              <div className="social-links">
                {/* <a href="https://github.com/yourusername" className="btn btn-github" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a> */}
                <a href="https://www.linkedin.com/in/uiseok-han-79a546229/" className="btn btn-linkedin" target="_blank" rel="noopener noreferrer">
                  <img src={linkedinLogo} alt="LinkedIn" className="social-icon"></img>
                </a>
                <a href="mailto:louishan@seas.upenn.edu" className="btn btn-linkedin" target="_blank" rel="noopener noreferrer">
                  <img src={mailLogo} alt="Email" className="social-icon"></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <div className="container">
          <h3 className="section-title">Featured Projects</h3>
          
          <div className="projects-list">
            {projects.map((project, index) => (
              <div key={project.id} className="project-card">
                {/* Project Image - Left Side */}
                <div className="project-image-container">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-image"
                  />
                </div>
                
                {/* Project Details - Right Side */}
                <div className="project-details">
                  <span className="project-number">
                    PROJECT {String(index + 1).padStart(2, '0')}
                  </span>
                  
                  <h4 className="project-title">{project.title}</h4>
                  
                  <p className="project-description">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="technologies-section">
                    <p className="technologies-label">Technologies Used:</p>
                    <div className="technologies-list">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Links */}
                  <div className="project-links">
                  
                    {project.demo && <a 
                      href={project.demo}
                      className="btn btn-demo"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo Shorts  
                         <img src={youtubeLogo} alt="Youtube Shorts" className="youtube-icon"></img>
                    </a>}
                    {project.link && <a
                      href={project.link}
                      className="btn btn-link"
                      target="_blank"
                      rel="noopener noreferrer">
                        Link
                        <img src={link} alt="Link Icon" className="link-icon"></img>
                    </a>}
                    
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p className="footer-text">© 2025 {profile.name}. All rights reserved.</p>
          <p className="footer-subtext">Built with React & Vite</p>
        </div>
      </footer>
    </div>
  );
}