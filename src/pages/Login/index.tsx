import imgBannerLogin from '../../assets/images/img_banner_login.svg';
import logoChilcanoSwapp from '../../assets/images/img-logo-chilcanoswap.png';
import logoEth from '../../assets/icons/icon_logo_eth.svg';
import logoMetamask from '../../assets/icons/icon_logo_metamask.svg';
import logoCoinbase from '../../assets/icons/icon_logo_coinbase.svg';
import logoTorus from '../../assets/icons/icon_logo_torus.svg';
import logoWalletConnect from '../../assets/icons/icon_logo_walletConnect.svg';
import StarsLogin from '../../assets/icons/icon_stars_login.svg';

const Login = () => {
  return (
    <div className='w-full h-[100vh] flex flex-row text-white'>
      <div className='container w-3/4 pt-28 flex flex-col gap-12 bg-gradient-to-b  from-bgGradientOrange_1 via-bgGradientOrangeMid to-bgGradientOrange_2'>
        <p className='pl-40 w-3/4 font-extrabold text-4xl'>
          💸 Intercambia tus tokens ERC-20 por tus productos y servicios
          favoritos 😍
        </p>
        <img className='w-4/5' src={imgBannerLogin} />
      </div>
      <div className='z-[999] bg-black px-40 pb-5 gap-7 flex flex-col items-center justify-center text-center'>
        <img className='w-44' src={logoChilcanoSwapp} />

        <div className='flex flex-col gap-6'>
          <span className='font-extrabold text-5xl'>Login</span>
          <p className='text-sm'>
            Elija uno de los proveedores de billetera disponibles y conectate
            con tu wallet o crea una nueva.
          </p>
        </div>

        <div className='flex flex-row gap-3 border-b border-white/20'>
          <img className='w-3' src={logoEth} />
          <span className='font-bold text-sm pb-3'>Ethereum</span>
        </div>

        <div className='w-full flex flex-col gap-3 justify-center'>
          <button className='p-2 rounded-full border border-white/20'>
            <div className='flex flex-row items-center justify-center gap-4'>
            <img src={logoMetamask} />
            <span className='font-bold text-sm'>Metamask</span>
            </div>
          </button>

          <button className='p-2 rounded-full border border-white/20'>
            <div className='flex flex-row items-center justify-center gap-4'>
            <img src={logoCoinbase} />
            <span className='font-bold text-sm'>Coinbase Wallet</span>
            </div>
          </button>

          <button className='p-2 rounded-full border border-white/20'>
            <div className='flex flex-row items-center justify-center gap-4'>
            <img src={logoTorus} />
            <span className='font-bold text-sm'>Torus</span>
            </div>
          </button>

          <button className='p-2 w-full rounded-full border border-white/20'>
            <div className='flex flex-row items-center justify-center gap-4'>
            <img src={logoWalletConnect} />
            <span className='font-bold text-sm'>Wallet Connect</span>
            </div>
          </button>

          <button className='p-2 w-full font-bold text-sm rounded-full border border-white/20'>
            Mostras más opciones
          </button>
        </div>
        
      </div>
      
    </div>
  );
};

export default Login;
