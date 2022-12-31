import { TOP_DEALS_CONTENT } from '../../../constants/Landing/TopDealsContent';
import LogoUSDC from '../../../assets/icons/icon_usdc.svg';
const TopDeals = (props: any) => {
  return (
    <div className={`w-full flex flex-col gap-10 text-white px-20 ${props.mt}`}>
      <div className='flex flex-row justify-between'>
        <span className='font-extrabold text-2xl'>Top Deals</span>
        <div className='flex flex-row text-white text-sm font-bold gap-3'>
          <button className='w-24 bg-gradient-to-b from-bgGradientOrange_1 via-bgGradientOrangeMid to-bgGradientOrange_2 shadow-lg shadow-bgGradientOrangeMid/50 rounded-full'>
            1 dia
          </button>
          <button className='w-24 border rounded-full border-card_border_default/20'>
            7 dias
          </button>
          <button className='w-24 border rounded-full border-card_border_default/20'>
            30 dia
          </button>
        </div>
        </div>
        <div className='grid grid-rows-3 grid-flow-col gap-4'>
          {TOP_DEALS_CONTENT.map(deal => (
            <div className='font-bold text-sm flex flex-row gap-6'>
              {deal.id}
              <img className='w-14 h-14 rounded-xl object-cover object-center' src={deal.IMAGE}/>
              <div className='flex flex-col'>
                {deal.TITLE}
                <div className='flex flex-row gap-2 font-normal'>
                  <img className='w-5' src={LogoUSDC} />
                  {deal.PRICE}
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
};

export default TopDeals;
