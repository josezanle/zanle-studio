import Text from "./left";
import Right from "./right";

const About = () => {
  return (
    <section className="about" id="about">
      <Text />
      <Right />
      <style jsx>{`
        .about {
          width: 100vw;
          height: 100vh;
          display: flex;
          justify-content: space-evenly;
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
          position: relative;
        }
        .about:before {
          position: absolute;
          top: 6em;
          left: 2em;
          content: "Nosotros";
          border: 2px solid #bfc2ca;
          color: #bfc2ca;
          padding: 0.5em 1em;
        }
      `}</style>
    </section>
  );
};

export default About;
