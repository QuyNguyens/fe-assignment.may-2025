import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filterByField } from "../features/users/userSlice";

interface InputFilterProps {
    title: string;
    filterName: string;
    type: string;
}

const InputFilter = ({title, type, filterName}: InputFilterProps) => {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState("");
    const [debouncedValue, setDebouncedValue] = useState(inputValue);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(inputValue);
        }, 500);

        return () => {
            clearTimeout(handler);
        };
    }, [inputValue]);

    useEffect(() => {
        dispatch(filterByField({ field: filterName, value: debouncedValue }));
    }, [debouncedValue, dispatch, filterName]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

  return (
    <div className="flex flex-col gap-2 justify-between">
        <span className='text-base16 font-semibold'>{title}</span>
        <input className='w-full px-3 py-[5px] border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary text-sm font-normal'
            type={type}
            onChange={handleInputChange}/>
    </div>
  )
}

export default InputFilter