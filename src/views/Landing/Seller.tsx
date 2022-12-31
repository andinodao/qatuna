import imgCard1 from '../../assets/images/img_seller_card1.svg';
import imgCard2 from '../../assets/images/img_seller_card2.svg';
import { SELLER_CONTENT } from '../../constants/Landing/SellerContent';

const Seller = (props:any) => {
    return (
      <div className={`w-full flex flex-col gap-10 text-white px-20 ${props.mt}`}>
        <span className='text-2xl font-extrabold'>
          Vendedores Recomendados
        </span>
        <div className='flex flex-row items-center justify-around'>
        <img src={imgCard1} />
        <img  src={imgCard2} />
        {/*
        <div className='flex flex-row justify-around'>
            
            {SELLER_CONTENT.map(seller => (
                
                <div className='flex flex-col items-center rounded-[30px] justify-around  bg-white pb-6'>
                    <img className='w-80 rounded-t-[30px]' src={seller.COVER}/>
                    <img className='w-12 h-12 rounded-full border-solid border-white border-2 z-20' src={seller.IMG_PROFILE}/>
                    <span className='mt-5 font-extrabold text-lg text-bgGradientOrangeMid'>
                        {seller.NAME}
                    </span>
                    <span className='text-sm text-black/50'>{seller.DESCRIPTION}</span>
                    <span className='font-bold text-sm text-bgGradientOrangeMid mt-4'>
                        {seller.DEALS}
                    </span>
                </div>
            ))} 
        
        </div>
            */}
        </div>
      </div>
    );
}

export default Seller;