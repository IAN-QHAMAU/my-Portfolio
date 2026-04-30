// Personal Information
const personalInfo = {
  name: "Ian Kamau Muthoni",
  title: "Data Science Student",
  subtitle: "1st Year | University of Nairobi · Bachelor in Data Science",
  bio: "Data Science student at the University of Nairobi who asks a lot of 'why' questions, sometimes too many, but that's how I learn best. I turn raw data into ready-to-apply insights through exploratory analysis, and I build on the web too: from landing pages to end-to-end payment integrations. Passionate about using data to solve real, everyday problems.",
  email: "kamauian118@gmail.com",
  location: "Nairobi, Kenya",
  profileImage: "assets/ian.svg",
};

// Social Links
const socialLinks = [
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/ian-kamau-80082634a/",
    icon: "fab fa-linkedin",
  },
  {
    platform: "GitHub",
    url: "https://github.com/IAN-QHAMAU",
    icon: "fab fa-github",
  },
  {
    platform: "Email",
    url: "mailto:kamauian118@gmail.com",
    icon: "fas fa-envelope",
  },
];

// Work Experience
const experiences = [
  {
    id: "exp1",
    company: "Roy Ndungu Official",
    role: "Web Developer",
    duration: "2025 - Present",
    startDate: new Date("2025-01-01"),
    endDate: null,
    description: [
      "Building and managing the official website for Roy Ndungu from the ground up",
      "Handling design decisions, content structure, and frontend implementation",
      "Ensuring the site reflects the client's personal brand and is optimised for performance",
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    location: "Nairobi, Kenya",
  },
  {
    id: "exp2",
    company: "Shee Digital",
    role: "Frontend Developer",
    duration: "2024 - 2025",
    startDate: new Date("2024-06-01"),
    endDate: new Date("2025-01-01"),
    description: [
      "Designed and built a complete landing page for a social media management brand (sheedigital.com)",
      "Translated the client's brand identity into a clean, conversion-focused web presence",
      "Delivered a fully responsive layout optimised for mobile and desktop",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    location: "Nairobi, Kenya",
  },
  {
    id: "exp3",
    company: "Freelance",
    role: "Payment Integration Developer",
    duration: "2024 - Present",
    startDate: new Date("2024-01-01"),
    endDate: null,
    description: [
      "Built end-to-end payment integration flows using Paystack, a leading African fintech platform",
      "Handled transaction initialisation, verification, and webhook confirmation for both local and international payments",
      "Implemented secure, reliable checkout experiences for client web applications",
    ],
    technologies: ["JavaScript", "Paystack API", "Node.js", "REST APIs"],
    location: "Nairobi, Kenya",
  },
];

// Certifications
const certifications = [
  {
    id: "cert2",
    name: "Introduction to Modern AI",
    issuer: "Online",
    issueDate: new Date("2024-12-01"),
    credentialId: "",
    verificationUrl: "",
    certificateImage: "assets/certs/Intro to modern AI.png",
  },
  {
    id: "cert1",
    name: "Introduction to Data Science",
    issuer: "Self-directed / Online",
    issueDate: new Date("2025-01-01"),
    credentialId: "",
    verificationUrl: "",
    certificateImage: "assets/certs/Introduction_to_Data_Science_certificate.png",
  },
  {
    id: "cert3",
    name: "Introduction to Cybersecurity (Entry Exam)",
    issuer: "Cisco Networking Academy - In Progress",
    issueDate: new Date("2026-04-01"),
    credentialId: "",
    verificationUrl: "assets/certs/Intro%20to%20cybersecurity%20knowledge%20check.pdf",
    certificateImage: "",
  },
];

// Skills
const skills = [
  {
    category: "Data Science & Analysis",
    highlighted: true,
    skills: [
      { name: "Python", level: "Advanced" },
      { name: "Pandas", level: "Advanced" },
      { name: "NumPy", level: "Intermediate" },
      { name: "Matplotlib", level: "Advanced" },
      { name: "Exploratory Data Analysis", level: "Advanced" },
      { name: "Jupyter Notebook", level: "Advanced" },
    ],
  },
  {
    category: "Web Development",
    highlighted: true,
    skills: [
      { name: "HTML/CSS", level: "Advanced" },
      { name: "JavaScript", level: "Advanced" },
      { name: "Responsive Design", level: "Advanced" },
      { name: "Payment Integration (Paystack)", level: "Intermediate" },
      { name: "REST APIs", level: "Intermediate" },
    ],
  },
  {
    category: "Tools & Productivity",
    highlighted: false,
    skills: [
      { name: "Git & GitHub", level: "Intermediate" },
      { name: "Google Colab", level: "Intermediate" },
      { name: "VS Code", level: "Advanced" },
      { name: "AI Tools", level: "Intermediate" },
    ],
  },
  {
    category: "Soft Skills",
    highlighted: false,
    skills: [
      { name: "Analytical Thinking", level: "Expert" },
      { name: "Problem Solving", level: "Advanced" },
      { name: "Self-directed Learning", level: "Expert" },
      { name: "Client Communication", level: "Advanced" },
    ],
  },
];

// Projects
const projects = [
  {
    id: "proj1",
    title: "Student Productivity EDA",
    description:
      "Exploratory analysis of student habits and productivity patterns, uncovering which behaviours most significantly impact academic performance. Findings give students and educators ready-to-apply recommendations.",
    technologies: ["Python", "Pandas", "Matplotlib", "HTML"],
    thumbnail: "assets/project1.jpg",
    liveUrl: "https://ian-qhamau.github.io/student-productivity-EDA/visualizations/index.html",
    githubUrl: "https://github.com/IAN-QHAMAU/student-productivity-EDA",
    completionDate: new Date("2024-11-01"),
    featured: true,
  },
  {
    id: "proj2",
    title: "Public Transport Delays EDA",
    description:
      "Investigated delay patterns across public transit systems to identify peak problem times, routes, and causes. Insights can directly inform operations decisions for transit authorities.",
    technologies: ["Python", "Pandas", "Matplotlib", "HTML"],
    thumbnail: "assets/project2.jpg",
    liveUrl: "https://ian-qhamau.github.io/public-transport-delays_EDA/outputs/index.html",
    githubUrl: "https://github.com/IAN-QHAMAU/public-transport-delays_EDA",
    completionDate: new Date("2024-10-01"),
    featured: true,
  },
  {
    id: "proj3",
    title: "Personal Finance EDA",
    description:
      "Analysed personal spending and income data to surface hidden financial patterns. Produces actionable insights on where money goes and how to make smarter budgeting decisions.",
    technologies: ["Python", "Pandas", "Matplotlib", "HTML"],
    thumbnail: "assets/project3.jpg",
    liveUrl: "https://ian-qhamau.github.io/personal_finance-EDA/",
    githubUrl: "https://github.com/IAN-QHAMAU/personal_finance-EDA",
    completionDate: new Date("2024-09-01"),
    featured: true,
  },
  {
    id: "proj4",
    title: "Spotify Tracks EDA",
    description:
      "Deep-dived into Spotify track data to uncover what musical features define popular songs. Explores tempo, energy, danceability and more across genres and eras.",
    technologies: ["Python", "Pandas", "Matplotlib", "HTML"],
    thumbnail: "assets/project4.jpg",
    liveUrl: "https://ian-qhamau.github.io/Spotify-tracks-EDA/visualisations/index.html",
    githubUrl: "https://github.com/IAN-QHAMAU/Spotify-tracks-EDA",
    completionDate: new Date("2024-08-01"),
    featured: true,
  },
  {
    id: "proj5",
    title: "Countdown Clock",
    description:
      "A clean real-time countdown timer built with vanilla JavaScript. Features live time display, custom input, and a minimal interface focused on usability.",
    technologies: ["JavaScript", "HTML", "CSS"],
    thumbnail: "assets/project5.jpg",
    liveUrl: null,
    githubUrl: "https://github.com/IAN-QHAMAU/countdown-clock",
    completionDate: new Date("2024-07-01"),
    featured: false,
  },
  {
    id: "proj6",
    title: "Shee Digital Landing Page",
    description:
      "A professional landing page built for a social media management brand. Focused on clean design, clear messaging, and mobile-first responsiveness.",
    technologies: ["HTML", "CSS", "JavaScript"],
    thumbnail: "assets/project6.jpg",
    liveUrl: "https://sheedigital.com",
    githubUrl: null,
    completionDate: new Date("2024-06-01"),
    featured: false,
  },
];