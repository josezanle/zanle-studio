import { Preguntas } from "../../data/faqs";

const Faqs = () => {
  // data que sera mapeada.
  const faqs = Preguntas;

  return (
    <div className="faqs">
      <div id="faqs">
        <h2>Faqs</h2>
      </div>

      <style jsx>
        {`
          .faqs {
            width: 100vw;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-flow: column;
            color: white;
          }
          #faqs {
            width: 100vw;
            padding-left: 2em;
          }
          h2 {
            display: inline;
            border: 2px solid #bfc2ca;
            color: #bfc2ca;
            padding: 0.5em 1em;
          }

          h4 {
            font-size: 2em;
            margin: 1em 0;
          }
        `}
      </style>
    </div>
  );
};

export default Faqs;
