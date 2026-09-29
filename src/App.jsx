
import linkedinLogo from './assets/LinkedIn_icon.png';
import githubLogo from './assets/github.png';
import mailLogo from './assets/mail_icon.png';
import upennLogo from './assets/upenn.png';
import youtubeLogo from './assets/youtube_icon.png';
import patsol from './assets/patsol.png';
import link from './assets/link.png';
import drone from './assets/drone.jpg';
import waldo from './assets/waldo.gif';
import mega from './assets/mega.png';
import mil from './assets/mil.JPG';
import garage from './assets/garage.jpg';
import rcCar from './assets/rc_car.GIF';
// 원본 코드에서 apec이 import 없이 사용되고 있었습니다. 실제 파일명에 맞게 수정하세요.
import apec1 from './assets/apec1.png';
import apec2 from './assets/apec2.png';
import apec3 from './assets/apec3.png';
import roboracer1 from './assets/ROBORACER1.gif';
import roboracer2 from './assets/ROBORACER2.gif';
// src/assets/ 폴더에 이력서 PDF를 이 이름으로 넣어주세요.
import resumePdf from './assets/LouisHan_Resume.pdf';

import React, { useState } from 'react';
import './App.css';

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* 사진을 여러 장 넣으려면 images 배열에 이미지를 추가하면 됩니다.       */
/* 예) images: [drone, drone2, drone3]                                 */
/* fit: "cover"(꽉 채움, 기본값) | "contain"(잘리지 않게, 스크린샷용)    */
/* ------------------------------------------------------------------ */

const profile = {
  name: "Louis Han",
  role: "Mechanical Engineer & Software Developer",
  image:
    "https://lh3.googleusercontent.com/a/ACg8ocKC6DcW9Or-7rpK7CGDMP1YZYTEL8ojaYE64oFxRASKyVp0Vpo=s288-c-no",
  bio: [
"Mechanical engineer with expertise in mechatronics, manufacturing, and robotics, with research experience in aluminum-air battery under Prof. Mark G. Allen.",

"Two years of professional backend development experience, complemented by hands-on experience with Python, C++, ROS 2, and embedded systems.",

"Strong ability to understand and analyze complex technologies and projects, developed through experience as a KIPO Patent Examiner evaluating diverse technologies and intellectual property.",

"Leadership and teamwork skills developed as a Korean Air Force officer and Vice President of the UPenn Mechanical Engineering Graduate Association (MEGA).",
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
  id: 2,
  title: "Autonomous RC Car with ROS 2 and LiDAR",
  images: [roboracer1, roboracer2],
  description:
    "Developing a ROS 2-based autonomous RC car using Python and LiDAR for real-time perception and navigation, implementing wall following, obstacle avoidance, and reactive steering algorithms.",
  technologies: [
    "ROS 2",
    "Python",
    "LiDAR",
    "LaserScan",
    "Autonomous Navigation",
    "Wall Following",
    "Obstacle Avoidance",
    "Ackermann Steering",
  ],
  github_link: "",
  demo: "https://www.youtube.com/shorts/vV8adN95J0Y",
},
  {
    id: 3,
    title: "Dual Motor RC Car with Web Dashboard",
    images: [rcCar],
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
      "HTML/CSS/JavaScript",
    ],
    github_link: "https://github.com/euyseok-han/MEAM5100",
    demo: "https://youtu.be/2a1YbDmjhKQ?feature=shared",
  },
  {
    id: 1,
    title: "Tiny Drone Research with Prof. Mark G. Allen",
    images: [drone],
    description:
      "Perform Python-based mass/power modeling, motor–propeller optimization, and SolidWorks chassis design with 3D-printed fabrication for developing compact, high-efficiency surveillance drones.",
    technologies: ["Python", "Aerodynamics", "SolidWorks", "3D Printing", "Laser Cutting",],
    github_link: "",
  },
  {
    id: 4,
    title: "Waldo",
    images: [waldo],
    description:
      "Designed and built a 2-DOF Waldo input device that maps input motion to servo motion using potentiometers and an ATmega32U microcontroller programmed in C with register-level control, with structure modeled in SolidWorks and laser-cut.",
    technologies: [
      "ATmega32U",
      "C (Register-Level Programming)",
      "Servo Motors",
      "SolidWorks",
      "Rapid Prototyping",
    ],
    demo: "https://www.youtube.com/shorts/5qD2xaDjFkE",
  },
  {
    id: 5,
    title: "Patsol – AI Patent Search Engine",
    images: [patsol],
    fit: "contain",
    description:
      "Architected and implemented an end-to-end RAG patent-search pipeline using Python, HuggingFace, and Elasticsearch, enabling inventors to query patents in natural language instead of Boolean keyword filters.",
    technologies: [
      "React",
      "FastAPI",
      "Elasticsearch",
      "RAG (Retrieval-Augmented Generation)",
      "AWS",
      "Git",
      "Test-Driven Development (TDD)",
    ],
    link: "https://patsol.kr/",
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

function ImageCarousel({ images, alt, fit = "cover" }) {
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
            <img src={src} alt={`${alt} – photo ${i + 1} of ${count}`} loading="lazy" />
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
  return (
    <article className="entry">
      <ImageCarousel images={item.images} alt={item.title} fit={item.fit} />

      <div className="entry-body">
        <h3 className="entry-title">{item.title}</h3>
        {item.period && <p className="entry-period">{item.period}</p>}

        <p className="entry-text">{item.description}</p>
        {item.description2 && <p className="entry-text">{item.description2}</p>}

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
          {item.demo && (
            <a className="btn btn-outline" href={item.demo} target="_blank" rel="noopener noreferrer">
              <img src={youtubeLogo} alt="" className="btn-icon" />
              Watch demo
            </a>
          )}
          {item.github_link && (
            <a className="btn btn-outline" href={item.github_link} target="_blank" rel="noopener noreferrer">
              <img src={githubLogo} alt="" className="btn-icon" />
              View code
            </a>
          )}
          {item.link && (
            <a className="btn btn-outline" href={item.link} target="_blank" rel="noopener noreferrer">
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
