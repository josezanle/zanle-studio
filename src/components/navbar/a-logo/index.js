import Link from "next/link";

const Logo = () => (
  <>
    <Link href="/"><h1>Zanle Group</h1></Link>
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
