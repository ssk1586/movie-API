import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from '../slices/favouriteMovies';


import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: ['AllMovies']                
}
  
const persistedReducer = persistReducer(persistConfig, moviesReducer)

export const store = configureStore({
    reducer: {movies: persistedReducer},
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })
