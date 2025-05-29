import React, { useState } from 'react';
import ArrowDownIcon from '../../assets/arrow-down-icon-gray.svg';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../app/store';
import { filterByField } from '../../features/users/userSlice';

const UsernameSelector: React.FC = () => {
  const userFull = useSelector((state: RootState) => state.users.fullList);
  const users = userFull.map(user => user.userName);
  const [selectedUser, setSelectedUser] = useState<string>('');
  const dispatch = useDispatch();

  const handleSelectUserName = (e: any) =>{
    setSelectedUser(e.target.value);
    dispatch(filterByField({field: 'userName', value: e.target.value}));
  }

  return (
    <div className="relative w-full">
        <select
            id="username"
            value={selectedUser}
            onChange={handleSelectUserName}
            className="appearance-none block w-full px-3 py-[5px] border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary text-sm font-normal pr-10"
        >
            <option value="all">All</option>
            {users.map((username, index) => (
            <option key={index} value={username}>
                {username}
            </option>
            ))}
        </select>

        <img className='pointer-events-none absolute top-1/2 right-3 w-[14px] h-[14px] text-gray-500 transform -translate-y-1/2' src={ArrowDownIcon} alt="" />
    </div>

  );
};

export default UsernameSelector;
