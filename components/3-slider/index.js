import { Images } from "../../data/images";

const Slider = () => {
  const sliderImages = Images;
  return (
    <section className="container">
      <div className="content">
        {sliderImages?.map((image, i) => (
          <div className="box" key={i}>
            <div
              className="image"
              style={{
                backgroundImage: `url(${image.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
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
            flex-wrap: nowrap;
            animation: move 40s infinite linear alternate;
            width: 100%;
          }
          .box {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .image {
            width: 100%;
            height: 500px;
            margin: 0 1em;
          }

          @keyframes move {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-100%);
            }
          }
          // ============================================
          @media (max-width: 615px) {
            .box {
              width: 150px;
              min-height: 50px;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Slider;
