"use client";

import Logo from "@/components/logo";
import Navbar from "@/components/navbar";

const Banner = () => {

  return (
    <header id="header">
      {/* <Navbar /> */}

      <div className="left__content"><div className="left__image"></div></div>

      <div className="right__content">

        <div className="top">
          <Logo strokeOne="white" strokeTwo="white" size="70px" background="black" />
          <h3 className="countries">Argentina Perú</h3>
          <div className="year">2024</div>
        </div>

        <div className="bottom">
          <h1 className="name">Zanle Studio</h1>
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
            background-image: url("https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
            background-size: cover;
            background-repeat: no-repeat;
            border: 70px solid #ffcd1d;
          }
          #header .right__content {
            width: 50%;
            min-height: 100vh;
            padding-right: 2em;
            background: white;
          }
          #header .right__content .top {
            width: 100%;
            height: 50%;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          #header .right__content .top .countries {
            color: black;
            font-size: 30px;
            width: 150px;
            overflow-wrap: break-word;
            line-height: 40px;
            font-weight: bold;
          }

          #header .right__content .top .year {
            color: black;
            font-size: 50px;
            width: 70px;
            overflow-wrap: break-word;
            line-height: 40px;
            font-weight: bold;
          }
          

          #header .right__content .bottom {
            width: 100%;
            height: 50%;
          }
          #header .right__content .bottom .name {
            font-size: 100px;
            width: 300px;
            overflow-wrap: break-word;
            line-height: 80px;
            font-weight: bold;
            position: relative;
            color: black;
            border-radius: 25px;
            padding: 5px;
            margin-bottom: 10px;
          }
          #header .right__content .bottom .name:after {
            width: 400px;
            height: 400px;
            right: -500px;
            top: -100px;
            position: absolute;
            content: "";
            border-radius: 100%;
            background: #ff445a;
          }
          #header .right__content .bottom .name:before {
            width: 150px;
            height: 150px;
            position: absolute;
            content: "";
            left: -200px;
            bottom: -230px;
            border-radius: 100%;
            background: #005de9;
          }

          #header .right__content .bottom .developers {
            color: black;
            font-weight: bold;
            border: 2px solid black;
            border-radius: 10px;
            padding: 3px 10px;
            display: inline;
          }

          @media (max-width: 1500px) {
            #header .left__content .left__image {
              width: 500px;
              height: 500px;
            }

            #header .right__content .bottom .name:after {
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
            #header .right__content .top {height: 100px}
            #header .right__content .bottom {
              height: 600px;
              display: flex;
              flex-flow: column;
              justify-content: center;
              align-items: center;
            }
          }

        @media (max-width: 1220px) {
            #header .right__content .bottom .name:after {
                  width: 150px;
                  height: 150px;
                  right: -200px;
                  top: -150px;
              }
        }

        @media (max-width: 770px) {
            #header .right__content .bottom .name:after {
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
            #header .right__content .bottom,  #header .right__content {
                  height: 400px;
            }
        }

        @media (max-width: 500px) {
            #header .right__content .bottom .name:after {
                  right: -50px;
                  top: -70px;
            }
            #header .right__content .bottom .name:before {
                  left: -100px;
                  bottom: -170px;
          }
        }
        @media (max-width: 410px) {
            #header .right__content .bottom .name:after {
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
