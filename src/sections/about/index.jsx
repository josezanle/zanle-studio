import Left from "./left";
import Right from "./right";

const About = () => {
  return (
      <div className="about__content" id="about">
        <Left />
        <Right />
        <style jsx>{`
          .about__content {
            background-image: linear-gradient(to top,hsla(0, 0%, 11%, 0.7),hsla(0, 0%, 11%, 0.7)),
              url("https://res.cloudinary.com/dubv6xkxf/image/upload/f_webp/v1710177441/yowmwbmjdagtaxmyqbvl.jpg");
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
