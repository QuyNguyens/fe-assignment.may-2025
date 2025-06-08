import ArrowDown from '../../assets/arrow-down-icon.svg';

interface PropertiesItemProps{
    name: string;
    content: string;
    color: string;
}

const PropertiesItem = ({name,content,color}: PropertiesItemProps) => {
  return (
    <div className='flex items-center justify-between'>
        <span className='text-sm text-gray-600 font-normal'>{name}</span>
        <div className='flex gap-2 items-center w-32'>
            <img className='w-[10px] h-[10px]' src={ArrowDown} alt="" />
            <span className={`text-sm font-normal ${color}`}>{content}</span>
        </div>
    </div>
  )
}

export default PropertiesItem