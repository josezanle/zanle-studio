import React from 'react'

const Copyrights = () => {
    return (
        <div className='copyrights__section'>
            <div className="content">
                <div className="left">Desarrollado por Zanle Group</div>
                <div className="mid">All rights reserved 2024</div>
                <div className="right"> Buenos Aires, Argentina</div>
            </div>

            <style jsx>
        {`
        .copyrights__section {
            max-width: 100vw;
            padding: 3em 0;
            background: ;
            display: flex;
            justify-content: center;
            background: black;
        }
        .copyrights__section .content {
            width: 2000px;
            background: black;
            display: flex;
            flex-flow: row;
            justify-content: space-between;
        }


        .copyrights__section .left,
        .copyrights__section .mid,
        .copyrights__section .right {
            color: #f1f1f1;
            background: black;
        }

        @media (max-width: 1280px) {
            .copyrights__section .content {width: 100%, padding: 0 2em}
        }
        `}
      </style>
        </div>
    )
}

export default Copyrights