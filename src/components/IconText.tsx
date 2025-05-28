import { useState, type SVGProps } from 'react';

type Props = {
    icon: React.FC<SVGProps<SVGSVGElement>>;
    iconHover: React.FC<SVGProps<SVGSVGElement>>;
    text: string;
    isSmall?: boolean;
}

const IconText = ({ icon: Icon, iconHover: IconHover, isSmall, text }: Props) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      className="flex items-center gap-4 px-4 py-2 group hover:bg-gray-200 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <IconHover className="w-5 h-5 "/>
      ) : (
        <Icon className="w-5 h-5"/>
      )}
      {
        !isSmall &&
        <span className="text-gray-600 text-base font-medium group-hover:text-primary">
          {text}
        </span>
      }
    </div>
  );
};

export default IconText