"use client"

import React from 'react'
import RotateWorld from '@/components/rotateWorld'
import useLocation from '@/hooks/useLocation'

const CountryFlag = () => {
    const { countryCode } = useLocation()
    const code = countryCode?.toLowerCase()

    return (
        <div className='countryFlag'>
            {code && <img src={`https://flagcdn.com/20x15/${code}.png`} alt={code + " " + "img"} />}

            <RotateWorld />

            <style jsx>{`
                .countryFlag {
                    display: flex;
                    align-items: center;
                    background: white;
                    gap: 10px;
                    padding: .5em 1em;
                    border-radius: 2em;
                }
                .countryFlag img {
                    width: 20px;
                    height: 20px;
                }
            `}</style>
        </div>
    )
}

export default CountryFlag