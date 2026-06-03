<<<<<<< HEAD
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
=======
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
>>>>>>> 9fd1453f029e3449823ac9ad09b238362e52676e

const rootReducer = combineReducers({ user: userReducer });

const persistConfig = {
  key: 'root',
<<<<<<< HEAD
  storage,
=======
  storage: localStorageEngine,  
>>>>>>> 9fd1453f029e3449823ac9ad09b238362e52676e
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

<<<<<<< HEAD
export const persistor = persistStore(store);
=======
export const persistor = persistStore(store);
>>>>>>> 9fd1453f029e3449823ac9ad09b238362e52676e
