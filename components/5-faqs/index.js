import { Preguntas } from "../../data/faqs";

const Faqs = () => {
  // data que sera mapeada.
  const faqs = Preguntas;

  return (
    <div className="faqs" id="faqs">
      {faqs?.map(({ text }, i) => (
        <h4 key={i}>{text}</h4>
      ))}
      <style jsx>
        {`
          .faqs {
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-flow: column;
            color: white;
            position: relative;
          }
          .faqs:before {
            position: absolute;
            top: 6em;
            left: 2em;
            content: "Faqs";
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
