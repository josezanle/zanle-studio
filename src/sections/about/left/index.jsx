const Left = () => {
  return (
    <div className="text">
      <h4>Quieres</h4>
      <h4>estar</h4>
      <h4>asi?</h4>

      <style jsx>
        {`
          .text {
            width: 600px;
            height: 100%;
            display: flex;
            justify-content: center;
            padding-right: 1em;
            color: #f9fafd;
            flex-flow: column;
            font-size: 150px;
            font-weight: bold;
          }

          @media (max-width: 1200px) {
            .text {
              width: 50%;
              font-size: 70px;
            }
          }
          @media (max-width: 900px) {
            .text {
              font-size: 40px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Left;
