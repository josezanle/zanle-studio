const Footer = () => {
  return (
    <footer>
      <div className="container__footer">
        <div className="box__footer">
          <div className="logo">
            <h2>WeBuildWebz</h2>
          </div>
          <div className="terms">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              impedit cum cumque velit libero officiis quam doloremque
              reprehenderit quae corporis! Delectus architecto officia
              praesentium atque laudantium, nam deleniti sapiente deserunt.
            </p>
          </div>
        </div>
        <div className="box__footer">
          <h2>Soluciones</h2>
          <a href="https://www.google.com">App Desarrollo</a>
          <a href="#">ecommerce</a>
          <a href="#">Desarrollo Web</a>
          <a href="#">Desarrollo Android</a>
        </div>

        <div className="box__footer">
          <h2>Informacion</h2>
          <a href="#">Acerca de</a>
          <a href="#">Trabajos</a>
          <a href="#">Procesos</a>
          <a href="#">Servicios</a>
        </div>

        <div className="box__footer">
          <h2>Redes Sociales</h2>
          <a href="#">
            {" "}
            <i class="fab fa-facebook-square"></i> Facebook
          </a>
          <a href="#">
            <i class="fab fa-twitter-square"></i> Twitter
          </a>
          <a href="#">
            <i class="fab fa-linkedin"></i> Linkedin
          </a>
          <a href="#">
            <i class="fab fa-instagram-square"></i> Instagram
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
          background-image: url(../Images/background-footer.svg);
          background-size: cover;

          /*background-color: #d0f0f8;
        -webkit-mask-image: url("../Images/background-footer.svg");
        mask-image: url("../Images/background-footer.svg");
        -webkit-mask-size: cover;
        mask-size: cover;*/
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
          color: #7a7a7a;
          font-size: 18px;
        }

        .box__footer h2 {
          margin-bottom: 30px;
          color: #343434;
          font-weight: 700;
        }

        .box__footer a {
          margin-top: 10px;
          color: #7a7a7a;
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
          color: #7a7a7a;
        }

        .box__copyright hr {
          border: none;
          height: 1px;
          background-color: #7a7a7a;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
