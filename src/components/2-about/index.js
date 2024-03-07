import Left from "./left";
import Right from "./right";

const About = () => {
  return (
    <section>
        <Left />
        <Right />
      <style jsx>{`
        section {
          background-image: linear-gradient(
              to top,
              hsla(0, 0%, 11%, 0.7),
              hsla(0, 0%, 11%, 0.7)
            ),
            url("https://images.pexels.com/photos/8332961/pexels-photo-8332961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
          background-size: cover;
          background-repeat: no-repeat;
          flex-wrap: wrap;
          background-position: center;
        }
      `}</style>
    </section>
  );
};

export default About;
