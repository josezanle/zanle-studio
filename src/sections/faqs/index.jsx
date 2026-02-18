import { useState } from "react";
import Section from "@/components/section";

const Faqs = () => {
  const [openItems, setOpenItems] = useState([]);

  const selectsData = [
    { id: 1, label: 'Que es un sitio Estatico?', option: 'Es un sitio web que muestra contenido fijo y no cambia según las acciones del usuario.' },
    { id: 2, label: 'Diferencia entre un sitio estático y uno dinámico?', option: 'Uno muestra contenido fijo, mientras que un sitio dinámico permite actualizar contenido en tiempo real.' },
    { id: 3, label: 'Que es Responsive Design?', option: 'Es un enfoque de diseño web que garantiza que el sitio se adapte y se vea bien en diferentes dispositivos y tamaños de pantalla.' },
    { id: 4, label: 'Cuánto tiempo lleva un desarrollo web?', option: 'Depende del plan, pero sitios estaticos, 2 dias, el premium 3 semanas a 1 mes.' },
    { id: 5, label: 'Ofrecen servicios de mantenimiento web después del lanzamiento?', option: 'Si, solo disponible para los planes Premium y Enterprise.' },
    { id: 6, label: 'Cómo garantizan la seguridad de los sitios web que desarrollan?', option: 'Utilizamos las mas recientes actualizaciones de los servicios que utilizamos.' },
    { id: 7, label: 'Puedo solicitar cambios en el diseño después de que comience el desarrollo?', option: 'Solo disponible para los planes Premium y Enterprise.' },
  ];

  const handleToggle = (id) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <Section>
      <div className="faqs__content" id="faqs">

        {/* Header */}
        <div className="faqs__header">
          {/* <h2 className="faq__title">*Preguntas Frecuentes</h2> */}
          <h2 className='faq__title'>Preguntas Frecuentes<b style={{ color: "#ff445a" }}>*</b></h2>
          <p className="faq__subtitle">Todo lo que necesitás saber antes de empezar tu proyecto.</p>
        </div>

        {/* Grid */}
        <div className="faq__grid">
          {selectsData.map((item) => {
            const isOpen = openItems.includes(item.id);
            return (
              <div
                key={item.id}
                className={`faq__item ${isOpen ? 'open' : ''}`}
                onClick={() => handleToggle(item.id)}
              >
                <div className="faq__row">
                  <span className="faq__question">{item.label}</span>
                  <span className="faq__icon">{isOpen ? '−' : '+'}</span>
                </div>
                <div className="faq__answer">
                  <p>{item.option}</p>
                </div>
              </div>
            );
          })}
        </div>

        <style jsx>{`

          /* ── CONTAINER ── */
          .faqs__content {
            width: 1200px;
            min-height: 100vh;
            margin-top: 100px;
          }

          /* ── HEADER ── */
          .faqs__header {
            text-align: center;
            margin-bottom: 52px;
          }

          .faq__title {
            font-size: 60px;
            font-weight: 900;
            color: #005de9;
            letter-spacing: -1px;
            line-height: 1.05;
            margin-bottom: 14px;
          }

          .faq__title span { color: #005de9; }

          .faq__subtitle {
            font-size: 17px;
            font-weight: 400;
            color: #888;
            max-width: 480px;
            margin: 0 auto;
            line-height: 1.6;
          }

          /* ── GRID ── */
          .faq__grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 14px;
          }

          /* ── ITEM ── */
          .faq__item {
            background: #fff;
            border-radius: 16px;
            padding: 22px 24px;
            border: 1.5px solid #ebebeb;
            cursor: pointer;
            transition: border-color .2s, box-shadow .2s;
            position: relative;
            overflow: hidden;
            user-select: none;
          }

          .faq__item::before {
            content: '';
            position: absolute;
            left: 0; top: 0; bottom: 0;
            width: 3px;
            background: #005de9;
            transform: scaleY(0);
            transform-origin: bottom;
            transition: transform .25s ease;
            border-radius: 0 0 0 16px;
          }

          .faq__item:hover {
            border-color: #c5d8ff;
            box-shadow: 0 4px 20px rgba(0, 93, 233, .07);
          }

          .faq__item.open {
            border-color: #005de9;
            box-shadow: 0 6px 28px rgba(0, 93, 233, .12);
          }

          .faq__item.open::before {
            transform: scaleY(1);
          }

          /* ── ROW ── */
          .faq__row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
          }

          /* ── QUESTION ── */
          .faq__question {
            font-size: 15.5px;
            font-weight: 700;
            color: #1a1a1a;
            transition: color .2s;
            line-height: 1.35;
          }

          .faq__item.open .faq__question {
            color: #005de9;
          }

          /* ── ICON ── */
          .faq__icon {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background: #f5f7ff;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            font-size: 20px;
            font-weight: 300;
            color: #005de9;
            transition: all .2s;
            line-height: 1;
          }

          .faq__item.open .faq__icon {
            background: #005de9;
            color: white;
          }

          /* ── ANSWER ── */
          .faq__answer {
            max-height: 0;
            overflow: hidden;
            transition: max-height .3s ease, padding .3s ease;
          }

          .faq__item.open .faq__answer {
            max-height: 160px;
            padding-top: 12px;
          }

          .faq__answer p {
            font-size: 14.5px;
            color: #555;
            line-height: 1.65;
            font-weight: 400;
            margin: 0;
            border-top: 1px solid #f0f0f0;
            padding-top: 12px;
          }

          /* ── RESPONSIVE ── */
          @media (max-width: 1280px) {
            .faqs__content {
              width: 100vw;
              padding: 5em 2em 2em;
            }
          }

          @media (max-width: 900px) {
            .faq__grid {
              grid-template-columns: 1fr;
            }
            .faq__title {
              font-size: 42px;
            }
          }

          @media (max-width: 500px) {
            .faq__title {
              font-size: 30px;
            }
            .faq__subtitle {
              font-size: 15px;
            }
            .faq__item {
              padding: 16px 18px;
            }
            .faq__question {
              font-size: 14px;
            }
          }
        `}</style>
      </div>
    </Section>
  );
};

export default Faqs;
