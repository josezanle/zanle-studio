import React, { useEffect, useState } from 'react';
import Logo from '../logo';

const Welcome = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);

      // Realiza acciones específicas cuando el ancho de la ventana es inferior a 1200px
      if (window.innerWidth < 1200) {
        // Realiza acciones aquí
        console.log('Ancho de ventana inferior a 1200px');
      }
    };

    // Agrega el evento de cambio de tamaño de la ventana
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
    }

    // Limpieza al desmontar el componente
    return () => {
      // Verifica nuevamente si estamos en el entorno del cliente antes de quitar el evento
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  console.log("windowWidth", windowWidth);

  return (
    <div className='welcome__container'>
      <Logo size={
        windowWidth < 1200 && windowWidth > 800 ? "200px" :
          windowWidth < 800 ? "150px"
            : "400px"
      } />
      <h1>Bienvenido/a</h1>

      <style jsx>
        {`
            .welcome__container{
              width: 100vw;
              height: 100vh;
              justify-content: center;
              align-items: center;
              display: flex;
              flex-flow: column;
              background: #f9fafd;
            }
          `}
      </style>
    </div>
  );
};

export default Welcome;
