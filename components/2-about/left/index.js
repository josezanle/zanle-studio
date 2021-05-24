import Image from "next/image";

const Text = () => {
  return (
    <div className="text">
      <Image width={100} height={100} src="/icons/logo.png" alt="logo" />
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
          p {
            width: 200px;
          }
        `}
      </style>
    </div>
  );
};

export default Text;
