import Navbar from "../navbar";

const Banner = () => {
  return (
    <header>
      <Navbar />
      <div className="text">
        <h2>Webs, Apps y Diseños Deluxe</h2>
        <br />

        <p>En WeBuildWebz nos encargamos de darte un servicio perfecto.</p>
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
          }

          .text {
            width: 400px;
            margin: 1em;
            padding: 1em;
            color: white;
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
