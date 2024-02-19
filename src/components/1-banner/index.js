"use client";

import Navbar from "../navbar";

const Banner = () => {
  return (
    <header>
      <Navbar />
      <div className="overlay" />
      <div className="text">
        <h2>Webs, Apps y Diseños Deluxe</h2>
        <br />

        <p>En Zanle Group nos encargamos de darte un servicio perfecto.</p>
        <br />
      </div>

      <style jsx>
        {`
          header {
            width: 100vw;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
          }
          header:before {
            position: absolute;
            top: 0;
            left: 0;
            content: "";
            width: 500px;
            height: 500px;
            border-radius: 50%;
            background-image: linear-gradient(to top, #ff0844 0%, #ffb199 100%);
            animation: rotating 10s ease linear infinite;
          }

          @keyframes rotating {
            0% {
              transform: translateY(200px);
              background-image: linear-gradient(
                to top,
                #ff0844 0%,
                #ffb199 100%
              );
            }
            100% {
              transform: translateY(-200px);
              background-image: linear-gradient(
                to bottom,
                #ff0844 0%,
                #ffb199 100%
              );
            }
          }

          .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-image: linear-gradient(
              to top,
              hsla(0, 0%, 11%, 0.5),
              hsla(0, 0%, 11%, 0.5)
            );
            backdrop-filter: blur(2em);
            z-index: 10;
          }

          .text {
            width: 400px;
            margin: 1em;
            padding: 1em;
            z-index: 100;
          }

          h2 {
            font-variant: small-caps;
          }
          p {
            font-style: italic;
          }
        `}
      </style>
    </header>
  );
};

export default Banner;
