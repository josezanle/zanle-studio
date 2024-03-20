import { Icon } from "@/components/icons";
import Section from "@/components/section";

const Enterprice = () => {
  const enviarWhatsApp = (plan) => {
    const telefono = '+51925822952'; // jovan
    const mensaje = `Hola, estoy interesado en el plan ${plan}.`;
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.location.href = url;
  };
  return (
    <Section>
      <div className="content">

        <div className="card">
          <h2 className="title">Enterprice</h2>

          <hr />

          <p className='ask'>*QUE CONTIENE ESTE PLAN?</p>

          <span className='price__item'><Icon name='check' /><p>Este formato cuenta con todo lo anterior mencionado</p></span>
          <span className='price__item'><Icon name='check' /><p>Se puede requerir la aplicacion para sistemas Android</p></span>
          <span className='price__item'><Icon name='check' /><p>Medios de pago Internacionales</p></span>

          <p className="bottom__text">+</p>

          <p className="bottom__text">HOSTING +</p>
          <p className="bottom__text">CERTIFICADO SSL  <b style={{ color: "#ffcd1d" }}>GRATIS</b> +</p>
          <p className="bottom__text">DOMINIO INCLUIDO</p>

          <button
            className='button__start__chat'
            onClick={() => enviarWhatsApp("Enterprice")}
          >Empezar</button>
        </div>

        <style jsx>
          {`
          .content {
            width: 1200px;
            padding-bottom: 2em;
            min-height: 100vh;
            background: white
          }
          .card {
            width: 100%;
            display: flex;
            justify-content: center;
            flex-flow: column;
            color: white;
            background: #005de9;
            padding: 2em;
            border-radius: 2em;
          }

          .card .title {
            font-size: 60px;
            font-weight: bold;
          }

          .card hr {
            width: 100px;
            height: 2px;
            margin: 2.5em 0;
            background: #fcfcfc;
          }

          .card .ask{
            font-size: 26px;
            margin-bottom: 1.5em;
            font-weight: bold;
          }

          .card .price__item
          {
            display: flex;
            gap: 10px;
            align-items: center;
            font-size: 29px;
            margin-bottom: 10px;
            font-weight: 200;
            width: 100%
          }

          .card .paragraph {
            width: 100%;
            margin-bottom: 100px;
          }

          .card .bottom__text {
            font-size: 35px;
            font-weight: bold;
            margin-top: 28px;
            line-height: 35px;
          }

          .card .button__start__chat{
            border-radius: 1em;
            padding: 1em 0;
            width: 100%;
            font-size: 30px;
            margin-top: 2.5em;
            cursor: pointer;
            font-weight: 600;
            background: white;
            color: #005de9;
          }

          @media (max-width: 1200px) {
            .content {padding: 0 2em}
            .card {width: 100%; margin-top: 1em}
          }

          @media (max-width: 600px) {
            .content .card {border-radius: 1em}
            .content .card .title{font-size: 30px}
            .card .ask{
              width: 100%;
              font-size: 26px;
            }
            .card .bottom__text {
              font-size: 30px;
              margin-top: 20px;
              line-height: 35px;
            }
          }

          @media (max-width: 420px) {
            .content .card .button__start__chat{
              border-radius: .5em;
              padding: .3em 0;
              width: 100%;
              font-size: 20px;
              margin-top: .5em;
            }
          }



          

`}</style>
      </div>
    </Section>
  );
};

export default Enterprice;
