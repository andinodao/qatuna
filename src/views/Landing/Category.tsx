import { CATEGORY_CONTENT } from '../../constants/Landing/CategoryContent';

const Category = (props:any) => {
  return (
    <div className={`w-full flex flex-col gap-10 px-20 justify-center ${props.mt}`}>
      <span className='text-2xl text-white font-extrabold'>
        Categorias Recomendadas
      </span>
      <div className='flex flex-row gap-7 h-80 w-auto'>
        {CATEGORY_CONTENT.map(category => (
          <div className='bg-white rounded-[1.5rem] px-6 pt-6 pb-10 flex flex-row '>
            <div className='flex flex-col gap-6'>
              <div className='grid grid-rows-2 grid-flow-col gap-2 h-4/5'>
                <img
                  className='h-full w-60 object-cover object-center row-span-2  rounded-xl'
                  src={category.IMG_COLLAGE_1}
                />
                <img className='h-full w-28 object-cover object-center rounded-xl' src={category.IMG_COLLAGE_2} />
                <img className='h-full w-28 object-cover object-center rounded-xl' src={category.IMG_COLLAGE_3} />
              </div>
              <div className='flex flex-row gap-8'>
                <img
                  className='w-11 h-11 rounded-full'
                  src={category.IMG_PROFILE}
                />
                <div className='flex flex-col'>
                  <span className='text-lg font-extrabold text-bgGradientOrange_1'>
                    {category.TITLE}
                  </span>
                  <div className='flex flex-row gap-2'>
                    <span className='text-sm font-bold'>
                      {category.AVAILABLE}
                    </span>
                    <span className='text-sm'> deals</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
