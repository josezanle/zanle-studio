import React from 'react'

export default function Loadding() {
  return (
    <div className='container'>
      <div className="loading">
        <div className="loading-text">
          <span className="loading-text-words">L</span>
          <span className="loading-text-words">o</span>
          <span className="loading-text-words">a</span>
          <span className="loading-text-words">d</span>
          <span className="loading-text-words">i</span>
          <span className="loading-text-words">n</span>
          <span className="loading-text-words">g</span>
        </div>
      </div>

      <style jsx>{`
        .container{
          background-color: #fafafa;
          width: 100vw;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 40000;
        }

        .loading {
          width: 200px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-flow: column;
        }
        .loading-text {
          text-align: center;
          width: 100%;
        }
        .loading-text span {
          display: inline-block;
          color: silver;
          font-weight: 400;
          font-family: "Roboto", sans-serif;
          font-size: 25px;
        }
        .loading-text span:nth-child(1) {
          filter: blur(0px);
          -webkit-animation: blur-text 1.5s 0s infinite linear alternate;
          animation: blur-text 1.5s 0s infinite linear alternate;
        }
        .loading-text span:nth-child(2) {
          filter: blur(0px);
          -webkit-animation: blur-text 1.5s 0.2s infinite linear alternate;
          animation: blur-text 1.5s 0.2s infinite linear alternate;
        }
        .loading-text span:nth-child(3) {
          filter: blur(0px);
          -webkit-animation: blur-text 1.5s 0.4s infinite linear alternate;
          animation: blur-text 1.5s 0.4s infinite linear alternate;
        }
        .loading-text span:nth-child(4) {
          filter: blur(0px);
          -webkit-animation: blur-text 1.5s 0.6s infinite linear alternate;
          animation: blur-text 1.5s 0.6s infinite linear alternate;
        }
        .loading-text span:nth-child(5) {
          filter: blur(0px);
          -webkit-animation: blur-text 1.5s 0.8s infinite linear alternate;
          animation: blur-text 1.5s 0.8s infinite linear alternate;
        }
        .loading-text span:nth-child(6) {
          filter: blur(0px);
          -webkit-animation: blur-text 1.5s 1s infinite linear alternate;
          animation: blur-text 1.5s 1s infinite linear alternate;
        }
        .loading-text span:nth-child(7) {
          filter: blur(0px);
          -webkit-animation: blur-text 1.5s 1.2s infinite linear alternate;
          animation: blur-text 1.5s 1.2s infinite linear alternate;
        }

        @keyframes blur-text {
          0% {
            filter: blur(0px);
          }
          15% {
            filter: blur(0.3px);
          }
          70% {
            filter: blur(1px);
          }
          100% {
            filter: blur(0px);
          }
        }
      `}</style>
    </div>
  )
}

