// store.ts
import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/users/userSlice';
import addressReducer from '../features/users/addressSlice';
import sidebarReducer from '../features/users/sidebarSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // lưu vào localStorage

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  users: usersReducer,
  address: addressReducer,
  sidebar: sidebarReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['users','address','sidebar'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
