import { useState } from "react";
import Section from "@/components/section";
import { Icon } from "@/components/icons";

const Faqs = () => {
  const [openSelect, setOpenSelect] = useState(null);

  const selectsData = [
    { id: 1, label: 'Que es un sitio Estatico', option: 'Option 1A' },
    { id: 2, label: 'Que es Responsive Design', option: 'Option 2A' },
    { id: 3, label: 'Estos precios tienen soporte?', option: 'Option 3A' },
    { id: 4, label: 'Que es un sitio Estatico', option: 'Option 1A' },
    { id: 5, label: 'Que es Responsive Design', option: 'Option 2A' },
    { id: 6, label: 'Estos precios tienen soporte?', option: 'Option 3A' },
    { id: 7, label: 'Que es un sitio Estatico', option: 'Option 1A' },
    { id: 8, label: 'Que es Responsive Design', option: 'Option 2A' },
    { id: 9, label: 'Estos precios tienen soporte?', option: 'Option 3A' },
    { id: 10, label: 'Estos precios tienen soporte?', option: 'Option 3A' },
  ];

  const handleToggle = (id) => setOpenSelect((prevOpenSelect) => (prevOpenSelect === id ? null : id));


  return (
    <Section>
      <div className="faqs__content">
        <div className="left__content">
          <h2 className="faq__title">*Preguntas Frecuentes?</h2>
        </div>

        <div className="right__content">
          <div className="selects-container">
            {selectsData.map((select) => (
              <div
                key={select.id}
                className={`select-item ${openSelect === select.id ? 'open' : ''}`}
                style={{ border: `2px solid ${openSelect === select.id ? '#005de9' : 'black'} ` }}

              >
                <div
                  className="select-label"
                  onClick={() => handleToggle(select.id)}
                  style={{ color: openSelect === select.id ? '#005de9' : 'black' }}
                >
                  {select.label}
                  <Icon name={openSelect === select.id ? "arrow-short-up" : "arrow-short-down"} />
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
          font-size:40px;
          font-style: italic;
          color: #005de9
        }
        
        .faqs__content .right__content .selects-container {
          max-width: 600px;
          margin: auto;
        }

        .select-item {
          margin-bottom: 20px;
          border-radius: 10px;
          overflow: hidden;
          transition: box-shadow 0.3s ease-in-out;
        }

        .select-label {
          padding: 1em;
          font-size: 22px;
          font-weight: bold;
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
          padding-left: 1.4em;
          padding-bottom: 1em;
        }

        .option-fade-in {
          opacity: 0;
          animation: fadeIn 0.4s ease-in-out forwards;
          font-size: 18px;
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
          max-height: 200px; /* Ajusta según sea necesario */
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
            padding: 0 2em;
            display: flex;
            flex-flow: column;
          }
          .faqs__content .left__content{display: flex; align-items: center;}
          .faqs__content .left__content .faq__title{text-align: center; margin-bottom: 1em}
          
        }
      `}</style>
      </div>
    </Section>
  );
};

export default Faqs;
