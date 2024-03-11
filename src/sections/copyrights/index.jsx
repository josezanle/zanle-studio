import React from 'react'

const Copyrights = () => {
    return (
        <div className='copyrights__section'>
            <div className="content">
                <div className="left">Desarrollado por Zanle Group</div>
                <div className="mid">All rights reserved 2024</div>
                <div className="right"> Buenos Aires, Argentina</div>
            </div>

            <div className="responsive">Zanle Group 2024 - All rights reserved</div>

            <style jsx>
                {`
                .copyrights__section {
                    max-width: 100vw;
                    padding: 1em 2em; 
                    background: ;
                    display: flex;
                    justify-content: center;
                    background-color: #ff445a;
                }
                .copyrights__section .responsive {display: none}
                .copyrights__section .content {
                    width: 2000px;
                    display: flex;
                    flex-flow: row;
                    justify-content: space-between;
                }

                .copyrights__section .left,
                .copyrights__section .mid,
                .copyrights__section .right {
                    color: #f1f1f1;
                    font-weight: bold;
                    font-size: 20px;
                }

                @media (max-width: 1280px) {.copyrights__section .content {width: 100%, padding: 0 2em}}
                @media (max-width: 850px) {
                    .copyrights__section .content {display: none}
                    .copyrights__section .responsive {display: block; color: white}
                }
            `}
            </style>
        </div>
    )
}

export default Copyrights