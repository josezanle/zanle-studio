import React from 'react'
import { Icon } from '@/components/icons'

const LangSelect = () => {
    return (
        <div className='langSelect'>
            <select>
                <option value="es">ES</option>
                <option value="en">EN</option>
            </select>

            <Icon name='world' size={40} />

            <style jsx>{`
                .langSelect {
                    display: flex;
                    align-items: center;
                    background: white;
                    gap: 10px;
                    padding: .5em 1em;
                    border: 2px solid black;
                    border-radius: 2em;
                }
            `}</style>
        </div>
    )
}

export default LangSelect