import RotateIcon from '../../assets/43-users-icon.svg';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../app/store';
import InfoDisplay from './InfoDisplay';
import Pagination from './Pagination';
import { setCurrentPage } from '../../features/userSlice';
import ItemsPerPage from './ItemsPerPage';


const Info = () => {
  const totalUsers = useSelector((state: RootState) => state.users.totalUsers);
  const currentPage = useSelector((state: RootState) => state.users.currentPage);
  const itemsPerPage = useSelector((state: RootState) => state.users.itemsPerPage);

  const dispatch = useDispatch();
  return (
      <div className="flex flex-col justify-between border-r border-gray-300">
        <div>
          <div className="flex items-center gap-3 py-[14px] pl-3">
            <span className="text-primary-100 text-xl font-bold">{totalUsers} USERS</span>
            <img className='w-[18px] h-[18px]' src={RotateIcon} alt="" />
          </div>
          <InfoDisplay/>
        </div>
        <div className='flex justify-between p-3 border-t border-gray-200'>
            <Pagination 
              currentPage={currentPage}
              totalPages={Math.ceil(totalUsers/itemsPerPage)}
              onPageChange={(page) => dispatch(setCurrentPage(page))}/>
            <ItemsPerPage/>
        </div>
      </div>
  )
}

export default Info