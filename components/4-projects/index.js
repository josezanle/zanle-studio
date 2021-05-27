const Projects = () => {
  return (
    <div className="projects">
      <div id="projects">
        <h2>Galeria</h2>
      </div>
      <style jsx>
        {`
          .projects {
            width: 100vw;
            height: 100vh;
            padding: 2em 0;
          }
          #projects {
            width: 100vw;
            padding-left: 2em;
          }
          h2 {
            display: inline;
            border: 2px solid #bfc2ca;
            padding: 0.5em 1em;
          }
        `}
      </style>
    </div>
  );
};

export default Projects;
