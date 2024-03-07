import React from 'react'

const Section = ({children}) => {
    return (
        <div className="section">{children}

            <style jsx>
                {`
                    .section {
                        width: 100vw;
                        display: flex;
                        justify-content: center;
                    }
                `}
            </style>
        </div>


    )
}



export default Section