import Image from "next/image";
import { Images } from "../../data/images";

const Slider = () => {
  const sliderImages = Images;
  return (
    <section className="container">
      <div className="content">
        {sliderImages?.map((image, i) => (
          <div className="box" key={i}>
            <Image
              width={500}
              height={500}
              alt="alt de las imagenes nene"
              src={image.url}
              style={{
                margin: " 0 2em",
              }}
            />
          </div>
        ))}
      </div>
      <style jsx>
        {`
          .container {
            width: 100vw;
            overflow-x: hidden;
          }
          .content {
            display: flex;
            animation: move 40s infinite linear;
            width: 100%;
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
    </section>
  );
};

export default Slider;
