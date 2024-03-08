// ScrollToTopButton.js
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';


const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    // Agregar el evento de scroll al montar el componente
    window.addEventListener('scroll', handleScroll);
    
    // Eliminar el evento de scroll al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Restablecer la visibilidad al cambiar de ruta
    setIsVisible(false);
  }, [router.asPath]);

  return (
    <>
      {isVisible && (
        <div
          className="scroll-to-top-button"
          onClick={scrollToTop}
        >
          ▲
        </div>
      )}

      <style jsx>{`
        .scroll-to-top-button {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 50px;
          height: 50px;
          background-color: #0070f3;
          color: #ffffff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default ScrollToTop;
