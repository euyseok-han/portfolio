
import drone from "../assets/drone.jpg";
import roboracer1 from "../assets/ROBORACER1.gif";

export const projectJournal = {
  "tiny-drone": {
    title: "Tiny Drone & Aluminum-Air Battery Research",
    subtitle: "Battery characterization, propulsion, and system integration",
    weeks: [
      {
        slug: "week-1",
        title: "Week 1 — System Requirements & Mass Budget",
        date: "Week 1",
        blocks: [
          {
            type: "paragraph",
            heading: "Defining the challenge",
            text: "The goal was to investigate whether an aluminum-air battery system could power a lightweight drone. I started by breaking down the system into the battery, motor-propeller assembly, flight controller, chassis, and supporting hardware.",
          },
          {
            type: "image",
            src: drone,
            caption: "Micro-drone platform used for system integration.",
          },
          {
            type: "paragraph",
            heading: "Engineering trade-offs",
            text: "I developed Python-based mass and power estimates to compare battery configurations and identify the trade-offs between energy capacity, output power, and total system mass.",
          },

        ],
      },
      {
        slug: "week-2",
        title: "Week 2 — Battery Characterization",
        date: "Week 2",
        blocks: [
          {
            type: "paragraph",
            heading: "Experimental evaluation",
            text: "I evaluated battery dimensions and cell configurations through experiments, measuring current-voltage behavior to understand the relationship between cell design, electrical output, and system requirements.",
          },
          {
            type: "image",
            src: drone,
            caption: "Add a photo of the battery test setup here.",
          },
          {
            type: "youtube",
            url: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
            caption: "Battery testing or system integration demonstration.",
          },
        ],
      },
    ],
  },

  "roboracer": {
    title: "RoboRacer — Autonomous Racing",
    subtitle: "ROS 2, perception, planning, and control",
    weeks: [
      {
        slug: "week-1",
        title: "Week 1 — Sensor Integration",
        date: "Week 1",
        blocks: [
          {
            type: "paragraph",
            heading: "Building the foundation",
            text: "I explored the ROS 2 software stack and integrated LiDAR data into the autonomous racing workflow as a foundation for perception and navigation.",
          },
          {
            type: "image",
            src: roboracer1,
            caption: "Autonomous racing platform in action.",
          },
          {
            type: "youtube",
            url: "https://www.youtube.com/shorts/vV8adN95J0Y",
            caption: "",
          },
        ],
      },
    ],
  },
};
