import React, { useState } from 'react';
import Input from '../../components/Input';
import imgHeroLeft from '../../assets/images/img_hero_left.png';
import imgHeroRight from '../../assets/images/img_hero_right.png';
import iconSearch from '../../assets/icons/icon_search.svg';

const Hero = (props:any) => {
    const [inputvalue, setInputvalue] = useState('');
  return (
    <div className={`w-full flex flex-row gap-5 items-center justify-center ${props.mt} ${props.z}`}>
      <img src={imgHeroLeft} className='w-1/6' alt='imageSeventyTwo' />
      <div className='flex flex-col gap-8 items-center justify-start w-full px-8 text-white text-center'>
        <p className='w-11/12 leading-[normal] text-center text-4xl font-sans font-extrabold'>
          🚀 Descubre una nueva forma de usar tus tokens con tus servicios y
          productos favoritos ️😍
        </p>
        <p className='w-3/5'>
          Somos la primera plataforma descentralizada y segura que te permite
          intercambiar tus tokens ERC-20 por deals de tu interés de manera
          sencilla y rápida.
        </p>
        <div className='w-3/4'>
          <Input
            defaultValue={inputvalue}
            onChange={e => setInputvalue(e?.target?.value)}
            className='bg-white/10 w-full py-7 px-8 placeholder:text-white/80 font-medium text-white'
            name='SearchNavBar'
            placeholder='Ofertas, descuentos, combos y más ...'
            suffix={
              <div className='bg-gradient-to-b from-bgGradientOrange_1 via-bgGradientOrangeMid to-bgGradientOrange_2 rounded-full w-[3.8vw] py-4  shadow-lg shadow-bgGradientOrangeMid/40'>
                <button className='w-full flex items-center justify-center cursor-pointer'>
                  <img
                    src={iconSearch}
                    className='w-5 p-1'
                    alt='search'
                  />
                </button>
              </div>
            }
            shape='circle'
            variant='fill'
          ></Input>
        </div>
      </div>
      <img src={imgHeroRight} className='w-1/6' alt='imageSixtySeven' />
    </div>
  );
};

export default Hero;
