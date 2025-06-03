interface TextBorderBottomProps{
    text: string;
    isColor?: boolean;
    onClick?: () => void;
}

const TextBorderBottom = ({text, isColor, onClick}: TextBorderBottomProps) => {
  return (
    <div className='w-[188px] p-1 pl-0 border-b border-gray-400'
         onClick={onClick}
    >
        <span className={`${isColor ? 'text-primary': 'text-gray-600'} hover:text-primary text-sm font-normal`}>{text}</span>
    </div>
  )
}

export default TextBorderBottom