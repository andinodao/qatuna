import imgBannerNewsletter from '../../assets/images/img_banner_newsletter.png';
import iconMail from '../../assets/icons/icon_mail.svg';

const Newsletter = (props: any) => {
  return (
    <div className={`w-full flex flex-col gap-10 text-white px-96 ${props.mt}`}>
      <div className='flex flex-row rounded-3xl text-white gap-8 p-8 bg-gradient-to-b from-bgGradientOrange_1 via-bgGradientOrangeMid to-bgGradientOrange_2 shadow-lg shadow-bgGradientOrangeMid/50'>
        <img className='w-80' src={imgBannerNewsletter} />
        <div className='w-full flex flex-col justify-around'>
          <div className='flex flex-col gap-2'>
            <p className='font-semibold text-2xl '>
              Subcríbete para más actualizaciones
            </p>
            <p>
              Reciba promociones y actualizaciones exclusivas directamente en su
              bandeja de entrada.
            </p>
          </div>
          <div className='flex flex-col gap-4'>
            <input
              type='text'
              placeholder='Ingresa tu email'
              className='p-4 h-10 bg-white rounded-full w-full focus:outline-none text-black'
            ></input>
            <button className='p-3 bg-black rounded-full'>
              <div className='flex flex-row gap-2 justify-center'>
                <img src={iconMail} />
                <span className='font-semibold'>Suscríbete</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
