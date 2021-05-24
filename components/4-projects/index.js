const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h2>galeria de projectos</h2>
      <style jsx>
        {`
          .projects {
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
          }
          .projects:before {
            position: absolute;
            top: 6em;
            left: 2em;
            content: "Proyectos";
            border: 2px solid #bfc2ca;
            color: #bfc2ca;
            padding: 0.5em 1em;
          }
        `}
      </style>
    </div>
  );
};

export default Projects;
