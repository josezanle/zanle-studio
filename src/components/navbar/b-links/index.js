import Link from "next/link";

const Links = ({ links }) => (
  <div className="links-container">
    {links?.map((link, i) => (
      <Link key={i} href={link.href}>{link.name}</Link>
    ))}

    <style jsx>
      {`
        .links-container {
          width: 400px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
        }
        a {
          margin: 0 1em;
          color: white;
          font-weight: bold;
          font-size: 1.5em;
        }
        @media (max-width: 800px) {
          .links-container {
            display: none;
          }
        }
      `}
    </style>
  </div>
);

export default Links;
