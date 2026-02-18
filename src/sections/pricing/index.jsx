import React from 'react'
import Section from '@/components/section'
import { Br } from '@/components/br';

const Pricing = () => {

    const enviarWhatsApp = (plan) => {
        const telefono = '+541125055852';
        const mensaje = `Hola, estoy interesado en el plan ${plan}.`;
        const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
        window.location.href = url;
    };

    return (
        <Section>
            <div className='pricing__container' id="price">
                

                <h2 className='title'>Propuesta simple<b style={{ color: "#ff445a" }}>*</b></h2>
                <p className='paragraph'>Simplificamos los precios y oportunidades, para que sea mas eficiente, rapido y facil, al momento de tomar una desicion, que te impulse a crecer en tu sitio web</p>

                <div className="cards__container">

                    {/* Static */}
                    <div className="card card--static">
                        <div className="card__icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10"/>
                                <line x1="2" y1="12" x2="22" y2="12"/>
                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                            </svg>
                        </div>
                        <p className="card__label">Plan</p>
                        <h2 className="card__title">Static</h2>
                        <p className="card__desc">Presencia web profesional, rápida y lista para publicar.</p>
                        <hr className="card__divider" />
                        <div className="card__feats">
                            <div className="feat"><span className="feat__check"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="2,6 5,9 10,3"/></svg></span><p>Sitio estático</p></div>
                            <div className="feat"><span className="feat__check"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="2,6 5,9 10,3"/></svg></span><p>Diseño del sitio</p></div>
                            <div className="feat"><span className="feat__check"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="2,6 5,9 10,3"/></svg></span><p>Responsive Design</p></div>
                            <div className="feat"><span className="feat__check"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="2,6 5,9 10,3"/></svg></span><p>Galería slide</p></div>
                            <div className="feat"><span className="feat__check"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="2,6 5,9 10,3"/></svg></span><p>Certificado SSL</p></div>
                        </div>
                        <Br />
                        <button className="card__btn" onClick={() => enviarWhatsApp("Static")}>Comenzar</button>
                    </div>

                    {/* Premium - Featured */}
                    <div className="card card--premium">
                        <div className="card__badge">⭐ Popular</div>
                        <div className="card__icon card__icon--featured">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                            </svg>
                        </div>
                        <p className="card__label">Plan</p>
                        <h2 className="card__title card__title--featured">Premium</h2>
                        <p className="card__desc">Sitio con panel de control propio para gestionar tu contenido fácilmente.</p>
                        <hr className="card__divider" />
                        <div className="card__feats">
                            <div className="feat feat--featured"><span className="feat__check feat__check--featured"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="2,6 5,9 10,3"/></svg></span><p>Sitio auto administrable</p></div>
                            <div className="feat feat--featured"><span className="feat__check feat__check--featured"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="2,6 5,9 10,3"/></svg></span><p>Dashboard para editar contenido</p></div>
                            <div className="feat feat--featured"><span className="feat__check feat__check--featured"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="2,6 5,9 10,3"/></svg></span><p>Responsive Design</p></div>
                            <div className="feat feat--featured"><span className="feat__check feat__check--featured"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="2,6 5,9 10,3"/></svg></span><p>Whatsapp incluido</p></div>
                            <div className="feat feat--featured"><span className="feat__check feat__check--featured"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="2,6 5,9 10,3"/></svg></span><p>Galería slide customizable</p></div>
                            <div className="feat feat--featured"><span className="feat__check feat__check--featured"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="2,6 5,9 10,3"/></svg></span><p>Hasta 3 páginas</p></div>
                            <div className="feat feat--featured feat--advanced"><span className="feat__check feat__check--featured"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="2,6 5,9 10,3"/></svg></span><p>CI/CD automático</p></div>
                            <div className="feat feat--featured feat--advanced"><span className="feat__check feat__check--featured"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="2,6 5,9 10,3"/></svg></span><p>Soporte 24/7</p></div>
                        </div>
                        <Br />
                        <button className="card__btn card__btn--featured" onClick={() => enviarWhatsApp("Premium")}>Comenzar</button>
                    </div>

                    {/* Enterprise */}
                    <div className="card card--enterprise">
                        <div className="card__icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                                <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                                <line x1="12" y1="22.08" x2="12" y2="12"/>
                            </svg>
                        </div>
                        <p className="card__label">Plan</p>
                        <h2 className="card__title">Enterprise</h2>
                        <p className="card__desc">Solución completa con app Android, hosting y dominio incluido.</p>
                        <hr className="card__divider" />
                        <div className="card__feats">
                            <div className="feat"><span className="feat__check"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="2,6 5,9 10,3"/></svg></span><p>Todo lo del plan Premium</p></div>
                            <div className="feat"><span className="feat__check"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="2,6 5,9 10,3"/></svg></span><p>App para Android</p></div>
                            <div className="feat"><span className="feat__check"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="2,6 5,9 10,3"/></svg></span><p>Medios de pago internacionales</p></div>
                            <div className="feat"><span className="feat__check"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="2,6 5,9 10,3"/></svg></span><p>Hosting + SSL + Dominio</p></div>
                            <div className="feat"><span className="feat__check"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="2,6 5,9 10,3"/></svg></span><p>CI/CD automático</p></div>
                            <div className="feat"><span className="feat__check"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="2,6 5,9 10,3"/></svg></span><p>Soporte 24/7</p></div>
                            <div className="feat feat--advanced"><span className="feat__check"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="2,6 5,9 10,3"/></svg></span><p>Métricas y analytics</p></div>
                            <div className="feat feat--advanced"><span className="feat__check"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="2,6 5,9 10,3"/></svg></span><p>Exportación a Excel</p></div>
                            <div className="feat feat--advanced"><span className="feat__check"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="2,6 5,9 10,3"/></svg></span><p>Monitoreo en tiempo real</p></div>
                        </div>
                        <Br />
                        <button className="card__btn" onClick={() => enviarWhatsApp("Enterprise")}>Comenzar</button>
                    </div>

                </div>

                <style jsx>{`

                    /* ── CONTAINER ── */
                    .pricing__container {
                        width: 1200px;
                        min-height: 100vh;
                        padding-top: 5em;
                    }

                    /* ── HEADER — sin tocar ── */
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
                        font-weight: 200;
                    }

                    /* ── GRID ── */
                    .cards__container {
                        display: grid;
                        grid-template-columns: 1fr 1.2fr 1fr;
                        gap: 20px;
                        align-items: stretch;
                        padding: .5em 0;
                    }

                    /* ── CARD BASE ── */
                    .card {
                        background: #005de9;
                        border-radius: 18px;
                        padding: 34px 28px 30px;
                        display: flex;
                        flex-direction: column;
                        color: #fff;
                        transition: transform .22s ease, box-shadow .22s ease;
                        cursor: pointer;
                        height: 100%;
                    }
                    .card:hover {
                        transform: translateY(-5px);
                        box-shadow: 0 16px 40px rgba(0, 93, 233, .3);
                    }

                    /* ── FEATURED CARD ── */
                    .card--premium {
                        background: #005de9;
                        border-radius: 22px;
                        padding: 44px 32px 36px;
                        box-shadow: 0 24px 64px rgba(0, 93, 233, .4);
                        position: relative;
                        overflow: hidden;
                    }
                    .card--premium:hover {
                        transform: translateY(-7px);
                        box-shadow: 0 32px 72px rgba(0, 93, 233, .5);
                    }
                    .card--premium::before,
                    .card--premium::after {
                        content: '';
                        position: absolute;
                        border-radius: 50%;
                        pointer-events: none;
                    }
                    .card--premium::before {
                        width: 180px; height: 180px;
                        top: -60px; right: -50px;
                        background: rgba(255, 255, 255, .06);
                    }
                    .card--premium::after {
                        width: 100px; height: 100px;
                        bottom: -30px; left: -30px;
                        background: rgba(255, 205, 29, .08);
                    }

                    /* ── BADGE ── */
                    .card__badge {
                        display: inline-flex;
                        align-items: center;
                        gap: 5px;
                        background: #e63333;
                        color: #fff;
                        font-size: 11px;
                        font-weight: 800;
                        letter-spacing: 2px;
                        text-transform: uppercase;
                        padding: 4px 12px;
                        border-radius: 20px;
                        margin-bottom: 20px;
                        width: fit-content;
                    }

                    /* ── ICON ── */
                    .card__icon {
                        width: 52px;
                        height: 52px;
                        border-radius: 14px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin-bottom: 18px;
                        background: rgba(255, 255, 255, .13);
                        flex-shrink: 0;
                    }
                    .card__icon svg {
                        width: 26px;
                        height: 26px;
                    }
                    .card__icon--featured {
                        background: rgba(255, 205, 29, .18);
                        width: 58px;
                        height: 58px;
                        border-radius: 16px;
                    }
                    .card__icon--featured svg {
                        width: 30px;
                        height: 30px;
                        stroke: #ffcd1d;
                    }

                    /* ── LABEL ── */
                    .card__label {
                        font-size: 11px;
                        font-weight: 700;
                        letter-spacing: 3px;
                        text-transform: uppercase;
                        opacity: .45;
                        margin-bottom: 4px;
                    }

                    /* ── PLAN NAME ── */
                    .card__title {
                        font-size: 36px;
                        font-weight: 900;
                        line-height: 1;
                        letter-spacing: -0.5px;
                        margin-bottom: 10px;
                    }
                    .card__title--featured {
                        font-size: 44px;
                        letter-spacing: -1px;
                    }

                    /* ── DESCRIPTION ── */
                    .card__desc {
                        font-size: 14px;
                        font-weight: 400;
                        line-height: 1.55;
                        opacity: .58;
                        margin-bottom: 22px;
                    }
                    .card--premium .card__desc {
                        font-size: 15px;
                        opacity: .68;
                    }

                    /* ── DIVIDER ── */
                    .card__divider {
                        width: 100%;
                        height: 1px;
                        border: none;
                        background: rgba(255, 255, 255, .14);
                        margin-bottom: 20px;
                    }

                    /* ── FEATURES ── */
                    .card__feats {
                        flex: 1;
                        overflow: hidden;
                    }
                    .feat {
                        display: flex;
                        align-items: flex-start;
                        gap: 9px;
                        font-size: 14px;
                        font-weight: 500;
                        line-height: 1.45;
                        margin-bottom: 11px;
                        opacity: .85;
                    }
                    .feat--featured {
                        font-size: 15px;
                        font-weight: 600;
                        opacity: 1;
                    }
                    .feat--advanced {
                        opacity: 1;
                        font-weight: 700;
                    }
                    .feat--advanced p {
                        background: rgba(255, 205, 29, .15);
                        color: #ffcd1d;
                        padding: 1px 8px;
                        border-radius: 6px;
                        font-size: 13px;
                    }
                    .feat p { margin: 0; }

                    .feat__check {
                        width: 18px;
                        height: 18px;
                        border-radius: 50%;
                        background: rgba(255, 255, 255, .15);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-shrink: 0;
                        margin-top: 2px;
                    }
                    .feat__check svg {
                        width: 10px;
                        height: 10px;
                    }
                    .feat__check--featured {
                        background: rgba(255, 205, 29, .25);
                    }
                    .feat__check--featured svg {
                        stroke: #ffcd1d;
                    }

                    /* ── BUTTONS ── */
                    .card__btn {
                        font-family: "Catamaran", sans-serif;
                        font-size: 16px;
                        font-weight: 800;
                        letter-spacing: 1.5px;
                        text-transform: uppercase;
                        border-radius: 10px;
                        padding: 14px;
                        width: 100%;
                        cursor: pointer;
                        transition: all .18s ease;
                        border: 2px solid rgba(255, 255, 255, .35);
                        background: transparent;
                        color: #fff;
                        margin-top: 28px;
                    }
                    .card__btn:hover {
                        background: rgba(255, 255, 255, .12);
                        border-color: rgba(255, 255, 255, .7);
                    }
                    .card__btn--featured {
                        background: #ffcd1d;
                        border: 2px solid #ffcd1d;
                        color: #fff;
                        box-shadow: 0 6px 20px rgba(255, 205, 29, .25);
                    }
                    .card__btn--featured:hover {
                        background: #ffd84d;
                        border-color: #ffd84d;
                        box-shadow: 0 10px 30px rgba(255, 205, 29, .4);
                        transform: translateY(-1px);
                    }

                    /* ── RESPONSIVE ── */
                    @media (max-width: 1280px) {
                        .pricing__container {
                            width: 100vw;
                            padding-left: 2em;
                            padding-right: 2em;
                        }
                    }

                    @media (max-width: 995px) {
                        .cards__container {
                            grid-template-columns: 1fr;
                        }
                        .card--premium {
                            border-radius: 18px;
                            padding: 34px 28px 30px;
                        }
                        .card__title--featured { font-size: 36px; }
                    }

                    @media (max-width: 600px) {
                        .pricing__container .title {
                            text-align: left;
                            font-size: 40px;
                        }
                        .card {
                            border-radius: 1em;
                        }
                    }

                    @media (max-width: 420px) {
                        .pricing__container .title { font-size: 40px; }
                        .pricing__container .paragraph { font-size: 20px; }
                        .card__title { font-size: 28px; }
                        .card__btn { font-size: 14px; padding: 12px; }
                    }
                `}</style>
            </div>
        </Section>
    )
}

export default Pricing
