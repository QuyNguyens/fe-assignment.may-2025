import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterByField } from '../../features/userSlice';

const options = ['All', 'Active', 'InActive'];

const StatusFilter = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const dispatch = useDispatch();

  const handleSelectStatus = (option: string) =>{
    setSelected(option);
    dispatch(filterByField({field: 'status', value: option}));
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
          <span className="text-sm text-gray-normal font-normal">{option}</span>
        </label>
      ))}
    </div>
  );
};

export default StatusFilter;
