/* ============================================================
   ORION Automobiles — main.js
   renderCard · filtres · galerie · validation · reveal
   Aucune dépendance. Chargé en defer après data.js.
   ============================================================ */

"use strict";

/* ---------- Utilitaires partagés ---------- */

const priceFormatter = new Intl.NumberFormat("fr-MA");

function formatPrice(amount) {
  return priceFormatter.format(amount) + " DH";
}

function formatKm(km) {
  return priceFormatter.format(km) + " km";
}

/* Tant que les fichiers webp ne sont pas déposés dans assets/img/,
   toute image manquante bascule sur le placeholder. */
function withFallback(img) {
  img.addEventListener("error", () => {
    if (img.src !== IMG_PLACEHOLDER) img.src = IMG_PLACEHOLDER;
  }, { once: true });
  return img;
}

function getCarById(id) {
  return CARS.find((car) => car.id === id) || null;
}

const STATUS_LABELS = {
  disponible: "Disponible",
  reserve: "Réservé",
  vendu: "Vendu"
};

/* ---------- renderCard — utilisée par l'accueil, les collections
   et les véhicules similaires. Ne pas dupliquer ce markup. ---------- */

function renderCard(car, revealDelay = 0) {
  const article = document.createElement("article");
  article.className = "car-card";
  article.setAttribute("data-reveal", "");
  if (revealDelay) article.style.setProperty("--reveal-delay", revealDelay + "ms");

  const sold = car.status === "vendu";
  const wrapper = document.createElement(sold ? "div" : "a");
  if (sold) {
    article.classList.add("car-card--vendu");
    wrapper.setAttribute("aria-disabled", "true");
  } else {
    wrapper.href = "car.html?id=" + encodeURIComponent(car.id);
    wrapper.setAttribute(
      "aria-label",
      car.brand + " " + car.name + ", " + formatPrice(car.price)
    );
  }

  const media = document.createElement("div");
  media.className = "car-card__media";

  if (car.status !== "disponible") {
    const tag = document.createElement("span");
    tag.className = "status-tag status-tag--" + car.status;
    tag.textContent = STATUS_LABELS[car.status];
    media.appendChild(tag);
  }

  const img = document.createElement("img");
  img.src = car.images[0];
  img.alt = car.brand + " " + car.name + " " + car.year + ", vue trois quarts avant";
  img.width = 1600;
  img.height = 1200;
  img.loading = "lazy";
  media.appendChild(withFallback(img));

  const body = document.createElement("div");
  body.className = "car-card__body";

  const brand = document.createElement("span");
  brand.className = "overline";
  brand.textContent = car.brand;

  const name = document.createElement("h3");
  name.className = "car-card__name";
  name.textContent = car.name;

  const meta = document.createElement("p");
  meta.className = "car-card__meta";
  meta.textContent = car.year + " · " + formatKm(car.km) + " · " + car.fuel;

  const price = document.createElement("p");
  price.className = "car-card__price";
  price.textContent = formatPrice(car.price);

  body.append(brand, name, meta, price);
  wrapper.append(media, body);
  article.appendChild(wrapper);
  return article;
}

/* ---------- Reveal au scroll — [data-reveal] + [data-reveal-delay] ---------- */

function initReveal() {
  const targets = document.querySelectorAll("[data-reveal]");
  if (!targets.length) return;

  const motionOK = window.matchMedia("(prefers-reduced-motion: no-preference)").matches;
  if (!motionOK || !("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("is-revealed"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const delay = el.getAttribute("data-reveal-delay");
        if (delay) el.style.setProperty("--reveal-delay", delay + "ms");
        el.classList.add("is-revealed");
        observer.unobserve(el);
      });
    },
    { threshold: 0.15 }
  );

  targets.forEach((el) => observer.observe(el));
}

/* ---------- Header : fond après 40px, menu mobile ---------- */

function initHeader() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 40);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".mobile-menu");
  if (!toggle || !menu) return;

  const close = menu.querySelector(".mobile-menu__close");

  function setMenu(open) {
    menu.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
    if (open) close.focus();
    else toggle.focus();
  }

  toggle.addEventListener("click", () => setMenu(true));
  close.addEventListener("click", () => setMenu(false));
  menu.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setMenu(false);
  });
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenu(false));
  });
}

/* ---------- Validation partagée (dialog réservation + contact) ----------
   rules : { nomDuChamp: [{ test(value, field) => bool, message }] } */

const PHONE_PATTERN = /^(0|\+212)([5-7])[0-9]{8}$/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateField(field, checks) {
  const value = field.value.trim();
  const errorEl = document.getElementById(field.getAttribute("aria-describedby"));
  const failed = checks.find((check) => !check.test(value, field));

  field.setAttribute("aria-invalid", failed ? "true" : "false");
  if (errorEl) errorEl.textContent = failed ? failed.message : "";
  return !failed;
}

function validate(form, rules) {
  let firstInvalid = null;
  Object.entries(rules).forEach(([name, checks]) => {
    const field = form.elements[name];
    if (!field) return;
    const ok = validateField(field, checks);
    if (!ok && !firstInvalid) firstInvalid = field;
  });
  if (firstInvalid) firstInvalid.focus();
  return !firstInvalid;
}

function attachLiveValidation(form, rules) {
  Object.entries(rules).forEach(([name, checks]) => {
    const field = form.elements[name];
    if (!field) return;
    field.addEventListener("blur", () => validateField(field, checks));
  });
}

const required = (message) => ({ test: (v) => v.length > 0, message });
const matches = (pattern, message) => ({
  test: (v) => v.length === 0 || pattern.test(v.replace(/\s/g, "")),
  message
});

/* ---------- Accueil ---------- */

function initHome() {
  const grid = document.getElementById("selection-grid");
  if (grid) {
    CARS.slice(0, 3).forEach((car, i) => grid.appendChild(renderCard(car, i * 80)));
  }

  const cue = document.querySelector(".scroll-cue");
  if (cue) {
    const onScroll = () => {
      cue.classList.toggle("is-hidden", window.scrollY > 100);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }
}

/* ---------- Collections : filtres, tri, URL partageable ---------- */

const PRICE_RANGES = {
  "moins-500": { label: "Moins de 500 000 DH", min: 0, max: 500000 },
  "500-1000": { label: "500 000 – 1 000 000 DH", min: 500000, max: 1000000 },
  "plus-1000": { label: "Plus de 1 000 000 DH", min: 1000000, max: Infinity }
};

const COLLECTION_PAGE_SIZE = 12;

function initCollections() {
  const grid = document.getElementById("collection-grid");
  if (!grid) return;

  const form = document.getElementById("filter-form");
  const countEl = document.getElementById("collection-count");
  const emptyEl = document.getElementById("empty-state");
  const moreBtn = document.getElementById("load-more");
  const resetBtns = document.querySelectorAll("[data-reset-filters]");
  let visibleCount = COLLECTION_PAGE_SIZE;

  /* Options de marque dérivées de CARS */
  const brandSelect = form.elements.marque;
  [...new Set(CARS.map((car) => car.brand))].sort().forEach((brand) => {
    brandSelect.appendChild(new Option(brand, brand));
  });

  const fuelSelect = form.elements.carburant;
  [...new Set(CARS.map((car) => car.fuel))].sort().forEach((fuel) => {
    fuelSelect.appendChild(new Option(fuel, fuel));
  });

  const priceSelect = form.elements.prix;
  Object.entries(PRICE_RANGES).forEach(([key, range]) => {
    priceSelect.appendChild(new Option(range.label, key));
  });

  /* État initial depuis l'URL (vue partageable) */
  const params = new URLSearchParams(location.search);
  ["marque", "carburant", "prix", "tri"].forEach((name) => {
    const value = params.get(name);
    if (value && [...form.elements[name].options].some((o) => o.value === value)) {
      form.elements[name].value = value;
    }
  });

  function currentFilters() {
    return {
      marque: form.elements.marque.value,
      carburant: form.elements.carburant.value,
      prix: form.elements.prix.value,
      tri: form.elements.tri.value
    };
  }

  function hasActiveFilter(f) {
    return Boolean(f.marque || f.carburant || f.prix || f.tri !== "recent");
  }

  function syncURL(f) {
    const url = new URL(location.href);
    url.search = "";
    Object.entries(f).forEach(([key, value]) => {
      if (value && !(key === "tri" && value === "recent")) {
        url.searchParams.set(key, value);
      }
    });
    history.replaceState(null, "", url);
  }

  function apply() {
    const f = currentFilters();
    let list = CARS.filter((car) => {
      if (f.marque && car.brand !== f.marque) return false;
      if (f.carburant && car.fuel !== f.carburant) return false;
      if (f.prix) {
        const range = PRICE_RANGES[f.prix];
        if (car.price < range.min || car.price >= range.max) return false;
      }
      return true;
    });

    if (f.tri === "prix-asc") list.sort((a, b) => a.price - b.price);
    else if (f.tri === "prix-desc") list.sort((a, b) => b.price - a.price);
    else list.sort((a, b) => b.year - a.year);

    grid.replaceChildren();
    list.slice(0, visibleCount).forEach((car, i) => {
      grid.appendChild(renderCard(car, (i % 3) * 80));
    });

    countEl.textContent =
      list.length === 0
        ? "Aucun véhicule"
        : list.length + (list.length > 1 ? " véhicules" : " véhicule");

    emptyEl.hidden = list.length !== 0;
    moreBtn.hidden = list.length <= visibleCount;

    /* « Réinitialiser » n'apparaît que si un filtre est actif */
    resetBtns.forEach((btn) => {
      if (btn.closest("#empty-state")) return;
      btn.hidden = !hasActiveFilter(f);
    });

    syncURL(f);
    initReveal();
  }

  form.addEventListener("change", () => {
    visibleCount = COLLECTION_PAGE_SIZE;
    apply();
  });

  resetBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      form.reset();
      visibleCount = COLLECTION_PAGE_SIZE;
      apply();
    });
  });

  moreBtn.addEventListener("click", () => {
    visibleCount += COLLECTION_PAGE_SIZE;
    apply();
  });

  apply();
}

/* ---------- Fiche véhicule : galerie, dialog, similaires ---------- */

function initCarPage() {
  const detail = document.getElementById("car-detail");
  if (!detail) return;

  const id = new URLSearchParams(location.search).get("id");
  const car = id ? getCarById(id) : null;
  if (!car) {
    location.replace("collections.html");
    return;
  }

  document.title = car.brand + " " + car.name + " " + car.year + " — ORION Automobiles";

  /* Panneau d'informations */
  document.getElementById("car-brand").textContent = car.brand;
  document.getElementById("car-name").textContent = car.name;
  document.getElementById("car-price").textContent = formatPrice(car.price);
  document.getElementById("car-desc").textContent = car.description;

  const specs = {
    "Année": String(car.year),
    "Kilométrage": formatKm(car.km),
    "Carburant": car.fuel,
    "Boîte": car.transmission,
    "Puissance": car.power,
    "État": STATUS_LABELS[car.status]
  };
  const specBody = document.getElementById("spec-body");
  Object.entries(specs).forEach(([label, value]) => {
    const row = document.createElement("tr");
    const th = document.createElement("th");
    th.scope = "row";
    th.textContent = label;
    const td = document.createElement("td");
    td.textContent = value;
    row.append(th, td);
    specBody.appendChild(row);
  });

  /* Galerie : fondu croisé 300 ms, flèches clavier */
  const stage = document.querySelector(".gallery__main");
  const thumbs = document.getElementById("gallery-thumbs");
  let activeIndex = 0;
  let frontImg = document.createElement("img");
  frontImg.src = car.images[0];
  frontImg.alt = car.brand + " " + car.name + ", photo 1 sur " + car.images.length;
  frontImg.width = 1600;
  frontImg.height = 1200;
  stage.appendChild(withFallback(frontImg));

  function show(index) {
    if (index === activeIndex) return;
    activeIndex = (index + car.images.length) % car.images.length;

    const next = document.createElement("img");
    next.src = car.images[activeIndex];
    next.alt =
      car.brand + " " + car.name + ", photo " + (activeIndex + 1) + " sur " + car.images.length;
    next.width = 1600;
    next.height = 1200;
    next.classList.add("is-hidden");
    stage.appendChild(withFallback(next));

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        next.classList.remove("is-hidden");
        frontImg.classList.add("is-hidden");
        const old = frontImg;
        frontImg = next;
        setTimeout(() => old.remove(), 320);
      });
    });

    thumbs.querySelectorAll("button").forEach((btn, i) => {
      btn.setAttribute("aria-current", String(i === activeIndex));
    });
  }

  car.images.forEach((src, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.setAttribute("aria-current", String(i === 0));
    btn.setAttribute("aria-label", "Afficher la photo " + (i + 1));
    const thumb = document.createElement("img");
    thumb.src = src;
    thumb.alt = "";
    thumb.width = 400;
    thumb.height = 300;
    thumb.loading = "lazy";
    btn.appendChild(withFallback(thumb));
    btn.addEventListener("click", () => show(i));
    thumbs.appendChild(btn);
  });

  document.addEventListener("keydown", (e) => {
    const dialog = document.getElementById("reserve-dialog");
    if (dialog && dialog.open) return;
    if (e.key === "ArrowRight") show(activeIndex + 1);
    if (e.key === "ArrowLeft") show(activeIndex - 1);
  });

  /* Véhicules similaires : même marque ou tranche de prix voisine */
  const similar = CARS.filter(
    (other) =>
      other.id !== car.id &&
      (other.brand === car.brand ||
        Math.abs(other.price - car.price) <= car.price * 0.25)
  ).slice(0, 3);
  const similarGrid = document.getElementById("similar-grid");
  similar.forEach((other, i) => similarGrid.appendChild(renderCard(other, i * 80)));

  initReserveDialog(car);
}

/* ---------- Dialog de réservation ---------- */

const RESERVE_RULES = {
  nom: [required("Veuillez indiquer votre nom complet.")],
  telephone: [
    required("Veuillez indiquer un numéro de téléphone."),
    matches(PHONE_PATTERN, "Format attendu : 06XXXXXXXX ou +2126XXXXXXXX.")
  ],
  ville: [required("Veuillez choisir une ville.")]
};

function initReserveDialog(car) {
  const dialog = document.getElementById("reserve-dialog");
  const opener = document.getElementById("reserve-open");
  const form = dialog.querySelector("form");

  document.getElementById("reserve-car").textContent =
    car.brand + " " + car.name + " · " + formatPrice(car.price);

  opener.addEventListener("click", () => {
    dialog.showModal();
    form.elements.nom.focus();
  });

  dialog.querySelector(".dialog-close").addEventListener("click", () => dialog.close());

  /* Fermeture au clic sur le fond */
  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) dialog.close();
  });

  /* Piège de focus ; Échap est géré nativement par <dialog> */
  dialog.addEventListener("keydown", (e) => {
    if (e.key !== "Tab") return;
    const focusables = [...dialog.querySelectorAll(
      "button, input, select, textarea, [href]"
    )].filter((el) => !el.disabled && el.offsetParent !== null);
    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });

  /* Le focus revient sur le CTA à la fermeture */
  dialog.addEventListener("close", () => opener.focus());

  attachLiveValidation(form, RESERVE_RULES);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validate(form, RESERVE_RULES)) return;

    const payload = {
      car: car.id,
      nom: form.elements.nom.value.trim(),
      telephone: form.elements.telephone.value.trim(),
      ville: form.elements.ville.value,
      date: form.elements.date.value,
      message: form.elements.message.value.trim()
    };

    // TODO: connect Formspree endpoint here
    console.log("Réservation d'essai :", payload);

    const prenom = payload.nom.split(" ")[0];
    const body = dialog.querySelector(".dialog-body");
    body.replaceChildren(buildSuccess(
      "Merci " + prenom + ", on vous rappelle sous 24h.",
      car.brand + " " + car.name + " — " + formatPrice(car.price)
    ));
    dialog.querySelector(".dialog-close").focus();
  });
}

function buildSuccess(message, recap) {
  const box = document.createElement("div");
  box.className = "form-success";

  const check = document.createElement("span");
  check.className = "form-success__check";
  check.setAttribute("aria-hidden", "true");
  check.textContent = "✓";

  const p = document.createElement("p");
  p.textContent = message;

  box.append(check, p);

  if (recap) {
    const recapEl = document.createElement("p");
    recapEl.className = "recap";
    recapEl.textContent = recap;
    box.appendChild(recapEl);
  }
  return box;
}

/* ---------- Page contact ---------- */

const CONTACT_RULES = {
  nom: [required("Veuillez indiquer votre nom.")],
  email: [
    required("Veuillez indiquer une adresse email."),
    matches(EMAIL_PATTERN, "Adresse email invalide.")
  ],
  telephone: [
    required("Veuillez indiquer un numéro de téléphone."),
    matches(PHONE_PATTERN, "Format attendu : 06XXXXXXXX ou +2126XXXXXXXX.")
  ],
  message: [required("Veuillez écrire votre message.")]
};

function initContact() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  attachLiveValidation(form, CONTACT_RULES);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validate(form, CONTACT_RULES)) return;

    const payload = {
      nom: form.elements.nom.value.trim(),
      email: form.elements.email.value.trim(),
      telephone: form.elements.telephone.value.trim(),
      sujet: form.elements.sujet.value,
      message: form.elements.message.value.trim()
    };

    // TODO: connect Formspree endpoint here
    console.log("Message de contact :", payload);

    const prenom = payload.nom.split(" ")[0];
    form.replaceChildren(buildSuccess(
      "Merci " + prenom + ", votre message est bien reçu. Réponse sous 24h ouvrées."
    ));
  });
}

/* ---------- Amorçage ---------- */

document.addEventListener("DOMContentLoaded", () => {
  initHeader();
  initHome();
  initCollections();
  initCarPage();
  initContact();
  initReveal();
});
