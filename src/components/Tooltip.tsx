interface ToolTipProps{
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    content: string;
    background?: string;
    textColor?: string;
}

//{top,left,right,bottom,content,background,textColor}
const ToolTip = ({}: ToolTipProps) => {
  return (
    <div>ToolTip</div>
  )
}

export default ToolTip