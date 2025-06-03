import { useState } from 'react'
import ArrowDownIcon from '../../assets/arrow-down-text.svg';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../app/store';
import {setItemsPerPage} from '../../features/userSlice';

const perPage = [5,7,10,12];

const ItemsPerPage = () => {
    const itemsPerPage = useSelector((state: RootState) => state.users.itemsPerPage);
    const [selectedPerPage, setSelectedPerPage] = useState<number>(itemsPerPage);
    const dispatch = useDispatch();

    const handleSelectPerPage = (e: any) =>{
        setSelectedPerPage(parseInt(e.target.value))
        dispatch(setItemsPerPage(parseInt(e.target.value)));
    }

  return (
    <div className='relative'>
        <select
            id="username"
            value={selectedPerPage}
            onChange={handleSelectPerPage}
            className="appearance-none block w-full px-3 py-[5px] border border-gray-10 rounded-md focus:outline-none focus:ring-primary focus:border-primary text-base16 font-normal pr-10"
        >
            {perPage.map((perPage) => (
            <option key={perPage} value={perPage}>
                {perPage < 10 ? '0': ''}{perPage} Items
            </option>
            ))}
        </select>
        <img className='pointer-events-none absolute top-1/2 right-3 w-[14px] h-[14px] text-gray-500 transform -translate-y-1/2' src={ArrowDownIcon} alt="" />
    </div>
  )
}

export default ItemsPerPage