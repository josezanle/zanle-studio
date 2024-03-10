import React from 'react';
import Image from 'next/image';
import { Icon } from '@/components/icons';

const Welcome = () => {
  const imageLoader = ({ src, width, height }) => `https://images.pexels.com/${src}&cs=tinysrgb&w=${width}&h=${height}&dpr=1`

  return (
    <div className='welcome__container'>
      <div className="left__content">
        <div className='name_company__content'>

          <Icon name="star" size={30} fill='#005de9' />
          <Icon name="star" size={30} fill='#005de9' />
          <Icon name="star" size={30} fill='#005de9' />

          <b>Zanle Studio</b>
        </div>

        <h1> Digital <br /> Web Design</h1>

        <p>Somos una agencia de desarrollo de software, paginas web y aplicaciones android</p>
      </div>

      <div className="right__content">
        <Image
          loader={imageLoader}
          src="photos/20044367/pexels-photo-20044367/free-photo-of-manos-telefono-inteligente-ordenador-portatil-trabajando.jpeg?auto=compress"
          alt="pexels-photo-20044367/free-photo-of-manos-telefono-inteligente-ordenador-portatil-trabajando"
          width={500}
          height={500}
          style={{borderRadius:"2em"}}
        />
      </div>

      <style jsx>
        {`
            .welcome__container{
              width: 100%;
              min-height: 80vh;
              display: flex;
              background: white;
              margin: 4em 0;
            }
            .welcome__container .left__content{
              width: 50%;
              min-height: 80vh;
              padding-left: 3em;
              display: flex;
              justify-content: center;
              align-items: flex-end;
              flex-flow: column;
            }
            .welcome__container .left__content .name_company__content {
              width: 100%;
              display: flex;
              gap: 10px;
              margin-bottom: 1em;
            }
            .welcome__container .left__content .name_company__content b{
              font-size: 40px;
            }
            .welcome__container .left__content h1{
              font-size: 120px;
              margin-bottom: .5em;
              color: #005de9;
            }
            
            .welcome__container .left__content p{
              font-size: 50px;
              font-weight: 200;
              width: 80%;
            }
            
            .welcome__container .right__content{
              width: 50%;
              min-height: 80vh;
              display: flex;
              align-items: center;
              gap: 1em;
              padding-left: 4em;
            }
           
            @media (max-width: 1200px) {

            .welcome__container{
              width: 100%;
              flex-flow: column;
              padding: 2em;
            }
            .welcome__container .left__content{
              width: 100%;
              min-height: 100%;
              padding-left: 0;
              display: flex;
              justify-content: start;
              align-items: center;
              flex-flow: column;
            }
            .welcome__container .left__content .name_company__content {
              display: flex;
              gap: 10px;
            }
            .welcome__container .left__content .name_company__content b{
              font-size: 40px;
            }
            
            .welcome__container .right__content{
              width: 100%;
              min-height: 100%;
              justify-content: center;
              align-items: center;
              padding-left: 0;
              margin-top: 2em;
            }
          
          }
          `}
      </style>
    </div>
  );
};

export default Welcome;
