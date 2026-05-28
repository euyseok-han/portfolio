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

  /* ================= PROFILE ================= */
  const profile = {
    name: "Louis Han",
    image: "https://lh3.googleusercontent.com/a/ACg8ocKC6DcW9Or-7rpK7CGDMP1YZYTEL8ojaYE64oFxRASKyVp0Vpo=s288-c-no",
    bio1:
      "Mechanical Engineer specializing in robotics, mechatronics, and full-stack system development with research experience in UAVs and intelligent systems.",
    bio2:
      "Former Korean Air Force officer and VP of UPenn MEGA with experience in large-scale systems, manufacturing, and cross-functional engineering teams."
  };

  /* ================= EDUCATION ================= */
  const education = [
    {
      school: "University of Pennsylvania",
      degree: "M.S.E. Mechanical Engineering and Applied Mechanics",
      detail: "Concentration: Mechatronic & Robotic Systems",
      period: "May 2027"
    },
    {
      school: "Seoul National University",
      degree: "B.S. Mechanical & Aerospace Engineering",
      period: "Feb 2017"
    }
  ];

  /* ================= EXPERIENCE ================= */
  const experience = [
    {
      title: "Research Assistant – Micro Sensors & Micro Actuators Group",
      org: "University of Pennsylvania",
      period: "Oct 2025 – Present",
      description:
        "Designed end-to-end drone systems including chassis, motor–propeller optimization, and fabrication. Developed Python-based aluminum-air battery testing automation and performance optimization pipeline."
    },
    {
      title: "Research Intern – Advanced Machine Intelligence Lab",
      org: "KAIST",
      period: "Jun 2025 – Aug 2025",
      description:
        "Built PyTorch-based vision pipeline using RGB/NIR images for material property prediction and 3D point cloud annotation."
    },
    {
      title: "Software Developer / Co-founder",
      org: "Patsol",
      period: "Oct 2024 – Jan 2025",
      description:
        "Architected RAG-based patent search system using HuggingFace and Elasticsearch. Secured $71K seed funding via VC pitch (SpringCamp)."
    },
    {
      title: "Backend Software Developer",
      org: "Yogiyo",
      period: "Dec 2022 – Sep 2024",
      description:
        "Built scalable backend systems for 500K+ merchants. Reduced query latency (20s → ~2s) and automated 1M+ daily orders using Airflow + Django APIs."
    },
    {
      title: "Patent Examiner",
      org: "Korean Intellectual Property Office",
      period: "2018 – 2019, 2022",
      description:
        "Conducted prior-art searches and patent examinations under Korean patent law, evaluating novelty and industrial applicability."
    }
  ];

  /* ================= PROJECTS ================= */
  const projects = [
    {
      id: 1,
      title: "Tiny Drone Research (Prof. Mark G. Allen)",
      image: drone,
      description:
        "End-to-end micro UAV development: chassis design, motor–propeller optimization, aerodynamic modeling, 3D-printed fabrication, and Python-based aluminum-air battery testing automation pipeline for performance evaluation and optimization.",
      technologies: [
        "Python",
        "Aerodynamics",
        "SolidWorks",
        "3D Printing",
        "Battery Testing Automation"
      ],
      github_link: "https://github.com/euyseok-han/AAB_Drone"
    },
    {
      id: 2,
      title: "Dual Motor Autonomous RC Car with Web Dashboard",
      image: rcCar,
      description:
        "ESP32-C3 robotic car with PID speed control, quadrature encoders, ToF-based wall detection, autonomous navigation, and real-time web telemetry dashboard.",
      technologies: [
        "ESP32-C3",
        "C++",
        "PID Control",
        "Wi-Fi",
        "ToF Sensors",
        "SolidWorks"
      ],
      github_link: "https://github.com/euyseok-han/MEAM5100",
      demo: "https://youtu.be/2a1YbDmjhKQ?feature=shared"
    },
    {
      id: 3,
      title: "Waldo 2-DOF Input Device",
      image: waldo,
      description:
        "Built motion-mapping system using ATmega32U, potentiometers, servo control, and register-level C programming with SolidWorks-fabricated structure.",
      technologies: ["ATmega32U", "C", "Servo Control", "SolidWorks"]
    },
    {
      id: 4,
      title: "Patsol – AI Patent Search Engine",
      image: patsol,
      description:
        "RAG-based patent search system using HuggingFace + Elasticsearch enabling natural language query over patents instead of keyword search.",
      technologies: ["React", "FastAPI", "Elasticsearch", "RAG", "AWS"],
      link: "https://patsol.kr/"
    },
    {
      id: 5,
      title: "Wharton Hack-AI-thon – AI Review Intelligence System",
      image: hackathon,
      description:
        "Built AI system generating intelligent follow-up questions from hotel reviews (Expedia dataset) using ML and prompt engineering. Advanced to finals.",
      technologies: ["Python", "Machine Learning", "Prompt Engineering", "NLP"]
    }
  ];

  /* ================= LEADERSHIP ================= */
  const leaderships = [
    {
      title: "Vice President – UPenn MEGA",
      period: "Sep 2025 – Present",
      description:
        "Organizing events and workshops for 300+ graduate students, fostering professional development and community."
    },
    {
      title: "Lab Staff – UPenn Garage Lab",
      period: "Oct 2025 – Present",
      description:
        "Assisting students with machining tools (mill, band saw, sander) and ensuring safe fabrication practices."
    },
    {
      title: "Operations Officer (Captain) – Korean Air Force",
      period: "Mar 2019 – May 2022",
      description:
        "Led 50 personnel in airstrip operations, maintenance coordination, and mission support execution."
    }
  ];

  /* ================= UI COMPONENTS ================= */

  const Section = ({ title, children }) => (
    <section className="section">
      <h3 className="section-title">{title}</h3>
      {children}
    </section>
  );

  return (
    <div className="app">

      {/* PROFILE */}
      <header className="header">
        <h1>{profile.name}</h1>
        <p>{profile.bio1}</p>
        <p>{profile.bio2}</p>
      </header>

      <Section title="Education">
        {education.map((e, i) => (
          <div key={i}>
            <b>{e.school}</b>
            <div>{e.degree}</div>
            <div>{e.detail}</div>
            <div>{e.period}</div>
            <br />
          </div>
        ))}
      </Section>

      <Section title="Experience">
        {experience.map((e, i) => (
          <div key={i}>
            <b>{e.title}</b> @ {e.org}
            <div>{e.period}</div>
            <p>{e.description}</p>
            <br />
          </div>
        ))}
      </Section>

      <Section title="Projects">
        {projects.map((p) => (
          <div key={p.id}>
            <h4>{p.title}</h4>
            <p>{p.description}</p>
          </div>
        ))}
      </Section>

      <Section title="Leadership">
        {leaderships.map((l, i) => (
          <div key={i}>
            <b>{l.title}</b>
            <div>{l.period}</div>
            <p>{l.description}</p>
            <br />
          </div>
        ))}
      </Section>

    </div>
  );
}