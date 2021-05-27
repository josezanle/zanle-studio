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
            <i className="fab fa-facebook-square"></i> Facebook
          </a>
          <a rel="noreferrer noopener" href="#">
            <i className="fab fa-twitter-square"></i> Twitter
          </a>
          <a rel="noreferrer noopener" href="#">
            <i className="fab fa-linkedin"></i> Linkedin
          </a>
          <a rel="noreferrer noopener" href="#">
            <i className="fab fa-instagram-square"></i> Instagram
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
          width: 100%;
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

        .box__footer .logo img {
          width: 20px;
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

        .box__footer a .fab {
          font-size: 20px;
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
