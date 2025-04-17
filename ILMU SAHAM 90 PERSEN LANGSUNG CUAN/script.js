// Toggle dark mode
document.getElementById("toggle-theme").addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const themeBtn = document.getElementById("toggle-theme");
    themeBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
  });
  
  // Scroll animation
  const animatedSections = document.querySelectorAll(".animate");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  
  animatedSections.forEach(section => observer.observe(section));
  