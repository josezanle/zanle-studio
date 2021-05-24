// import Image from "next/image";
const Right = () => {
  return (
    <div className="right">
      {/* <Image
        width={300}
        height={300}
        src="/images/mountain.jpg"
        alt="image mountain"
      /> */}
      <style jsx>
        {`
          .right {
            width: 600px;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
    </div>
  );
};

export default Right;
