import { useState } from "react";
import Section from "@/components/section";
import { Icon } from "@/components/icons";

const Faqs = () => {
  const [openSelect, setOpenSelect] = useState(null);

  const selectsData = [
    { id: 1, label: 'Que es un sitio Estatico?', option: 'Es un sitio web que muestra contenido fijo y no cambia según las acciones del usuario.' },
    { id: 2, label: 'Diferencia entre un sitio estático y uno dinámico?', option: 'Uno muestra contenido fijo, mientras que un sitio dinámico permite actualizar contenido en tiempo real.' },
    { id: 3, label: 'Que es Responsive Design?', option: 'Es un enfoque de diseño web que garantiza que el sitio se adapte y se vea bien en diferentes dispositivos y tamaños de pantalla.' },
    { id: 4, label: 'Cuánto tiempo lleva un desarrollo web?', option: 'Depende del plan, pero sitios estaticos, 2 dias, el premium 3 semanas a 1 mes.' },
    { id: 5, label: 'Ofrecen servicios de mantenimiento web después del lanzamiento?', option: 'Si, solo disponible para los planes Premiun y Enterprice.' },
    { id: 6, label: 'Cómo garantizan la seguridad de los sitios web que desarrollan?', option: 'Utilizamos las mas recientes actualizaciones de los servicios que utilizamos.' },
    { id: 7, label: 'Puedo solicitar cambios en el diseño después de que comience el desarrollo?', option: 'solo disponible para los planes Premiun y Enterprice.' },
  ];

  const handleToggle = (id) => setOpenSelect((prevOpenSelect) => (prevOpenSelect === id ? null : id));


  return (
    <Section>
      <div className="faqs__content" id="faqs">
        <div className="left__content">
          <h2 className="faq__title">*Preguntas Frecuentes?</h2>
        </div>

        <div className="right__content">
          <div className="selects-container">
            {selectsData.map((select) => (
              <div
                key={select.id}
                className={`select-item ${openSelect === select.id ? 'open' : ''}`}
                style={{ borderBottom: `2px solid ${openSelect === select.id ? '#005de9' : '#f1f1f1'} ` }}

              >
                <div
                  className="select-label"
                  onClick={() => handleToggle(select.id)}
                  style={{ color: openSelect === select.id ? '#005de9' : 'silver' }}
                >
                  {select.label}
                  <Icon
                    name={openSelect === select.id ? "arrow-short-up" : "arrow-short-down"}
                    fill={openSelect === select.id ? "#005de9" : "#f1f1f1"}
                  />
                </div>

                <div className="options-container">
                  {openSelect === select.id && <div className="option-fade-in">{select.option}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
        .faqs__content{
          display: flex;
          width: 1200px;
          min-height: 100vh;
          padding-top: 4em;
        }

        .faqs__content .left__content,
        .faqs__content .right__content{
          flex: 1;
          height: 100%;
        }

        .faqs__content .left__content .faq__title{
          font-size: 40px;
          font-style: italic;
          color: #005de9
        }
        
        .faqs__content .right__content .selects-container {
          max-width: 600px;
          margin: auto;
        }

        .select-item {
          margin-bottom: 20px;
          overflow: hidden;
          transition: box-shadow 0.3s ease-in-out;
        }

        .select-label {
          padding: 0 10px;
          font-size: 22px;
          font-weight: 300;
          background-color: white;
          cursor: pointer;
          user-select: none;
          transition: background-color 0.3s ease-in-out;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .options-container {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease-in-out;
        }

        .option-fade-in {
          opacity: 0;
          animation: fadeIn 0.4s ease-in-out forwards;
          font-size: 18px;
          padding-left: 10px;
          color: #1c1c1c;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .select-item.open {
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .select-item.open .options-container {
          max-height: 100px; 
          transition: max-height 0.3s ease-in-out;
        }

        .option {
          padding: 15px;
          font-size: 14px;
          line-height: 1.5;
          transition: background-color 0.3s ease-in-out;
        }

        @media (max-width: 1280px) {
          .faqs__content{
            width: 100vw;
            min-height: 100vh;
            padding: 4em 2em;
            display: flex;
            flex-flow: column;
          }
          .faqs__content .left__content{display: flex; align-items: center;}
          .faqs__content .left__content .faq__title{text-align: center; margin-bottom: 1em}
        }
        @media (max-width: 500px) {
          .faqs__content .left__content .faq__title{
            width: 100%;
            text-align: left;
            font-size: 30px;
          }
        }
        @media (max-width: 500px) {.faqs__content .left__content .faq__title{font-size: 25px}}

      `}</style>
      </div>
    </Section>
  );
};

export default Faqs;
