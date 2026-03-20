import Logo from "@/components/logo";
import Navbar from "@/components/navbar";
import CountryFlag from "@/components/navbar/langSelector";
import Reveal from "@/components/reveal";

const paths = [
  { name: "Acerca", href: "about" },
  { name: "Precios", href: "price" },
  { name: "Faqs", href: "faqs" },
  { name: "Contacto", href: "footer" },
];

const Banner = () => {
  return (
    <header id="header">
      <Navbar paths={paths} />
      <div className="responsive__flag"><CountryFlag /></div>

      {/* Círculos decorativos */}
      <div className="circle circle--red" />
      <div className="circle circle--blue" />
      <div className="circle circle--yellow" />


      <div className="right__content">
        <h1 className="title">
          <Reveal animation="fade-right" delay={100}>
            WE<br />
          </Reveal>
          <Reveal animation="fade-right" delay={100}>
            BUILD<br />
          </Reveal>
          <Reveal animation="fade-right" delay={100}>
            <span className="title--blue">DIGITAL.</span>
          </Reveal>


        </h1>
        <p className="subtitle">
          Sitios web · Apps Android · Soluciones enterprise<br />
          Argentina &amp; Perú — para todo LATAM
        </p>
        <div className="cta__group">
          <a href="#price" className="btn__primary">Ver servicios</a>
          <a href="#footer" className="btn__secondary">Contactanos</a>
        </div>
      </div>

      <style jsx>{`
        #header {
          width: 100%;
          min-height: 100vh;
          display: flex;
          position: relative;
          overflow: hidden;
          background: #fff;
        }

        .responsive__flag {
          display: none;
          position: fixed;
          top: 1em;
          left: 1em;
          z-index: 200;
        }

        /* ── Círculos ── */
        .circle {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }
        .circle--red {
          width: 320px;
          height: 320px;
          background: #ff3b5c;
          top: -80px;
          right: -80px;
        }
        .circle--blue {
          width: 200px;
          height: 200px;
          background: #005de9;
          bottom: -60px;
          left: 260px;
        }
        .circle--yellow {
          width: 120px;
          height: 120px;
          border: 8px solid #ffcd1d;
          background: transparent;
          bottom: 80px;
          right: 220px;
        }

        /* ── Divisor ── */
        .divider {
          position: absolute;
          left: 340px;
          top: 0;
          width: 1px;
          height: 100%;
          background: #eee;
          z-index: 1;
        }

        /* ── LEFT ── */
        .left__content {
          width: 340px;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 12px;
          position: relative;
          z-index: 2;
          flex-shrink: 0;
        }

        .big__z {
          font-size: 160px;
          font-weight: 900;
          color: #111;
          letter-spacing: -8px;
          line-height: 1;
        }

        /* ── RIGHT ── */
        .right__content {
          flex: 1;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 100px 80px 60px 60px;
          position: relative;
          z-index: 2;
          gap: 20px;
        }

        .title {
          font-size: 100px;
          font-weight: 900;
          line-height: 0.9;
          color: #111;
          letter-spacing: -4px;
          margin: 0;
        }

        .title--blue {
          color: #005de9;
        }

        .subtitle {
          font-size: 16px;
          font-weight: 300;
          color: #666;
          line-height: 1.7;
          letter-spacing: 0.5px;
        }

        .cta__group {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 8px;
        }

        .btn__primary {
          background: #111;
          color: #fff;
          padding: 14px 32px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          text-decoration: none;
          transition: background 0.2s;
        }

        .btn__primary:hover {
          background: #005de9;
        }

        .btn__secondary {
          background: #ffffff;
          color: #1c1c1c;
          border: 1.5px solid #ddd;
          padding: 14px 32px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          text-decoration: none;
          transition: border-color 0.2s;
        }

        .btn__secondary:hover {
          border-color: #111;
        }

        /* ── Responsive ── */
        @media (max-width: 1100px) {
          .title { font-size: 80px; }
          .right__content { padding: 100px 40px 60px 40px; }
        }

        @media (max-width: 900px) {
          #header { flex-direction: column; }

          .divider { display: none; }

          .left__content {
            width: 100%;
            min-height: unset;
            padding: 120px 40px 40px;
            flex-direction: row;
            justify-content: flex-start;
            gap: 16px;
          }

          .big__z { font-size: 80px; }

          .right__content {
            min-height: unset;
            padding: 0 40px 80px;
          }

          .title { font-size: 72px; }
        }

        @media (max-width: 600px) {
          .title { font-size: 52px; letter-spacing: -2px; }
          .big__z { font-size: 60px; }
          .right__content { padding: 0 24px 60px; }
          .left__content { padding: 100px 24px 32px; }
          .circle--red { width: 200px; height: 200px; top: -40px; right: -40px; }
          .circle--blue { width: 130px; height: 130px; }
        }

        @media (max-width: 950px) {
          .responsive__flag { display: block; }
        }
      `}</style>
    </header>
  );
};

export default Banner;