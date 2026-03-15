const About = () => {
  const whatsappUrl = "https://wa.me/+541125055852";

  return (
    <div className="about__content" id="about">

      <div className="left">
        <h2>Así se ve<br />el éxito<br /><span className="accent">digital.</span></h2>
      </div>

      <div className="right">
        <p>Zanle Studio lo hace posible para tu negocio.</p>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn">
          Empezar ahora
        </a>
      </div>

      <style jsx>{`
        .about__content {
          background-image: linear-gradient(to right, rgba(0,0,0,0.85) 45%, rgba(0,0,0,0.2) 100%),
            url("https://res.cloudinary.com/dubv6xkxf/image/upload/f_webp/v1710177441/yowmwbmjdagtaxmyqbvl.jpg");
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
          width: 100%;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 4em 6em;
          gap: 4em;
        }

        .left {
          flex: 1;
        }

        .left h2 {
          font-size: 100px;
          font-weight: 900;
          color: #fff;
          line-height: 0.88;
          letter-spacing: -3px;
        }

        .accent {
          color: #ffcd1d;
        }

        .right {
          max-width: 320px;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 24px;
          text-align: right;
        }

        .right p {
          font-size: 22px;
          font-weight: 300;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.5;
        }

        .btn {
          display: inline-block;
          background: #005de9;
          color: #fff;
          padding: 14px 28px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          text-decoration: none;
          transition: background 0.2s;
        }

        .btn:hover {
          background: #0040cc;
        }

        @media (max-width: 1100px) {
          .left h2 { font-size: 72px; }
          .about__content { padding: 4em; }
        }

        @media (max-width: 800px) {
          .about__content {
            flex-direction: column;
            align-items: flex-start;
            padding: 4em 2em;
            gap: 2em;
            background-image: linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)),
              url("https://res.cloudinary.com/dubv6xkxf/image/upload/f_webp/v1710177441/yowmwbmjdagtaxmyqbvl.jpg");
          }
          .left h2 { font-size: 56px; }
          .right { max-width: 100%; text-align: left; align-items: flex-start; }
          .right p { font-size: 18px; }
        }

        @media (max-width: 500px) {
          .left h2 { font-size: 40px; letter-spacing: -1px; }
        }
      `}</style>
    </div>
  );
};

export default About;