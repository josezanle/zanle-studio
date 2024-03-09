import React from 'react'

const Section = ({ children, background = "white" }) => {
    return (
        <div className="section">{children}

            <style jsx>
                {`
                    .section {
                        width: 100%;
                        display: flex;
                        justify-content: center;
                        background: ${background}
                    }
                `}
            </style>
        </div>


    )
}



export default Section