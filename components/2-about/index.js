import Text from "./left";

const About = () => {
  return (
    <section className="about">
      <div id="about">
        <h4>Bienvenido/a</h4>
      </div>
      <Text />
      <style jsx>{`
        .about {
          width: 100vw;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          color: #bfc2ca;
          background-image: linear-gradient(
              to top,
              hsla(0, 0%, 11%, 0.8),
              hsla(0, 0%, 11%, 1)
            ),
            url(/images/mountain.jpg);
          background-size: cover;
          background-repeat: no-repeat;
          padding: 2em 0;
        }
        #about {
          width: 100vw;
          padding-left: 2em;
        }
        h4 {
          display: inline;
          border: 2px solid #bfc2ca;
          color: #bfc2ca;
          padding: 0.5em 1em;
        }
      `}</style>
    </section>
  );
};

export default About;
