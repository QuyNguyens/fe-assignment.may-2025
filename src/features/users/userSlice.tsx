import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import {Users} from '../../data/users';

export interface User {
  userID: string;
  userName: string;
  contactEmail: string;
  contactPhone: string;
  role: string;
  experience: string;
  status: string;
  isSelected: boolean;
  avatar: string;
}

interface UserState {
  fullList: User[];
  list: User[];
  currentPage: number;
  itemsPerPage: number;
  totalUsers: number;
}

const initialState: UserState = {
  fullList: Users,
  currentPage: 1,
  itemsPerPage: 5,
  list: Users.slice(0, 5),
  totalUsers: Users.length,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    toggleAll: (state, action: PayloadAction<boolean>) =>{
      const isSelected = action.payload;

      state.list.forEach(user => {
        user.isSelected = isSelected;
      });

      state.fullList.forEach(user => {
        const matched = state.list.find(u => u.userID === user.userID);
        if (matched) {
          user.isSelected = isSelected;
        }
      });
    },
    toggleSelect: (state, action: PayloadAction<string>) => {
      
      const user = state.fullList.find((u) => u.userID === action.payload);
      if (user) {
        user.isSelected = !user.isSelected;
        const userList = state.list.find((u) => u.userID === action.payload);
        if(userList){
          userList.isSelected = !userList.isSelected;
        }
      }
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
      const start = (action.payload - 1) * state.itemsPerPage;
      const end = start + state.itemsPerPage;
      state.list = state.fullList.slice(start, end);
    },
    setItemsPerPage: (state, action: PayloadAction<number>) => {
      state.itemsPerPage = action.payload;
      state.currentPage = 1;
      state.list = state.fullList.slice(0, action.payload);
    },
    filterByField: (state, action: PayloadAction<{ field: string; value: string }>) => {
      const { field, value } = action.payload;
      const keyword = value.toLowerCase();
      if(keyword === "all" || keyword ===""){
        const start = (state.currentPage - 1) * state.itemsPerPage;
        const end = start + state.itemsPerPage;
        state.list = state.fullList.slice(start, end);
      }else{
        state.list = state.fullList.filter((user) => {
          switch (field) {
            case "userName":
              return user.userName.toLowerCase().includes(keyword);
            case "userId":
              return user.userID.toLowerCase().includes(keyword);
            case "contactEmail":
              return user.contactEmail.toLowerCase().includes(keyword);
            case "contactPhone":
              return user.contactPhone.toLowerCase().includes(keyword);
            case "role":
              return user.role.toLowerCase() === keyword;
            case "status":
              return user.status.toLowerCase() === keyword;
            default:
              return true;
          }
        });
        state.currentPage = 1;
      }
    },
    sortByColumnName: (
      state,
      action: PayloadAction<{ columnName: string; type: 'esc' | 'desc' }>
    ) => {
      const { columnName, type } = action.payload;
      const key = columnName as keyof User;
      state.list.sort((a, b) => {
        const aVal = a[key];
        const bVal = b[key];

        if (typeof aVal === 'string' && typeof bVal === 'string') {

          return type === 'esc'
            ? aVal.localeCompare(bVal)
            : bVal.localeCompare(aVal);
        }

        if (typeof aVal === 'number' && typeof bVal === 'number') {

          return type === 'esc' ? aVal - bVal : bVal - aVal;
        }

        return 0;
      });
    }
  },
});

export const { toggleSelect, setCurrentPage , setItemsPerPage, toggleAll, filterByField, sortByColumnName} = userSlice.actions;
export default userSlice.reducer;
