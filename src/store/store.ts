import {configureStore, combineReducers} from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import transactionReducer from './slices/transactionSlice';
import savingReducer from './slices/savingSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['theme'],
};

const rootReducer = combineReducers({
  theme: themeReducer,
  transaction: transactionReducer,
  saving: savingReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
