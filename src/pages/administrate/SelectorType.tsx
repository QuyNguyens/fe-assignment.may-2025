import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { filterByField } from '../../features/userSlice';
import ArrowDownIcon from '../../assets/arrow-down-icon-gray.svg';

interface SelectorTypeProps{
    items: string[];
    filterName: string;
}

const SelectorType = ({items, filterName}: SelectorTypeProps) => {
  const [selected, setSelected] = useState<string>('');
  const dispatch = useDispatch();

  const handleSelected = (e: any) =>{
    setSelected(e.target.value);
    dispatch(filterByField({field: filterName, value: e.target.value}));
  }

  return (
    <div className="relative w-full">
        <select
            id="username"
            value={selected}
            onChange={handleSelected}
            className="appearance-none block w-full px-3 py-[5px] border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary text-sm font-normal pr-10"
        >
            <option value="all">All</option>
            {items.map((item, index) => (
            <option key={index} value={item}>
                {item}
            </option>
            ))}
        </select>

        <img className='pointer-events-none absolute top-1/2 right-3 w-[14px] h-[14px] text-gray-500 transform -translate-y-1/2' src={ArrowDownIcon} alt="" />
    </div>

  );
}

export default SelectorType