// src/store/sidebarSlice.ts
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type SidebarState = {
  activeItem: string;
};

const initialState: SidebarState = {
  activeItem: 'projects',
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    setActiveItem(state, action: PayloadAction<string>) {
      state.activeItem = action.payload;
    },
  },
});

export const { setActiveItem } = sidebarSlice.actions;
export default sidebarSlice.reducer;
