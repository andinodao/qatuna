import imgCard from '../../assets/images/img_howtowork_card.svg';
import imgWorkFlow from '../../assets/images/img_workflow.svg';
import imgHands from '../../assets/images/img_hand.png';

const HowToWork = (props:any) => {
    return (
      <div className={`w-full flex flex-col gap-4 text-white ${props.mt}`}>
        <span className='text-center text-4xl font-extrabold'>
          ¿Como Funciona?
        </span>
        <div className='flex flex-row items-start'>
          <img className='w-[19%] pt-[20%]' src={imgHands} />
          <div className='flex flex-row gap-16'>
          <img className='w-1/2' src={imgCard} />
          <img className='w-1/2' src={imgWorkFlow} />
          </div>
        </div>
      </div>
    );
}

export default HowToWork;