import React from 'react';
import { Icon } from '@/components/icons';

const Welcome = () => {

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
        <div className="right__pic"></div>
      </div>

      <style jsx>
        {`
            .welcome__container{
              width: 100%;
              min-height: 80vh;
              display: flex;
              justify-content: center;
              margin: 4em 0;
              gap: 2em;
            }
            .welcome__container .left__content{
              width: 600px;
              min-height: 80vh;
              display: flex;
              justify-content: center;
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
              font-size: 100px;
              margin-bottom: 10px;
              color: #005de9;
            }
            
            .welcome__container .left__content p{
              font-size: 45px;
              font-weight: 200;
              width: 100%;
            }
            
            .welcome__container .right__content{
              width: 600px;
              min-height: 80vh;
              display: flex;
              align-items: center;
            }
            .welcome__container .right__content .right__pic{
              background-image: url("https://res.cloudinary.com/dubv6xkxf/image/upload/v1710174634/jv5w3c1wlvtiudleh73z.webp");
              background-repeat: no-repeat;
              background-position: center;
              background-size: cover;
              width: 640px;
              height: 427px;
              border-radius: 2em
            }
           
            @media (max-width: 1200px) {
            .welcome__container{
              width: 100%;
              flex-flow: column;
              padding: 2em;
              gap: 0;
            }
            .welcome__container .left__content{
              width: 100%;
              min-height: 100%;
              display: flex;
              justify-content: start;
              align-items: center;
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
              font-size: 100px;
              margin-bottom: 10px;
              text-align: center;
              width: 100%;
            }
            .welcome__container .left__content p{width: 57%}
            
            .welcome__container .right__content{
              width: 100%;
              min-height: 100%;
              justify-content: center;
              align-items: center;
              padding-left: 0;
              margin-top: 2em;
            }
          }

          @media (max-width: 830px) {
            .welcome__container .left__content p{width: 100%}
          }
          @media (max-width: 700px) {
            .welcome__container .right__content .right__pic{
              width: 100%;
            }
          }
          @media (max-width: 500px) {
            .welcome__container .left__content p{width: 100%}
            .welcome__container .left__content h1{font-size: 60px; width: 100%}
            .welcome__container .left__content .name_company__content {
              flex-wrap: wrap;
            }
          }
          
          `}
      </style>
    </div>
  );
};

export default Welcome;
