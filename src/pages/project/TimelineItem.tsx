import OClockIcon from '../../assets/oclock-icon.svg';

interface TimelineItemProps {
  color: string;
  title: string;
  time: string;
  isLast: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ color, title, time, isLast }) => {
  return (
    <div className="flex gap-2">
      <div className="flex flex-col items-center">
        <div className={`w-3 h-3 rounded-full mt-1 ${color}`}></div>
        {!isLast && <div className="mt-1 w-px bg-gray-700 flex-1"></div>}
      </div>
      <div className="flex items-center text-sm font-normal text-gray-600 pb-5 gap-1">
        <span>{title}</span>
        <img className='w-[14px] h-[14px] mr-1' src={OClockIcon} alt="" />
        <span>{time}</span>
      </div>
    </div>
  );
};

export default TimelineItem;
