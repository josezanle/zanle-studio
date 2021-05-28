import Image from "next/image";
import { Images } from "../../data/images";

const Slider = () => {
  const sliderImages = Images;
  return (
    <>
      <div className="content">
        {sliderImages?.map(({ url }, i) => (
          <div className="box" key={i}>
            <Image
              width={500}
              height={500}
              alt="alt de las imagenes "
              src={url}
            />
          </div>
        ))}
      </div>
      <style jsx>
        {`
          .content {
            display: flex;
            animation: move 22s infinite linear;
            width: 100vw;
          }
          .box {
            flex: 0 0 auto;
            width: 500px;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          @keyframes move {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-100%);
            }
          }
        `}
      </style>
    </>
  );
};

export default Slider;
