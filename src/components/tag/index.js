const Tag = ({ children, id, background = "white", borderColor="black", fontColor="black" }) => (
  <div className="row" id={id} style={{ background }}>
    <button>{children}</button>
    <style jsx>
      {`
        button {
          border: none;
          outline: none;
          border: 3px solid ${borderColor};
          color: ${fontColor};
          padding: 0.5em 1em;
          font-size: 2.5em;
          background: ${background};
          border-radius: .5em;
          margin: 2em .7em;
        }
      `}
    </style>
  </div>
);

export default Tag;
