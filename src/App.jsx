import linkedinLogo from './assets/LinkedIn_icon.png';
import githubLogo from './assets/github.png';
import mailLogo from './assets/mail_icon.png';
import upennLogo from './assets/upenn.png';
import youtubeLogo from './assets/youtube_icon.png';
import miniCar from './assets/arduino_car.png';
import patsol from './assets/patsol.png';
import link from './assets/link.png';
import drone from './assets/drone.jpg';
import waldo from './assets/waldo.gif';
import mega from './assets/mega.png';
import mil from './assets/mil.JPG';
import garage from './assets/garage.jpg';
import rcCar from './assets/rc_car.GIF';


import React from 'react';
import './App.css';

export default function App() {
  // Your personal information
  const profile = {
    name: "Louis Han",
    image: "https://lh3.googleusercontent.com/a/ACg8ocKC6DcW9Or-7rpK7CGDMP1YZYTEL8ojaYE64oFxRASKyVp0Vpo=s288-c-no", // Replace with your photo URL
    bio1: "✅ Mechanical Engineer with mechatronics and manufacturing expertise, professional programming experience, and research in tiny drone design under Prof. Mark G. Allen",
    bio2: "✅ Leadership and teamwork skills honed as a Korean Air Force officer and VP of the UPenn Mechanical Engineering Graduate Association (MEGA)"
  };

  // Your projects data
const projects = [
  {
    id: 1,
    title: "Tiny Drone Research with Prof. Mark G. Allen",
    image: drone,
    description:
      "Designing and optimizing a ~25 g micro-drone in Penn’s Micro Sensors and Micro Actuators Group to target a 30-minute hover time using Python-based mass/power modeling and a SolidWorks chassis fabricated via 3D printing and laser cutting.",
    technologies: [
      "Python",
      "Aerodynamics",
      "SolidWorks",
      "3D Printing",
      "Laser Cutting"
    ],
    github: "",
    demo: "",
    link: "",
    github_link: "https://github.com/euyseok-han/AAB_Drone"
  },
  {
    id: 2,
    title: "Dual Motor RC Car with Web Dashboard",
    image: rcCar,
    description:
      "Built an ESP32-C3-based dual-motor RC car with quadrature encoders, PID speed control, and a real-time browser dashboard for telemetry, mounted on a SolidWorks-designed chassis fabricated via laser cutting.",
    technologies: [
      "ESP32-C3",
      "Wi-Fi Communication",
      "C++ / Arduino Framework",
      "Quadrature Encoders",
      "PID Control",
      "SolidWorks",
      "Laser Cutting",
      "HTML/CSS/JavaScript"
    ],
    github_link: "https://github.com/euyseok-han/MEAM5100",
    demo: "https://youtu.be/2a1YbDmjhKQ?feature=shared",
    link: ""
  },
  {
    id: 3,
    title: "Waldo",
    image: waldo,
    description:
      "Designed and built a 2-DOF Waldo input device that maps input motion to servo motion using potentiometers and an ATmega32U microcontroller programmed in C with register-level control, with structure modeled in SolidWorks and laser-cut.",
    technologies: [
      "ATmega32U",
      "C (Register-Level Programming)",
      "Servo Motors",
      "SolidWorks",
      "Rapid Prototyping"
    ],
    github: "",
    demo: "https://www.youtube.com/shorts/5qD2xaDjFkE",
    link: "",
    github_link: ""
  },
  {
    id: 4,
    title: "Patsol – AI Patent Search Engine",
    image: patsol,
    description:
      "Built Patsol, an AI-powered patent search engine with a RAG pipeline (FastAPI, React, Elasticsearch, transformer embeddings) that lets inventors query in natural language, achieving roughly 2× higher hit rate than existing Korean services and securing ~$71K in funding after pitching to investors.",
    technologies: [
      "React",
      "FastAPI",
      "Elasticsearch",
      "RAG (Retrieval-Augmented Generation)",
      "AWS",
      "Git",
      "Test-Driven Development (TDD)"
    ],
    github: "",
    demo: "",
    link: "https://patsol.kr/",
    github_link: ""
  }
];

const leaderships = [
    {
      id: 1,
      title: "UPenn Mechanical Engineering Graduate Association (MEGA) Vice President",
      period: "September 2025 - Present",
      image: mega,
      description: "As the Vice President of MEGA, organizing events and workshops for over 300 mechanical engineering graduate students, fostering a strong sense of community and professional development within the department.",
      description2: "",
      link: "",
    },
    {
      id: 2,
      title: "Garage Lab Staff Member",
      period: "October 2025 - Present",
      image: garage,
      description: "As a staff member in a UPenn lab equipped with machining tools such as a mill, sander, and band saw, I assist and guide students in the safe and proper use of these machines",
      description2: "",
    },
    {
      id: 3,
      title: "The Korean Air Force Operations Officer, Captain",
      period: "March 2019 - May 2022",
      image: mil,
      description: "As an Operations Officer in the Korean Air Force, I led a team of 50 personnel in managing daily airstrip maintenance, ensuring safety and efficiency while coordinating with multiple departments to support mission objectives. ",
      description2: "(The photo was taken with my commander (a colonel) on the day I was discharged)",
    },
    

  ];


  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-contents">
            <p className="header-item-bigger">Mechanical Engineer | Software Developer</p>
          </div>
          <h1 className="header-title">Louis Han</h1>
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
            <br></br>
            <h3>Note: This portfolio website is optimized for desktop browsing</h3>
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
                
                <a href="https://www.linkedin.com/in/uiseok-han-79a546229/" className="btn btn-linkedin" target="_blank" rel="noopener noreferrer">
                  <img src={linkedinLogo} alt="LinkedIn" className="social-icon"></img>
                </a>
                <a href="https://github.com/euyseok-han/" className="btn btn-linkedin" target="_blank" rel="noopener noreferrer">
                  <img src={githubLogo} alt="Github" className="social-icon"></img>
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
                    {project.github_link && <a
                      href={project.github_link}
                      className="btn btn-link"
                      target="_blank"
                      rel="noopener noreferrer">
                        Github Code
                        <img src={githubLogo} alt="Github Icon" className="link-icon"></img>
                    </a>}
                    
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/*Leadership Experience Section*/}
      <section className="projects-section">
        <div className="container">
          <h3 className="section-title">Leadership Experiences</h3>
          
          <div className="projects-list">
            {leaderships.map((project, index) => (
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
                    Leadership Experience {String(index + 1).padStart(2, '0')}
                  </span>
                  
                  <h4 className="project-title">{project.title}</h4>
                  <p className='project-period'>{project.period}</p>
                  <p className="project-description">{project.description}</p>
                  {project.description2 && <div><br></br> <p className="project-description">{project.description2}</p></div>}
                  
                  {/* Links */}
                
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
          <p className="footer-subtext">Built from scartch by Louis using React and AWS</p>
        </div>
      </footer>
    </div>
  );
}