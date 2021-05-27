const Faqs = () => {
  return (
    <section className="faqs">
      <div id="faqs">
        <h4>Faqs</h4>
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
          h4 {
            display: inline;
            border: 2px solid #bfc2ca;
            padding: 0.5em 1em;
          }
        `}
      </style>
    </section>
  );
};

export default Faqs;
