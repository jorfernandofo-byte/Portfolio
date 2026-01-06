/* ==============================
   DATA DE PROYECTOS
================================ */

const projects = [
  {
    title: "FunOnTrip",
    image: "./images/FunOnTrip/funontrip.png",
    description:
      "Plataforma de viajes tipo e-commerce desarrollada con Java y MySQL. Permite explorar destinos, gestionar usuarios y simular reservas.",
    tech: [
      { name: "HTML5", img: "./images/leng/html.png" },
      { name: "CSS3", img: "./images/leng/css.png" },
      { name: "JavaScript", img: "./images/leng/javascript.png" },
      { name: "Java", img: "./images/leng/java.png" },
      { name: "MySQL", img: "./images/leng/mysql.png" },
      { name: "GitHub", img: "./images/contact/github.png" }
    ]
  },
  {
    title: "AnimeByText",
    image: "./images/AnimeByText/animebytext.png",
    description:
      "Aplicación web que genera ilustraciones estilo anime a partir de texto utilizando lógica en JavaScript y diseño responsivo.",
    tech: [
      { name: "HTML5", img: "./images/leng/html.png" },
      { name: "CSS3", img: "./images/leng/css.png" },
      { name: "JavaScript", img: "./images/leng/javascript.png" }
    ]
  }
];

/* ==============================
   VARIABLES DEL DOM
================================ */

let currentIndex = 0;

const projectImage = document.getElementById("projectImage");
const projectTech = document.getElementById("projectTech");
const projectLink = document.getElementById("projectLink");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

/* ===== MODAL ===== */
const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const closeModal = document.getElementById("closeModal");

/* ==============================
   FUNCIONES
================================ */

function renderProject(index) {
  const project = projects[index];

  /* Imagen */
  projectImage.style.opacity = 0;
  setTimeout(() => {
    projectImage.src = project.image;
    projectImage.style.opacity = 1;
  }, 150);

  /* Tecnologías */
  projectTech.innerHTML = "";
  project.tech.forEach(t => {
    const chip = document.createElement("div");
    chip.className = "tech-chip";
    chip.innerHTML = `
      <img src="${t.img}" alt="${t.name}">
      <span>${t.name}</span>
    `;
    projectTech.appendChild(chip);
  });
}

/* ==============================
   EVENTOS CARRUSEL
================================ */

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % projects.length;
  renderProject(currentIndex);
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + projects.length) % projects.length;
  renderProject(currentIndex);
});

/* ==============================
   EVENTOS MODAL
================================ */

projectLink.addEventListener("click", (e) => {
  e.preventDefault(); // evita redirecciones

  const project = projects[currentIndex];
  modalTitle.textContent = project.title;
  modalDescription.textContent = project.description;

  modal.classList.add("active");
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
});

/* Cerrar modal al hacer click fuera */
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});

/* ==============================
   INICIALIZACIÓN
================================ */

renderProject(currentIndex);
