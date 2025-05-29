interface TextBorderBottomProps{
    text: string;
    isColor?: boolean;
}

const TextBorderBottom = ({text, isColor}: TextBorderBottomProps) => {
  return (
    <div className='w-[188px] p-1 pl-0 border-b border-gray-400'>
        <span className={`${isColor ? 'text-primary': 'text-gray-600'} text-sm font-normal`}>{text}</span>
    </div>
  )
}

export default TextBorderBottom