import { useNavigate } from 'react-router-dom';
import logoAndino from '../../assets/images/img_logo_andino.png';
import Stars from '../../assets/icons/icon_stars.svg';
import Navbar from '../../components/Navbar';
import Hero from '../../views/Landing/Hero';
import Feature from '../../views/Landing/Feature';
import HowToWork from '../../views/Landing/HowToWork';
import Category from '../../views/Landing/Category';
import Seller from '../../views/Landing/Seller';
import TopDeals from '../../views/Landing/Deals/Top';
import TrendingDeals from '../../views/Landing/Deals/Trending';
import Newsletter from '../../views/Landing/Newsletter';
import Footer from '../../components/Footer';

const Home = () => {
    return(
        <div className='bg-black flex flex-col w-full h-auto gap-28'>
            <Navbar className='z-10'/>
            <Hero z='z-10'/>
            <div className='flex flex-col font-DMSans inset-x-[0] items-center justify-start sm:p-[15px] md:p-[19px] p-[29px] top-[10%] w-[100%]'>
            <p className='text-white/50 w-auto '>
                Sponsored by
              </p>
              <img
                src={logoAndino}
                className='max-w-[100%] sm:mt-[12px] md:mt-[15px] mt-[23px] w-[18%]'
                alt='imageSeventyFour'
              />
            </div>
            <Feature mt={'mt-10'}/>
            <HowToWork mt={'mt-10'}/>
            <Category mt={'mt-10'}/>
            <Seller mt={'mt-10'}/>
            <TopDeals mt={'mt-10'}/>
            <TrendingDeals mt={'mt-10'}/>
            <Newsletter mt={'mt-10'}/>
            <Footer mt={'mt-10'}/>
            <div className='absolute w-full h-full z-[1]'>
              <img className='pointer-events-none' src={Stars}/>
            </div>
        </div>
    );
};

export default Home;