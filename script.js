const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

// Mobile navigation menu
menuBtn.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  menuBtn.textContent = isOpen ? "✕" : "☰";
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});

// Close menu after clicking a navigation link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtn.textContent = "☰";
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

// Automatically update the copyright year
document.getElementById("year").textContent = new Date().getFullYear();
