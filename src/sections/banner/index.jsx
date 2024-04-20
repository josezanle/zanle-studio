import Navbar from "@/components/navbar";
import CountryFlag from "@/components/navbar/langSelector";

const paths = [
  {
    name: "Acerca",
    href: "about"
  },
  {
    name: "Precios",
    href: "price"
  },
  {
    name: "FAQs",
    href: "faqs"
  },
  {
    name: "Contacto",
    href: "footer"
  },
];

const Banner = () => {
  return (
    <header id="header">
      <Navbar paths={paths} />
      <div className="responsive__flag"><CountryFlag /></div>

      <div className="left__content"><div className="left__image"></div></div>

      <div className="right__content">
        <div className="bottom">
          <h1 className="name">Zanle <br /> Studio </h1>
          <h3 className="developers">LATAM DEVELOPERS</h3>
        </div>
      </div>

      <style jsx>
        {`
          #header {
            width: 100%;
            min-height: 100vh;
            display: flex;
          }
          .responsive__flag{
            display: none;
            position: fixed;
            top:1em;
            left: 1em;
          }
          
          #header .left__content {
            width: 50%;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: white;
          }
          #header .left__content .left__image {
            width: 750px;
            height: 750px;
            border-radius: 50%;
            background-image: url("https://res.cloudinary.com/dubv6xkxf/image/upload/f_webp/v1710175296/zojrvuie7bcclzljxoij.jpg");
            background-size: cover;
            background-repeat: no-repeat;
            border: 70px solid #ffcd1d;
          }
          #header .right__content {
            width: 50%;
            min-height: 100vh;
            padding-right: 2em;
          }

          #header .right__content .bottom {
            width: 100%;
            height: 100%;
            display: flex;
            flex-flow: column;
            justify-content: center;
            align-items: center;
          }
          #header .right__content .name {
            font-size: 100px;
            line-height: 80px;
            font-weight: bold;
            position: relative;
            color: black;
            border-radius: 25px;
            padding: 5px;
            margin-bottom: 10px;
          }

          #header .right__content .name:after {
            width: 300px;
            height: 300px;
            right: -100px;
            top: -300px;
            position: absolute;
            content: "";
            border-radius: 100%;
            background: #ff445a;
          }
          #header .right__content .name:before {
            width: 150px;
            height: 150px;
            position: absolute;
            content: "";
            left: -200px;
            bottom: -230px;
            border-radius: 100%;
            background: #005de9;
          }

          #header .right__content .developers {
            color: black;
            font-weight: bold;
            border: 2px solid black;
            border-radius: 10px;
            padding: 5px 10px 3px;
            display: inline;
          }

          @media (max-width: 1500px) {
            #header .left__content .left__image {
              width: 500px;
              height: 500px;
            }

            #header .right__content .name:after {
                width: 270px;
                height: 270px;
                right: -350px;
            }
        }

        @media (max-width: 1360px) {
            #header {flex-flow: column-reverse}
            #header .right__content, #header .left__content {width: 100%}

            #header .left__content {
              min-height: 100%;
              align-items: start;
              margin-top: 0;
            }
            #header .right__content {
                padding: 2em;
            }
            #header .right__content {
              height: 600px;
              display: flex;
              flex-flow: column;
              justify-content: center;
              align-items: center;
            }
          }

        @media (max-width: 1220px) {
            #header .right__content .name:after {
                  width: 150px;
                  height: 150px;
                  right: -200px;
                  top: -150px;
              }
        }
        @media (max-width: 950px) {
          .responsive__flag{
            display: block;
          }
        }

        @media (max-width: 770px) {
            #header .right__content .name:after {
                  width: 100px;
                  height: 100px;
                  right: -50px;
                  top: -100px;
            }
            #header .left__content .left__image {
                  width: 200px;
                  height: 200px;
                  border: 10px solid #ffcd1d;
            }
            #header .right__content,  #header .right__content {height: 400px}
        }

        @media (max-width: 500px) {
            #header .right__content .name:after {
                  right: -50px;
                  top: -70px;
            }
            #header .right__content .name:before {
                  left: -100px;
                  bottom: -170px;
          }
        }
        @media (max-width: 410px) {
            #header .right__content .name:after {
                  right: -10px;
                  top: -70px;
            }
        }
`}
      </style>
    </header>
  );
};

export default Banner;
