/* =========================================================
   VELORA WATCHES — interactions
   ⚙️  EDIT YOUR CONTACT DETAILS HERE:
   ========================================================= */
const CONFIG = {
  // WhatsApp number in international format, digits only (no +, no spaces).
  // Morocco example: 2126XXXXXXXX
  phone: "212600000000",
  // Instagram username (without the @)
  instagram: "velora.watches",
};

(function () {
  "use strict";

  const waBase = "https://wa.me/" + CONFIG.phone;
  const igUrl = "https://instagram.com/" + CONFIG.instagram;

  /* ---- Build WhatsApp links (generic) ---- */
  document.querySelectorAll(".js-wa").forEach(function (el) {
    const msg = el.getAttribute("data-msg") || "السلام، بغيت نطلب ساعة من VELORA 🙏";
    el.href = waBase + "?text=" + encodeURIComponent(msg);
    el.target = "_blank";
    el.rel = "noopener";
  });

  /* ---- Build per-product order links ---- */
  document.querySelectorAll(".js-order").forEach(function (el) {
    const card = el.closest("[data-product]");
    const name = card ? card.getAttribute("data-product") : "ساعة";
    const msg = "السلام 🙏 بغيت نطلب *" + name + "* من VELORA.\nواش متوفرة؟ وشحال الثمن مع التوصيل؟";
    el.href = waBase + "?text=" + encodeURIComponent(msg);
    el.target = "_blank";
    el.rel = "noopener";
  });

  /* ---- Instagram links ---- */
  document.querySelectorAll(".js-instagram").forEach(function (el) {
    el.href = igUrl;
    el.target = "_blank";
    el.rel = "noopener";
  });

  /* ---- Navbar: background on scroll ---- */
  const nav = document.getElementById("nav");
  const onScroll = function () {
    if (window.scrollY > 24) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Mobile menu ---- */
  const toggle = document.getElementById("navToggle");
  const mobile = document.getElementById("navMobile");
  if (toggle) {
    toggle.addEventListener("click", function () {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    mobile.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---- FAQ accordion ---- */
  document.querySelectorAll(".faq__item").forEach(function (item) {
    const btn = item.querySelector(".faq__q");
    const panel = item.querySelector(".faq__a");
    btn.addEventListener("click", function () {
      const isOpen = item.getAttribute("aria-expanded") === "true";
      // close others
      document.querySelectorAll(".faq__item").forEach(function (other) {
        if (other !== item) {
          other.setAttribute("aria-expanded", "false");
          other.querySelector(".faq__a").style.maxHeight = null;
        }
      });
      item.setAttribute("aria-expanded", String(!isOpen));
      panel.style.maxHeight = isOpen ? null : panel.scrollHeight + "px";
    });
  });

  /* ---- Reveal on scroll ---- */
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const reveals = document.querySelectorAll(".reveal");
  if (reduce || !("IntersectionObserver" in window)) {
    reveals.forEach(function (r) { r.classList.add("in"); });
  } else {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (r) { io.observe(r); });
  }

  /* ---- Footer year ---- */
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
