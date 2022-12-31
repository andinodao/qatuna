import imgFeature from '../../assets/images/img_feature.svg';
const Feature = (props:any) => {
  return (
    <div className={`w-full flex flex-row gap-40 justify-between pl-36 ${props.mt} ${props.z}`}>
      <div className='flex flex-col gap-10 text-white w-1/2'>
        <p className='font-extrabold text-2xl w-5/6'>Con Chilcano Swap podrás ...</p>
        <div className='flex flex-row gap-9'>
          <span className='text-4xl'>💸</span>
          <div className='flex flex-col gap-1 font-DMSans text-bgGradientGreen_2'>
            <span className='font-medium text-base'>#Compradores</span>
            <p className='font-bold text-3xl'>Ganar ofertas</p>
            <p className='text-lg text-white leading-6'>
              Puedes intercambiar tus tokens por cualquier oferta de producto o
              servicio de tu interés en nuestro marketplace
            </p>
          </div>
        </div>
        <div className='flex flex-row gap-9'>
          <span className='text-4xl'>💰</span>
          <div className='flex flex-col gap-1 font-DMSans text-bgGradientGreen_2'>
            <span className='font-medium text-base'>#Vendedores</span>
            <p className='font-bold text-3xl'>Ganar Cripto</p>
            <p className='text-lg text-white leading-6'>
              Cuando publicas una oferta de tu producto o servicio
              automáticamente estás aceptando y ganando cripto como medio de
              pago
            </p>
          </div>
        </div>
      </div>
      <div className='w-full'>
      <img className='w-auto' src={imgFeature}/>
      </div>
    </div>
  );
};

export default Feature;
