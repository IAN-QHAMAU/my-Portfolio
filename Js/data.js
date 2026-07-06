// Personal Information
const personalInfo = {
  name: "Ian Kamau",
  title: "Data Science Student",
  subtitle: "1st Year | University of Nairobi · Bachelor in Data Science",
  bio: "Data Science student at the University of Nairobi. Curious by default, and drawn to challenges that demand both critical thinking and practical execution. I enjoy stepping into uncertainty and turning complex problems into solutions that people can actually use, whether through web development or data-driven work.I thrive in collaborative environments, stay composed under pressure, and value clear communication as much as technical ability. I believe the best work is built by people who are willing to learn continuously, adapt quickly, and challenge one another to raise the standard.For me, every project is more than another item in a portfolio—it's an opportunity to sharpen my craft, broaden my perspective, and create something with lasting value.",
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
    company: "Roy Ndungu Foundation Official Website",
    role: "Web Developer",
    duration: "2025 - 2026",
    startDate: new Date("2025-01-01"),
    endDate: new Date("2026-12-31"),
    description: [
      "Designed and developed a multi-page advocacy website focused on engaging donors, volunteers, and community members",
      "Built 10+ responsive pages with interactive navigation, animations, modals, and partner showcases",
      "Integrated Paystack donations and Formspree-powered volunteer/contact forms",
      "Improved mobile usability with custom touch handling to reduce accidental taps while scrolling",
      "Resolved accessibility issues including semantic structure, keyboard navigation, and proper form labeling",
      "Built interactive UI components with smooth animations and reduced-motion support",
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Design",
      "Paystack",
      "Formspree",
      "Accessibility (WCAG)",
    ],
    location: "Nairobi, Kenya",
  },
  {
    id: "exp2",
    company: "Shee Digital",
    role: "Frontend Developer",
    duration: "2026",
    startDate: new Date("2026-01-01"),
    endDate: new Date("2026-12-31"),
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
    certificateImage: "assets/certs/IntrotoModernAI-1.png",
  },
  {
    id: "cert1",
    name: "Introduction to Data Science",
    issuer: "Self-directed / Online",
    issueDate: new Date("2025-01-01"),
    credentialId: "",
    verificationUrl: "",
    certificateImage: "assets/certs/IntrotoDataScience-1.png",
  },
  {
    id: "cert0",
    name: "Introduction to Cybersecurity (Entry Exam)",
    issuer: "Cisco Networking Academy",
    issueDate: new Date("2026-04-01"),
    credentialId: "",
    verificationUrl: "",
    certificateImage: "assets/certs/Intro%20to%20cybersecurity%20knowledge%20check.pdf",
  },
  {
    id: "cert3",
    name: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    issueDate: new Date("2026-06-09"),
    credentialId: "",
    verificationUrl: "",
    certificateImage: "assets/certs/Introduction to Cybersecurity-1.png",
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
  {
    id: "proj7",
    title: "Roy Ndungu Foundation Website",
    description:
      "Multi-page advocacy website for a disability awareness foundation with donor and volunteer journeys, accessible components, and responsive performance.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Design",
      "Paystack",
      "Formspree",
      "Accessibility (WCAG)",
    ],
    thumbnail: "assets/project7.jpg",
    liveUrl: "https://www.royndungufoundation.org/",
    githubUrl: null,
    completionDate: new Date("2025-02-01"),
    featured: false,
  },
];
