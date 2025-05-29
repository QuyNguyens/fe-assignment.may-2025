import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../app/store';
import { toggleSelect, toggleAll, sortByColumnName } from '../../features/users/userSlice';
import Avatar from '../../assets/avatar.png';
import { useState } from 'react';

const InfoDisplay = () => {
  const [isCheckedAll, setIsCheckedAll] = useState<boolean>(false);
  const [sortState, setSortState] = useState<Record<string, 'esc' | 'desc'>>({});

  const users = useSelector((state: RootState) => state.users.list);
  const dispatch = useDispatch();

  const handleCheckboxChange = (userID: string) => {
    dispatch(toggleSelect(userID));
  };

  const handleCheckedAll = () =>{
    setIsCheckedAll(!isCheckedAll);
    dispatch(toggleAll(!isCheckedAll));
  }

  const handleSort = (column: string) => {
    const currentOrder = sortState[column] || 'esc';
    const newOrder = currentOrder === 'esc' ? 'desc' : 'esc';

    setSortState({ [column]: newOrder });
    dispatch(sortByColumnName({ columnName: column, type: newOrder }));
  };


  return (
    <div className="overflow-x-auto" style={{ maxHeight: `${10 * 65}px`}}>
      <table className="min-w-full table-auto border border-gray-200 text-left text-sm">
        <thead className="bg-blue-100">
          <tr>
            <th className="p-1 border-b">
                <div className='flex items-center justify-center'>
                    <input type="checkbox" checked={isCheckedAll}
                        onChange={handleCheckedAll}/>
                </div>
            </th>
            <th className="p-1 border-b flex items-center gap-2" onClick={() => handleSort("userName")}>
                <div className='flex flex-col'>
                  <span className='text-sm font-medium text-dark'>User Name</span>
                  <span className='text-sm font-medium text-dark'>User ID</span>
                </div>
                <span>{sortState["userName"] === 'esc' ? '↑' : sortState["userName"] === 'desc' ? '↓' : ''}</span>
            </th>
            <th className="p-1 border-b text-sm font-medium text-dark cursor-pointer" onClick={() => handleSort("contactEmail")}>
              Contact Info {sortState["contactEmail"] === 'esc' ? '↑' : sortState["contactEmail"] === 'desc' ? '↓' : ''}
            </th>
            <th className="p-1 border-b text-sm font-medium text-dark cursor-pointer" onClick={() => handleSort("role")}>
              Type {sortState["role"] === 'esc' ? '↑' : sortState["role"] === 'desc' ? '↓' : ''}
            </th>
            <th className="p-1 border-b text-sm font-medium text-dark cursor-pointer" onClick={() => handleSort("experience")}>
              Experience {sortState["experience"] === 'esc' ? '↑' : sortState["experience"] === 'desc' ? '↓' : ''}
            </th>
            <th className="p-1 border-b text-sm font-medium text-dark cursor-pointer" onClick={() => handleSort("status")}>
              Status {sortState["status"] === 'esc' ? '↑' : sortState["status"] === 'desc' ? '↓' : ''}
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
                key={index}
                className="border-t border-gray-300 hover:bg-gray-50 cursor-pointer"
                onClick={() => handleCheckboxChange(user.userID)}
                >
                <td className="p-3" onClick={(e) => e.stopPropagation()}>
                    <input
                    type="checkbox"
                    checked={user.isSelected}
                    onChange={() => handleCheckboxChange(user.userID)}
                    />
                </td>

                <td className="p-3 pl-1 flex items-center gap-3">
                    <img
                      src={user.avatar || Avatar}
                      alt={user.userName}
                      className="w-[35px] h-[35px] rounded-full object-cover border"
                    />
                    <div>
                      <div className="text-sm font-medium text-dark">{user.userName}</div>
                      <div className="text-sm text-text-primary font-normal">{user.userID}</div>
                    </div>
                </td>

                <td className="p-3 pl-1">
                    <div className="text-sm font-normal text-dark">{user.contactPhone}</div>
                    <div className="text-sm font-normal text-dark">{user.contactEmail}</div>
                </td>

                <td className="p-3 pl-1 text-sm font-normal text-dark">{user.role}</td>
                <td className="p-3 pl-1 text-sm font-normal text-dark">{user.experience}</td>
                <td className="p-3 pl-1">
                    <span
                    className={`inline-block px-2 py-1 rounded text-base text-center font-medium w-24 ${
                        user.status === 'ACTIVE'
                        ? 'bg-green-100 text-green-500'
                        : 'bg-red-100 text-red-700'
                    }`}
                    >
                    {user.status}
                    </span>
                </td>
                </tr>

          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InfoDisplay;
