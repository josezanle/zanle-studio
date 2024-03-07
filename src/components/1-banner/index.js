"use client";

import { Icon } from "../icons";
import Logo from "../logo";
import Navbar from "../navbar";

const Banner = () => {

  return (
    <header id="header">
      <Navbar />

      <h1 className="word">ZANLE</h1>

      <style jsx>
        {`
          #header {
            max-width: 100vw;
            min-height: 100vh;
          
            background-image: linear-gradient(
              to top,
              hsla(0, 0%, 11%, 0.7),
              hsla(0, 0%, 11%, 0.7)
            ),
            url("https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
            background-size: cover;
            background-repeat: no-repeat;
            flex-wrap: wrap;
            background-position: center;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-flow: column;
          }
          .word{
            font-size: 350px;
            color: white;
            letter-spacing: 150px;
            position: relative;
          }
          
          .word::before{
            font-size: 70px;
            color: white;
            line-height: 0;
            position: absolute;
            top: -20px;
            right: 0;
            content: "Group";
            font-weight: bold;
          }

          @media (max-width: 1850px) {
            .word{
              font-size: 150px;
              letter-spacing: 100px;
          }
          
          .word::before{font-size: 50px}
          }

          @media (max-width: 1200px) {
            .word{
              font-size: 100px;
            }
          }

          @media (max-width: 1200px) {
            .word{
              font-size: 70px;
              letter-spacing: 50px;
            }
            .word::before{font-size: 30px}
          }

          @media (max-width: 560px) {
            .word{
              font-size: 70px;
              letter-spacing: 10px;
            }
            .word::before{font-size: 30px}
          }
          
        `}
      </style>
    </header>
  );
};

export default Banner;
