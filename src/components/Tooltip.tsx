interface ToolTipProps {
  content: string;
  className?: string;
}

const ToolTip = ({ content, className = '' }: ToolTipProps) => {
  return (
    <div className={`inline-block ${className}`}>
        {content}
        <div className="absolute top-1/2 right-[-8px] transform -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-l-8 border-t-transparent border-b-transparent border-dark" />
    </div>
  );
};

export default ToolTip;
