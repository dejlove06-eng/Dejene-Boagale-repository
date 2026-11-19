// Dejene Bogale portfolio interactions
"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".site-nav");
  const backToTop = document.getElementById("backToTop");
  const year = document.getElementById("year");
  const contactForm = document.getElementById("contactForm");
  const feedback = document.getElementById("formFeedback");

  year.textContent = new Date().getFullYear();

  const updateScrollUI = () => {
    const scrolled = window.scrollY > 40;
    nav.classList.toggle("scrolled", scrolled);
    backToTop.classList.toggle("visible", window.scrollY > 450);
  };
  window.addEventListener("scroll", updateScrollUI, { passive: true });
  updateScrollUI();

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Close the mobile navigation after selecting a section.
  document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {
    link.addEventListener("click", () => {
      const menu = document.getElementById("mainNav");
      if (menu.classList.contains("show") && window.bootstrap) {
        bootstrap.Collapse.getOrCreateInstance(menu).hide();
      }
    });
  });

  // Keep the active navigation item in sync with the visible section.
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => {
            link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
          });
        }
      });
    }, { rootMargin: "-35% 0px -55% 0px" });
    sections.forEach(section => observer.observe(section));
  }

  // The contact form uses the visitor's email application; it does not store data.
  contactForm.addEventListener("submit", event => {
    event.preventDefault();
    const name = document.getElementById("senderName").value.trim();
    const email = document.getElementById("senderEmail").value.trim();
    const message = document.getElementById("message").value.trim();
    if (!name || !email || !message) {
      feedback.textContent = "Please complete all fields.";
      return;
    }
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    feedback.textContent = "Opening your email application. If it does not open, email dejlove06@gmail.com directly.";
    window.location.href = `mailto:dejlove06@gmail.com?subject=${subject}&body=${body}`;
  });

  // Creates a simple downloadable profile summary as a plain-text file.
  document.getElementById("downloadCv").addEventListener("click", () => {
    const profile = `DEJENE BOGALE\nMSc in Information Technology\nLecturer | Researcher | STEM Trainer\n\nPROFESSIONAL PROFILE\nLecturer in the Department of Information Technology, College of Computing and Digitalization, Ethiopian Public Service University.\n\nEDUCATION\n- MSc in Information Technology — Jimma University\n- BSc in Computer Science — Mattu University\n\nAREAS OF EXPERIENCE\n- Higher education teaching and student project supervision\n- STEM training: Arduino, basic electronics, robotics, coding and digital skills\n- Laboratory coordination, course offering, quality assurance and curriculum activities\n\nTECHNICAL SKILLS\n- Web development: HTML, CSS, JavaScript, PHP fundamentals\n- Computer maintenance, troubleshooting and operating systems\n- Networking support and SQL basics\n- Data analysis and applied computing research\n\nRESEARCH INTERESTS\nAfaan Oromo natural language processing, text classification, applied AI, and technology-enabled STEM education.\n\nPROFESSIONAL DEVELOPMENT\nICDL / ToT, Cisco training, HDP, Open edX, Ethio Coders and STEM Center training (include verified details in a formal CV).\n\nCONTACT\nEmail: dejlove06@gmail.com\nLocation: Addis Ababa, Ethiopia\n\nNote: Please verify and update dates, certificate names, and other details before using this summary as a formal CV.`;
    const blob = new Blob([profile], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "Dejene_Bogale_Profile.txt";
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);
  });
});

// Enhanced interactions added for the upgraded portfolio.
document.addEventListener("DOMContentLoaded", () => {
  // Theme switch: accessible and session-local (no cookies or storage needed).
  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
      const isLight = document.body.classList.contains("light-mode");
      themeToggle.innerHTML = isLight ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
      themeToggle.setAttribute("aria-label", isLight ? "Switch to dark theme" : "Switch to light theme");
      themeToggle.title = isLight ? "Switch to dark theme" : "Switch to light theme";
    });
  }

  // Filter skill cards by area.
  const filterButtons = document.querySelectorAll(".filter-chip");
  const skillItems = document.querySelectorAll(".skill-item");
  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      filterButtons.forEach(item => item.classList.toggle("active", item === button));
      const selected = button.dataset.filter;
      skillItems.forEach(card => card.classList.toggle("filtered-out", selected !== "all" && card.dataset.category !== selected));
    });
  });

  // Reveal content as it enters the viewport.
  const revealTargets = document.querySelectorAll(".section-heading, .info-panel, .timeline-card, .skill-card, .project-card, .cert-panel, .contact-form");
  revealTargets.forEach(element => element.classList.add("reveal"));
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealTargets.forEach(element => revealObserver.observe(element));
  } else {
    revealTargets.forEach(element => element.classList.add("is-visible"));
  }

  // Highlight quick-dock links while scrolling through the page.
  const quickLinks = document.querySelectorAll(".quick-dock a");
  const quickSections = document.querySelectorAll("main section[id]");
  if ("IntersectionObserver" in window && quickLinks.length) {
    const dockObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          quickLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
        }
      });
    }, { rootMargin: "-40% 0px -45% 0px" });
    quickSections.forEach(section => dockObserver.observe(section));
  }
});
