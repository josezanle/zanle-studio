const Footer = () => {
  return (
    <footer id="footer">
      <div className="container__footer">
        <div className="box__footer">
          <div className="logo">
            <h2>WeBuildWebz</h2>
          </div>
          <div className="terms">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              impedit cum cumque velit libero officiis quam doloremque
              reprehenderit quae corporis!
            </p>
          </div>
        </div>
        <div className="box__footer">
          <h2>Soluciones</h2>
          <a rel="noreferrer noopener" href="https://www.google.com">
            App Desarrollo
          </a>
          <a rel="noreferrer noopener" href="#">
            ecommerce
          </a>
          <a rel="noreferrer noopener" href="#">
            Desarrollo Web
          </a>
          <a rel="noreferrer noopener" href="#">
            Desarrollo Android
          </a>
        </div>

        <div className="box__footer">
          <h2>Informacion</h2>
          <a rel="noreferrer noopener" href="#">
            Acerca de
          </a>
          <a rel="noreferrer noopener" href="#">
            Trabajos
          </a>
          <a rel="noreferrer noopener" href="#">
            Procesos
          </a>
          <a rel="noreferrer noopener" href="#">
            Servicios
          </a>
        </div>

        <div className="box__footer">
          <h2>Redes Sociales</h2>
          <a rel="noreferrer noopener" href="#">
            <img
              src="/icons/facebook.svg"
              alt="facebook icon"
              className="icon"
            />
            Facebook
          </a>
          <a rel="noreferrer noopener" href="#">
            <img src="/icons/twitter.svg" alt="twitter icon" className="icon" />{" "}
            Twitter
          </a>
          <a rel="noreferrer noopener" href="#">
            <img
              src="/icons/linkedin.svg"
              alt="linkedin icon"
              className="icon"
            />{" "}
            Linkedin
          </a>
          <a rel="noreferrer noopener" href="#">
            <img
              src="/icons/instagram.svg"
              alt="instagram icon"
              className="icon"
            />{" "}
            Instagram
          </a>
        </div>
      </div>

      <div className="box__copyright">
        <hr />
        <p>
          Todos los derechos reservados © 2021 <b>WeBuildWebz</b>
        </p>
      </div>
      <style jsx>{`
        footer {
          width: 100vw;
          padding: 50px 0px;
        }

        .container__footer {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          max-width: 1200px;
          margin: auto;
          margin-top: 100px;
        }

        .box__footer {
          display: flex;
          flex-direction: column;
          padding: 40px;
        }

        .box__footer .terms {
          max-width: 350px;
          margin-top: 20px;
          font-weight: 500;
          font-size: 18px;
        }

        .box__footer h2 {
          margin-bottom: 30px;
          font-weight: 700;
        }

        .box__footer a {
          margin-top: 10px;
          font-weight: 600;
        }

        .box__footer a:hover {
          opacity: 0.8;
        }

        .icon {
          width: 20px;
          height: 20px;
          padding: 5px 5px 0 0;
        }

        .box__copyright {
          max-width: 1200px;
          margin: auto;
          text-align: center;
          padding: 0px 40px;
        }

        .box__copyright p {
          margin-top: 20px;
        }

        .box__copyright hr {
          border: none;
          height: 1px;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
