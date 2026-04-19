// Utility Functions

// Format date to readable string
function formatDate(date) {
  const options = { year: "numeric", month: "short" };
  return date.toLocaleDateString("en-US", options);
}

// Get skill level percentage
function getSkillLevelPercentage(level) {
  const levels = {
    Beginner: 25,
    Intermediate: 50,
    Advanced: 75,
    Expert: 100,
  };
  return levels[level] || 0;
}

// Email validation
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Form validation
function validateForm(formData) {
  const errors = {};
  if (!formData.name || formData.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters long";
  }
  if (!formData.email || !isValidEmail(formData.email)) {
    errors.email = "Please enter a valid email address";
  }
  if (!formData.subject || formData.subject.trim().length < 3) {
    errors.subject = "Subject must be at least 3 characters long";
  }
  if (!formData.message || formData.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters long";
  }
  if (formData.message && formData.message.trim().length > 1000) {
    errors.message = "Message must not exceed 1000 characters";
  }
  return errors;
}

// Smooth scroll to section
function smoothScrollTo(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    const navHeight = document.getElementById("navbar").offsetHeight;
    const elementPosition = element.offsetTop - navHeight;
    window.scrollTo({ top: elementPosition, behavior: "smooth" });
  }
}

// Update active navigation link based on scroll position
function updateActiveNavLink() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  const navHeight = document.getElementById("navbar").offsetHeight;
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - navHeight - 100;
    const sectionHeight = section.offsetHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
}

// Send email via Web3Forms
async function sendEmail(formData) {
  const accessKey = "YOUR_WEB3FORMS_ACCESS_KEY";
  const data = {
    access_key: accessKey,
    name: formData.name,
    email: formData.email,
    subject: formData.subject,
    message: formData.message,
  };
  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    if (result.success) {
      return { success: true, message: "Message sent! I'll get back to you soon." };
    } else {
      throw new Error("Submission failed");
    }
  } catch (error) {
    return {
      success: false,
      message: "Failed to send. Please email me directly at kamauian118@gmail.com",
    };
  }
}

// Create social link HTML
function createSocialLinkHTML(link) {
  return `
    <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="${link.platform}">
      <i class="${link.icon}"></i>
    </a>
  `;
}

// Create experience card HTML
function createExperienceCardHTML(exp, index = 0) {
  const descriptionHTML = exp.description.map((item) => `<li>${item}</li>`).join("");
  const techHTML = exp.technologies.map((tech) => `<span class="tech-tag">${tech}</span>`).join("");
  const endLabel = exp.endDate ? formatDate(exp.endDate) : "Present";

  return `
    <div class="experience-card" style="animation-delay: ${index * 0.1}s">
      <div class="experience-header">
        <div>
          <h3 class="experience-company">${exp.company}</h3>
          <p class="experience-role">${exp.role}</p>
        </div>
        <span class="experience-duration">${exp.duration}</span>
      </div>
      <div class="experience-description">
        <ul>${descriptionHTML}</ul>
      </div>
      <div class="experience-technologies">${techHTML}</div>
    </div>
  `;
}

// Create certification card HTML
function createCertificationCardHTML(cert, index = 0) {
  const verifyLink = cert.verificationUrl
    ? `<a href="${cert.verificationUrl}" target="_blank" rel="noopener noreferrer" class="certification-verify">Verify Credential</a>`
    : "";
  const hasImage = cert.certificateImage && cert.certificateImage !== "";
  const clickHandler = hasImage
    ? `onclick="openCertificateModal('${cert.certificateImage}', '${cert.name}')"`
    : "";

  return `
    <div class="certification-card ${hasImage ? "has-image" : ""}" style="animation-delay: ${index * 0.1}s" ${clickHandler}>
      <div class="certification-name">${cert.name}</div>
      <div class="certification-issuer">${cert.issuer}</div>
      <div class="certification-date">${formatDate(cert.issueDate)}</div>
      ${hasImage ? '<div class="view-certificate-hint">🔍 Click to view certificate</div>' : ""}
      ${verifyLink}
    </div>
  `;
}

// Create skill category HTML
function createSkillCategoryHTML(category) {
  const skillsHTML = category.skills
    .map((skill) => {
      const percentage = getSkillLevelPercentage(skill.level);
      return `
        <div class="skill-item">
          <div class="skill-name">${skill.name}</div>
          <div class="skill-level">
            <div class="skill-level-fill" style="width: ${percentage}%"></div>
          </div>
        </div>
      `;
    })
    .join("");

  return `
    <div class="skill-category ${category.highlighted ? "highlighted" : ""}">
      <h3 class="skill-category-title">${category.category}</h3>
      <div class="skills-grid">${skillsHTML}</div>
    </div>
  `;
}

// Create project card HTML
function createProjectCardHTML(project, index = 0) {
  const techHTML = project.technologies.map((tech) => `<span class="tech-tag">${tech}</span>`).join("");
  const liveLink = project.liveUrl
    ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-link">Live Demo</a>`
    : "";
  const githubLink = project.githubUrl
    ? `<a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-link">GitHub</a>`
    : "";

  return `
    <div class="project-card ${project.featured ? "featured" : ""} ${project.liveUrl ? "has-live-link" : ""}" data-live-url="${project.liveUrl || ""}" style="animation-delay: ${index * 0.1}s">
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-technologies">${techHTML}</div>
        <div class="project-links">${liveLink}${githubLink}</div>
      </div>
    </div>
  `;
}

// Open certificate modal
function openCertificateModal(imagePath, certName) {
  const modal = document.getElementById("certificateModal");
  const modalImg = document.getElementById("modalCertImage");
  const modalTitle = document.getElementById("modalCertTitle");
  if (modal && modalImg && modalTitle) {
    modalImg.src = imagePath;
    modalTitle.textContent = certName;
    modal.style.display = "flex";
    requestAnimationFrame(() => modal.classList.add("show"));
    document.body.style.overflow = "hidden";
  }
}

// Close certificate modal
function closeCertificateModal() {
  const modal = document.getElementById("certificateModal");
  if (modal) {
    modal.classList.remove("show");
    setTimeout(() => {
      modal.style.display = "none";
    }, 200);
    document.body.style.overflow = "";
  }
}