import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import { persistReducer, persistStore } from 'redux-persist';

// 1. Manually defines the storage engine
const localStorageEngine = {
  getItem: (key) => {
    const item = localStorage.getItem(key);
    return Promise.resolve(item); // Redux Persist expects the raw string, it will parse it itself
  },
  setItem: (key, value) => {
    localStorage.setItem(key, value);
    return Promise.resolve();
  },
  removeItem: (key) => {
    localStorage.removeItem(key);
    return Promise.resolve();
  },
};

const rootReducer = combineReducers({ user: userReducer });

const persistConfig = {
  key: 'root',
  storage: localStorageEngine,  
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);