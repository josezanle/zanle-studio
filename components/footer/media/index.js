const Media = () => {
  return (
    <div className="media">
      <div className="facebook" />
      <div className="instagram" />
      <div className="linkedin" />
      <div className="twitter" />
      <style>
        {`
        .media{
            margin-right:2em;
            display:flex;
        }

      .facebook,
      .instagram,
      .linkedin,
      .twitter{
        width:25px;
        height:25px;
        margin:0 .5em;
        cursor:pointer;
      }

      .facebook:hover,
      .instagram:hover,
      .linkedin:hover,
      .twitter:hover{
          background:white;

      }

      .facebook{
          -webkit-mask: url(/icons/facebook.svg) no-repeat;
          background: silver;

      }
      .instagram{
          -webkit-mask: url(/icons/instagram.svg) no-repeat;
          background: silver;

      }
      .linkedin{
          -webkit-mask: url(/icons/linkedin.svg) no-repeat;
          background: silver;

      }
      .twitter{
          -webkit-mask: url(/icons/twitter.svg) no-repeat;
          background: silver;
      }
      `}
      </style>
    </div>
  );
};

export default Media;
