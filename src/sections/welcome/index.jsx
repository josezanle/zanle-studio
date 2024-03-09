import Logo from '@/components/logo';
import React, { useEffect, useState } from 'react';

const Welcome = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Agrega el evento de cambio de tamaño de la ventana
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  return (
    <div className='welcome__container'>
      <Logo size={
        windowWidth < 1200 && windowWidth > 800 ? "200px" :
          windowWidth < 800 ? "150px"
            : "400px"
      } 
      strokeOne='#34dd9a'
      strokeTwo='#34dd9a'
      />
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
              background: white;
            }
          `}
      </style>
    </div>
  );
};

export default Welcome;
