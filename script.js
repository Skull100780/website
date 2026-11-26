const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.setAttribute("aria-label", isExpanded ? "Open menu" : "Close menu");
  navLinks.classList.toggle("is-open", !isExpanded);
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open menu");
    navLinks.classList.remove("is-open");
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelector("#contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;

  const details = new FormData(form);
  const subject = encodeURIComponent(`Project enquiry from ${details.get("name")}`);
  const body = encodeURIComponent(
    `Name: ${details.get("name")}\nEmail: ${details.get("email")}\nService: ${details.get("service")}\n\n${details.get("message")}`,
  );
  document.querySelector("#form-status").textContent = "Your email app will open with your project details ready to send.";
  window.location.href = `mailto:hello@salonedigital.com?subject=${subject}&body=${body}`;
});
