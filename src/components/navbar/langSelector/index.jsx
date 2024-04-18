"use client"

import React from 'react'
import RotateWorld from '@/components/rotateWorld'
import useLocation from '@/hooks/useLocation'


// const flagIcon = `https://flagcdn.com/20x15/${isoFlag}.png`

// const ESflagIcon = https://flagcdn.com/20x15/es.png
// const PEflagIcon = https://flagcdn.com/20x15/pe.png
// const ARflagIcon = https://flagcdn.com/20x15/ar.png
// const UYflagIcon = https://flagcdn.com/20x15/uy.png
// const VEflagIcon = https://flagcdn.com/20x15/ve.png
// const ADflagIcon = https://flagcdn.com/20x15/ad.png andora

const CountryFlag = () => {
    const { data } = useLocation()
    const lowercaseCountryCode = data?.countryCode?.toLowerCase()

    return (
        <div className='countryFlag'>
            {data?.countryCode && <img src={`https://flagcdn.com/20x15/${lowercaseCountryCode}.png`} alt={data?.country} />}

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