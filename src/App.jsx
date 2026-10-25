import linkedinLogo from './assets/LinkedIn_icon.png';
import githubLogo from './assets/github.png';
import mailLogo from './assets/mail_icon.png';
import upennLogo from './assets/upenn.png';
import youtubeLogo from './assets/youtube_icon.png';
import patsol from './assets/patsol.png';
import link from './assets/link.png';
import drone from './assets/drone.jpg';
import hackathon1 from './assets/hackathon1.jpg';
import hackathon2 from './assets/hackathon2.png';
import hackathon3 from './assets/hackathon3.jpg';
import mega from './assets/mega.png';
import mil from './assets/mil.JPG';
import garage from './assets/garage.jpg';
import rcCar from './assets/rc_car.GIF';
import apec1 from './assets/apec1.jpg';
import apec2 from './assets/apec2.JPG';
import apec3 from './assets/apec3.JPG';
import roboracer1 from './assets/ROBORACER1.gif';
import roboracer2 from './assets/ROBORACER2.gif';
// src/assets/ 폴더에 이력서 PDF를 이 이름으로 넣어주세요.
import resumePdf from './assets/Louis_Resume.pdf';
import yogiyo1 from './assets/yogiyo.png';
import yogiyo2 from './assets/franchise.png';
import React, { useState } from 'react';
import './App.css';



import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import ProjectDetail from "./ProjectDetail";


/* ------------------------------------------------------------------ */
/* Data                                                                */
/* 사진을 여러 장 넣으려면 images 배열에 이미지를 추가하면 됩니다.       */
/* 예) images: [drone, drone2, drone3]                                 */
/* fit: "cover"(꽉 채움, 기본값) | "contain"(잘리지 않게, 스크린샷용)    */
/* ------------------------------------------------------------------ */


const profile = {
  name: "Louis Han",
  role: "Software Engineer | Backend, AI & Robotics",
  image:
    "https://lh3.googleusercontent.com/a/ACg8ocKC6DcW9Or-7rpK7CGDMP1YZYTEL8ojaYE64oFxRASKyVp0Vpo=s288-c-no",
  bio: [
    "Software engineer with 2 years of professional Python backend experience at Yogiyo, building services for 500K+ users and data pipelines processing 1M+ orders per day.",
    "Built AI-powered patent search and retrieval workflows at Patsol, combining natural-language interfaces, RAG, and Elasticsearch.",
    "Currently pursuing an M.S.E. in Mechanical Engineering (Robotics) at Penn, with hands-on experience in autonomous navigation, embedded control, and drone power-system integration.",
    "Former KIPO patent examiner and Republic of Korea Air Force captain, bringing strong technical writing, analytical reasoning, ownership, and team leadership.",
  ],
  location: "Philadelphia, PA, USA",
  email: "louishan@seas.upenn.edu",
  education:
    "M.S.E. in Mechanical Engineering and Applied Mechanics, University of Pennsylvania",
  linkedin: "https://www.linkedin.com/in/uiseok-han-79a546229/",
  github: "https://github.com/euyseok-han/",
};

const projects = [
  {
    id: 6,
    title: "Yogiyo — Restaurant Self-Service Platform",
    category: "Backend Engineering · Production Systems",
    images: [yogiyo1, yogiyo2],
    description:
      "Built backend services for Yogiyo, one of South Korea's leading food delivery platforms, enabling restaurant owners to independently manage onboarding, menus, business hours, and other operational workflows. Developed APIs and automated workflows using Python, Django REST Framework, FastAPI, and React, supporting approximately 500K users. Worked toward low-latency, high-reliability service during peak traffic, participated in on-call rotations, and resolved production bugs. Also contributed to data engineering pipelines processing 1M+ orders per day to power restaurant sales insights. Selected to deliver a technical talk to prospective engineers at a Yogiyo career fair.",
    technologies: [
      "Python",
      "Django REST Framework",
      "FastAPI",
      "React",
      "JavaScript",
      "Backend APIs",
      "Data Engineering",
      "Production Support",
      "On-Call",
      "SQL",
      "shell scripting",
    ],
    ///link: "https://ceo.yogiyo.co.kr/",
  },
  {
    id: 5,
    title: "Patsol — AI-Powered Patent Intelligence",
    category: "AI Engineering · Search & Retrieval",
    images: [patsol],
    fit: "contain",
    description:
      "Joined Patsol as an early team member to develop AI-powered tools for patent professionals. Built natural-language patent search workflows, prior-art discovery, infringement-analysis capabilities, and AI-assisted patent claim drafting. Integrated Elasticsearch-based keyword search to refine natural-language results, combining semantic discovery with targeted retrieval. Contributed to end-to-end application development spanning the React frontend, FastAPI backend, and retrieval pipeline.",
    technologies: [
      "Python",
      "FastAPI",
      "React",
      "Elasticsearch",
      "RAG",
      "Hugging Face",
      "AWS",
      "Test-Driven Development",
    ],
    link: "https://patsol.kr/",
  },
  {
    id: 4,
    badge: "Wharton Hack-AI-thon Finalist",
    title: "AI Review Assistant for Expedia",
    category: "Generative AI · Full-Stack Development",
    images: [hackathon1, hackathon2, hackathon3],
    description:
      "Built an AI-powered assistant that helps travelers write more useful hotel reviews. Designed a prompt-driven workflow that asks targeted questions informed by review statistics and existing review data, helping users capture details that matter to future guests. Developed a web application with FastAPI and React to deliver the interactive experience. Selected as a finalist at the Wharton Hack-AI-thon.",
    technologies: [
      "Generative AI",
      "Prompt Engineering",
      "Python",
      "FastAPI",
      "React",
      "Data Analysis",
      "Full-Stack Development",
    ],
  },
  {
    id: 2,
    badge: "2nd Place · 20 Teams",
    title: "RoboRacer — Autonomous Racing with ROS 2",
    category: "Robotics · Planning & Control",
    images: [roboracer1, roboracer2],
    description:
      "Developed an autonomous racing system using ROS 2, Python, C++, and LiDAR, placing second among 20 teams in a Penn student racing competition. Implemented and evaluated path-planning and control methods including A*, RRT, RRT*, MPC, and PID. Integrated perception, navigation, obstacle avoidance, and vehicle control to improve real-time autonomous driving performance.",
    technologies: [
      "ROS 2",
      "Python",
      "C++",
      "LiDAR",
      "A*",
      "RRT / RRT*",
      "Model Predictive Control",
      "PID Control",
      "Autonomous Navigation",
    ],
    demo: "https://www.youtube.com/shorts/vV8adN95J0Y",
    //journalProjectId: "roboracer",
  },
  {
    id: 1,
    title: "Tiny Drone & Aluminum-Air Battery Research",
    category: "Robotics · Power Systems Integration",
    images: [drone],
    description:
      "Conducting research with Prof. Mark G. Allen on aluminum-air (AAB) battery systems for lightweight, energy-efficient drones. Experimentally evaluated battery dimensions, cell configurations, and current–voltage characteristics to optimize power output and system mass. Performed bench testing to evaluate 3D-printed propeller designs and inform motor selection. Integrated the AAB power source, flight controller, and custom-designed chassis into a compact drone platform, addressing system-level trade-offs in weight, power, and integration.",
    technologies: [
      "System Modeling",
      "Power & Mass Budgeting",
      "Battery Systems",
      "Motor-Propeller Optimization",
      "SolidWorks",
      "3D Printing",
      "PID Control",
    ],
    //journalProjectId: "tiny-drone",
  },
  {
    id: 3,
    title: "Embedded Autonomous Robot",
    category: "Embedded Systems · Motion Control",
    images: [rcCar],
    description:
      "Built an ESP32-C3-based dual-motor robot that navigates to target coordinates using ToF distance sensing and IR-based XY position feedback. Implemented coordinate-based motion planning, obstacle avoidance, and quadrature-encoder PID speed control. Designed a custom chassis in SolidWorks, fabricated it using laser cutting, and built a browser-based dashboard for real-time telemetry over Wi-Fi.",
    technologies: [
      "C++",
      "ESP32-C3",
      "Sensor Integration",
      "Motion Planning",
      "Obstacle Avoidance",
      "Quadrature Encoders",
      "PID Control",
      "Wi-Fi",
      "JavaScript",
      "SolidWorks",
      "Laser Cutting",
    ],
    github_link: "https://github.com/euyseok-han/MEAM5100",
    demo: "https://youtu.be/2a1YbDmjhKQ?feature=shared",
  },
];


const leaderships = [
  {
    id: 1,
    title: "Vice President, UPenn Mechanical Engineering Graduate Association (MEGA)",
    period: "September 2025 – Present",
    images: [mega],
    fit: "contain",
    description:
      "Organizing events and workshops for over 300 mechanical engineering graduate students, fostering a strong sense of community and professional development within the department.",
    link: "https://mega.seas.upenn.edu/mega-board/",
  },
  {
    id: 2,
    title: "Lab Instructor & Tool Library Staff, UPenn Garage Lab",
    period: "October 2025 – Present",
    images: [garage],
    description:
      "Staff member in a UPenn lab equipped with machining tools such as a mill, sander, and band saw. I assist and guide students in the safe and proper use of these machines.",
    link: "https://meamlabs.seas.upenn.edu/garage-lab-and-tool-library/",
  },
  {
    id: 3,
    title: "APEC Intellectual Property Expert Sub-Group Delegate",
    period: "August 2018",
    images: [apec1, apec2, apec3],
    description:
      "As a KIPO Patent Examiner, I represented the Republic of Korea in APEC Intellectual Property Expert Sub-Group meetings, participating in international discussions on intellectual property policy and cooperation.",
    description2:
      "Served as a speaker and presented recent KIPO rulings on ambiguous copyright infringement cases.",
  },
  {
    id: 4,
    title: "Operations Officer, Captain, The Korean Air Force",
    period: "March 2019 – May 2022",
    images: [mil],
    description:
      "Led a team of 50 personnel in managing daily airstrip maintenance, ensuring safety and efficiency while coordinating with multiple departments to support mission objectives.",
    description2:
      "The photo was taken with my commander (a colonel) on the day I was discharged.",
  },
];

/* ------------------------------------------------------------------ */
/* Components                                                          */
/* ------------------------------------------------------------------ */

function Chevron({ direction }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={direction === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ImageCarousel({ images, alt, fit = "cover", journalPath }) {
  const [index, setIndex] = useState(0);
  const count = images.length;
  const multiple = count > 1;

  const go = (step) => setIndex((i) => (i + step + count) % count);

  const handleKeyDown = (e) => {
    if (!multiple) return;
    if (e.key === "ArrowLeft") go(-1);
    if (e.key === "ArrowRight") go(1);
  };

  return (
    <div
      className={`carousel carousel-${fit}`}
      role="group"
      aria-roledescription="carousel"
      aria-label={`${alt} photos`}
      tabIndex={multiple ? 0 : undefined}
      onKeyDown={handleKeyDown}
    >
      <div className="carousel-track" style={{ transform: `translateX(-${index * 100}%)` }}>
        {images.map((src, i) => (
          <div className="carousel-slide" key={i} aria-hidden={i !== index}>
            {journalPath ? (
              <Link to={journalPath} className="carousel-case-study-link" tabIndex={i === index ? 0 : -1}>
                <img src={src} alt={`${alt} – photo ${i + 1} of ${count}`} loading="lazy" />
              </Link>
            ) : (
              <img src={src} alt={`${alt} – photo ${i + 1} of ${count}`} loading="lazy" />
            )}
          </div>
        ))}
      </div>

      {multiple && (
        <>
          <button
            type="button"
            className="carousel-arrow carousel-arrow-prev"
            onClick={() => go(-1)}
            aria-label="Previous photo"
          >
            <Chevron direction="left" />
          </button>
          <button
            type="button"
            className="carousel-arrow carousel-arrow-next"
            onClick={() => go(1)}
            aria-label="Next photo"
          >
            <Chevron direction="right" />
          </button>

          <span className="carousel-count" aria-live="polite">
            {index + 1} / {count}
          </span>

          <div className="carousel-dots">
            {images.map((_, i) => (
              <button
                type="button"
                key={i}
                className={`carousel-dot${i === index ? " is-active" : ""}`}
                onClick={() => setIndex(i)}
                aria-label={`Go to photo ${i + 1}`}
                aria-current={i === index}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function Entry({ item }) {
  const journalPath = item.journalProjectId
    ? `/projects/${item.journalProjectId}/week-1`
    : null;

  return (
    <article className="entry">
      {item.images?.length > 0 ? (
        <ImageCarousel
          images={item.images}
          alt={item.title}
          fit={item.fit}
          journalPath={journalPath}
        />
      ) : (
        <div className="entry-visual-placeholder">
          <span>{item.category || "Software Engineering"}</span>
          <strong>{item.title}</strong>
        </div>
      )}

      <div className="entry-body">
        {item.badge && (
          <p className="entry-badge">{item.badge}</p>
        )}

        <h3 className="entry-title">
          {journalPath ? <Link to={journalPath}>{item.title}</Link> : item.title}
        </h3>

        {item.category && (
          <p className="entry-category">{item.category}</p>
        )}

        {item.period && (
          <p className="entry-period">{item.period}</p>
        )}

        <p className="entry-text">{item.description}</p>

        {item.description2 && (
          <p className="entry-text">{item.description2}</p>
        )}

        {item.technologies && (
          <ul className="tags" aria-label="Technologies used">
            {item.technologies.map((tech) => (
              <li key={tech} className="tag">
                {tech}
              </li>
            ))}
          </ul>
        )}

        <div className="entry-links">
          {journalPath && (
            <Link className="btn btn-primary" to={journalPath}>
              Read case study <span aria-hidden="true">→</span>
            </Link>
          )}

          {item.demo && (
            <a
              className="btn btn-outline"
              href={item.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={youtubeLogo} alt="" className="btn-icon" />
              Watch demo
            </a>
          )}

          {item.github_link && (
            <a
              className="btn btn-outline"
              href={item.github_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={githubLogo} alt="" className="btn-icon" />
              View code
            </a>
          )}

          {item.link && (
            <a
              className="btn btn-outline"
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={link} alt="" className="btn-icon" />
              Visit site
            </a>
          )}
        </div>
      </div>
    </article>
  );
}


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortfolioHome />} />
        <Route path="/projects/:projectId/:weekSlug" element={<ProjectDetail />} />
        <Route path="*" element={<PortfolioHome />} />
      </Routes>
    </BrowserRouter>
  );
}

function PortfolioHome() {
  return (
    <div className="app">
      {/* Navigation */}
      <nav className="nav">
        <div className="container nav-inner">
          <a href="#top" className="nav-name">
            {profile.name}
          </a>
          <div className="nav-links">
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#leadership" className="nav-link">Leadership</a>
            <a href={resumePdf} download="Louis_Han_Resume.pdf" className="btn btn-primary btn-small">
              Resume
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="hero" id="top">
        <div className="container hero-inner">
          <div className="hero-text">
            <p className="hero-role">{profile.role}</p>
            <h1 className="hero-name">{profile.name}</h1>

            <ul className="hero-bio">
              {profile.bio.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>

            <dl className="hero-facts">
              <div>
                <dt>Location</dt>
                <dd>{profile.location}</dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </dd>
              </div>
              <div>
                <dt>Education</dt>
                <dd className="hero-edu">
                  <span>{profile.education}</span>
                  <img src={upennLogo} alt="University of Pennsylvania" className="school-logo" />
                </dd>
              </div>
            </dl>

            <div className="hero-actions">
              <a href={resumePdf} download="Louis_Han_Resume.pdf" className="btn btn-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M12 4v11m0 0l-4.5-4.5M12 15l4.5-4.5M5 19h14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Download resume
              </a>

              <div className="social-links">
                <a href={profile.linkedin} className="social-btn" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <img src={linkedinLogo} alt="" className="social-icon" />
                </a>
                <a href={profile.github} className="social-btn" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <img src={githubLogo} alt="" className="social-icon" />
                </a>
                <a href={`mailto:${profile.email}`} className="social-btn" aria-label="Email">
                  <img src={mailLogo} alt="" className="social-icon" />
                </a>
              </div>
            </div>
          </div>

          <div className="hero-photo">
            <img src={profile.image} alt={profile.name} />
            <span className="dim dim-h" aria-hidden="true" />
            <span className="dim dim-v" aria-hidden="true" />
          </div>
        </div>
      </header>

      <main>
        {/* Projects */}
        <section className="section" id="projects">
          <div className="container">
            <h2 className="section-title">Projects</h2>
            <div className="entries">
              {projects.map((p) => (
                <Entry key={p.id} item={p} />
              ))}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="section" id="leadership">
          <div className="container">
            <h2 className="section-title">Leadership</h2>
            <div className="entries">
              {leaderships.map((l) => (
                <Entry key={l.id} item={l} />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p>Built from scratch with React and AWS.</p>
        </div>
      </footer>
    </div>
  );
}
