import { Description } from "../../data/features";
import { Icon } from "../icons";
import Logo from "../logo";
import Section from "../section";


const Features = () => {
  return (
    <Section>
      <div className="card">
          <h2 className="title">Enterprice</h2>

          <hr />

          <p className='ask'>*QUE CONTIENE ESTE PLAN?</p>

          <span className='price__item'><Icon name='check' /><p>Este formato cuenta con todo lo anterior mencionado</p></span>
          <span className='price__item'><Icon name='check' /><p>Se puede requerir la aplicacion para sistemas Android</p></span>
          <span className='price__item'><Icon name='check' /><p>Medios de pago Internacionales</p></span>

          <p className="bottom__text">+</p>

          <p className="bottom__text">HOSTING +</p>
          <p className="bottom__text">CERTIFICADO SSL  <b style={{ color: "#f4c534" }}>GRATIS</b> +</p>
          <p className="bottom__text">DOMINIO INCLUIDO</p>

          <button className='button__start__chat'>Empezar!</button>
        </div>

      <style jsx>
        {`
          .card {
            width: 1200px;
            display: flex;
            justify-content: center;
            flex-flow: column;
            color: white;
            background: #2251a0;
            padding: 2.5em;
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
            align-items: flex-end;
            font-size: 29px;
            margin-bottom: 10px;
          }

          .card .paragraph {
            width: 100%;
            font-size: 40px;
            margin-bottom: 100px;
          }

          .card .bottom__text {
            font-size: 35px;
            font-weight: bold;
            margin-top: 28px;
            line-height: 35px;
          }

          .card .button__start__chat
          {
            border-radius: 1em;
            padding: 1em 0;
            width: 100%;
            font-size: 30px;
            margin-top: 2.5em;
            cursor: pointer;
            font-weight: 600;
          }

          @media (max-width: 1200px) {
            .card {width: calc(100% - 4em)}
        }
        `}
      </style>
    </Section>
  );
};

export default Features;
