import React from 'react'

const RotateWorld = () => {
    return (
        <div className="earth">
            <div></div>

            <style jsx>
                {`

            .earth {
                width: 40px;
                height: 40px;
                overflow: hidden;
                border-radius: 100%;
                position: relative;
            }

            {/* overlay */}
            .earth:after {
                position: absolute;
                content: "";
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                box-shadow: -20px -20px 50px 2px hsla(206, 39%, 27%, 0.8) inset;
                border-radius: 50%;
}

            .earth>div {
                width: 100%;
                height: 100%;
                animation: spin 40s linear infinite;
                background: url(/images/world.svg);
                background-size: cover;
                background-repeat: repeat-x;
            }    

            @keyframes spin {
                0% {background-position: 0 0}
                100% {background-position: -719px 0}
            }

            `}
            </style>
        </div>

    )
}

export default RotateWorld