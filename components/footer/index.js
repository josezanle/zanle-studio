import Media from "./media";

const Footer = () => {
  return (
    <div className="footer">
      <h5>WeBuilWebz © 2021</h5>
      <Media />

      <style jsx>{`
        .footer {
          width: 100vw;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1em;
          position: absolute;
          bottom: 0;
          z-index: 100;
          background-image: linear-gradient(to top, #1c1c1c, transparent);
        }
        h5 {
          text-align: center;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default Footer;
