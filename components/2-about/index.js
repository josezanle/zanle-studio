import Text from "./left";

const About = () => {
  return (
    <section id="about">
      <div className="row">
        <h4>Bienvenido/a</h4>
      </div>
      <Text />
      <style jsx>{`
        section {
          background-image: linear-gradient(
              to top,
              hsla(0, 0%, 11%, 0.8),
              hsla(0, 0%, 11%, 1)
            ),
            url(/images/mountain.jpg);
          background-size: cover;
          background-repeat: no-repeat;
        }

        h4 {
          display: inline;
          border: 2px solid #bfc2ca;
          padding: 0.5em 1em;
        }
      `}</style>
    </section>
  );
};

export default About;
