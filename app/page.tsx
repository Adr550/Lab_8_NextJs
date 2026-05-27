const GITHUB_PROFILE = "https://github.com/Adr550";
const LINKEDIN_PROFILE = "https://linkedin.com/";

const projects = [
  {
    title: "Choose Your Own Adventure",
    description:
      "Este trabajo consiste en un Choose Your Own Adventure, utilizando HTML, el juego consiste en escapar de la casa antes de que un vistante inesperado te encuentre. Este proyecto es interactivo utilizanod colores y fuentes distintos para evocar ese sentido de peligro inminente",
    technologies: "HTML",
    github: "https://github.com/Adr550/CYOA_Luis_Estrada",
  },
  {
    title: "Lab 3 - API",
    description:
      "Se utilizaron varias herramientas para entender el funcionamiento de APIs y como interactuan en las páginas web, para este laboratorio se utilizó la API del instituto del arte de Chicago",
    technologies: "HTML, CSS, JavaScript, API",
    github: "https://github.com/Adr550/Lab3_API",
  },
];

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      <header className="header">
        <div className="container header__inner">
          <h1 className="brand">Luis Adrian Estrada</h1>
          <nav className="nav" aria-label="Navegación principal">
            <a href="#inicio">Inicio</a>
            <a href="#sobre-mi">Sobre mí</a>
            <a href="#proyectos">Proyectos</a>
          </nav>
        </div>
      </header>

      <main className="container">
        <section id="inicio" className="section">
          <h2>Hola, soy Luis Adrian Estrada</h2>
          <p className="lead">
            Soy estudiante de desarrollo web y estoy creando un portafolio para
            mostrar mis proyectos.
          </p>
          <p>
            <strong>Carrera:</strong> Ciencias de la computación
          </p>
          <p>
            <strong>Tecnologías:</strong> HTML, CSS, JavaScript, Next.js, React
          </p>
          <div className="row">
            <a
              className="button"
              href={GITHUB_PROFILE}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="button button--ghost"
              href={LINKEDIN_PROFILE}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </section>

        <section id="sobre-mi" className="section">
          <h2>Sobre mí</h2>
          <p>
            Aprendí a crear páginas web usando tecnologías básicas y estoy
            mejorando mi forma de desarrollar.
          </p>
          <ul className="list">
            <li>
              <strong>Intereses:</strong> backend y UI.
            </li>
            <li>
              <strong>Favoritas:</strong> JavaScript y CSS.
            </li>
            <li>
              <strong>Quiero aprender:</strong> Next.js, React y Laravel.
            </li>
          </ul>
        </section>

        <section id="proyectos" className="section">
          <h2>Proyectos</h2>
          <p className="muted">Algunos trabajos realizados durante el curso.</p>
          <div className="grid">
            {projects.map((project) => (
              <article key={project.github} className="card">
                <h3>{project.title}</h3>
                <p className="muted">{project.description}</p>
                <p>
                  <strong>Tecnologías:</strong> {project.technologies}
                </p>
                <div className="row wrap">
                  <a
                    className="link"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ver en GitHub
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <p>
            © {year} Luis Adrian Estrada ·{" "}
            <a className="link" href={GITHUB_PROFILE} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
