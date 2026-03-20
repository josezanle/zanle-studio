import { Br } from "@/components/br";
import Logo from "@/components/logo";
import Reveal from "@/components/reveal";

const Footer = () => {
  return (
    <footer>
      <div className="footer__content" id="footer">

        {/* CTA top */}
        <div className="vc-top">
          <div className="vc-email-block">
            <p className="label">Escribenos</p>
            <a
              className="email"
              href="mailto:zanle.studio.io@gmail.com?subject=Presupuesto para desarrollo web"
            >
              zanle.studio.io@gmail.com
            </a>
          </div>
        </div>

        <hr className="vc-divider" />

        {/* Bottom columns */}
        <div className="vc-bottom">
          <div className="vc-brand">
            <h2 className="name">
              <Logo size="40px" strokeOne="white" strokeTwo="white" /> Zanle Studio
            </h2>
            <Reveal animation="fade-right" delay={200}>
              <p className="tagline">LATAM DEVELOPERS</p>
            </Reveal>
            <p className="year">★ 2026 — Todos los derechos reservados</p>
          </div>

          <div>
            <p className="col-title">Localización</p>
            <p className="col-item">Argentina</p>
            <p className="col-item">Perú</p>
            <Br />
            <p className="col-title">Oficinas</p>
            <p className="col-item">100% Remoto</p>
          </div>

          <div>
            <p className="col-title">Social</p>
            <p className="col-item">Facebook</p>
            <p className="col-item">Twitter</p>
            <p className="col-item">LinkedIn</p>
            <p className="col-item">Instagram</p>
          </div>

          <div>
            <p className="col-title">Navegación</p>
            <p className="col-item">Inicio</p>
            <p className="col-item">Precios</p>
            <p className="col-item">FAQs</p>
            <p className="col-item">Contacto</p>
          </div>
        </div>

        <style jsx>{`

          /* ── CONTAINER ── */
          .footer__content {
            width: 100%;
            background: #ff445a;
            color: #fff;
            padding: 80px 80px 48px;
            position: relative;
            overflow: hidden;
          }

          /* ── WATERMARK ── */
          .footer__content::before {
            content: 'ZANLE';
            position: absolute;
            bottom: -40px;
            left: -20px;
            font-size: 280px;
            font-weight: 900;
            color: rgba(255, 255, 255, .04);
            letter-spacing: -10px;
            pointer-events: none;
            line-height: 1;
            user-select: none;
          }

          /* ── TOP CTA ── */
          .vc-top {
            margin-bottom: 16px;
          }

          .label {
            font-size: 13px;
            font-weight: 700;
            letter-spacing: 4px;
            text-transform: uppercase;
            color: rgba(255, 255, 255, .55);
            margin-bottom: 10px;
          }

          .email {
            display: block;
            font-size: 58px;
            font-weight: 900;
            letter-spacing: -2px;
            line-height: 1;
            color: #fff;
            text-decoration: none;
            transition: opacity .2s;
          }
          .email:hover { opacity: .8; }

          /* ── DIVIDER ── */
          .vc-divider {
            height: 1px;
            border: none;
            background: rgba(255, 255, 255, .2);
            margin: 48px 0 40px;
          }

          /* ── BOTTOM GRID ── */
          .vc-bottom {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr 1fr;
            gap: 32px;
            align-items: start;
          }

          /* ── BRAND ── */
          .vc-brand .name {
            font-size: 28px;
            font-weight: 900;
            margin-bottom: 6px;
            display: flex;
            align-items: center;
            gap: 10px;
          }

          .vc-brand .tagline {
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 3px;
            text-transform: uppercase;
            color: rgba(255, 255, 255, .5);
          }

          .vc-brand .year {
            font-size: 13px;
            color: #ffffff;
            margin-top: 28px;
            font-weight: 600;
          }

          /* ── COLUMNS ── */
          .col-title {
            font-size: 14px;
            font-weight: bold;
            letter-spacing: 3px;
            text-transform: uppercase;
            color: rgba(255, 255, 255, .45);
            margin-bottom: 14px;
          }

          .col-item {
            font-size: 15px;
            font-weight: 500;
            color: rgba(255, 255, 255, .8);
            margin-bottom: 7px;
          }

          /* ── RESPONSIVE ── */
          @media (max-width: 1280px) {
            .footer__content {
              padding: 60px 40px 40px;
            }
            .email {
              font-size: 42px;
            }
            .vc-bottom {
              grid-template-columns: 1fr 1fr;
              gap: 40px;
            }
          }

          @media (max-width: 810px) {
            .email { font-size: 30px; letter-spacing: -1px; }
          }

          @media (max-width: 590px) {
            .footer__content { padding: 48px 24px 32px; }
            .email { font-size: 22px; letter-spacing: 0; }
            .vc-bottom { grid-template-columns: 1fr 1fr; gap: 28px; }
            .footer__content::before { font-size: 160px; }
          }

          @media (max-width: 420px) {
            .vc-bottom { grid-template-columns: 1fr; }
          }
        `}</style>
      </div>
    </footer>
  );
};

export default Footer;
