import Left from "./left";
import Right from "./right";

const About = () => {
  return (
      <div className="about__content">
        <Left />
        <Right />
        <style jsx>{`
          .about__content {
            background-image: linear-gradient(to top,hsla(0, 0%, 11%, 0.7),hsla(0, 0%, 11%, 0.7)),
              url("https://images.pexels.com/photos/8332961/pexels-photo-8332961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;

            width: 100%;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 2em;
          }
      `}
        </style>
      </div>
  );
};

export default About;
