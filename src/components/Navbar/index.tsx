import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../Input';
import Logo from '../../assets/images/img-logo-chilcanoswap.png';
import iconSearch from '../../assets/icons/icon_search.svg';

const Navbar = (props: any) => {
  const [inputvalue, setInputvalue] = useState('');
  const navigate = useNavigate();
  const handleTologin = () => {
    navigate('/login');
  };

  return (
    <header className={props.className}>
      <div className='font-DMSans flex flex-row gap-12 text-sm items-center justify-between w-full px-24 mt-10'>
        <img src={Logo} className='w-[10%]' />
        <div className='flex flex-row items-start justify-center gap-14 text-sm font-medium text-white'>
          <span className=''>About</span>
          <span className=''>Swap</span>
          <span className=''>Marketplace</span>
        </div>
        <div className='w-[20vw]'>
        <Input
          defaultValue={inputvalue}
          onChange={e => setInputvalue(e?.target?.value)}
          className='bg-white/30 px-6 w-full py-4 font-medium  text-[16px] placeholder:text-white/80 text-white'
          name='SearchNavBar'
          placeholder='Buscar'
          suffix={
            <img
              src={iconSearch}
              className='w-5 opacity-80 cursor-pointer'
              alt='search'
            />
          }
          shape='circle'
          variant='fill'
        ></Input>
        </div>
        
        <button className='bg-gradient-to-b min-w-[12%] py-3 from-bgGradientOrange_1 via-bgGradientOrangeMid to-bgGradientOrange_2 shadow-lg shadow-bgGradientOrangeMid/50 font-medium text-sm rounded-full cursor-pointer  text-center text-white'>
          Crear Deal
        </button>
        <button onClick={handleTologin} className='text-bgGradientGreen_1 cursor-pointer border border-bgGradientGreen_1 shadow-lg shadow-bgGradientGreenMid/40 font-medium min-w-[12%] py-3 rounded-full text-sm text-center'>
          Login
        </button>
      </div>
    </header>
  );
};

export default Navbar;
