// Replace this placeholder with your business WhatsApp number in international format.
// Kenyan number example: 2547XXXXXXXX (no plus sign, spaces or punctuation).
const WHATSAPP_NUMBER = "254768088643";
const menu = document.getElementById("menu");
const nav = document.getElementById("nav");
menu?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menu.setAttribute("aria-expanded", String(open));
  menu.textContent = open ? "✕" : "☰";
});
nav?.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("open");
  menu?.setAttribute("aria-expanded", "false");
  if (menu) menu.textContent = "☰";
}));
document.querySelectorAll("[data-service]").forEach(link => link.addEventListener("click", () => {
  const field = document.getElementById("service");
  if (field) field.value = link.dataset.service;
}));
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("contactForm").addEventListener("submit", event => {
  event.preventDefault();
  const status = document.getElementById("status");
  if (WHATSAPP_NUMBER.includes("X")) {
    status.textContent = "Setup needed: replace the placeholder WhatsApp number in script.js before using this form.";
    status.style.color = "#f3c878";
    return;
  }
  const data = new FormData(event.currentTarget);
  const message = ["Hello Greggs' Net HuB, I'd like to enquire about your services.", "", `Name: ${data.get("name")}`, data.get("email") ? `Email: ${data.get("email")}` : "", `Service: ${data.get("service")}`, `Project details: ${data.get("message")}`].filter(Boolean).join("\n");
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  status.textContent = "WhatsApp opened with your message prepared. Review it and press Send in WhatsApp.";
});
