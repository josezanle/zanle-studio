import Link from "next/link";

const Logo = () => (
  <>
    <Link href="/">
      <a rel="noopener">
        <h1>WBW</h1>
      </a>
    </Link>
    <style jsx>{`
      a {
        width: 200px;
        color: white;
        margin: auto 0;
      }
    `}</style>
  </>
);

export default Logo;
