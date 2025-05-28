import TimelineItem from './TimelineItem';

interface TimelineData {
  color: string;
  title: string;
  time: string;
}

const Activity: React.FC = () => {
  const items: TimelineData[] = [
    {
      color: 'bg-green-700',
      title: 'RFX David Nguyen Submitted to underwriting',
      time: '2025-04-04 13:00:38',
    },
    {
      color: 'bg-primary',
      title: 'ABC Lisa Rose approval',
      time: '2025-04-04 11:10:38',
    },
    {
      color: 'bg-green-700',
      title: 'RFX David Nguyen Submitted to underwriting',
      time: '2025-04-04 08:00:00',
    },
    {
      color: 'bg-primary',
      title: 'ABC Lisa Rose create an issue',
      time: '2025-04-03 17:10:38',
    },
  ];

  return (
    <div className="mt-5">
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          color={item.color}
          title={item.title}
          time={item.time}
          isLast={index === items.length - 1}
        />
      ))}
    </div>
  );
};

export default Activity;
