import React from 'react'
import { Icon } from '@/components/icons'
import Section from '@/components/section'

const Pricing = () => {
    return (
        <Section>
            <div className='pricing__container' id="price">

                <h2 className='title'>Precios, simples <b style={{ color: "#ff445a" }}>*</b></h2>

                <p className='paragraph'>Simplificamos los precios y oportunidades, para que sea mas eficiente, rapido y facil, al momento de tomar una desicion, que te impulse a crecer en tu sitio web</p>

                <div className="cards__container">
                    <div className="price__simple">
                        <div className="top__title"><h2>Static</h2> <h2 className='title__light__color'>Simple</h2></div>

                        <span className='price'>
                            <h2 className='price__value'>*10$</h2>
                            <p className='price__mode'>/Pago unico</p>
                        </span>

                        <hr className='divisor' />

                        <p className='ask'>*QUE CONTIENE ESTE PLAN?</p>

                        <span className='price__item'><Icon name='check' fill='#1c1c1c' /><p>Sitio statico</p></span>
                        <span className='price__item'><Icon name='check' fill='#1c1c1c' /><p>Diseño del sitio</p></span>
                        <span className='price__item'><Icon name='check' fill='#1c1c1c' /><p>Responsive Design</p></span>
                        <span className='price__item'><Icon name='check' fill='#1c1c1c' /><p>Whatsapp incluido</p></span>
                        <span className='price__item'><Icon name='check' fill='#1c1c1c' /><p>Galeria slide</p></span>
                        <span className='price__item'><Icon name='check' fill='#1c1c1c' /><p>Certifado SSL</p></span>

                        <button className='button__start__chat'>Empezar!</button>
                    </div>

                    <div className="price__montly">
                        <div className="top__title"><h2>Custom</h2> <h2 className='title__light__color'>Premium</h2></div>

                        <span className='price'>
                            <h2 className='price__value'>*15$</h2>
                            <p className='price__mode'>/mensual</p>
                        </span>

                        <hr className='divisor' />

                        <p className='ask'>*QUE CONTIENE ESTE PLAN?</p>

                        <span className='price__item'><Icon name='check' /><p>Sitio auto adminstrable</p></span>
                        <span className='price__item'><Icon name='check' /><p>Incluye dashboard para edita conteniado</p></span>
                        <span className='price__item'><Icon name='check' /><p>Responsive Design</p></span>
                        <span className='price__item'><Icon name='check' /><p>Whatsapp incluido</p></span>
                        <span className='price__item'><Icon name='check' /><p>Galeria slide customizable</p></span>
                        <span className='price__item'><Icon name='check' /><p>Hasta 3 paginas</p></span>

                        <button className='button__start__chat'>Empezar!</button>

                    </div>
                </div>

                <style jsx>
                    {`
                    .pricing__container {
                        width: 1200px;
                        min-height: 100vh;
                        padding-top: 5em;
                    }
                    .pricing__container .title {
                        width: 100%;
                        text-align: center;
                        font-size: 80px;
                        margin-bottom: 40px;
                    }
                    .pricing__container .paragraph {
                        width: 100%;
                        font-size: 40px;
                        margin-bottom: 100px;
                    }

                    .pricing__container .cards__container {
                        display: flex;
                        gap: 1em;
                        padding: .5em 0;
                    }
                    .pricing__container .cards__container .price__simple,
                    .pricing__container .cards__container .price__montly
                     {
                        border-radius: 2em;
                        padding: 2em;
                        min-height: 600px;
                        cursor: pointer;
                    }
                   
                    .pricing__container .cards__container .price__simple {
                        width: 400px;
                        background: #ffcd1d;
                        border: 1px solid #f0f0f0;
                        color: #1c1c1c;
                    }
                    .pricing__container .cards__container .price__montly {
                        width: 800px;
                        background: #ff445a;
                        color: #f4f4f4
                    }

                    .pricing__container .cards__container .price__simple .top__title,
                    .pricing__container .cards__container .price__montly .top__title{
                        display: flex;
                        font-size: 40px;
                        margin-bottom: 25px;
                        gap: 10px;
                    }
                    .pricing__container .cards__container .price__simple .top__title .title__light__color{color: rgba(28, 28, 28, 0.2)}
                    .pricing__container .cards__container .price__montly .top__title .title__light__color{color: rgba(255, 255, 255, 0.5)}

                    .pricing__container .cards__container .price__simple .divisor,
                    .pricing__container .cards__container .price__montly .divisor
                    {
                        width: 100px;
                        height: 2px;
                        margin-bottom: 2.5em;
                    }
                    .pricing__container .cards__container .price__simple .divisor{background: #1c1c1c}
                    .pricing__container .cards__container .price__montly .divisor{background: white}

                    .pricing__container .cards__container .price__simple .ask,
                    .pricing__container .cards__container .price__montly .ask{
                        font-size: 26px;
                        margin-bottom: 1.5em;
                        font-weight: bold;
                    }
                    .pricing__container .cards__container .price__montly .ask{color: white}

                    .pricing__container .cards__container .price__simple .price,
                    .pricing__container .cards__container .price__montly .price
                    {
                        display: flex;
                        align-items: flex-end;
                        margin: 35px 0;
                    }

                    .pricing__container .cards__container .price__simple .price .price__value, 
                    .pricing__container .cards__container .price__montly .price .price__value 
                    {
                        font-size: 80px; 
                    }
                    .pricing__container .cards__container .price__simple .price .price__mode, 
                    .pricing__container .cards__container .price__montly .price .price__mode 
                    {
                        font-size: 30px; 
                    }


                    .pricing__container .cards__container .price__simple .price__item,
                    .pricing__container .cards__container .price__montly .price__item
                     {
                        display: flex;
                        gap: 10px;
                        align-items: flex-end;
                        font-size: 29px;
                        margin-bottom: 10px;
                    }
                    .pricing__container .cards__container .price__simple .button__start__chat,
                    .pricing__container .cards__container .price__montly .button__start__chat
                     {
                        border-radius: 1em;
                        padding: 1em 0;
                        width: 100%;
                        font-size: 30px;
                        margin-top: 2.5em;
                        cursor: pointer;
                        font-weight: 600;
                    }
                    .pricing__container .cards__container .price__simple .button__start__chat
                     {
                        background: white;
                        color: #ffcd1d;
                    }
                    .pricing__container .cards__container .price__montly .button__start__chat
                     {
                        background: white;
                        color:#f45434;
                    }


                    @media (max-width: 1280px) {
                        .pricing__container {
                            width: 100vw;
                            padding-left: 2em;
                            padding-right: 2em;
                        }
                        .pricing__container .cards__container {width: 100%}

                        .pricing__container .cards__container .price__simple,
                        .pricing__container .cards__container .price__montly{
                            width: 100%;
                        }
                    }

                    @media (max-width: 995px) {
                        .pricing__container .cards__container {flex-flow: column; margin-bottom: 1em}
                        
                    }

                    @media (max-width: 590px) {
                        .pricing__container .cards__container .price__simple .top__title,
                        .pricing__container .cards__container .price__montly .top__title
                        {
                            font-size: 25px;
                            margin-bottom: 15px;
                        }
                    }
                    
                `}
                </style>
            </div>
        </Section>
    )
}

export default Pricing