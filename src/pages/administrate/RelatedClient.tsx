import { Clients } from "../../data/users";
import ActionIcon from '../../assets/action-icon.svg';

const RelatedClient = () => {
  return (
    <div className="overflow-x-auto mt-4" style={{ maxHeight: `${3 * 65}px`}}>
      <table className="min-w-full table-auto border border-gray-200 text-left text-sm">
        <thead className="bg-blue-100">
          <tr>
            <th className="p-1 pl-4 border-b text-sm font-medium text-dark">Index</th>
            <th className="p-1 border-b">
                <div className='flex flex-col'>
                  <span className='text-sm font-medium text-dark'>Borrower Name</span>
                  <span className='text-sm font-medium text-dark'>Loan ID</span>
                </div>
            </th>
            <th className="p-1 border-b">
                <div className='flex flex-col'>
                  <span className='text-sm font-medium text-dark'>Lender</span>
                  <span className='text-sm font-medium text-dark'>Interest Rate</span>
                </div>
            </th>
            <th className="p-1 border-b text-sm font-medium text-dark">Process</th>
            <th className="p-1 border-b text-sm font-medium text-dark">Status</th>
            <th className="p-1 border-b text-sm font-medium text-dark">Action</th>
            
          </tr>
        </thead>
        <tbody>
          {Clients.map((user, index) => (
            <tr
                key={index}
                className="border-t border-gray-300 hover:bg-gray-50"
                >
                <td className="p-3 pl-4 text-sm font-normal text-dark">{user.index}</td>
                <td className="p-3 pl-1 ">
                    <div>
                      <div className="text-sm font-medium text-dark">{user.borrowName}</div>
                      <div className="text-sm text-text-primary font-normal">{user.loanId}</div>
                    </div>
                </td>
               <td className="p-3 pl-1">
                    <div>
                      <div className="text-sm font-medium text-dark">{user.lender}</div>
                      <div className="text-sm text-text-primary font-normal">{user.rate}</div>
                    </div>
                </td>
                <td className="p-3 pl-1">
                    <div className="flex items-center gap-2">
                        <div className="w-[72px] h-[5px] border border-gray-200 rounded overflow-hidden">
                            <div
                                className="h-full bg-primary transition-width duration-300"
                                style={{ width: `${user.process}%` }}
                            />
                        </div>
                        <span className="text-sm text-text-primary font-normal">{user.process}%</span>
                    </div>
                </td>
                <td className="p-3 pl-1">
                    <span
                    className={`px-2 py-1 rounded text-base text-center font-medium ${
                        user.status === 'IN PROGRESS'
                        ? 'bg-blue-200 text-blue-400'
                        : 'bg-green-100 text-green-500'
                    }`}
                    >
                    {user.status}
                    </span>
                </td>
                <td className="p-3 pl-1">
                    <img className="w-4 h-4" src={ActionIcon} alt="" />
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RelatedClient