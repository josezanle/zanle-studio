import { Description } from "../../data/features";

const features = Description;

const Features = () => {
  return (
    <section id="projects">
      {features?.map(({ title, desc }, i) => (
        <div className="card">
          <div className="top">{title}</div>
          <br />
          <div className="bottom">{desc}</div>
        </div>
      ))}

      <style jsx>
        {`
          section {
            background: silver;
            color: #1c1c1c;
          }

          .card {
            width: 250px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-flow: column;
            margin: 0.5em;
          }
        `}
      </style>
    </section>
  );
};

export default Features;
