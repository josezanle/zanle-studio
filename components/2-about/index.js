import Left from "./left";
import Right from "./right";

const About = () => {
  return (
    <section id="about">
      <Left />
      <Right />
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
          flex-wrap: wrap;
        }
      `}</style>
    </section>
  );
};

export default About;
