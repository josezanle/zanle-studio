import React from 'react'
import { Icon } from '@/components/icons'
import RotateWorld from '@/components/rotateWorld'

const LangSelect = () => {
    return (
        <div className='langSelect'>
            <select>
                <option value="es">ES</option>
                <option value="en">EN</option>
            </select>

            <RotateWorld />

            <style jsx>{`
                .langSelect {
                    display: flex;
                    align-items: center;
                    background: white;
                    gap: 10px;
                    padding: .5em 1em;
                    border-radius: 2em;
                }
            `}</style>
        </div>
    )
}

export default LangSelect