import { FOOTER_CONTENT } from '../../constants/Footer/FooterContent';
import Input from '../Input';
import iconMail from '../../assets/icons/icon_mail.svg';
import iconFacebook from '../../assets/icons/icon_facebook.svg';
import iconTwitter from '../../assets/icons/icon_twitter.svg';
import iconInstagram from '../../assets/icons/icon_instagram.svg';
import iconOptionsArrow from '../../assets/icons/icon_options_arrow.svg';
import iconHomeSettings from '../../assets/icons/icon_home_setting.svg';
import iconLanguage from '../../assets/icons/icon_language.svg';

const Footer = (props: any) => {
  return (
    <div
      className={`w-full bg-card_default/10  text-white ${props.mt} `}
    >
      <div className='py-16 px-20 flex flex-col gap-20'>
        <div className='flex flex-row gap-32'>
          <div className='flex flex-col gap-12'>
            <div className='flex flex-col gap-4'>
              <span className='font-bold '>Suscribete para noticias</span>
              <Input
                className='pl-4 py-3 bg-transparent text-white/80 placeholder:text-white/80 border border-card_border_default/10'
                placeholder='Ingresa tu mail'
                suffix={
                  <img
                    src={iconMail}
                    className='w-5 opacity-80 cursor-pointer'
                    alt='search'
                  />
                }
                shape='circle'
                variant='fill'
              ></Input>
            </div>

            <div className='flex flex-col gap-5'>
              <span className='font-bold'>Siguenos en</span>
              <div className='flex flex-row gap-4'>
              <button className='w-11'>
                <img src={iconFacebook} />
              </button>
              <button className='w-11'>
                <img src={iconTwitter} />
              </button>
              <button className='w-11'>
                <img src={iconInstagram} />
              </button>
              </div>
            </div>
          </div>
          {FOOTER_CONTENT.map(footer => (
            <div className='flex flex-col gap-3 font-bold'>
              <span className='text-white'>{footer.TITLE}</span>
              <span className='text-white/50 text-sm'>
                {footer.CHILD.LABEL_1}
              </span>
              <span className='text-white/50 text-sm'>
                {footer.CHILD.LABEL_2}
              </span>
              <span className='text-white/50 text-sm'>
                {footer.CHILD.LABEL_3}
              </span>
              <span className='text-white/50 text-sm'>
                {footer.CHILD.LABEL_4}
              </span>
              <span className='text-white/50 text-sm'>
                {footer.CHILD.LABEL_5}
              </span>
            </div>
          ))}
          <div className='flex flex-col gap-5'>
            <span className='font-bold text-white'>Nosotros</span>
            <p className='text-sm text-white/50 leading-6'>
              La primera plataforma que te permite intercambiar tus tokens
              ERC-20 por productos y servicios de tu interes, genernado utilidad
              al ecosistema
            </p>
            <button className='pl-4 py-3 w-[57%] rounded-full border border-card_border_default/10'>
              <div className='flex flex-row gap-3'>
                <span className='font-bold text-sm'>Currency - USD</span>
                <img className='w-3' src={iconOptionsArrow} />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className='flex flex-row items-center justify-between py-8 border-t border-white/10'>
          <div className='flex flex-row gap-5 pl-10'>
            <a
              className='font-bold text-xs'
              href='https://chilcanoswap.finance/privacy'
            >
              Privacy Policy
            </a>
            <a
              className='font-bold text-xs'
              href='https://chilcanoswap.finance/terms'
            >
              Terms & Conditions
            </a>
            <span className='font-medium text-white/50 text-xs'>
              © 2023 All rights reserved Chilcano Swap
            </span>
          </div>
          <div className='flex flex-row gap-4 '>
            <button className='w-36 border border-card_border_default/10 rounded-full'>
              <div className='flex flex-row gap-6'>
                <span className='pl-6 font-bold text-sm'>Español</span>
                <img className='w-4' src={iconLanguage} />
              </div>
            </button>
            <button className='w-36'>
              <img src={iconHomeSettings} />
            </button>
          </div>
        </div>
    </div>
  );
};
export default Footer;
