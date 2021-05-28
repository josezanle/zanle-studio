const Tag = ({ children }) => (
  <div className="row">
    <button>{children}</button>
    <style jsx>
      {`
        button {
          border: none;
          outline: none;
          border: 2px solid #bfc2ca;
          color: #bfc2ca;
          background: transparent;
          padding: 0.5em 1em;
          font-size: 1.3em;
        }
      `}
    </style>
  </div>
);

export default Tag;
