/* ===== 1. قائمة الموبايل ===== */
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});


/* ===== 2. أنيميشن الظهور عند السكرول ===== */
// العناصر اللي عاوزينها تظهر بأنيميشن
const revealElements = document.querySelectorAll(
  ".hero-content, .section-heading, .department-card, .stat-item, " +
  ".project-card, .testimonial-card, .faq-list, .contact-section, " +
  ".info-card, .contact-form, .map-wrap, .narrow, .other-links"
);

// بنخبّيهم الأول
revealElements.forEach(function (element) {
  element.classList.add("reveal");
});

// لما العنصر يدخل الشاشة نضيف .show ونبطل نراقبه
const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealElements.forEach(function (element) {
  observer.observe(element);
});


/* ===== 3. زر العودة لأعلى ===== */
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
  backToTop.classList.toggle("show", window.scrollY > 300);
});

backToTop.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
