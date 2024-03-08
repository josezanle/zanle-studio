const Right = () => {
  return (
    <div className="text">
      <p>Tenemos la mejor calidad para tu negocio digital.</p>
      <style jsx>
        {`
          .text {
            width: 600px;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #f9fafd;
          }
          p {
            font-size: 70px;
            font-weight: 100;
          }

          @media (max-width: 1200px) {
            .text {
              width: 50%;
            }
            .text p {
              font-size: 50px;
            }
          }
          @media (max-width: 900px) {
            .text p{
              font-size: 35px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Right;
