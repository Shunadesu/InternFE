import { configureStore } from '@reduxjs/toolkit';
import appSlice from './appSlice';
import productSlice from './productSlice';

import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'
export const store = configureStore({
  reducer: {
    app: appSlice,
    products: productSlice,
  },
});

