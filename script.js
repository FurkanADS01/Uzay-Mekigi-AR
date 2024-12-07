document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".navbar a");
  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const section = document.querySelector(link.getAttribute("href"));
      section.scrollIntoView({ behavior: "smooth" });
    });
  });
});
