const Text = () => {
  return (
    <section className="text">
      <h2>Securely start your crypto journey.</h2>
      <br />
      <p>
        Be the only one in charge of your crypto assets. Secure, Buy, Sell,
        Exchange. Anywhere you go.
      </p>
      <style jsx>
        {`
          .text {
            width: 600px;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-flow: column;
          }
          h2,
          p
            width: 300px;
          }
        `}
      </style>
    </section>
  );
};

export default Text;
