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
import hackathon from './assets/hackathon.png';

import React from 'react';
import './App.css';

export default function App() {
  // Your personal information
  const profile = {
    name: "Louis Han",
    image: "https://lh3.googleusercontent.com/a/ACg8ocKC6DcW9Or-7rpK7CGDMP1YZYTEL8ojaYE64oFxRASKyVp0Vpo=s288-c-no",
    bio1: "✅ Mechanical Engineer with mechatronics and manufacturing expertise, professional programming experience, and research in tiny drone design under Prof. Mark G. Allen",
    bio2: "✅ Leadership and teamwork skills honed as a Korean Air Force officer and VP of the UPenn Mechanical Engineering Graduate Association (MEGA)"
  };

  // Projects (UPDATED ONLY CONTENT)
  const projects = [
    {
      id: 1,
      title: "Tiny Drone Research with Prof. Mark G. Allen",
      image: drone,
      description:
        "Designing and optimizing a ~25 g micro-drone in Penn’s Micro Sensors and Micro Actuators Group to target a 30-minute hover time using Python-based aluminum-air battery testing automation, performance characterization pipeline, and a SolidWorks chassis fabricated via 3D printing and laser cutting.",
      technologies: [
        "Python",
        "Aerodynamics",
        "SolidWorks",
        "3D Printing",
        "Laser Cutting",
        "Battery Testing Automation"
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
        "Architected and implemented end-to-end RAG patent-search pipeline using Python, HuggingFace, Elasticsearch, enabling inventors to query patents via natural language instead of Boolean keyword filters",
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
    },
    {
      id: 5,
      title: "Wharton Hack-AI-thon – AI Review Intelligence System",
      image: hackathon,
      description:
        "Built AI system that generates intelligent follow-up questions from hotel reviews (Expedia dataset) using machine learning and prompt engineering. Selected as a finalist (Top 6 teams) in Wharton Hack-AI-thon.",
      technologies: [
        "Python",
        "Machine Learning",
        "Prompt Engineering",
        "NLP"
      ]
    }
  ];

  const leaderships = [
    {
      id: 1,
      title: "Vice President @ UPenn Mechanical Engineering Graduate Association (MEGA)",
      period: "September 2025 - Present",
      image: mega,
      description:
        "As the Vice President of MEGA, organizing events and workshops for over 300 mechanical engineering graduate students, fostering a strong sense of community and professional development within the department.",
      description2: "",
      link: "https://mega.seas.upenn.edu/mega-board/",
    },
    {
      id: 2,
      title: "Lab Instructor & Tool Library Staff @ UPenn Garage Lab",
      period: "October 2025 - Present",
      image: garage,
      description:
        "As a staff member in a UPenn lab equipped with machining tools such as a mill, sander, and band saw, I assist and guide students in the safe and proper use of these machines",
      description2: "",
      link: "https://meamlabs.seas.upenn.edu/garage-lab-and-tool-library/"
    },
    {
      id: 3,
      title: "Operations Officer, Captain @ The Korean Air Force",
      period: "March 2019 - May 2022",
      image: mil,
      description:
        "As an Operations Officer in the Korean Air Force, I led a team of 50 personnel in managing daily airstrip maintenance, ensuring safety and efficiency while coordinating with multiple departments to support mission objectives.",
      description2:
        "(The photo was taken with my commander (a colonel) on the day I was discharged)",
      link: ""
    }
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
            <p className="header-item">
              🎓 M.S.E. in Mechanical Engineering and Applied Mechanics, University of Pennsylvania
              <img src={upennLogo} alt="UPenn Logo" className="school-logo" />
            </p>

            <br />
            <h3>Note: This portfolio website is optimized for desktop browsing</h3>
          </div>
        </div>
      </header>

      {/* Profile */}
      <section className="profile-section">
        <div className="container">
          <div className="profile-card">
            <div className="profile-banner"></div>

            <div className="profile-content">
              <img src={profile.image} alt={profile.name} className="profile-image" />
              <h2 className="profile-name">{profile.name}</h2>

              <p className="profile-bio">{profile.bio1}</p>
              <p className="profile-bio">{profile.bio2}</p>

              <div className="social-links">
                <a href="https://www.linkedin.com/in/uiseok-han-79a546229/" target="_blank" rel="noopener noreferrer">
                  <img src={linkedinLogo} className="social-icon" alt="LinkedIn" />
                </a>
                <a href="https://github.com/euyseok-han/" target="_blank" rel="noopener noreferrer">
                  <img src={githubLogo} className="social-icon" alt="GitHub" />
                </a>
                <a href="mailto:louishan@seas.upenn.edu">
                  <img src={mailLogo} className="social-icon" alt="Email" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="projects-section">
        <div className="container">
          <h3 className="section-title">Featured Projects</h3>

          <div className="projects-list">
            {projects.map((project, index) => (
              <div key={project.id} className="project-card">

                <div className="project-image-container">
                  <img src={project.image} alt={project.title} className="project-image" />
                </div>

                <div className="project-details">
                  <span className="project-number">
                    PROJECT {String(index + 1).padStart(2, '0')}
                  </span>

                  <h4 className="project-title">{project.title}</h4>
                  <p className="project-description">{project.description}</p>

                  <div className="technologies-list">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>

                  <div className="project-links">

  {project.demo && (
    <a href={project.demo} target="_blank" rel="noopener noreferrer">
      <img src={youtubeLogo} alt="demo" className="link-icon" />
    </a>
  )}

  {project.link && (
    <a href={project.link} target="_blank" rel="noopener noreferrer">
      <img src={link} alt="link" className="link-icon" />
    </a>
  )}

  {project.github_link && (
    <a href={project.github_link} target="_blank" rel="noopener noreferrer">
      <img src={githubLogo} alt="github" className="link-icon" />
    </a>
  )}

</div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="projects-section">
        <div className="container">
          <h3 className="section-title">Leadership Experiences</h3>

          <div className="projects-list">
            {leaderships.map((item, index) => (
              <div key={item.id} className="project-card">

                <div className="project-image-container">
                  <img src={item.image} alt={item.title} className="project-image" />
                </div>

                <div className="project-details">
                  <span className="project-number">
                    Leadership {String(index + 1).padStart(2, '0')}
                  </span>

                  <h4 className="project-title">{item.title}</h4>
                  <p className="project-period">{item.period}</p>
                  <p className="project-description">{item.description}</p>

                  {item.description2 && (
                    <p className="project-description">{item.description2}</p>
                  )}

                  {item.link && (
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      Link
                    </a>
                  )}
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© 2025 Louis Han</p>
          <p>Built with React + AWS</p>
        </div>
      </footer>

    </div>
  );
}