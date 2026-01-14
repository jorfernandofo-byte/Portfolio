/* ==============================
   DATA DE PROYECTOS
================================ */

const projects = [
  {
    title: "FunOnTrip",
    image: "./images/FunOnTrip/funontrip.png",
    description: "FunOnTrip es un e-commerce de viajes que permite a los usuarios explorar, publicar y gestionar experiencias turísticas de forma sencilla. La plataforma combina funcionalidades de compra y administración de productos con elementos sociales, ofreciendo una experiencia centralizada para planear viajes y descubrir nuevas opciones. Se ajusta a las necesidades del usuario mediante una navegación clara e intuitiva, registro e inicio de sesión para una experiencia personalizada, visualización y administración de productos, diseño responsivo para desktop y dispositivos móviles, y validaciones que reducen errores y mejoran la confianza del usuario. Mis aportes al proyecto incluyen la planificación y definición del alcance bajo metodología Scrum, el diseño de la estructura de navegación y experiencia de usuario, el desarrollo de formularios con validaciones y flujo de autenticación, la implementación de lógica Frontend para listado y creación de productos, y la integración del Frontend con el Backend mediante una API REST.",
    pageUrl: "https://angie-torres-m.github.io/E-commerce_FunOnTrip_Equipo4/index.html",
    tech: [
      { name: "HTML5", img: "./images/leng/html.png" },
      { name: "CSS3", img: "./images/leng/css.png" },
      { name: "JavaScript", img: "./images/leng/javascript.png" },
      { name: "Java", img: "./images/leng/java.png" },
      { name: "MySQL", img: "./images/leng/mysql.png" },
      { name: "GitHub", img: "./images/contact/github.png" },
      { name: "Figma", img: "./images/leng/Figma.png" }
    ]
  },
  {
    title: "AnimeByText",
    image: "./images/AnimeByText/animebytext.png",
    description: "Esta página web es una plataforma de streaming de anime, diseñada para que los usuarios exploren y descubran contenido de anime de forma visual, intuitiva y atractiva. La aplicación presenta un catálogo organizado por categorías, con tarjetas dinámicas y una navegación fluida que facilita la búsqueda y selección de títulos. Se ajusta a las necesidades del usuario al ofrecer una interfaz llamativa, diseño responsivo para desktop y dispositivos móviles, estructura clara de secciones y una experiencia de usuario enfocada en el consumo de contenido. La planificación del proyecto se realizó siguiendo la misma metodología que el proyecto anterior, definiendo alcances, objetivos y estructura de navegación. Mis aportes incluyen la planificación del Frontend, el diseño de la interfaz y experiencia de usuario, la implementación de componentes visuales inspirados en plataformas de streaming, el desarrollo de la lógica Frontend con JavaScript para la carga y visualización del contenido, y la aplicación de buenas prácticas en estructura y diseño. https://jorfernandofo-byte.github.io/AnymeByText/",
    pageUrl: "https://jorfernandofo-byte.github.io/AnymeByText/",
    tech: [
      { name: "HTML5", img: "./images/leng/html.png" },
      { name: "CSS3", img: "./images/leng/css.png" },
      { name: "JavaScript", img: "./images/leng/javascript.png" },
      { name: "Jira", img: "./images/leng/Jira.png" },
       { name: "Figma", img: "./images/leng/Figma.png" }
    ]
  },

  {
  title: "Cine FerStar",
  image: "./images/Cine/Cine.png",
  description: "Esta página web corresponde a un sitio informativo de un cine, desarrollado con un enfoque en Frontend básico y diseño responsivo. La plataforma permite a los usuarios consultar la información principal del cine, como cartelera, horarios y secciones informativas, mediante una interfaz clara, sencilla e intuitiva. Se ajusta a las necesidades del usuario al ofrecer una navegación accesible, correcta adaptación a distintos tamaños de pantalla y una estructura visual ordenada que facilita el acceso a la información. El proyecto se centró en la correcta aplicación de principios de diseño responsivo y buenas prácticas de maquetación. Mis aportes incluyen la estructuración del sitio con HTML, el diseño responsivo con CSS, la organización de secciones para una mejor experiencia de usuario y la implementación de una interfaz funcional y adaptable. https://jorfernandofo-byte.github.io/Cine/",
  pageUrl: "https://jorfernandofo-byte.github.io/Cine/",
  tech: [
    { name: "HTML5", img: "./images/leng/html.png" },
    { name: "CSS3", img: "./images/leng/css.png" },
    { name: "JavaScript", img: "./images/leng/javascript.png" },
    { name: "GitHub Pages", img: "./images/contact/github.png" }
  ]
},
{
  title: "Power Sports",
  image: "./images/Sport/PowerSports.png",
  description: "Esta página web corresponde a una tienda de deportes desarrollada como un e-commerce básico, que incluye un carrito de compras para la selección y gestión de productos. La plataforma fue diseñada para ofrecer una experiencia clara e intuitiva, con un enfoque en Frontend básico y diseño responsivo para su correcta visualización en distintos dispositivos. Se ajusta a las necesidades del usuario al permitir agregar y quitar productos del carrito, visualizar el resumen de compra y navegar de forma sencilla entre las secciones del sitio. En este proyecto desempeñé el rol de Scrum Master, participando en la planificación, organización del flujo de trabajo y seguimiento de tareas del equipo, además de colaborar en el desarrollo Frontend. Mis aportes incluyen la coordinación del equipo bajo metodología Scrum, la definición de objetivos y entregables, la implementación de la estructura del sitio, el diseño responsivo y el desarrollo del carrito de compras.  https://jorfernandofo-byte.github.io/PowerSports/",
  pageUrl: "https://jorfernandofo-byte.github.io/PowerSports/",
  tech: [
    { name: "HTML5", img: "./images/leng/html.png" },
    { name: "CSS3", img: "./images/leng/css.png" },
    { name: "JavaScript", img: "./images/leng/javascript.png" },
    { name: "GitHub Pages", img: "./images/contact/github.png" },
  ]
}


];

document.addEventListener("DOMContentLoaded", () => {

  /* ==============================
     VARIABLES
  ================================ */

  let currentIndex = 0;

  const projectImage = document.getElementById("projectImage");
  const projectTech = document.getElementById("projectTech");
  const projectLink = document.getElementById("projectLink");
  const projectPage = document.getElementById("projectPage");

  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  const modal = document.getElementById("projectModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const closeModal = document.getElementById("closeModal");

  /* ==============================
     FUNCIONES
  ================================ */

  function renderProject(index) {
    const project = projects[index];

    projectImage.style.opacity = 0;
    setTimeout(() => {
      projectImage.src = project.image;
      projectImage.style.opacity = 1;
    }, 150);

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

    if (project.pageUrl && project.pageUrl !== "#") {
      projectPage.href = project.pageUrl;
      projectPage.style.display = "inline-block";
    } else {
      projectPage.style.display = "none";
    }
  }

  /* ==============================
     EVENTOS
  ================================ */

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % projects.length;
    renderProject(currentIndex);
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + projects.length) % projects.length;
    renderProject(currentIndex);
  });

  projectLink.addEventListener("click", (e) => {
    e.preventDefault();
    const project = projects[currentIndex];
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    modal.classList.add("active");
  });

  closeModal.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });

  renderProject(currentIndex);

});
