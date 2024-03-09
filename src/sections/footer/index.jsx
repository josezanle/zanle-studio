import Logo from "@/components/logo";

const Footer = () => {
  return (
    <footer>

      <div className="footer__content">

        <h2 className="contact__us">Escribenos en:</h2>
        <h2 className="contact__email">example@example.com</h2>

        <button className="start__project__button">Chateanos</button>

        <hr className="footer__divisor"/>

        <div className="columns__container">

          <div className="box__footer">
            <h2 className="logo__name"><Logo size="50px" strokeOne="white" strokeTwo="white"/> Zanle Group</h2>
            <p className="items">LATAM DEVELOPERS</p>

            <br />
            <br />
            <br />

            <h2 className="logo__name"><span className="logo__name">&#x2605;</span> 2024</h2> 
          </div>

          <div className="box__footer">
            <h2 className="localization">Localización</h2>
            <a className="items">Argentina</a>
            <p className="items">Perú</p>
            <br />
            <br />
            <br />

            <h2 className="localization">Oficinas</h2>
            <a className="items">100% Remoto</a>

          </div>

          <div className="box__footer">
            <h2 className="social">Social</h2>
            <a className="items" rel="noreferrer noopener" href="#">Facebook</a>
            <a className="items" rel="noreferrer noopener" href="#">Twitter</a>
            <a className="items" rel="noreferrer noopener" href="#">Linkedin</a>
            <a className="items" rel="noreferrer noopener" href="#">Instagram</a>
          </div>
        </div>
      </div>

      <style jsx>{`
        footer {
          max-width: 100vw;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: black;
        }
        footer .footer__content {
          width: 1200px;
          display: flex;
          flex-flow: column;
          color:  white;
          background: black;
        }
        footer .footer__content .contact__us {
          width: 1200px;
          font-size: 40px;
          font-weight: 400;
          margin-bottom: .5em;
        }
        footer .footer__content .contact__email {
          width: 1200px;
          font-size: 100px;
          font-weight: bold;
        }
        footer .footer__content .start__project__button {
          padding: 1em .5em;
          margin-top: 2em;
          font-size: 30px;
          font-weight: bold;
          border-radius: 2em;
          width: 400px;
          background: transparent;
          color: #f0f0f0;
          border: 1px solid #f0f0f0;
          cursor: pointer;
        }
        footer .footer__content .start__project__button:hover {
          color: white;
          border: 1px solid white;
        }

        footer .footer__content .footer__divisor {
          width: 100%;
          height: 1px;
          margin: 6em 0;
          background: #f0f0f0
        }

        footer .footer__content .columns__container {
          display: flex;
          justify-content: space-between;
          width: 1200px;
        }

        footer .footer__content .columns__container .box__footer {
          display: flex;
          flex-direction: column;
        }
        footer .footer__content .columns__container .box__footer .logo__name {
          font-size: 45px;
          margin-bottom: .5em;
        }
        footer .footer__content .columns__container .box__footer .localization ,
        footer .footer__content .columns__container .box__footer .social {
          font-size: 35px;
          margin-bottom: .5em;
        }

        footer .footer__content .columns__container .box__footer .terms {
          max-width: 350px;
          margin-top: 20px;
          font-weight: 500;
          font-size: 25px;
        }

        footer .footer__content .columns__container .box__footer .items {
          font-weight: 500;
          font-size: 25px;
        }

        footer .footer__content .columns__container .box__footer a {
          font-weight: 600;
        }

        @media (max-width: 1280px) {
          footer .footer__content {
            width: 100%;
            padding: 3em 2em 0 2em;
          }
          footer .footer__content .contact__us {
            width: 100%;
            font-size: 30px;
            font-weight: 400;
            margin-bottom: .5em;
          }
          footer .footer__content .contact__email {
            width: 100%;
            font-size: 70px;
            display: contents;
          }

          footer .footer__content .columns__container {width: 100%}
      }

      
        @media (max-width: 1280px) {
          footer .footer__content .columns__container{
            flex-flow: column;
            align-items: center;
          }

          footer .footer__content .columns__container .box__footer {width: 400px}
        }

        @media (max-width: 810px) {
          footer .footer__content .contact__email {font-size: 40px}
        }

        @media (max-width: 590px) {
          footer .footer__content .contact__email {font-size: 25px}
          footer .footer__content .start__project__button {width: 100%}
        }

      `}</style>
    </footer>
  );
};

export default Footer;
