import Reveal from '@/components/reveal';
import React from 'react';

const Welcome = () => {
  const onPriceGo = () => {
    // Lógica para manejar la navegación usando el ID
    const element = document.getElementById("price");
    element.scrollIntoView({ behavior: 'smooth' });
  };
  const onFooterGo = () => {
    // Lógica para manejar la navegación usando el ID
    const element = document.getElementById("footer");
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='welcome__container'>

      <div className="left__content">
        <Reveal animation="fade-right" delay={100}>
          <div className="tag">LATAM DEVELOPERS</div>
        </Reveal>

        <h1>Código que<br /><span>convierte</span></h1>

        <p className="description__text__p">
          Agencia de desarrollo web y mobile con equipos en Argentina y Perú.
        </p>

        <div className="cta__group">
          <button onClick={onPriceGo} className="btn__primary">Ver servicios</button>
          <button onClick={onFooterGo} className="btn__secondary">Contactanos</button>
        </div>

        <div className="stats">
          <div className="stat">
            <span className="stat__num">+50</span>
            <span className="stat__label">Proyectos entregados</span>
          </div>
          <div className="stat__divider" />
          <div className="stat">
            <span className="stat__num">2 sem</span>
            <span className="stat__label">Entrega mínima</span>
          </div>
          <div className="stat__divider" />
          <div className="stat">
            <span className="stat__num">LATAM</span>
            <span className="stat__label">Cobertura regional</span>
          </div>
        </div>
      </div>

      <div className="right__content">
        <div className="right__pic"></div>
      </div>

      <style jsx>{`
        .welcome__container {
          width: 100%;
          min-height: 80vh;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 4em 0;
          gap: 2em;
        }

        .left__content {
          width: 600px;
          min-height: 80vh;
          display: flex;
          justify-content: center;
          flex-direction: column;
          gap: 20px;
        }

        .tag {
          background: rgba(0, 82, 255, 0.08);
          color: #0052FF;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 2px;
          padding: 6px 14px;
          border-radius: 20px;
          width: fit-content;
        }

        .left__content h1 {
          font-size: 80px;
          line-height: 1.05;
          color: #1c1c1c;
          margin: 0;
        }

        .left__content h1 span {
          color: #0052FF;
        }

        .description__text__p {
          font-size: 18px;
          color: #666;
          line-height: 1.6;
          font-weight: 400;
          max-width: 460px;
          margin: 0;
        }

        .cta__group {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .btn__primary {
          background: #0052FF;
          color: #fff;
          border: none;
          border-radius: 10px;
          padding: 14px 28px;
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.2s;
        }

        .btn__primary:hover {
          background: #0040cc;
        }

        .btn__secondary {
          background: transparent;
          color: #1c1c1c;
          border: 1.5px solid #ddd;
          border-radius: 10px;
          padding: 14px 28px;
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          text-decoration: none;
          transition: border-color 0.2s;
        }

        .btn__secondary:hover {
          border-color: #aaa;
        }

        .stats {
          display: flex;
          align-items: center;
          gap: 24px;
          padding-top: 20px;
          border-top: 1px solid #eee;
          flex-wrap: wrap;
        }

        .stat {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .stat__num {
          font-size: 22px;
          font-weight: 600;
          color: #1c1c1c;
        }

        .stat__label {
          font-size: 12px;
          color: #999;
        }

        .stat__divider {
          width: 1px;
          height: 32px;
          background: #eee;
        }

        .right__content {
          width: 600px;
          min-height: 80vh;
          display: flex;
          align-items: center;
        }

        .right__pic {
          background-image: url("https://res.cloudinary.com/dubv6xkxf/image/upload/v1710174634/jv5w3c1wlvtiudleh73z.webp");
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          width: 640px;
          height: 427px;
          border-radius: 2em;
        }

        @media (max-width: 1200px) {
          .welcome__container {
            flex-direction: column;
            padding: 2em;
            gap: 0;
            align-items: flex-start;
          }

          .left__content {
            width: 100%;
            min-height: unset;
          }

          .left__content h1 {
            font-size: 72px;
          }

          .right__content {
            width: 100%;
            min-height: unset;
            justify-content: center;
            margin-top: 2em;
          }

          .stat__divider {
            display: none;
          }
        }

        @media (max-width: 700px) {
          .right__pic {
            width: 100%;
            height: 280px;
          }

          .left__content h1 {
            font-size: 52px;
          }

          .description__text__p {
            font-size: 16px;
          }
        }

        @media (max-width: 500px) {
          .left__content h1 {
            font-size: 40px;
          }

          .stats {
            gap: 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default Welcome;