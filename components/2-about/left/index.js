const Text = () => {
  return (
    <section className="text">
      <h5>Securely start your crypto journey.</h5>
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
          h5,
          p {
            width: 300px;
          }
        `}
      </style>
    </section>
  );
};

export default Text;
