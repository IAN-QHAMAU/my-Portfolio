// main.js - wires all data into the DOM

document.addEventListener("DOMContentLoaded", () => {
  initHero();
  initAbout();
  initProjects();
  initExperience();
  initSkills();
  initCertifications();
  initContact();
  initFooter();
  initNavigation();
  initScrollAnimations();
  document.getElementById("footerYear").textContent = new Date().getFullYear();
});

// Hero
function initHero() {
  document.getElementById("heroName").textContent = personalInfo.name;
  document.getElementById("heroTitle").textContent = personalInfo.title;
  document.getElementById("heroSubtitle").textContent = personalInfo.subtitle;
  const socials = document.getElementById("heroSocials");
  socials.innerHTML = socialLinks.map(createSocialLinkHTML).join("");
}

// About
function initAbout() {
  document.getElementById("aboutBio").textContent = personalInfo.bio;
  document.getElementById("aboutLocation").textContent = personalInfo.location;
  const emailEl = document.getElementById("aboutEmail");
  emailEl.href = `mailto:${personalInfo.email}`;
  emailEl.textContent = personalInfo.email;
}

// Projects
let currentFilter = "all";

function initProjects() {
  renderProjects("all");
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderProjects(btn.dataset.filter);
    });
  });
}

function renderProjects(filter) {
  const grid = document.getElementById("projectsGrid");
  const filtered = filter === "featured" ? projects.filter((p) => p.featured) : projects;
  grid.innerHTML = filtered.map((p, i) => createProjectCardHTML(p, i)).join("");
  initProjectCardInteractions(grid);
}

function initProjectCardInteractions(grid) {
  grid.querySelectorAll(".project-card").forEach((card) => {
    card.classList.add("visible");

    const liveUrl = card.dataset.liveUrl;
    if (!liveUrl) return;

    card.setAttribute("role", "link");
    card.setAttribute("tabindex", "0");

    card.addEventListener("click", (event) => {
      if (event.target.closest("a")) return;
      window.open(liveUrl, "_blank", "noopener,noreferrer");
    });

    card.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      window.open(liveUrl, "_blank", "noopener,noreferrer");
    });
  });
}

// Experience
function initExperience() {
  const list = document.getElementById("experienceList");
  list.innerHTML = experiences.map((e, i) => createExperienceCardHTML(e, i)).join("");
}

// Skills
function initSkills() {
  const container = document.getElementById("skillsContainer");
  container.innerHTML = skills.map(createSkillCategoryHTML).join("");
}

// Certifications
function initCertifications() {
  const grid = document.getElementById("certificationsGrid");
  grid.innerHTML = certifications.map((c, i) => createCertificationCardHTML(c, i)).join("");
}

// Contact form
function initContact() {
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    clearErrors();

    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };

    const errors = validateForm(formData);

    if (Object.keys(errors).length > 0) {
      Object.entries(errors).forEach(([field, msg]) => {
        const el = document.getElementById(`${field}Error`);
        if (el) el.textContent = msg;
      });
      return;
    }

    const btn = document.getElementById("submitBtn");
    btn.disabled = true;
    btn.innerHTML = '<span>Sending...</span><i class="fas fa-spinner fa-spin"></i>';

    const result = await sendEmail(formData);
    const successEl = document.getElementById("formSuccess");
    successEl.textContent = result.message;
    successEl.className = result.success ? "form-success show" : "form-error-msg show";

    btn.disabled = false;
    btn.innerHTML = '<span>Send Message</span><i class="fas fa-paper-plane"></i>';

    if (result.success) form.reset();
  });
}

function clearErrors() {
  ["name", "email", "subject", "message"].forEach((field) => {
    const el = document.getElementById(`${field}Error`);
    if (el) el.textContent = "";
  });
  const s = document.getElementById("formSuccess");
  if (s) { s.textContent = ""; s.className = "form-success"; }
}

// Footer socials
function initFooter() {
  document.getElementById("footerSocials").innerHTML = socialLinks.map(createSocialLinkHTML).join("");
}

// Navigation
function initNavigation() {
  const toggle = document.getElementById("navToggle");
  const navLinks = document.querySelector(".nav-links");

  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    toggle.classList.toggle("active");
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").replace("#", "");
      smoothScrollTo(targetId);
      navLinks.classList.remove("open");
      toggle.classList.remove("active");
    });
  });

  window.addEventListener("scroll", updateActiveNavLink);

  // Navbar scroll style
  window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  });
}

// Scroll animations
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(
    ".experience-card, .project-card, .skill-category, .certification-card, .highlight-card"
  ).forEach((el) => observer.observe(el));
}