import { useState } from 'react';
import ArrowSquareOutColorIcon from '../../assets/ArrowSquareOut-color-icon.svg';

const options = ['Review Loan Applications', 'Contact to Borrower'];

const Todo = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelectStatus = (option: string) =>{
    setSelected(option);
  }

  return (
    <div className="flex flex-col gap-4">
      {options.map((option) => (
        <label key={option} className="flex items-center gap-4 cursor-pointer text-gray-700">
          <input
            type="checkbox"
            checked={selected === option}
            onChange={() => handleSelectStatus(option)}
          />
          <span className="text-base16 text-dark font-medium">{option}</span>
          <img className='w-4 h-4' src={ArrowSquareOutColorIcon} alt="" />
        </label>
      ))}
      <label className="flex items-center gap-4 cursor-pointer text-gray-700">
          <input
            type="checkbox"
            disabled
          />
          <span className="text-base16 text-gray-300 font-medium">Click to add new todo</span>
        </label>
    </div>
  );
};

export default Todo;
