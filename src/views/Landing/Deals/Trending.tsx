import { TRENDING_DEALS_CONTENT } from "../../../constants/Landing/TrendingDealsContent";
import LogoUSDC from '../../../assets/icons/icon_usdc.svg';
import iconFavorites from '../../../assets/icons/icon_favorite_white.svg';
import iconBtnLeft from '../../../assets/icons/icon_btn_arrow_left.svg';
import iconBtnRight from '../../../assets/icons/icon_btn_arrow_right.svg';
import iconBtnMore from '../../../assets/icons/icon_btn_more.svg';

const TrendingDeals = (props:any) => {
    return(
        <div className={`w-full flex flex-col gap-10 text-white px-20 ${props.mt}`}>
             <div className='flex flex-row justify-between'>
        <span className='font-extrabold text-2xl'>Trending Deals</span>
        <div className='flex flex-row text-white text-sm font-bold gap-3'>
          <button className='w-12'>
            <img src={iconBtnLeft}/>
          </button>
          <button className='w-12'>
          <img src={iconBtnRight}/>
          </button>
        </div>
        </div>
        <div className='flex flex-row gap-4'>
          {TRENDING_DEALS_CONTENT.map(deal => (
            <div className='flex flex-col gap-5 w-80 bg-card_default/10 border border-card_border_default/10 rounded-2xl p-5'>
              <div className='flex items-end justify-end'>
              <img className='w-5' src={iconBtnMore}/>
              </div>
              <img className=' w-full h-64 rounded-xl object-cover object-center' src={deal.IMAGE}/>
              <div className='flex flex-col gap-4'>
                <p className='font-extrabold text-lg'>{deal.TITLE}</p>
                <div className='flex flex-row justify-between'>
                  <div className='flex flex-row gap-3'>
                  <img className='w-5' src={LogoUSDC} />
                  <span className='font-bold text-sm'>{deal.PRICE}</span>
                  </div>
                  <div className='flex flex-row gap-3'>
                    <button>
                    <img className='w-4' src={iconFavorites} />
                    </button>
                    <span className='font-bold text-sm'>{deal.FAVORITES}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
    );
}

export default TrendingDeals;