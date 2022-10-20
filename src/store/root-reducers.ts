import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';

import { api } from '@/services/api';

import { themeReducer } from './theme';

const mainPersistConfig = {
  key: 'main',
  storage: AsyncStorage,
  whitelist: ['theme'],
};

const rootReducers = combineReducers({
  theme: themeReducer,
  [api.reducerPath]: api.reducer,
});

export default persistReducer(mainPersistConfig, rootReducers);
